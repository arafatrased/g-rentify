import Image from "next/image";
import Link from "next/link";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function GadgetDetails() {
  // Breadcrumb Items array
  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "Gadgets", path: "/gadgets" },
    { label: "Product Title", path: "" },
  ];

  return (
    <main className="pt-8 pb-14">
      <div className="container mx-auto px-3">
        {/* Breadcrumb */}
        <div className="flex items-center gap-[5px] mb-6">
          {breadcrumbItems.map((item, index) => (
            <div key={index} className="flex items-center">
              <Link
                href={item.path}
                className={`text-[0.9rem] text-text hover:underline ${
                  index === breadcrumbItems.length - 1 && "!text-[#03b00b]"
                }`}
              >
                {item.label}
              </Link>
              {index !== breadcrumbItems.length - 1 && (
                <MdKeyboardArrowDown className="rotate-[-90deg] text-[0.9rem]" />
              )}
            </div>
          ))}
        </div>

        {/* details wrapper*/}
        <div className="grid grid-cols-12 gap-8">
          {/* item 1 */}
          <div className="col-span-4 border border-gray-200 p-3 rounded h-fit">
            <h4 className="text-xl font-semibold">Rent product name</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto id
              est facilis harum explicabo, eaque, repudiandae in illo optio
              assumenda quos voluptate eligendi, molestias nostrum! Sapiente
              saepe reprehenderit porro possimus.
            </p>
          </div>
          {/* item 2 */}
          <div className="col-span-5 border border-gray-200 p-3 rounded h-fit">
            <Image
              src={
                "https://i.ibb.co.com/FkfhkxMT/H7897f47494e04d7b9014899f29963bb3-Q-jpg-720x720q50.png"
              }
              width={720}
              height={720}
              alt="img"
            />
          </div>
          {/* item 3 */}
          <div className="col-span-3 border border-gray-200 p-3 rounded h-fit">
            <h4 className="text-xl font-semibold">Set Rental Date</h4>
          </div>
        </div>
      </div>
    </main>
  );
}
