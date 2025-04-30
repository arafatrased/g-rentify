"use client";
import React, { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import Link from "next/link";
import "@/app/(home)/css/datePicker.css";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { RxCross1 } from "react-icons/rx";
import toast from "react-hot-toast";
import { useOrders } from "../context/OrderContext";
import EmptyPage from "./components/EmptyPage";
import { MdErrorOutline } from "react-icons/md";
import MyCartPageSkeleton from "./components/MyCartPageSkeleton";
import CartModals from "./components/CartModals";
import { LuMinus } from "react-icons/lu";
import { GoPlus } from "react-icons/go";
import Swal from "sweetalert2";


const CartPage = () => {
  const session = useSession();
  const userEmail = session?.data?.user?.email;
  const [gadgets, setGadgets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [discountPrice, setDiscountPrice] = useState(0);
  const { setTotalCart } = useOrders();
  const allGadgetsPrice = gadgets.reduce(
    (total, item) => total + item.totalRentValue,
    0
  );

  const shippingCharge = 5; // Default shipping charge 5
 // Default discount charge 30
  const taxRate = 2 / 100; // Default tax charge 2%
  const taxAmount = allGadgetsPrice * taxRate;
  const amountWithTax = allGadgetsPrice + taxAmount;
  const estimatedSubtotal = amountWithTax + shippingCharge;
  const grandTotal = estimatedSubtotal - discountPrice; // final price

  // Decrease quantity
  const handleDecreaseQuantity = (id) => {
    setGadgets((prev) =>
      prev.map((item) => {
        if (item._id === id) {
          const newQty = item.qty > 1 ? item.qty - 1 : 1;
          const unitRent = item.totalRentValue / item.qty;
          return {
            ...item,
            qty: newQty,
            totalRentValue: unitRent * newQty,
          };
        }
        return item;
      })
    );
  };

  // Increase quantity
  const handleIncreaseQuantity = (id) => {
    setGadgets((prev) =>
      prev.map((item) => {
        if (item._id === id) {
          const newQty = item.qty + 1;
          const unitRent = item.totalRentValue / item.qty;
          return {
            ...item,
            qty: newQty,
            totalRentValue: unitRent * newQty,
          };
        }
        return item;
      })
    );
  };

  const fetchMyOrder = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_LINK}/my-cart?email=${userEmail}`
      );
      const data = await res.json();
      // console.log(data);
      setGadgets(data);

      if (data.length === 0) {
        setLoading(false);
      }
    } catch (error) {
      // console.log("Failed to fetch my order.", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMyOrder();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userEmail]);

  const handleDelete = async (id) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_LINK}/my-cart/${id}`,
        {
          method: "DELETE",
        }
      );
      const data = await res.json();
      if (data.success === true) {
        toast.success("Remove Successful!");
        fetchMyOrder();
        setTotalCart((prev) => prev - 1);
      }
    } catch (error) {
      toast.error(error);
    }
  };

  const handleCouponSubmit = async (e) => {
    e.preventDefault();
    const couponCode = e.target.couponCode.value;
    if (!couponCode) return;

    // fetch valid coupon code
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_LINK}/coupon-code/${couponCode}`
    );

    const data = await res.json();

    // check valid couponCode
    if (data) {
      setDiscountPrice(data?.coupon?.discountValue);
      localStorage.removeItem("grandTotal");
      localStorage.setItem(
        "grandTotal",
        JSON.stringify(grandTotal - data?.coupon?.discountValue)
      );

    } else {
      Swal.fire({
        position: "top-center",
        icon: "error",
        title: `${data.code}`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <>
      <div className="container mx-auto py-7 px-2">
        <div className="mb-5">
          {/* breadcrumb  */}
          <div className="breadcrumbs text-sm mb-6">
            <ul>
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/gadgets"}>Gadgets</Link>
              </li>
              <li>
                <Link className="text-[#03b00b]" href={"/cart"}>
                  Cart
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-5">
          {loading ? (
            <MyCartPageSkeleton />
          ) : (
            <>
              {gadgets.length === 0 ? (
                <EmptyPage />
              ) : (
                <>
                  <div className="col-span-12 lg:col-span-8 xl:col-span-9 flex flex-col gap-5">
                    {/* cart table */}
                    <div className="overflow-x-auto w-full">
                      <table className="table w-full">
                        <thead>
                          <tr className="text-[#333333] text-center">
                            <th className="border border-gray-200">Item</th>
                            <th className="border border-gray-200">Quantity</th>
                            <th className="border border-gray-200">Length</th>
                            <th className="border border-gray-200">Subtotal</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white">
                          {gadgets.map((item) => (
                            <tr
                              key={item._id}
                              className="border-b border-gray-200"
                            >
                              <td className="py-1 max-w-56 min-w-52 text-center border border-gray-200">
                                <div className="flex items-center gap-3 md:gap-8">
                                  <div>
                                    <button
                                      onClick={() => handleDelete(item?._id)}
                                    >
                                      <RxCross1 className="cursor-pointer hover:text-red-500 transition-colors duration-150" />
                                    </button>
                                  </div>
                                  <Image
                                    src={item?.productImage}
                                    width={80}
                                    height={80}
                                    className="w-10 h-10 md:w-20 md:h-20"
                                    alt={item?.productTitle}
                                  />
                                  <h4 className="font-bold">
                                    {item?.productTitle.slice(0, 30)}
                                  </h4>
                                </div>
                              </td>

                              <td className="py-1 capitalize text-gray-500 text-center border border-gray-200">
                                <div className="flex items-center justify-center gap-y-2 ">
                                  <button
                                    onClick={() =>
                                      handleDecreaseQuantity(item._id)
                                    }
                                    className={`bg-green-600 text-white flex justify-center items-center text-lg rounded cursor-pointer w-8 h-8 ${
                                      item.qty <= 1 &&
                                      "hover:cursor-not-allowed opacity-50"
                                    }`}
                                    disabled={item.qty <= 1}
                                  >
                                    <LuMinus />
                                  </button>
                                  <input
                                    type="number"
                                    value={item.qty}
                                    readOnly
                                    className="border-none w-[50px] text-center focus:outline-none"
                                  />
                                  <button
                                    onClick={() =>
                                      handleIncreaseQuantity(item._id)
                                    }
                                    className="bg-green-600 text-white flex justify-center items-center text-lg rounded cursor-pointer w-8 h-8"
                                  >
                                    <GoPlus />
                                  </button>
                                </div>
                              </td>

                              <td className="py-1 text-center border border-gray-200">
                                {item?.durationInDay} Days
                              </td>
                              <td className="py-1 font-bold text-center border border-gray-200">
                                ${item?.totalRentValue}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    {/* coupon form */}
                    <div className="border border-[#e3e3e3] py-5 px-5 rounded w-full">
                      <h3 className="font-bold text-xl mb-1">Discount Code</h3>
                      <p>Enter Your coupon code if you have one.</p>

                      <form
                        onSubmit={handleCouponSubmit}
                        className="sm:flex items-center justify-between gap-5"
                      >
                        <input
                          className={
                            "mt-3 border border-gray-200 w-full rounded py-2 px-4 mb-3 focus:outline-[#03b00b] focus:outline-1"
                          }
                          name="couponCode"
                          type="text"
                          placeholder="Coupon Code"
                        />
                        <button
                          type="submit"
                          className="sm:min-w-40 bg-[#00B22C] hover:bg-[#00b22cda] text-white px-5 py-3 text-sm rounded transition-all duration-300 cursor-pointer"
                        >
                          Apply Coupon
                        </button>
                      </form>
                      <p>Available Coupon: abc</p>
                    </div>
                  </div>

                  <div className="col-span-12 lg:col-span-4 xl:col-span-3">
                    {/* order summery  */}
                    <div className="w-full border border-[#e3e3e3]  py-5 px-5 rounded sticky top-[170px]">
                      <h1 className="text-[32px] font-medium text-[#1c1c1c] mb-8">
                        Order Summary
                      </h1>
                      <div className="text-[#494949] flex flex-col gap-2 mb-5">
                        <div className="flex justify-between">
                          <p>Subtotal</p>
                          <p>
                            <strong className="text-[#1c1c1c]">
                              ${allGadgetsPrice.toFixed(2)}
                            </strong>
                          </p>
                        </div>
                        <div className="flex justify-between">
                          <p>Shipping(Rount Trip)</p>
                          <p>
                            <strong className="text-[#1c1c1c]">
                              ${shippingCharge.toFixed(2)}
                            </strong>
                          </p>
                        </div>
                        <div className="flex justify-between">
                          <p className="flex items-center gap-1">
                            Taxes(2%)
                            <span
                              onClick={() =>
                                document.getElementById("taxsModal").showModal()
                              }
                              className="text-[#03b00b] cursor-pointer"
                            >
                              <MdErrorOutline />
                            </span>
                          </p>
                          <p>
                            <strong className="text-[#1c1c1c]">
                              ${taxAmount.toFixed(2)}
                            </strong>
                          </p>
                        </div>
                        <div className="flex justify-between">
                          <p className="flex items-center gap-1">
                            In-store pickup
                            <span
                              onClick={() =>
                                document
                                  .getElementById("inStoreModal")
                                  .showModal()
                              }
                              className="text-[#03b00b] cursor-pointer"
                            >
                              <MdErrorOutline />
                            </span>
                          </p>
                          <p>
                            <strong className="text-[#1c1c1c]">Free</strong>
                          </p>
                        </div>

                        <div className="flex justify-between">
                          <p>Estimated subtotal</p>
                          <p>
                            <strong className="text-[#1c1c1c]">
                              ${estimatedSubtotal.toFixed(2)}
                            </strong>
                          </p>
                        </div>
                        <div className="w-full h-[1px] bg-gray-600 my-2"></div>
                        <div className="flex justify-between">
                          <p className="flex items-center gap-1">
                            Discount
                            <span
                              onClick={() =>
                                document
                                  .getElementById("discountModal")
                                  .showModal()
                              }
                              className="text-[#03b00b] cursor-pointer"
                            >
                              <MdErrorOutline />
                            </span>
                          </p>
                          <p>
                            <strong className="text-[#1c1c1c]">
                              ${discountPrice}
                            </strong>
                          </p>
                        </div>

                        <div className="w-full h-[1px] bg-gray-600 my-2"></div>
                        <div className="flex justify-between">
                          <p className="text-[#1c1c1c] font-semibold">
                            Grand Total
                          </p>
                          <p>
                            <strong className="text-[#1c1c1c]">
                              ${grandTotal.toFixed(2)}
                            </strong>
                          </p>
                        </div>
                      </div>
                      <Link href={"/payment"} className="bg-[#00B22C] hover:bg-[#00b22cda] text-white px-5 py-3 text-sm rounded transition-all duration-300 cursor-pointer w-full">
                        Conntinue to checkout
                      </Link>
                    </div>
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </div>
      {/* modals */}
      <CartModals />
    </>
  );
};

export default CartPage;
