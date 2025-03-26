import Link from "next/link";

export default function Sidebar() {
  const links = (
    <>
      <li>
        <Link href={"/dashboard"}>Dashboard Home</Link>
      </li>
      <li>
        <Link href={"/dashboard/add-gadget"}>Add Gadget</Link>
      </li>
    </>
  );
  return (
    <div className="bg-[#03b00b] w-[250px] min-h-screen">
      <div className="p-3">
        <h1 className="italic text-center text-2xl font-medium text-white mb-5">
          G-Rentify
        </h1>
        <div className="w-full h-[1px] bg-green-600 my-2"></div>
        <p className="text-[12px] text-gray-200">Dashboard & App</p>
        <ul>{links}</ul>
      </div>
    </div>
  );
}
