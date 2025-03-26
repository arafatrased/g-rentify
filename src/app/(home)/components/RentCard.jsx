'use client';
import React from "react";

// react icons
import { FaQuoteRight } from "react-icons/fa";

const RentCard = () => {
    return (
        <div
            className="w-full p-4 bg-white shadow-2xl rounded-lg relative flex flex-col md:flex-row items-start justify-between gap-6">
            <div className="relative w-full md:w-[50%]">
                <img
                    src="https://img.freepik.com/free-photo/front-view-smiley-man-holding-laptop_23-2148946208.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=ais"
                    alt="demo/image"
                    className="w-full h-full object-cover"
                    loading="eager"
                />
                <FaQuoteRight
                    className="absolute -top-5 right-[-5%] text-[3rem] text-[#ffffff] bg-[#3B9DF8] p-3 rounded-full" />
            </div>
            <div className="w-full md:w-[45%]">
                <h3 className="text-[1.5rem] font-[500] capitalize">
                    Rent, Lease and Play with Gadgets
                </h3>
                <p className="text-[#424242] text-[0.8rem] mt-2 text-justify">
                    In today’s fast-paced tech world, owning the latest gadgets can be expensive and unnecessary. With Rent, Lease, and Play with Gadgets, you get access to high-quality electronic devices like cameras, laptops, gaming consoles, and more—without the burden of full ownership.
                </p>
                <p className="text-[#424242] text-[0.8rem] mt-2 text-justify">
                    This flexible approach saves money, reduces e-waste, and ensures you always have the best technology at your fingertips.
                </p>


                <div className="mt-4">
                    <h2 className="text-[1rem] font-[500]">Jhone Dehon</h2>
                    <p className="text-[0.9rem] text-[#727272]">
                        CEO of Miracle
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RentCard;