"use client";
import Button from "@/app/(home)/components/Button";
import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function AddCouponForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_LINK}/coupon-code`,
        data
      );

      if (res.data.insertedId) {
        toast.success("Coupon added successfully.");
        reset();
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="px-2 py-16 bg-gray-100">
      <div className="grid grid-cols-12 gap-5">
        {/* Left Side: More Detailed Info */}
        <div className="p-8 bg-gradient-to-r from-green-50 to-white-100 rounded shadow-sm text-gray-800 col-span-12 lg:col-span-7">
          <h3 className="text-2xl font-semibold mb-6">
            Coupon Guidelines & Info
          </h3>

          <p className="text-lg font-medium text-gray-700 mb-6">
            Coupons provide promotional discounts that users can apply during
            checkout. Here’s how you can add and manage coupon codes
            efficiently.
          </p>

          <div className="space-y-6">
            {/* Section 1: Coupon Examples */}
            <div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">
                ✅ Examples:
              </h4>
              <ul className="list-inside space-y-2 text-gray-700">
                <li className="flex items-center">
                  <code className="bg-white text-sm text-green-600 font-mono px-3 py-1 rounded-md border">
                    SAVE10
                  </code>{" "}
                  – 10% off
                </li>
              </ul>
            </div>

            {/* Section 2: Notes */}
            <div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">
                📌 Important Notes:
              </h4>
              <ul className="list-inside space-y-2 text-gray-700">
                <li>Coupon codes must be unique and under 20 characters.</li>
                <li>
                  Spaces and special characters are not allowed in the codes.
                </li>
                <li>
                  Coupons can be applied during checkout for discounts, free
                  shipping, or other offers.
                </li>
                <li>Only authorized users can add or manage coupons.</li>
              </ul>
            </div>

            {/* Section 3: Coming Features */}
            <div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">
                📊 Upcoming Features:
              </h4>
              <ul className="list-inside space-y-2 text-gray-700">
                <li>Set expiration dates for coupons.</li>
                <li>Limit the number of uses per coupon per user.</li>
                <li>View coupon performance and analytics reports.</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Right Side: Coupon Form */}
        <div className="p-8 bg-gradient-to-l from-green-50 to-white-100 shadow-sm rounded max-h-fit col-span-12 lg:col-span-5">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
            Add a New Coupon
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="flex flex-col">
              <label
                htmlFor="code"
                className="mb-2 font-semibold text-gray-700"
              >
                Coupon Code
              </label>
              <input
                {...register("code", {
                  required: "Coupon code is required",
                  maxLength: {
                    value: 20,
                    message: "Maximum 20 characters allowed",
                  },
                })}
                placeholder="Enter your coupon code"
                className="px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#03b00b]"
              />
              {errors.code && (
                <p className="text-sm text-red-500 mt-2">
                  {errors.code.message}
                </p>
              )}
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="code"
                className="mb-2 font-semibold text-gray-700"
              >
               Discount Value
              </label>
              <input
                {...register("discountValue", {
                  required: "Discount value is required",
                  maxLength: {
                    value: 2,
                    message: "Maximum 99 allowed",
                  },
                })}
                type="number"
                placeholder="Enter your discount value"
                className="px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#03b00b]"
              />
              {errors.discountValue && (
                <p className="text-sm text-red-500 mt-2">
                  {errors.discountValue.message}
                </p>
              )}
            </div>

            <div className="text-center">
              <h1 type="submit">
                <Button buttonText={"Add Coupon"} />
              </h1>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
