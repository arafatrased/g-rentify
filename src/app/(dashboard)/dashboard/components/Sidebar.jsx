"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiUser, FiHome } from "react-icons/fi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { TbPlaylistAdd } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";

export default function Sidebar() {
  const pathname = usePathname();

  const isActive = (href) => pathname === href;

  const activeClass = "border-[#03b00b] bg-[#03b00b10] text-[#03b00b]";
  const inactiveClass = "border-transparent hover:bg-[#03b00b10]";

  const links = (
    <>
      <li>
        <Link
          href="/dashboard"
          className={`flex justify-between items-center px-2 py-2 transition border-l-2 ${
            isActive("/dashboard") ? activeClass : inactiveClass
          }`}
        >
          <span className="flex items-center gap-1">
            <FiHome />
            Admin
          </span>
          <MdKeyboardArrowRight />
        </Link>
      </li>
      <li>
        <Link
          href="/dashboard/add-gadget"
          className={`flex justify-between items-center px-2 py-2 transition border-l-2 ${
            isActive("/dashboard/add-gadget") ? activeClass : inactiveClass
          }`}
        >
          <span className="flex items-center gap-1">
            <TbPlaylistAdd />
            Add Gadget
          </span>
          <MdKeyboardArrowRight />
        </Link>
      </li>
    </>
  );

  const userLinks = (
    <>
      <li>
        <Link
          href="/dashboard/view-profile"
          className={`flex justify-between items-center px-2 py-2 transition border-l-2 ${
            isActive("/dashboard/view-profile") ? activeClass : inactiveClass
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
          className={`flex justify-between items-center px-2 py-2 transition border-l-2 ${
            isActive("/dashboard/settings") ? activeClass : inactiveClass
          }`}
        >
          <span className="flex items-center gap-1">
            <IoSettingsOutline />
            Settings
          </span>
          <MdKeyboardArrowRight />
        </Link>
      </li>
    </>
  );

  return (
    <div className="bg-[#f4f4f4] w-[250px] min-h-screen">
      <div className="p-3 sticky top-0">
        <Link href="/">
          <h1 className="italic text-center text-2xl font-medium text-[#03b00b] mb-5.5">
            G-Rentify
          </h1>
        </Link>

        <div className="w-full h-[1px] bg-[#dddddd] my-2.5"></div>
        <p className="text-[12px] text-[#2c2c2c]">Dashboard & App</p>
        <div className="flex flex-col gap-2 mt-2 justify-between min-h-[80vh]">
          <ul className="text-[#2c2c2c] mt-5 space-y-4">{links}</ul>
          <div className="flex-1"></div>
          <ul className="text-[#2c2c2c] mt-5 space-y-4">{userLinks}</ul>
        </div>
      </div>
    </div>
  );
}
