import Image from "next/image";
import React from "react";

export default function SuccessModal({ productData, cartModal }) {
  const { title, description, images, durationInDay, totalRentValue } =
    productData;

  return (
    <div
      className={`border border-gray-200 px-5 py-12 w-full absolute bottom-16 left-1/2 -translate-x-1/2 bg-white z-10 transition-all duration-300 ease-in-out 
      ${
        cartModal
          ? "opacity-100 translate-y-0 visible"
          : "opacity-0 translate-y-16 invisible"
      }`}
    >
      <h3 className="font-medium text-xl text-center mb-5">In Cart</h3>
      <div className="flex gap-5 items-center">
        <Image width={60} height={60} alt={description} src={images[0]} />
        <div className="">
          <h5 className="text-start text-sm">{title}</h5>
          <p className="text-sm text-start">Total Price: $ {totalRentValue}</p>
          <p className="text-sm text-start">
            Duration: {durationInDay} {durationInDay === 1 ? "Day" : "Days"}
          </p>
        </div>
      </div>
    </div>
  );
}
