"use client";
import React, { useState } from "react";
import Link from "next/link";
// react icons
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { TbLogout2, TbListDetails } from "react-icons/tb";
import { CiMenuFries, CiMail } from "react-icons/ci";
import { MdLaptopMac, MdOutlineArrowRightAlt } from "react-icons/md";
import { AiOutlineFire } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import { FiUser } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const session = useSession();
  const { data: userSession, status } = session;
  const [accountMenuOpen, setAccountMenuOpen] = useState(false);
  const [isProductHover, setIsProductHover] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between w-full relative px-6 py-4 border-b">
      {/* Logo */}
      <Link href="/">
        <img
          src="https://i.ibb.co.com/rK6KHcNd/g-rentify.png"
          alt="logo"
          className="w-[155px]"
        />
      </Link>

      {/* Nav Links */}
      <ul className="items-center gap-[20px] text-[1rem] text-[#424242] md:flex hidden">
        {/* Product Mega Menu */}
        <li
          className={`${isProductHover ? "text-[#3B9DF8]" : "dark:text-[#abc2d3] text-gray-600"
            } flex items-center gap-[5px] cursor-pointer relative`}
          onMouseEnter={() => setIsProductHover(true)}
          onMouseLeave={() => setIsProductHover(false)}
        >
          <MdLaptopMac className="text-[1.1rem]" />
          Gadgets
          <IoIosArrowUp className={`transition-all duration-300 ${isProductHover ? "rotate-0" : "rotate-180"}`} />

          {/* Mega Menu */}
          {isProductHover && (
            <div className="bg-white rounded-md w-[300px] absolute top-[60px] left-0 p-4 transition-all duration-300 shadow-lg">
              <h3 className="text-[1.2rem] text-gray-500 font-[500]">More Products</h3>
              <ul className="mt-2 space-y-3">
                <li className="flex items-center gap-2 group">
                  <img src="https://i.ibb.co/LQBDJGD/icon-logo-container.png" alt="icon" className="w-[30px] h-[30px]" />
                  <div>
                    <h1 className="text-[1rem] text-gray-600 font-[500]">Gadgets</h1>
                    <p className="text-[0.9rem] text-gray-400 font-[300]">
                      Explore the latest gadgets and technology.
                    </p>
                    <button className="text-[#FF5E5E] mt-2 flex items-center gap-1 text-[0.9rem]">
                      Call to action
                      <MdOutlineArrowRightAlt className="text-[1.4rem] group-hover:ml-[5px] transition-all duration-300" />
                    </button>
                  </div>
                </li>
                <li className="flex items-center gap-2 group">
                  <img src="https://i.ibb.co/Y8cRWRj/icon-logo-container-1.png" alt="icon" className="w-[30px] h-[30px]" />
                  <div>
                    <h1 className="text-[1rem] text-gray-600 font-[500]">CRM</h1>
                    <p className="text-[0.9rem] text-gray-400 font-[300]">
                      Efficient customer relationship management.
                    </p>
                    <button className="text-[#FE9239] mt-2 flex items-center gap-1 text-[0.9rem]">
                      Learn More
                      <MdOutlineArrowRightAlt className="text-[1.4rem] group-hover:ml-[5px] transition-all duration-300" />
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          )}
        </li>

        {/* Other Nav Items */}
        <li className="flex items-center gap-2 cursor-pointer hover:text-[#3B9DF8]">
          <AiOutlineFire className="text-[1.1rem]" />
          Features
        </li>
        <li className="flex items-center gap-2 cursor-pointer hover:text-[#3B9DF8]">
          <BiSupport className="text-[1.1rem]" />
          Support
        </li>
        <li className="flex items-center gap-2 cursor-pointer hover:text-[#3B9DF8]">
          <Link href="/contactus" className="flex items-center">
            <CiMail className="text-[1.1rem]" />
            Contacts
          </Link>
        </li>
        <li className="flex items-center gap-2 cursor-pointer hover:text-[#3B9DF8]">
          <Link href="/about" className="flex items-center">
            <TbListDetails className="text-[1.1rem]" />
            About Us
          </Link>
        </li>
      </ul>

      {/* Account Menu */}
      <div className="relative flex gap-4 items-center">
        {status === "authenticated" ? (
          <div>
            <p className="text-gray-600 text-[0.9rem]">Welcome, {userSession.user.name}</p>
            <button onClick={signOut()} className="cursor-pointer hover:text-[#3B9DF8]">Log Out</button>
          </div>
        ) : (
          <div className="flex gap-2">
            <button className="cursor-pointer hover:text-[#3B9DF8]"><Link href="/registrar">Sing up</Link></button>
            <button className="cursor-pointer hover:text-[#3B9DF8]"><Link href="/login">Log In</Link></button>
          </div>
        )}

        <button onClick={() => setAccountMenuOpen(!accountMenuOpen)} className="flex items-center gap-2 cursor-pointer">
          <FiUser className="text-[1.5rem]" />
          <IoIosArrowDown className={`transition-all duration-300 ${accountMenuOpen ? "rotate-180" : ""}`} />
        </button>

        {accountMenuOpen && (
          <div className="bg-white rounded-md absolute top-[40px] right-0 p-3 shadow-lg transition-all duration-300">
            <p className="flex items-center gap-2 p-2 text-gray-600 hover:bg-gray-100 cursor-pointer">
              <FiUser /> View Profile
            </p>
            <p className="flex items-center gap-2 p-2 text-gray-600 hover:bg-gray-100 cursor-pointer">
              <IoSettingsOutline /> Settings
            </p>
            <p className="flex items-center gap-2 p-2 text-red-600 hover:bg-gray-100 cursor-pointer">
              <TbLogout2 /> Logout
            </p>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      <button onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)} className="md:hidden">
        <CiMenuFries className="text-[2rem]" />
      </button>

      {mobileSidebarOpen && (
        <div className="fixed top-0 left-0 w-[250px] z-[50] h-full bg-white shadow-lg p-5 transition-all duration-300">
          <button onClick={() => setMobileSidebarOpen(false)} className="absolute top-2 right-2 text-gray-600">
            ✖
          </button>
          <ul className="flex flex-col space-y-4 mt-6">
            <li className="cursor-pointer hover:text-[#3B9DF8]">Gadgets</li>
            <li className="cursor-pointer hover:text-[#3B9DF8]">Features</li>
            <li className="cursor-pointer hover:text-[#3B9DF8]">Support</li>
            <li className="cursor-pointer hover:text-[#3B9DF8]">Contact</li>
            <li className="cursor-pointer hover:text-[#3B9DF8]">About Us</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
