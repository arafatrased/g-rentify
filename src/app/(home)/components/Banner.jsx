"use client";
import img1 from "@/images/banner/image.png";
import img2 from "@/images/banner/image2.webp";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import Button from "./Button";
import Link from "next/link";

export default function Banner() {
  return (
    <div className="py-5 md:py-10">
      <div className="container mx-auto px-3">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
          spaceBetween={30}
        >
          <SwiperSlide>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 lg:gap-10 place-items-center min-h-[700px]">
              {/* left item */}
              <div className="flex flex-col md:gap-5 gap-4">
                <h1 className="font-bold text-3xl md:text-5xl  2xl:text-[80px] 2xl:leading-22">
                  Explore the Skies with Power & Precision
                </h1>
                <p className="text-[#17080c]">
                  Take your creativity to new heights with our advanced camera
                  drones. Whether you're a content creator or an adventure
                  lover, enjoy smooth flight, sharp control, and high
                  performance. Capture every moment from a whole new
                  perspective—bold, dynamic, and unforgettable.
                </p>
                <Link href={"/gadgets"}>
                  <Button buttonText={"click me"} />
                </Link>
              </div>
              {/* right item */}
              <div>
                <Image
                  src={img1}
                  alt="Banner Image"
                  className="max-w-[280px] md:max-w-[550px]"
                  priority={true}
                  quality={10}
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10 place-items-center min-h-[700px]">
              {/* left item */}
              <div className="flex flex-col gap-7">
                <h1 className="font-bold text-3xl md:text-5xl 2xl:text-[80px] 2xl:leading-22">
                  Capture Every Angle in Stunning Clarity
                </h1>
                <p>
                  Shoot like a pro with our drones equipped with ultra-clear 4K
                  cameras. Perfect for cinematic videos, events, or
                  inspections—get sharp, steady footage with ease. Rent the
                  gear, own the sky, and tell your story from above.
                </p>
                <Link href={"/gadgets"}>
                  <Button buttonText={"click me"} />
                </Link>
              </div>
              {/* right item */}
              <div>
                <Image
                  src={img2}
                  alt="Banner Image"
                  className="max-w-[280px] md:max-w-[550px]"
                  priority={true}
                  quality={10}
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
