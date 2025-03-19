"use client";
import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import Select from "react-select";
import ProductCard from "../components/ProductCard";
import Button from "../components/Button";

export default function GadgetPage() {
  // State to store selected filter option
  const [selectedOption, setSelectedOption] = useState(null);

  // Custom styles
  const customStyles = {
    control: (base) => ({
      ...base,
      backgroundColor: "white",
      border: "1px solid #e3e3e3",
      borderRadius: "4px",
      padding: "2px",
      boxShadow: "none",
      "&:hover": {
        borderColor: "#aaa",
      },
    }),
    menu: (base) => ({
      ...base,
      backgroundColor: "#F5F5F5",
      borderRadius: "4px",
      padding: "4px",
    }),
    option: (base, { isFocused }) => ({
      ...base,
      backgroundColor: isFocused ? "#00b22c47" : "white",
      color: "#17080c",
      padding: "5px",
      cursor: "pointer",
    }),
  };

  // Breadcrumb Items array
  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "Gadgets", path: "/gadgets" },
  ];

  // Filter select item array
  const options = [
    { value: "name", label: "Name" },
    { value: "low to high", label: "Price: low to high" },
    { value: "high to low", label: "Price: high to low" },
  ];

  // Handle select change
  const handleChange = (selected) => {
    setSelectedOption(selected);
  };

  const data = [
    {
      image:
        "https://i.ibb.co.com/sp8ydvLv/H5b68e85d72394e31b07e9bd664e0406a-M-jpg-720x720q50.png",
      category: "Electronics",
      title: "High-Quality Wireless Earbuds with Mic",
      rating: 4.5,
      price: 39.99,
    },
    {
      image:
        "https://i.ibb.co.com/Q7v6Cn8p/H8c3259ae9424447dbb9f43514c0dff30w-jpg-720x720q50.png",
      category: "Accessories",
      title: "Advanced Smartwatch with Fitness Tracker",
      rating: 4.7,
      price: 59.99,
    },
    {
      image:
        "https://i.ibb.co.com/fYJpG2mM/H9c4d103d84464866bc8df1a8417488a03-jpg-720x720q50.png",
      category: "Gaming",
      title: "RGB Mechanical Keyboard for Gamers",
      rating: 4.6,
      price: 79.99,
    },
    {
      image:
        "https://i.ibb.co.com/231HVzYH/H040c4ebe9d0a40f9be3403597e1332bb2-jpg-720x720q50.png",
      category: "Computers",
      title: "Ergonomic Gaming Mouse with RGB Lights",
      rating: 4.8,
      price: 49.99,
    },
    {
      image:
        "https://i.ibb.co.com/yc31VMs2/H307d2ab304da4e15b0fb45d4f16f64f9-L-jpg-720x720q50.png",
      category: "Audio",
      title: "Portable Bluetooth Speaker with Deep Bass",
      rating: 4.4,
      price: 29.99,
    },
    {
      image:
        "https://i.ibb.co.com/FkfhkxMT/H7897f47494e04d7b9014899f29963bb3-Q-jpg-720x720q50.png",
      category: "Mobile Accessories",
      title: "Compact Portable Power Bank for Phones",
      rating: 4.3,
      price: 25.99,
    },
  ];

  return (
    <main className="pt-8 pb-14">
      <div className="container mx-auto px-3">
        {/* Breadcrumb */}
        <div className="flex items-center gap-[5px] mb-5">
          {breadcrumbItems.map((item, index) => (
            <div key={index} className="flex items-center">
              <a
                href={item.path}
                className={`text-[0.9rem] text-text hover:underline ${
                  index === breadcrumbItems.length - 1 && "!text-[#03b00b]"
                }`}
              >
                {item.label}
              </a>
              {index !== breadcrumbItems.length - 1 && (
                <MdKeyboardArrowDown className="rotate-[-90deg] text-[0.9rem]" />
              )}
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-12 gap-10">
          {/* Sidebar */}
          <div className="col-span-12 lg:col-span-3">
            {/* Search Box */}
            <div className="border border-[#e3e3e3] rounded p-2 bg-[#F5F5F5] mb-5">
              <form>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="By Title"
                  className="border border-[#e3e3e3] rounded outline-none px-3 w-full mt-1 py-2 focus:border-primary transition-colors duration-300 mb-3 bg-white hover:border-[#aaa]"
                />
                <Button buttonText={"Search"}></Button>
              </form>
            </div>
            {/* featured 4 item */}
            <div className="grid grid-cols-2 gap-5">
              <div className="border border-green-500 w-full h-28">
                featured product item
              </div>
              <div className="border border-green-500 w-full h-28">
                featured product item
              </div>
              <div className="border border-green-500 w-full h-28">
                featured product item
              </div>
              <div className="border border-green-500 w-full h-28">
                featured product item
              </div>
            </div>
          </div>

          {/* all Gadgets */}
          <div className="col-span-12 lg:col-span-9">
            {/* Product Title bar*/}
            <div className="flex justify-between items-center mb-5">
              <h3 className="text-xl font-semibold">Filters Rental</h3>
              <div className="flex gap-2 items-center">
                <p className="text-[#17080c] font-medium">Sort by: </p>
                <Select
                  options={options}
                  styles={customStyles}
                  className="w-[200px]"
                  value={selectedOption}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Gadgets card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
              {data.map((item, idx) => (
                <ProductCard key={idx} item={item}></ProductCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
