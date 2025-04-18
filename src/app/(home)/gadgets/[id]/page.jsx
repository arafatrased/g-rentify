"use client";

import Image from "next/image";
import Link from "next/link";
import { redirect, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ProductDetailsSkeleton from "./components/ProductDetailsSkeleton";
import toast from "react-hot-toast";
import { useSession } from "next-auth/react";
import SuccessModal from "./components/SuccessModal";
import axios from "axios";
import { useOrders } from "../../context/OrderContext";
import "@/app/(home)/css/datePicker.css";

export default function GadgetDetails() {
  const { id } = useParams();
  const session = useSession();
  const user = session?.data?.user;
  const [gadget, setGadget] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isExpandedSpec, setIsExpandedSpec] = useState(false);
  const [rentValue, setRentValue] = useState(null);
  const [loading, setLoading] = useState(true);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(
    new Date().setDate(new Date().getDate() + 1)
  );
  const [cartModal, setCartModal] = useState(false);
  const [cartLoading, setCartLoading] = useState(false);
  const { setTotalOrders } = useOrders();

  // Create a handler function for arrival date changes
  const handleStartDateChange = (date) => {
    setStartDate(date);

    // Set return date to be one day after the selected arrival date
    if ((date) => endDate) {
      const nextDate = new Date(date).setDate(date.getDate() + 1);
      setEndDate(nextDate);
    }
  };

  // Handle return date changes
  const handleEndDateChange = (date) => {
    if (date > startDate) {
      setEndDate(date);
    } else {
      toast.error("You cannot set the return date before the arrival date.");
    }
  };

  // get single data form mongoDb
  useEffect(() => {
    if (!id) return;

    const fetchGadgetDetails = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_LINK}/gadgets/${id}`
        );
        const data = await res.json();
        setGadget(data);
      } catch (error) {
        console.log("Failed to fetch gadget.", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGadgetDetails();
  }, [id]);

  // calculate how long the user want to take it for
  const durationInDay = Math.round(
    (endDate - startDate) / (1000 * 60 * 60 * 24)
  );

  // set default rent value in number
  useEffect(() => {
    if (gadget?.price) {
      setRentValue(Number(gadget.price));
    }
  }, [gadget]);

  // total value by day
  const totalRentValue = rentValue * durationInDay;
  // share productData in the successModal
  const productData = { ...gadget, durationInDay, totalRentValue };

  const orderInfo = {
    productTitle: gadget?.title,
    qty: 1,
    totalRentValue,
    user,
  };

  const handleOrderInfo = async () => {
    // Check user is loged in or not if the user not login then redirect login page
    if (!user) {
      redirect("/login");
    }

    setCartLoading(true); // start button loading when user click for cart

    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_LINK}/user-order`,
        orderInfo
      );

      if (res.data.insertedId) {
        setCartModal(true); // show the success modal
        setCartLoading(false); // close loading when order successfull
        setTotalOrders((prev) => prev + 1); // incrise data length
        // Auto close the success modal
        setTimeout(() => {
          setCartModal(false);
        }, 5000);
      }
    } catch (error) {
      setCartLoading(false); // close loading when order successfull
      console.log("Faield to send order.", error);
    }
  };

  return (
    <main className="pt-8 pb-14">
      <div className="container mx-auto px-3">
        {/* Breadcrumb */}
        <div className="breadcrumbs text-sm mb-6">
          <ul>
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/gadgets"}>Gadgets</Link>
            </li>
            <li>
              <Link className="text-[#03b00b]" href={"/"}>
                Title
              </Link>
            </li>
          </ul>
        </div>

        {/* details wrapper*/}
        {loading ? (
          <ProductDetailsSkeleton />
        ) : (
          <div className="grid grid-cols-12 gap-8">
            {/* left item  */}
            <div className="col-span-12 xl:col-span-4 order-2 xl:order-1 flex flex-col gap-5 overflow-hidden transition-all duration-500">
              <div className="border border-gray-200 p-3 rounded overflow-hidden transition-all duration-300">
                <h4 className="text-xl font-semibold mb-2">
                  Rent a {gadget?.title}
                </h4>
                <p
                  className={`${
                    isExpanded ? "max-h-auto" : "max-h-[120px] overflow-hidden"
                  }`}
                >
                  {gadget?.description}
                </p>

                {gadget?.description.length > 300 && (
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="text-[#03b00b] hover:underline cursor-pointer mt-2"
                  >
                    {isExpanded ? "See Less" : "See More"}
                  </button>
                )}
              </div>

              <div className=" border border-gray-200 p-3 rounded h-fit">
                <h4 className="text-xl font-semibold">Specifications</h4>

                {/* details table */}
                <div
                  className={`${
                    isExpandedSpec
                      ? "max-h-full"
                      : "max-h-[350px] overflow-hidden"
                  }`}
                >
                  <table>
                    <tbody className="table table-fixed">
                      <tr className="border-b-0">
                        <th
                          colSpan={2}
                          className="font-medium uppercase text-base text-start px-0"
                        >
                          {gadget?.category?.label}
                        </th>
                      </tr>
                      <tr className="border-b-0">
                        <th className="text-start text-[15px] text-[#17080c] font-medium py-[3px] pl-0">
                          Sensor
                        </th>
                        <td className="py-[3px]">{gadget?.sensor}</td>
                      </tr>
                      <tr className="border-b-0">
                        <th className="text-start text-[15px] text-[#17080c] font-medium py-[3px] pl-0">
                          ISO Range
                        </th>
                        <td className="py-[3px]">{gadget?.iso_range}</td>
                      </tr>
                      <tr className="border-b-0">
                        <th className="text-start text-[15px] text-[#17080c] font-medium py-[3px] pl-0">
                          Still Image Size
                        </th>
                        <td className="py-[3px]">{gadget?.still_image_size}</td>
                      </tr>
                      <tr className="border-b-0">
                        <th className="text-start text-[15px] text-[#17080c] font-medium py-[3px] pl-0">
                          Video Resolution
                        </th>
                        <td className="py-[3px]">{gadget?.video_resolution}</td>
                      </tr>
                      <tr className="border-b-0">
                        <th className="text-start text-[15px] text-[#17080c] font-medium py-[3px] pl-0">
                          Max Video Bitrate
                        </th>
                        <td className="py-[3px]">
                          {gadget?.max_video_bitrate}
                        </td>
                      </tr>
                      <tr className="border-b-0">
                        <th className="text-start text-[15px] text-[#17080c] font-medium py-[3px] pl-0">
                          Photo Format
                        </th>
                        <td className="py-[3px]">{gadget?.photo_format}</td>
                      </tr>
                      <tr className="border-b">
                        <th className="text-start text-[15px] text-[#17080c] font-medium py-[3px] pl-0">
                          Video Format
                        </th>
                        <td className="py-[3px]">{gadget?.video_format}</td>
                      </tr>
                      {/* battery section */}
                      <tr className="border-b-0 relative top-1">
                        <th
                          colSpan={2}
                          className="font-medium uppercase text-base text-start px-0"
                        >
                          battery
                        </th>
                      </tr>
                      <tr className="border-b-0">
                        <th className="text-start text-[15px] text-[#17080c] font-medium py-[3px] pl-0">
                          Capacity
                        </th>
                        <td className="py-[3px]">{gadget?.capacity}</td>
                      </tr>
                      <tr className="border-b-0">
                        <th className="text-start text-[15px] text-[#17080c] font-medium py-[3px] pl-0">
                          Voltage
                        </th>
                        <td className="py-[3px]">{gadget?.voltage}</td>
                      </tr>
                      <tr className="border-b-0">
                        <th className="text-start text-[15px] text-[#17080c] font-medium py-[3px] pl-0">
                          Max Charging Voltage
                        </th>
                        <td className="py-[3px]">
                          {gadget?.max_charging_voltage}
                        </td>
                      </tr>
                      <tr className="border-b-0">
                        <th className="text-start text-[15px] text-[#17080c] font-medium py-[3px] pl-0">
                          Battery Type
                        </th>
                        <td className="py-[3px]">{gadget?.battery_type}</td>
                      </tr>
                      <tr className="border-b-0">
                        <th className="text-start text-[15px] text-[#17080c] font-medium py-[3px] pl-0">
                          Energy
                        </th>
                        <td className="py-[3px]">{gadget?.energy}</td>
                      </tr>
                      <tr className="border-b-0">
                        <th className="text-start text-[15px] text-[#17080c] font-medium py-[3px] pl-0">
                          Net Weight
                        </th>
                        <td className="py-[3px]">{gadget?.net_weight}</td>
                      </tr>
                      <tr className="border-b-0">
                        <th className="text-start text-[15px] text-[#17080c] font-medium py-[3px] pl-0">
                          Charging Temperature Range
                        </th>
                        <td className="py-[3px]">
                          {gadget?.charging_temperature_range}
                        </td>
                      </tr>
                      <tr className="border-b-0">
                        <th className="text-start text-[15px] text-[#17080c] font-medium py-[3px] pl-0">
                          Max Charging Power
                        </th>
                        <td className="py-[3px]">
                          {gadget?.max_charging_power}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <button
                  onClick={() => setIsExpandedSpec(!isExpandedSpec)}
                  className="text-[#03b00b] hover:underline cursor-pointer mt-2"
                >
                  {isExpandedSpec ? "See Less" : "See More"}
                </button>
              </div>
            </div>
            {/* center item  */}
            <div className="col-span-12 xl:col-span-5 order-1 xl:order-2 border border-gray-200 p-3 rounded h-fit">
              <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
              >
                {gadget?.images.map((item, idx) => (
                  <SwiperSlide key={idx}>
                    <Image
                      src={item}
                      width={500}
                      height={500}
                      alt={gadget?.title}
                      className="mx-auto"
                      priority={true}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* includes section */}
              <h4 className="text-xl font-semibold mt-10 mb-2">Includes</h4>
              <ul>
                {gadget?.includes.map((item, idx) => (
                  <li key={idx} className="list-disc ml-10">
                    {item?.label}
                  </li>
                ))}
              </ul>
            </div>
            {/* right item  */}
            <div className="col-span-12 xl:col-span-3 order-3">
              <div className="border border-gray-200 p-3 rounded h-fit text-center mb-5 relative">
                <h4 className="text-xl font-bold">Set Rental Date</h4>
                <h4 className="text-xl font-semibold text-gray-800 my-3">
                  ${totalRentValue} / {durationInDay} Days
                </h4>
                <p className="text-base font-medium mb-1">Arrival Date:</p>
                <DatePicker
                  showIcon
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 48 48"
                    >
                      <mask id="ipSApplication0">
                        <g
                          fill="none"
                          stroke="#fff"
                          strokeLinejoin="round"
                          strokeWidth="4"
                        >
                          <path
                            strokeLinecap="round"
                            d="M40.04 22v20h-32V22"
                          ></path>
                          <path
                            fill="#fff"
                            d="M5.842 13.777C4.312 17.737 7.263 22 11.51 22c3.314 0 6.019-2.686 6.019-6a6 6 0 0 0 6 6h1.018a6 6 0 0 0 6-6c0 3.314 2.706 6 6.02 6c4.248 0 7.201-4.265 5.67-8.228L39.234 6H8.845l-3.003 7.777Z"
                          ></path>
                        </g>
                      </mask>
                      <path
                        fill="currentColor"
                        d="M0 0h48v48H0z"
                        mask="url(#ipSApplication0)"
                      ></path>
                    </svg>
                  }
                  selected={startDate}
                  onChange={handleStartDateChange}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                  minDate={new Date()}
                  className="text-center border border-[#e3e3e3] py-1 max-w-40 outline-gray-200 mb-4"
                />
                <p className="text-base font-medium mb-1">Return Date:</p>
                <DatePicker
                  showIcon
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 48 48"
                    >
                      <mask id="ipSApplication0">
                        <g
                          fill="none"
                          stroke="#fff"
                          strokeLinejoin="round"
                          strokeWidth="4"
                        >
                          <path
                            strokeLinecap="round"
                            d="M40.04 22v20h-32V22"
                          ></path>
                          <path
                            fill="#fff"
                            d="M5.842 13.777C4.312 17.737 7.263 22 11.51 22c3.314 0 6.019-2.686 6.019-6a6 6 0 0 0 6 6h1.018a6 6 0 0 0 6-6c0 3.314 2.706 6 6.02 6c4.248 0 7.201-4.265 5.67-8.228L39.234 6H8.845l-3.003 7.777Z"
                          ></path>
                        </g>
                      </mask>
                      <path
                        fill="currentColor"
                        d="M0 0h48v48H0z"
                        mask="url(#ipSApplication0)"
                      ></path>
                    </svg>
                  }
                  selected={endDate}
                  onChange={handleEndDateChange}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  minDate={new Date().setDate(new Date().getDate() + 1)}
                  maxDate={new Date().setDate(new Date().getDate() + 30)}
                  className="text-center border border-[#e3e3e3] py-1 max-w-40 outline-gray-200"
                />
                <div>
                  <button
                    disabled={cartLoading}
                    className="bg-[#03b00b] cursor-pointer text-white py-2 w-32 mt-5 rounded"
                  >
                    {cartLoading ? (
                      <span className="loading loading-dots loading-sm"></span>
                    ) : (
                      <span onClick={handleOrderInfo}>ADD TO CART</span>
                    )}
                  </button>
                </div>
                <SuccessModal productData={productData} cartModal={cartModal} />
              </div>

              <div className="border border-gray-200 p-3 rounded h-fit text-center">
                <p className="text-[#03b00b]">In Stock</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
