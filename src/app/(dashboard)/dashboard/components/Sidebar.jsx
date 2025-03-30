import Link from "next/link";
import { FiHome } from "react-icons/fi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { TbPlaylistAdd } from "react-icons/tb";

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
  return (
    <div className="bg-[#03b00b]  w-[250px] min-h-screen">
      <div className="p-3 sticky top-0">
        <h1 className="italic text-center text-2xl font-medium text-white mb-5">
          G-Rentify
        </h1>
        <div className="w-full h-[1px] bg-green-600 my-2"></div>
        <p className="text-[12px] text-gray-200">Dashboard & App</p>
        <ul className="text-[#edf5ff] mt-5 space-y-2">{links}</ul>
      </div>
    </div>
  );
}
