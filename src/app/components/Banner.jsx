"use client";
import img1 from "@/images/banner/image1.webp";
import img2 from "@/images/banner/image2.webp";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

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
                <h1 className="font-bold text-5xl md:text-6xl 2xl:text-8xl">
                  Rent the latest electronics for any occasion.
                </h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Blanditiis accusantium esse officiis modi aliquid neque
                  voluptatibus asperiores, est ea quae dignissimos, expedita
                  necessitatibus totam eius architecto nihil aliquam!
                </p>
                <button className="px-6 py-3 bg-orange-500 w-fit text-white border-none outline-none text-secondary text-[1rem] rounded active:scale-[0.9] transition-all duration-300 cursor-pointer">
                  Click Me
                </button>
              </div>
              {/* right item */}
              <div>
                <Image
                  src={img1}
                  alt="Banner Image"
                  className="max-w-[650px]"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center min-h-[700px]">
              {/* left item */}
              <div className="flex flex-col gap-7">
                <h1 className="font-bold text-5xl md:text-6xl 2xl:text-8xl">
                  Rent the latest electronics for any occasion.
                </h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Blanditiis accusantium esse officiis modi aliquid neque
                  voluptatibus asperiores, est ea quae dignissimos, expedita
                  necessitatibus totam eius architecto nihil aliquam!
                </p>
                <button className="px-6 py-3 bg-orange-500 w-fit text-white border-none outline-none text-secondary text-[1rem] rounded active:scale-[0.9] transition-all duration-300 cursor-pointer">
                  Click Me
                </button>
              </div>
              {/* right item */}
              <div>
                <Image
                  src={img2}
                  alt="Banner Image"
                  className="max-w-[650px]"
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
