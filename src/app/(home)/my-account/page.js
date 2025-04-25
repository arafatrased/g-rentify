"use client";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Button from "../components/Button";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function MyAccount() {
  const session = useSession();
  const name = session?.data?.user?.name;
  const email = session?.data?.user?.email;
  const [activeTab, setActiveTab] = useState("dashboard");
  const [location, setLocation] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      console.log(data);
    } catch (error) {
      toast.error(error.message);
    }
  };

  // get location
  useEffect(() => {
    const fetchUserLocation = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_LINK}/api/location`
        );
        const data = await res.json();
        setLocation(data);
      } catch (error) {
        console.error("Failed to fetch location:", error);
      }
    };
    fetchUserLocation();
  }, []);

  // get user

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_LINK}/my-info/${email}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setUser(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [email]);

  return (
    <>
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <div className="w-full lg:w-1/4">
            <div className="border border-gray-200 rounded shadow-sm">
              <div className="bg-[#03b00b] text-white px-4 py-3 font-semibold text-center lg:text-left">
                MY ACCOUNT
              </div>
              <div className="divide">
                <button
                  className={`w-full text-left px-4 py-3 text-sm sm:text-base cursor-pointer ${
                    activeTab === "dashboard" ? "bg-gray-100" : ""
                  }`}
                  onClick={() => setActiveTab("dashboard")}
                >
                  Account Dashboard
                </button>
                <button
                  className={`w-full text-left px-4 py-3 text-sm sm:text-base cursor-pointer ${
                    activeTab === "orders" ? "bg-gray-100" : ""
                  }`}
                  onClick={() => setActiveTab("orders")}
                >
                  My Orders
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full lg:w-3/4 space-y-6 min-h-[600px]">
            {activeTab === "dashboard" && (
              <>
                {/* Account Info */}
                <div className="border border-gray-200 rounded shadow-sm">
                  <div className="bg-[#03b00b] text-white px-4 py-3 font-semibold">
                    Account Information
                  </div>
                  <div className="p-4 space-y-2 text-sm sm:text-base">
                    <p className="font-medium">
                      <span>Name: </span> {name}
                    </p>
                    <p>
                      <span>Email: </span> {email}
                    </p>
                    <p>
                      <span>Ip: </span> {location?.ip}
                    </p>
                    <button className="mt-2 bg-[#03b00b] text-white px-4 py-2 rounded hover:bg-[#03b00cdb] cursor-pointer text-sm sm:text-base">
                      Change Password
                    </button>
                  </div>
                </div>

                {/* Billing Info */}
                <div className="border border-gray-200 rounded shadow-sm">
                  <div className="bg-[#03b00b] text-white px-4 py-3 font-semibold">
                    Default Billing Address
                  </div>
                  <div className="p-4 space-y-2 text-sm sm:text-base">
                    <p className="font-medium">{session?.data?.user?.name}</p>

                    <p>
                      <span>City: </span>Dhaka, {location?.country_name}
                    </p>
                    <p>
                      <span>Phone: </span>0140090252
                    </p>
                    <button
                      onClick={() =>
                        document.getElementById("my_modal_3").showModal()
                      }
                      className="mt-2 bg-[#03b00b] text-white px-4 py-2 rounded hover:bg-[#03b00cdb] cursor-pointer text-sm sm:text-base"
                    >
                      Edit Bill Address
                    </button>
                  </div>
                </div>
              </>
            )}

            {activeTab === "orders" && (
              <div className="border border-gray-200 rounded shadow-sm">
                <div className="bg-[#03b00b] text-white px-4 py-3 font-semibold">
                  My Orders
                </div>
                <div className="p-4 text-sm sm:text-base">
                  <p>You have not placed any orders yet.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* modal */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
            <div className="flex flex-col">
              <label className="mb-2 font-semibold text-gray-700">Name</label>
              <input
                {...register("name", {
                  required: "Name is required",
                  maxLength: {
                    value: 20,
                    message: "Maximum 20 characters allowed",
                  },
                })}
                placeholder="Enter your name"
                className="px-2 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#03b00b]"
              />
              {errors.name && (
                <p className="text-sm text-red-500 mt-2">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div className="flex flex-col">
              <label className="mb-2 font-semibold text-gray-700">City</label>
              <input
                {...register("city", {
                  required: "City is required",
                })}
                type="text"
                placeholder="Enter your city"
                className="px-2 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#03b00b]"
              />
              {errors.city && (
                <p className="text-sm text-red-500 mt-2">
                  {errors.city.message}
                </p>
              )}
            </div>
            <div className="flex flex-col">
              <label className="mb-2 font-semibold text-gray-700">
                Country
              </label>
              <input
                {...register("country", {
                  required: "Country is required",
                  maxLength: {
                    value: 2,
                    message: "Maximum 99 allowed",
                  },
                })}
                type="text"
                placeholder="Enter your country"
                className="px-2 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#03b00b]"
              />
              {errors.country && (
                <p className="text-sm text-red-500 mt-2">
                  {errors.country.message}
                </p>
              )}
            </div>
            <div className="flex flex-col">
              <label className="mb-2 font-semibold text-gray-700">Phone</label>
              <input
                {...register("phone", {
                  required: "Phone is required",
                })}
                type="text"
                placeholder="Enter your discount value"
                className="px-2 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#03b00b]"
              />
              {errors.phone && (
                <p className="text-sm text-red-500 mt-2">
                  {errors.phone.message}
                </p>
              )}
            </div>

            <div className="text-center">
              <h1 type="submit">
                <Button buttonText={"Update Account"} />
              </h1>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
}
