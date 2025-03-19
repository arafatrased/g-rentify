"use client";
import Image from "next/image";
import Rating from "react-rating";
import "font-awesome/css/font-awesome.min.css";
import Link from "next/link";
import Button from "./Button";

export default function ProductCard({ item }) {
  return (
    <div className="group">
      <div className="w-full border border-gray-200 rounded mb-2 p-2">
        <Image
          src={item?.image}
          width={720}
          height={720}
          alt={item?.image}
          className="max-w-[150px] lg:max-w-[200px] mx-auto"
        />
      </div>
      <p className="text-gray-500">{item?.category}</p>
      <h3 className="font-semibold text-[#17080c] hover:text-[#00B22C] duration-300 cursor-pointer">
        {item?.title.substring(0, 62)}
      </h3>
      <p>
        <Rating
          initialRating={item?.rating}
          readonly
          emptySymbol="fa fa-star-o text-gray-400 "
          fullSymbol="fa fa-star text-yellow-500"
          className="text-base mr-1"
        />
      </p>
      <p className="font-medium text-[#03b00b] mb-2">$ {item?.price}</p>
      <Link
        href={""}
        className="opacity-0 -translate-y-5 table group-hover:opacity-100 group-hover:translate-y-0 duration-500"
      >
        <Button buttonText={"Options"}></Button>
      </Link>
    </div>
  );
}
