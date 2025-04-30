"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiUser, FiHome } from "react-icons/fi";
import { TbLogout2 } from "react-icons/tb";
import { MdKeyboardArrowRight } from "react-icons/md";
import { TbPlaylistAdd } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { signOut, useSession } from "next-auth/react";
import { useState } from "react";
import { Sling as Hamburger } from "hamburger-react";
import { SiEngadget } from "react-icons/si";
import { FaUsers } from "react-icons/fa";
import { RiCoupon4Line } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import Logo from "@/app/(home)/components/Logo";

export default function Sidebar() {
  const [isOpen, setOpen] = useState(false);
  const pathname = usePathname();
  const session = useSession();
  const { data: sessionUser } = session;

  const isActive = (href) => pathname === href;

  const activeClass = "border-[#03b00b] bg-[#03b00b10] text-[#03b00b]";
  const inactiveClass = "border-transparent hover:bg-[#03b00b10]";

  const links = (
    <>
      {sessionUser?.user?.role === "admin" && (
        <li>
          <Link
            href="/dashboard"
            className={`flex justify-between items-center px-2 py-2 transition border-l-2 ${isActive("/dashboard") ? activeClass : inactiveClass
              }`}
          >
            <span className="flex items-center gap-1">
              <FiHome />
              Admin
            </span>
            <MdKeyboardArrowRight />
          </Link>
        </li>
      )}
      <li>
        <Link
          href="/dashboard/add-gadget"
          className={`flex justify-between items-center px-2 py-2 transition border-l-2 ${isActive("/dashboard/add-gadget") ? activeClass : inactiveClass
            }`}
        >
          <span className="flex items-center gap-1">
            <TbPlaylistAdd />
            Add Gadget
          </span>
          <MdKeyboardArrowRight />
        </Link>
      </li>
      <li>
        <Link
          href="/dashboard/add-coupon"
          className={`flex justify-between items-center px-2 py-2 transition border-l-2 ${isActive("/dashboard/add-coupon") ? activeClass : inactiveClass
            }`}
        >
          <span className="flex items-center gap-1">
            <RiCoupon4Line />
            Add Coupon
          </span>
          <MdKeyboardArrowRight />
        </Link>
      </li>
      {sessionUser?.user?.role === "admin" && (
        <li>
          <Link
            href="/dashboard/all-gadgets"
            className={`flex justify-between items-center px-2 py-2 transition border-l-2 ${isActive("/dashboard/all-gadgets") ? activeClass : inactiveClass
              }`}
          >
            <span className="flex items-center gap-1">
              <SiEngadget className="text-sm" />
              All Gadgets
            </span>
            <MdKeyboardArrowRight />
          </Link>
        </li>
      )}

      {sessionUser?.user?.role === "lender" && (
        <li>
        <Link
          href="/dashboard/my-gadgets"
          className={`flex justify-between items-center px-2 py-2 transition border-l-2 ${isActive("/dashboard/my-gadgets") ? activeClass : inactiveClass
            }`}
        >
          <span className="flex items-center gap-1">
            <SiEngadget className="text-sm" />
            My Gadgets
          </span>
          <MdKeyboardArrowRight />
        </Link>
      </li>
      )}

      {
        sessionUser?.user?.role === "admin" && (
          <>
            <li>
              <Link
                href="/dashboard/all-user"
                className={`flex justify-between items-center px-2 py-2 transition border-l-2 ${isActive("/dashboard/all-user") ? activeClass : inactiveClass
                  }`}
              >
                <span className="flex items-center gap-1">
                  <FaUsers />
                  All Users
                </span>
                <MdKeyboardArrowRight />
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/all-orders"
                className={`flex justify-between items-center px-2 py-2 transition border-l-2 ${isActive("/dashboard/all-orders") ? activeClass : inactiveClass
                  }`}
              >
                <span className="flex items-center gap-1">
                  <TbTruckDelivery />
                  All Orders
                </span>
                <MdKeyboardArrowRight />
              </Link>
            </li></>
        )}
      {sessionUser?.user?.role === "lender" && (
        <li>
          <Link
            href="/dashboard/my-orders"
            className={`flex justify-between items-center px-2 py-2 transition border-l-2 ${isActive("/dashboard/my-orders") ? activeClass : inactiveClass
              }`}
          >
            <span className="flex items-center gap-1">
              <TbTruckDelivery />
              My Orders
            </span>
            <MdKeyboardArrowRight />
          </Link>
        </li>
      )}


    </>
  );

  const userLinks = (
    <>
      <li>
        <Link
          href="/dashboard/view-profile"
          className={`flex justify-between items-center px-2 py-2 transition border-l-2 ${isActive("/dashboard/view-profile") ? activeClass : inactiveClass
            }`}
        >
          <span className="flex items-center gap-1">
            <FiUser />
            View Profile
          </span>
          <MdKeyboardArrowRight />
        </Link>
      </li>
      <li>
        <Link
          href="/dashboard/settings"
          className={`flex justify-between items-center px-2 py-2 transition border-l-2 ${isActive("/dashboard/settings") ? activeClass : inactiveClass
            }`}
        >
          <span className="flex items-center gap-1">
            <IoSettingsOutline />
            Settings
          </span>
          <MdKeyboardArrowRight />
        </Link>
      </li>
      <li>
        <button
          onClick={() => signOut()}
          className={`flex justify-between w-full items-center px-2 py-2 transition border-l-2 ${isActive("/") ? activeClass : inactiveClass
            }`}
        >
          <span className="flex items-center gap-1">
            <TbLogout2 />
            Logout
          </span>
          <MdKeyboardArrowRight />
        </button>
      </li>
    </>
  );

  return (
    <>
      {/* Hamburger icon */}
      <div className="fixed top-3 bg-transparent left-0 lg:hidden z-50">
        <Hamburger size={22} toggled={isOpen} toggle={setOpen} />
      </div>

      {/* Sidebar */}
      <div
        className={`
          bg-slate-50 fixed lg:static top-[70px] left-0 w-[250px] min-h-screen z-50
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 lg:block
        `}
      >
        <div className="p-3 sticky top-0">
          <div className="w-40">
            <Logo />
          </div>

          <div className="w-full h-[1px] -mt-1 bg-[#dddddd] mb-3 hidden lg:block"></div>
          <p className="text-[12px] text-[#2c2c2c]">Dashboard & App</p>
          <div className="flex flex-col gap-2 mt-2 justify-between min-h-[80vh]">
            <ul className="text-[#2c2c2c] mt-5 space-y-1">{links}</ul>
            <div className="flex-1"></div>
            <ul className="text-[#2c2c2c] mt-5 space-y-1">{userLinks}</ul>
          </div>
        </div>
      </div>
    </>
  );
}
