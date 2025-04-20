import React from "react";
import cartImg from "@/images/slash.png";
import Image from "next/image";
import Link from "next/link";
import Button from "../../components/Button";

export default function EmptyPage() {
  return (
    <div className="col-span-12 text-center flex flex-col items-center justify-center gap-3 h-[80svh] md:h-[70svh]">
      <Image
        src={cartImg}
        width={500}
        height={500}
        alt="no cart icon"
        className="mx-auto max-w-32 md:max-w-48"
      />
      <h2 className="text-5xl font-medium">Your cart is empty</h2>
      <p className="w-full md:max-w-2xl text-gray-600 mb-5">
        Hop over to the Gadgets page — there’s a whole world of exciting tech
        waiting for you. Go ahead, we know you’ll find something you love!
      </p>
      <Link href={"/gadgets"}>
        <Button buttonText={"Browse Gadgets"}></Button>
      </Link>
    </div>
  );
}
