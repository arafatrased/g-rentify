"use client";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import "font-awesome/css/font-awesome.min.css";

export default function ProductCard({ item }) {
  // Function to render stars manually
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <i
          key={i}
          className={`fa fa-star${i <= rating ? "" : "-o"} text-yellow-500 mr-1`}
        ></i>
      );
    }
    return stars;
  };

  return (
    <div className="group">
      <div className="w-full border border-gray-200 rounded mb-2 p-2">
        <Image
          src={item?.image || "/placeholder.jpg"}
          width={720}
          height={720}
          alt={item?.title || "Product Image"}
          className="max-w-[150px] lg:max-w-[200px] mx-auto"
          priority={true}
        />
      </div>
      <p className="text-gray-500">{item?.category || "No Category"}</p>
      <h3 className="font-semibold text-[#17080c] hover:text-[#00B22C] duration-300 cursor-pointer">
        {item?.title?.substring(0, 62) || "No Title"}
      </h3>
      <p>{renderStars(item?.rating || 0)}</p>
      <p className="font-medium text-[#03b00b] mb-2">$ {item?.price || "N/A"}</p>
      <Link
        href={item?.link || "#"}
        className="opacity-0 -translate-y-5 table group-hover:opacity-100 group-hover:translate-y-0 duration-500"
      >
        <Button buttonText={"Options"}></Button>
      </Link>
    </div>
  );
}

