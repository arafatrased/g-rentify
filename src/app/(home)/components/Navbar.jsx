"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
// react icons
import { IoNotificationsSharp } from "react-icons/io5";
import { TbLogout2, TbListDetails } from "react-icons/tb";
import { CiMenuFries, CiMail } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoIosSearch } from "react-icons/io";
import {
  MdDashboard,
  MdLaptopMac,
  MdOutlineAccountCircle,
} from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useOrders } from "../context/OrderContext";
import NotificationListItem from "./NotificationListItem";

const Navbar = () => {
  const session = useSession();
  const { data: userSession, status } = session;
  const [accountMenuOpen, setAccountMenuOpen] = useState(false);
  const [isProductHover, setIsProductHover] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const { loading, total } = useOrders();
  const [dbUser, setDbUser] = useState(null);
  const [notificationClicked, setNotificationClicked] = useState(false)


  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(
          `/api/auth/profile-update?email=${userSession?.user?.email}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              // Authorization: `Bearer ${session.accessToken}`,
            },
          }
        );
        const data = await res.json();
        setDbUser(data);
      } catch (error) {
        // console.error("User fetch failed:", error);
      }
    }
    fetchUser()
  }, [userSession?.user?.email]);


  return (
    <div className="border-b border-gray-300 sticky top-0 z-50 backdrop-blur-3xl">
      <nav className="flex items-center justify-between w-full py-4 container mx-auto px-2">
        {/* Logo */}
        <Link href="/">
          <img
            src="https://i.ibb.co.com/rK6KHcNd/g-rentify.png"
            alt="logo"
            className="w-[155px]"
            loading="eager"
          />
        </Link>
        {/* Search Bar */}
        <div className="">
          <div className="hidden lg:flex flex-1 relative justify-center w-full items-center">
            <input
              className="px-4 py-2 border rounded-xl pl-[40px] w-full outline-none focus:border-[#65de87]"
              placeholder="Search gadgets ..."
            />
            <IoIosSearch className=" absolute left-2 text-[1.5rem] text-[#adadad]" />
          </div>
        </div>

        <div className="flex items-center gap-6">
          {/* Nav Links */}
          <ul className="items-center gap-[20px] text-[1rem] text-[#424242] md:flex hidden">
            {/* Product Mega Menu */}
            <Link href={"/gadgets"}>
              <li
                className={`${isProductHover ? "text-[#03b00b]" : " text-gray-600"
                  } flex items-center gap-[5px] cursor-pointer relative`}
                onMouseEnter={() => setIsProductHover(true)}
                onMouseLeave={() => setIsProductHover(false)}
              >
                <MdLaptopMac className="text-[1.1rem]" />
                Gadgets
                {/* <IoIosArrowUp className={`transition-all duration-300 ${isProductHover ? "rotate-0" : "rotate-180"}`} /> */}
                {/* Mega Menu */}
                {/* {isProductHover && (
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
          )} */}
              </li>
            </Link>

            {/* Other Nav Items */}
            <li className="flex items-center gap-1 cursor-pointer hover:text-[#03b00b]">
              <Link href="/contactus" className="flex items-center">
                <CiMail className="text-[1.1rem]" />
                Contacts
              </Link>
            </li>
            <li className="flex items-center gap-1 cursor-pointer hover:text-[#03b00b]">
              <Link href="/about" className="flex items-center">
                <TbListDetails className="text-[1.1rem]" />
                About Us
              </Link>
            </li>
            {dbUser?.role === "borrower" && (
              <li className="flex items-center gap-1 cursor-pointer hover:text-[#03b00b]">
                <Link href="/my-account" className="flex items-center">
                  <MdOutlineAccountCircle className="text-[1.1rem]" />
                  My Account
                </Link>
              </li>
            )}

            {(dbUser?.role === "admin" || dbUser?.role === "lender") ? (
              <li className="flex items-center gap-2 cursor-pointer hover:text-[#03b00b]">
                <Link href="/dashboard" className="flex items-center">
                  <MdDashboard className="text-[1.1rem]" />
                  Dashboard
                </Link>
              </li>
            ) : null}


          </ul>

          {/* Account Menu for navbar */}
          <div className="relative flex gap-4 items-center">
            <div
              className="indicator tooltip tooltip-right tooltip-success flex items-center gap-3"
              data-tip="Shopping Cart"
            >
              <li className="flex items-center mr-2 gap-2 cursor-pointer indicator tooltip tooltip-right tooltip-success relative" data-tip="Notifications">
                <IoNotificationsSharp onClick={() => setNotificationClicked(!notificationClicked)} className="w-[30px] h-[30px]" />
                <span className="bg-[#03b00b] text-white text-sm font-bold rounded-full w-5 h-5 flex items-center justify-center indicator-item">10</span>

                <div className={`${notificationClicked ? 'block' : 'hidden'} bg-green-600 p-4 rounded-md text-white absolute border top-full right-0 w-[400px] h-[400px] overflow-auto`}>
                  <NotificationListItem title='Lenovo Laptop added to the cart' time='2 hours ago' />
                  <NotificationListItem title='Lenovo Laptop added to the cart' time='2 hours ago' />
                  <NotificationListItem title='Lenovo Laptop added to the cart' time='2 hours ago' />
                  <NotificationListItem title='Lenovo Laptop added to the cart' time='2 hours ago' />
                  <NotificationListItem title='Lenovo Laptop added to the cart' time='2 hours ago' />
                  <NotificationListItem title='Lenovo Laptop added to the cart' time='2 hours ago' />
                  <NotificationListItem title='Lenovo Laptop added to the cart' time='2 hours ago' />
                </div>
              </li>
              {loading ? (
                <div className="indicator-item skeleton h-4 w-4 rounded-full"></div>
              ) : (
                <span className="indicator-item w-5 h-5 text-[11px] flex justify-center items-center bg-[#03b00b] text-white rounded-full">
                  {total || 0}
                </span>
              )}
              <Link href={"/mycart"}>
                <p>
                  <HiOutlineShoppingBag className="w-[30px] h-[30px] object-cover text-gray-600" />
                </p>
              </Link>
            </div>

            {status === "authenticated" ? (
              <div className="flex flex-col items-end gap-1">
                {/* <p className="text-gray-600 text-[0.9rem]">
             <span className="py-1 px-2 rounded-md bg-green-500 text-white uppercase">{userSession?.user?.role}</span>
            </p> */}
              </div>
            ) : (
              <div className="flex gap-2">
                {/* <button className="cursor-pointer hover:text-[#03b00b]">
                  <Link href="/registrar">Sing up</Link>
                </button> */}
                <Link href="/login"><button className="cursor-pointer ml-4 py-1 px-6 rounded-md border border-[#03b00b] text-[#03b00b] hover:bg-[#03b00b] hover:text-white transition-all duration-300">
                  Log In
                </button></Link>
              </div>
            )}

            {status === "authenticated" && (
              <button
                onClick={() => setAccountMenuOpen(!accountMenuOpen)}
                className="flex items-center gap-2 cursor-pointer"
              >
                {dbUser?.photoURL ? (
                  <>
                    <Image
                      src={dbUser?.photoURL}
                      className="rounded-full ring-1 ring-[#03b00b] object-cover p-[2px]"
                      alt="user-Image"
                      referrerPolicy="no-referrer"
                      width={40}
                      height={35}
                    />
                  </>
                ) : (
                  <FiUser className="w-[35px] h-[35px] rounded-full border-2 border-gray-200 object-cover p-1 hover:ring-2 hover:ring-green-200" />
                )}
              </button>
            )}

            {/* toggle account menu */}

            {accountMenuOpen && (
              <div className="bg-white w-[200px] z-30 rounded-md absolute top-[40px] right-0 p-3 shadow-lg transition-all duration-300">
                {status === "authenticated" && (
                  <p className="text-center text-green-700 my-2 text-[0.9rem]">
                    {userSession?.user?.name}
                  </p>
                )}
                {(dbUser?.role == "admin" || dbUser?.role == "lender") ? (<Link href={"/dashboard/view-profile"}>
                  <p className="flex items-center gap-2 p-2 text-gray-600 hover:bg-gray-100 cursor-pointer">
                    <FiUser /> View Profile
                  </p>
                </Link>) : (<Link href={"/my-account"}>
                  <p className="flex items-center gap-2 p-2 text-gray-600 hover:bg-gray-100 cursor-pointer">
                    <FiUser /> My Account
                  </p>
                </Link>)}

                {(dbUser?.role == "admin" || dbUser?.role == "lender") && (<Link href={"/dashboard/settings"}>
                  <p className="flex items-center gap-2 p-2 text-gray-600 hover:bg-gray-100 cursor-pointer">
                    <IoSettingsOutline /> Settings
                  </p>
                </Link>)}

                {/* <p className="flex items-center gap-2 p-2 text-gray-600 hover:bg-gray-100 cursor-pointer">
                 <IoSettingsOutline /> Settings
                </p> */}
                <button
                  onClick={() => signOut()}
                  className="flex items-center gap-2 p-2 text-red-600 hover:bg-gray-100 cursor-pointer"
                >
                  <TbLogout2 />
                  Logout
                </button>
                {dbUser?.role == "borrower" && (<Link href={"/how-this-works"}>
                  <p className="flex items-center gap-2 p-2 text-gray-600 hover:bg-gray-100 cursor-pointer">
                    <TbListDetails /> How this works?
                  </p>
                </Link>)}

              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        <button
          onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
          className="md:hidden"
        >
          <CiMenuFries className="text-[2rem]" />
        </button>

        {mobileSidebarOpen && (
          <div className="fixed top-0 left-0 bg-white w-[250px] z-[52] h-full shadow-lg p-5 transition-all duration-300">
            <button
              onClick={() => setMobileSidebarOpen(false)}
              className="absolute top-2 right-2 text-gray-600"
            >
              ✖
            </button>
            <ul className="flex bg-white flex-col space-y-4 mt-6">
              <li className="cursor-pointer hover:text-[#03b00b]">Gadgets</li>
              <li className="cursor-pointer hover:text-[#03b00b]">Features</li>
              <li className="cursor-pointer hover:text-[#03b00b]">Support</li>
              <li className="cursor-pointer hover:text-[#03b00b]">Contact</li>
              <li className="cursor-pointer hover:text-[#03b00b]">About Us</li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
