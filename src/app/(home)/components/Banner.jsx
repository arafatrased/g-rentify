"use client";
import img1 from "@/images/banner/image1.webp";
import img2 from "@/images/banner/image2.webp";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import Button from "./Button";

export default function Banner() {
  return (
    <div className="py-10">
      <div className="container mx-auto px-3">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center min-h-[700px]">
              {/* left item */}
              <div className="flex flex-col gap-7">
                <h1 className="font-bold text-5xl md:text-5xl  2xl:text-8xl">
                  Rent the latest electronics for any occasion.
                </h1>
                <p>
                  We offer reliable support, ensuring a hassle-free rental
                  experience with responsive assistance, easy returns, and
                  expert guidance to help you make the most of your rented
                  gadgets
                </p>
                <Button buttonText={"click me"} />
              </div>
              {/* right item */}
              <div>
                <Image
                  src={img1}
                  alt="Banner Image"
                  className="max-w-[400px] md:max-w-[650px]"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center min-h-[700px]">
              {/* left item */}
              <div className="flex flex-col gap-7">
                <h1 className="font-bold text-5xl md:text-5xl 2xl:text-8xl">
                  Rent the latest electronics for any occasion.
                </h1>
                <p>
                  We offer reliable support, ensuring a hassle-free rental
                  experience with responsive assistance, easy returns, and
                  expert guidance to help you make the most of your rented
                  gadgets
                </p>
                <Button buttonText={"click me"} />
              </div>
              {/* right item */}
              <div>
                <Image
                  src={img2}
                  alt="Banner Image"
                  className="max-w-[400px] md:max-w-[650px]"
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
