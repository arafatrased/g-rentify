"use client";
import Button from "../components/Button";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import NoData from "./components/NoData";
import GadgetsSkeleton from "./components/GadgetsSkeleton";
import Select from "react-select";
import SidebarSkeleton from "./components/SidebarSkeleton";

const options = [
  { value: "", label: "Default" },
  { value: "title", label: "Name" },
  { value: "price_desc", label: "Price: high to low" },
  { value: "price_asc", label: "Price: low to high" },
];

export default function GadgetPage() {
  const [loading, setLoading] = useState(true);
  const [gadgets, setGadgets] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sidebarGadgets, setSidebarGadgets] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [cameraLength, setCameraLength] = useState(0);
  const [droneLength, setDroneLength] = useState(0);

  const sotingValue = sort.value;
  const categoryParams = selectedCategories.join(",");

  // load initial data
  useEffect(() => {
    const fetchGadgets = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_LINK}/gadgets?search=${search}&sort=${sotingValue}&category=${categoryParams}`
        );
        const data = await res.json();
        setGadgets(data);
        setLoading(false);
      } catch {
        console.error(error);
      }
    };
    fetchGadgets();
  }, [search, sort, selectedCategories]);

  // load sidebar data
  useEffect(() => {
    const fetchSidebarGadgets = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_LINK}/gadgets-for-sidebar`
      );
      const data = await res.json();
      setSidebarGadgets(data);
    };

    fetchSidebarGadgets();
  }, []);

  // load camera length
  useEffect(() => {
    const fetchCamera = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_LINK}/gadgets?category=camera`
      );
      const data = await res.json();
      setCameraLength(data.length);
    };

    fetchCamera();
  }, []);

  // load drone length
  useEffect(() => {
    const fetchDrone = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_LINK}/gadgets?category=drone`
      );
      const data = await res.json();
      setDroneLength(data.length);
    };

    fetchDrone();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(e.target.searchTitle.value);
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    const value = name.toLowerCase();

    if (checked) {
      setSelectedCategories((prev) => [...prev, value]);
    } else {
      setSelectedCategories((prev) => prev.filter((cat) => cat !== value));
    }
  };

  return (
    <main className="pt-8 pb-14">
      <div className="container mx-auto px-3">
        {/* Breadcrumb */}
        <div className="breadcrumbs text-sm mb-6">
          <ul>
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link className="text-[#03b00b]" href={"/gadgets"}>
                Gadgets
              </Link>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-12 gap-10">
          {/* Sidebar */}
          <div className="col-span-12 lg:col-span-3">
            {/* Search field */}
            <div className="border border-[#e3e3e3] rounded p-2 bg-[#F5F5F5] mb-5">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="searchTitle"
                  placeholder="Search By Title"
                  className="border border-[#e3e3e3] rounded outline-none px-3 w-full mt-1 py-2 focus:border-[#03b00b] transition-colors duration-300 mb-3 bg-white hover:border-[#aaa]"
                  autoComplete="off"
                />
                <Button buttonText={"Search"}></Button>
              </form>
            </div>
            <div className="border border-[#e3e3e3] rounded p-2  mb-5">
              {/* category field */}
              <div className="w-full bg-white p-3 rounded border border-[#e3e3e3] text-sm font-medium text-[#1d1d1f]">
                <label className="flex items-center justify-between py-1 cursor-pointer mb-2">
                  <div className="flex items-center gap-2">
                    <input
                      name="Camera"
                      type="checkbox"
                      className="accent-[#03b00b] w-4 h-4"
                      onChange={handleCheckboxChange}
                    />
                    <span>Camera</span>
                  </div>
                  {!cameraLength ? (
                    <div className="skeleton w-5 h-4 rounded"></div>
                  ) : (
                    <span className="bg-[#03b00b] text-white text-xs font-semibold rounded-full px-2 py-0.5">
                      {cameraLength}
                    </span>
                  )}
                </label>

                <label className="flex items-center justify-between py-1 cursor-pointer">
                  <div className="flex items-center gap-2">
                    <input
                      name="Drone"
                      type="checkbox"
                      className="accent-[#03b00b] w-4 h-4"
                      onChange={handleCheckboxChange}
                    />
                    <span>Drone</span>
                  </div>
                  {!droneLength ? (
                    <div className="skeleton w-5 h-4 rounded"></div>
                  ) : (
                    <span className="bg-[#03b00b] text-white text-xs font-semibold rounded-full px-2 py-0.5">
                      {droneLength}
                    </span>
                  )}
                </label>
              </div>
            </div>
            {/* featured 4 item */}
            <div className="border border-[#e3e3e3] rounded p-2">
              <h3 className="font-medium mb-2 ">Featured</h3>
              {loading ? (
                <SidebarSkeleton />
              ) : (
                <div className="grid grid-cols-2 gap-5">
                  {sidebarGadgets.map((item) => (
                    <div key={item?._id}>
                      <Link href={`/gadgets/${item?._id}`}>
                        <Image
                          src={item?.images[0]}
                          width={500}
                          height={500}
                          alt={item?.title}
                          priority={true}
                          quality={10}
                          className="w-full lg:w-[150px] lg:h-[130px] h-[150px] object-cover p-2 mx-auto border border-[#e3e3e3] mb-1"
                        />
                      </Link>
                      <Link
                        href={`/gadgets/${item?._id}`}
                        className="text-sm hover:border-b hover:text-[#17080c] text-[#03b00b] "
                      >
                        {item?.title}
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* all Gadgets */}
          <div className="col-span-12 lg:col-span-9">
            {/* Product Title bar*/}
            <div className="flex justify-between items-center mb-5">
              <h3 className="text-xl font-semibold">Filters Rental</h3>
              <div className="flex gap-2 items-center w-60">
                <p className="text-[#17080c] font-medium w-[80px]">Sort by: </p>
                <Select
                  defaultValue={sort}
                  onChange={setSort}
                  options={options}
                  className="w-full"
                  styles={{
                    control: (baseStyles, { isFocused }) => ({
                      ...baseStyles,
                      backgroundColor: "transparent",
                      borderColor: isFocused ? "#03b00b" : "#ccc",
                      boxShadow: isFocused ? "0 0 0 0.1px #03b00b" : "none",
                      borderRadius: "2px",
                      "&:hover": {
                        borderColor: isFocused ? "#03b00b" : "#ccc",
                        boxShadow: isFocused ? "0 0 0 0.1px #03b00b" : "none",
                      },
                    }),
                    option: (base, { isFocused, isSelected }) => ({
                      ...base,
                      backgroundColor: isSelected
                        ? "#F5F5F5"
                        : isFocused
                        ? "#03b00b"
                        : "transparent",
                      color: isSelected ? "black" : "inherit",
                      cursor: "pointer",
                    }),
                  }}
                />
              </div>
            </div>

            {/* check loading state */}
            {loading ? (
              <GadgetsSkeleton />
            ) : (
              <>
                {/* check data not found status */}
                {gadgets.length === 0 && <NoData />}

                {/* Gadgets card container*/}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 min-h-[550px]">
                  {gadgets.map((item) => (
                    <div key={item._id} className="group">
                      <div className="w-full border border-gray-200 rounded mb-2 p-2">
                        <Link href={`/gadgets/${item?._id}`}>
                          <Image
                            src={item?.images[0]}
                            width={700}
                            height={700}
                            alt={item?.title}
                            priority={true}
                            className="w-[300px] lg:w-full h-[240px] lg:h-fit lg:max-w-[200px] min-h-[200px] max-h-[200px] mx-auto p-1"
                          />
                        </Link>
                      </div>
                      <p className="text-gray-500">{item?.category?.label}</p>
                      <Link href={`/gadgets/${item?._id}`}>
                        <h3 className="font-semibold text-[#17080c] hover:text-[#00B22C] duration-300 cursor-pointer">
                          {item?.title?.substring(0, 62)}
                        </h3>
                      </Link>
                      <p className="font-medium text-[#03b00b] mb-2">
                        $ {item?.price} / 1 Day
                      </p>
                      <Link
                        href={`/gadgets/${item?._id}`}
                        className="opacity-0 -translate-y-5 table group-hover:opacity-700 group-hover:translate-y-0 duration-500"
                      >
                        <Button buttonText={"Options"}></Button>
                      </Link>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
