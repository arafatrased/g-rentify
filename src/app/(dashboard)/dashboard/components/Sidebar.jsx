import Link from "next/link";
import { FiUser, FiHome } from "react-icons/fi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { TbPlaylistAdd } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";

export default function Sidebar() {
  const links = (
    <>
      <li>
        <Link href={"/dashboard"} className="flex justify-between items-center">
          <span className="flex items-center gap-1">
            <FiHome />
            Admin
          </span>
          <MdKeyboardArrowRight />
        </Link>
      </li>
      <li>
        <Link
          href={"/dashboard/add-gadget"}
          className="flex justify-between items-center"
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
        <Link href={"/dashboard/settings"} className="flex justify-between items-center">
          <span className="flex items-center gap-1">
            <FiUser />
           View Profile
          </span>
          <MdKeyboardArrowRight />
        </Link>
      </li>
      <li>
        <Link href={"/dashboard/profile"} className="flex justify-between items-center">
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
    <div className="bg-[#03b00b]  w-[250px] min-h-screen">
      <div className="p-3 sticky top-0">
        <Link href={"/"}>
          <h1 className="italic text-center text-2xl font-medium text-white mb-5">
            G-Rentify
          </h1>
        </Link>

        <div className="w-full h-[1px] bg-green-600 my-2"></div>
        <p className="text-[12px] text-gray-200">Dashboard & App</p>
        <div className="flex flex-col gap-2 mt-2 justify-between min-h-[80vh]">
          <ul className="text-[#edf5ff] mt-5 space-y-4">{links}</ul>
          <div className="flex-1"></div>
          <ul className="text-[#edf5ff] mt-5 space-y-4">{userLinks}</ul>
        </div>

      </div>
    </div>
  );
}
