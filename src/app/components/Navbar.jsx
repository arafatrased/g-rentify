"use client";
import React, { useState } from "react";
// react icons
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { TbLogout2 } from "react-icons/tb";
import { CiMenuFries } from "react-icons/ci";
import {
  MdLaptopMac,
  MdOutlineArrowRightAlt,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { BsBuildings, BsCalendar2Date } from "react-icons/bs";
import { AiOutlineFire } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import { FiUser } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { TbListDetails } from "react-icons/tb";
import { CiMail } from "react-icons/ci";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [accountMenuOpen, setAccountMenuOpen] = useState(false);
  const [isProductHover, setIsProductHover] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [isMegaMenuCollapse, setIsMegaMenuCollapse] = useState(false);
  const [megaMenuSubItemsOpen, setMegaMenuSubItemsOpen] = useState("");

  return (
    <nav className="flex items-center justify-between w-full relative px-6 py-4">
      {/* logo */}
      <Link href="/">
        <Image
          src="https://i.ibb.co/rK6KHcNd/g-rentify.png"
          width={500}
          height={500}
          alt="logo"
          className="w-[155px]"
        />
      </Link>

      {/* nav links */}
      <ul className="items-center gap-[20px] text-[1rem] text-[#424242] md:flex hidden">
        {/* product megamenu */}
        <li
          className={`${
            isProductHover
              ? "text-[#3B9DF8]"
              : "dark:text-[#abc2d3] text-gray-600"
          } flex items-center gap-[5px] cursor-pointer`}
          onMouseEnter={() => setIsProductHover(true)}
          onMouseLeave={() => setIsProductHover(false)}
        >
          <MdLaptopMac className="text-[1.1rem]" />
          Gadgets
          <IoIosArrowUp
            className={`${
              isProductHover ? "rotate-0" : "rotate-[-180deg]"
            } transition-all duration-300`}
          />
          {/* mega menu */}
          <div
            className={`${
              isProductHover
                ? "translate-y-0 opacity-100 z-30"
                : "translate-y-[20px] opacity-0 z-[-1]"
            } bg-white rounded-md w-full absolute top-[60px] left-[20%] p-[30px] transition-all duration-300 boxShadow flex flex-wrap gap-[30px]`}
          >
            <div className="grid grid-cols-2 gap-[30px]">
              <div className="flex flex-col gap-[20px]">
                <h3 className="text-[1.2rem] text-gray-500 font-[500]">
                  More Products
                </h3>

                <div className="flex float-start gap-[10px] group">
                  <img
                    src="https://i.ibb.co/LQBDJGD/icon-logo-container.png"
                    alt="image"
                    className="w-[30px] h-[30px]"
                  />

                  <div>
                    <h1 className="text-[1rem] text-gray-600 font-[500]">
                      Gadgets
                    </h1>
                    <p className="text-[0.9rem] text-gray-400 font-[300]">
                      Lorem ipsum dolor sit amet, consect adipiscing elit
                    </p>

                    <button className="text-[#FF5E5E] mt-2 flex items-center gap-[4px] text-[0.9rem]">
                      Call to action
                      <MdOutlineArrowRightAlt className="text-[1.4rem] group-hover:ml-[5px] transition-all duration-300" />
                    </button>
                  </div>
                </div>
                <div className="flex float-start gap-[10px] group">
                  <img
                    src="https://i.ibb.co/Y8cRWRj/icon-logo-container-1.png"
                    alt="image"
                    className="w-[30px] h-[30px]"
                  />

                  <div>
                    <h1 className="text-[1rem] text-gray-600 font-[500]">
                      CRM
                    </h1>
                    <p className="text-[0.9rem] text-gray-400 font-[300]">
                      Lorem ipsum dolor sit amet, consect adipiscing elit
                    </p>

                    <button className="text-[#FE9239] mt-2 flex items-center gap-[4px] text-[0.9rem]">
                      Call to action
                      <MdOutlineArrowRightAlt className="text-[1.4rem] group-hover:ml-[5px] transition-all duration-300" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[20px]">
                <h3 className="text-[1.2rem] text-gray-500 font-[500]">
                  Ecosystem
                </h3>

                <div className="flex float-start gap-[10px]">
                  <BsBuildings className="text-[1.4rem] text-gray-600" />

                  <div>
                    <h1 className="text-[1rem] text-gray-600 font-[500]">
                      Directory
                    </h1>
                    <p className="text-[0.9rem] text-gray-400 font-[300]">
                      Lorem ipsum dolor sit amet, consect adipiscing elit
                    </p>
                  </div>
                </div>
                <div className="flex float-start gap-[10px]">
                  <BsCalendar2Date className="text-[1.4rem] text-gray-600" />

                  <div>
                    <h1 className="text-[1rem] text-gray-600 font-[500] ">
                      Bookings
                    </h1>
                    <p className="text-[0.9rem] text-gray-400 font-[300]">
                      Lorem ipsum dolor sit amet, consect adipiscing elit
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>

        <li className="flex items-center hover:text-[#3B9DF8] group gap-[5px] cursor-pointer">
          <AiOutlineFire className="text-[1.1rem] group-hover:text-[#3B9DF8] text-gray-600" />
          Features
        </li>
        <li className="flex items-center hover:text-[#3B9DF8] group gap-[5px] cursor-pointer">
          <BiSupport className="text-[1.1rem] group-hover:text-[#3B9DF8] text-gray-600" />
          Support
        </li>
        <li className="flex items-center hover:text-[#3B9DF8] group gap-[5px] cursor-pointer">
          <Link href="/contactus" className="flex  items-center">
            <CiMail className="text-[1.1rem] group-hover:text-[#3B9DF8] text-gray-600" />
            <span>Contacts</span>
          </Link>
        </li>
        <li className="flex items-center hover:text-[#3B9DF8] group gap-[5px] cursor-pointer">
          <TbListDetails className="text-[1.1rem] group-hover:text-[#3B9DF8] text-gray-600" />
          About Us
        </li>
      </ul>

      {/* user account */}
      <div className="flex items-center gap-[15px]">
        <div
          className="flex items-center gap-[10px] cursor-pointer relative"
          onClick={() => setAccountMenuOpen(!accountMenuOpen)}
        >
          <div className="relative">
            <img
              src="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?t=st=1724605498~exp=1724609098~hmac=7f6fc106bae2c17b0c93af1b2e5483d9d8368f3e51284aaec7c7d50590d2bae5&w=740"
              alt="avatar"
              className="w-[35px] h-[35px] rounded-full object-cover"
            />
            <div className="w-[10px] h-[10px] rounded-full bg-green-500 absolute bottom-[0px] right-0 border-2 border-white"></div>
          </div>

          <h1 className="text-[1rem] font-[400] text-gray-600 sm:block hidden">
            Mika Sing
          </h1>

          <div
            className={`${
              accountMenuOpen
                ? "translate-y-0 opacity-100 z-[1]"
                : "translate-y-[10px] opacity-0 z-[-1]"
            } bg-white w-max rounded-md absolute top-[45px] right-0 p-[10px] flex flex-col transition-all duration-300 gap-[5px]`}
          >
            <p className="flex items-center gap-[5px] rounded-md p-[8px] pr-[45px] py-[3px] text-[1rem] text-gray-600 hover:bg-gray-50">
              <FiUser />
              View Profile
            </p>
            <p className="flex items-center gap-[5px] rounded-md p-[8px] pr-[45px] py-[3px] text-[1rem] text-gray-600 hover:bg-gray-50">
              <IoSettingsOutline />
              Settings
            </p>
            <p className="flex items-center gap-[5px] rounded-md p-[8px] pr-[45px] py-[3px] text-[1rem] text-gray-600 hover:bg-gray-50">
              <FiUser />
              View Profile
            </p>

            <div className="mt-3 border-t border-gray-200 pt-[5px]">
              <p className="flex items-center gap-[5px] rounded-md p-[8px] pr-[45px] py-[3px] text-[1rem] text-red-500 hover:bg-red-50">
                <TbLogout2 />
                Logout
              </p>
            </div>
          </div>

          <IoIosArrowUp
            className={`${
              accountMenuOpen ? "rotate-0" : "rotate-[180deg]"
            } transition-all duration-300 text-gray-600 sm:block hidden`}
          />
        </div>

        <CiMenuFries
          onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
          className="text-[1.8rem] text-[#424242]c cursor-pointer md:hidden flex"
        />
      </div>

      {/* mobile sidebar */}
      <aside
        className={` ${
          mobileSidebarOpen
            ? "translate-x-0 opacity-100 z-20"
            : "translate-x-[200px] opacity-0 z-[-1]"
        } md:hidden bg-white p-4 text-center absolute top-[55px] right-0 sm:w-[300px] w-full rounded-md transition-all duration-300`}
      >
        <ul className="items-start gap-[20px] text-[1rem] text-gray-600 flex flex-col">
          <li
            onClick={() => setIsMegaMenuCollapse(!isMegaMenuCollapse)}
            className="hover:text-[#3B9DF8] group transition-all duration-500 cursor-pointer capitalize flex items-center gap-[10px]"
          >
            Products
            <IoIosArrowDown
              className={`${
                isMegaMenuCollapse ? "rotate-0" : "rotate-[180deg]"
              } text-gray-600 group-hover:text-[#3B9DF8] transition-all duration-300`}
            />
          </li>

          {/* product mega menu */}
          <div
            onClick={() => setMegaMenuSubItemsOpen("more_product")}
            className={`${
              isMegaMenuCollapse ? "hidden" : "block"
            } group font-[500] ml-6`}
          >
            <h4 className="text-left flex items-center gap-[5px]">
              More Products
              <MdOutlineKeyboardArrowRight className="text-[1.2rem]" />
            </h4>

            <ul
              className={`${
                megaMenuSubItemsOpen === "more_product" ? "flex" : "hidden"
              } pl-6 mt-3 font-[400] items-start flex-col gap-[10px] text-gray-600`}
            >
              <li className="hover:text-[#3B9DF8] transition-all duration-500 cursor-pointer capitalize">
                Demo App
              </li>
              <li className="hover:text-[#3B9DF8] transition-all duration-500 cursor-pointer capitalize">
                CRM
              </li>
              <li className="hover:text-[#3B9DF8] transition-all duration-500 cursor-pointer capitalize">
                CMS
              </li>
            </ul>
          </div>

          <div
            onClick={() => setMegaMenuSubItemsOpen("ecosystem")}
            className={`${
              isMegaMenuCollapse ? "hidden" : "block"
            } font-[500] ml-6`}
          >
            <h4 className="text-left flex items-center gap-[5px]">
              Ecosystem
              <MdOutlineKeyboardArrowRight className="text-[1.2rem]" />
            </h4>

            <ul
              className={`${
                megaMenuSubItemsOpen === "ecosystem" ? "flex" : "hidden"
              } pl-6 mt-3 font-[400] items-start flex-col gap-[10px] text-gray-600`}
            >
              <li className="hover:text-[#3B9DF8] transition-all duration-500 cursor-pointer capitalize">
                Directory
              </li>
              <li className="hover:text-[#3B9DF8] transition-all duration-500 cursor-pointer capitalize">
                Bookings
              </li>
              <li className="hover:text-[#3B9DF8] transition-all duration-500 cursor-pointer capitalize">
                User feedback
              </li>
              <li className="hover:text-[#3B9DF8] transition-all duration-500 cursor-pointer capitalize">
                Task Manager
              </li>
            </ul>
          </div>

          <li className="hover:text-[#3B9DF8] transition-all duration-500 cursor-poin ter capitalize">
            Features
          </li>
          <li className="hover:text-[#3B9DF8] transition-all duration-500 cursor-pointer capitalize">
            Support
          </li>
        </ul>
      </aside>
    </nav>
  );
};

export default Navbar;
