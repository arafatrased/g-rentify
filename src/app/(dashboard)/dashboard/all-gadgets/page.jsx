"use client";

import { useEffect, useState } from "react";
import { PiPencil } from "react-icons/pi";
import { GoTrash } from "react-icons/go";
import Image from "next/image";
import { format } from "date-fns";
import Swal from "sweetalert2";
import Link from "next/link";

export default function AllGadgets() {
  const [gadgets, setGadgets] = useState([]);
  const [categoryParams, setCategoryParams] = useState("");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(3); // Items per page

  // make it reusable
  const fetchGadgets = async (page = currentPage) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_LINK}/dashboard-gadgets?category=${categoryParams}&search=${search}&page=${page}&limit=${limit}`
      );
      const data = await res.json();
      setGadgets(data.gadgets);
      setTotalPages(Math.ceil(data.total / limit));
      setCurrentPage(page);
    } catch (error) {
      console.error("Failed to fetch gadgets:", error);
    }
  };

  // load data once on mount
  useEffect(() => {
    fetchGadgets(1); // Reset to page 1 when filters change
  }, [categoryParams, search, limit]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      fetchGadgets(newPage);
    }
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You can't recover this item!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      customClass: {
        confirmButton:
          "bg-[#03b00b] text-white px-4 py-2 rounded mr-1 cursor-pointer",
        cancelButton:
          "bg-gray-300 text-slate-700 px-4 py-2 rounded ml-1 cursor-pointer",
        icon: "w-10 h-10", // Tailwind classes for width & height (e.g. 80px)
      },
      buttonsStyling: false, // Important: disable default styling
    }).then(async (result) => {
      try {
        if (result.isConfirmed) {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_SERVER_LINK}/dashboard-gadgets/${id}`,
            {
              method: "DELETE",
            }
          );
          const data = await res.json();

          if (data.deletedCount === 1) {
            await fetchGadgets(currentPage);
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
              showConfirmButton: false,
              timer: 1000,
            });
          }
        }
      } catch (error) {
        console.log("Delete failed!", error);
      }
    });
  };

  return (
    <div className="p-2 md:p-6">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-medium">Products</h3>
        <p className="text-[#03b00b] border rounded border-[#03b00b] py-1.5 px-4 text-sm">
          Today : {format(new Date(), "Pp")}
        </p>
      </div>

      {/* Breadcrumbs */}
      <div className="breadcrumbs text-sm mb-5">
        <ul>
          <li>
            <Link className="text-gray-500" href={"/dashboard"}>
              Dashboard
            </Link>
          </li>
          <li>
            <span className="text-[#03b00b] !no-underline">Products</span>
          </li>
        </ul>
      </div>

      {/* filtering section */}
      <div className="xl:flex justify-between items-center mb-5">
        <div className="md:flex items-center gap-4">
          <fieldset className="fieldset w-full sm:w-[220px]">
            <select
              name="category"
              value={categoryParams}
              className="select focus:border-[#03b00b] rounded focus:outline-none transition-all duration-100 w-full"
              onChange={(e) => setCategoryParams(e.target.value)}
            >
              <option value={""}>All Category</option>
              <option value={"camera"}>Camera</option>
              <option value={"drone"}>Drone</option>
            </select>
          </fieldset>

          <fieldset className="fieldset w-full sm:w-[220px] mb-1 sm:mb-0">
            <select
              name="limit"
              value={limit}
              className="select focus:border-[#03b00b] rounded focus:outline-none transition-all duration-100 w-full"
              onChange={(e) => setLimit(Number(e.target.value))}
            >
              <option value={3}>3 / page</option>
              <option value={10}>10 / page</option>
              <option value={20}>20 / page</option>
              <option value={50}>50 / page</option>
            </select>
          </fieldset>
        </div>

        {/* Search field */}
        <div className="sm:flex items-center gap-5">
          <div className="relative mb-2 sm:mb-0">
            {/* Input Field with Search Icon */}
            <input
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              required
              placeholder="Search"
              className="w-full sm:w-[220px] pl-10 pr-4 py-2 bg-white border border-gray-300 rounded focus:outline-none focus:border-[#03b00b] transition-all duration-100"
            />

            {/* Small Search Icon */}
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </svg>
          </div>
          <div>
            <Link href={"/dashboard/add-gadget"}>
              <button className="bg-[#00B22C] hover:bg-[#00b22cda] text-white px-5 py-2.5 text-sm rounded transition-all duration-300 cursor-pointer w-fit uppercase">
                Add Products
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* product table */}
      <div className="overflow-x-auto w-full">
        <table className="table w-full bg-[#F9FAFB] rounded-none">
          {/* head */}
          <thead>
            <tr className="uppercase">
              <th>Product & Title</th>
              <th>Category</th>
              <th>Stock status</th>
              <th>Price</th>
              <th>Date</th>
              <th>Owner</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="bg-white block max-h-[400px] overflow-y-auto w-full">
            {gadgets.map((item) => (
              <tr
                key={item?._id}
                className="border-b border-dashed last:border-none border-slate-200"
              >
                <td className="flex items-center gap-2 w-[300px] md:w-auto">
                  <Image
                    width={100}
                    height={100}
                    src={item?.images[0]}
                    alt={item?.title}
                    quality={10}
                    className="w-10 h-10"
                  />
                  {item?.title}
                </td>
                <td className="capitalize text-gray-500">
                  {item?.category?.value}
                </td>
                <td>
                  <span className="text-[#03b00b] bg-green-50 rounded p-1">
                    In stock
                  </span>
                </td>
                <td className="font-bold">${item?.price}</td>
                <td className="text-gray-500 min-w-36 md:w-auto">
                  {item?.date ? format(new Date(item.date), "PP") : "N/A"}
                </td>
                <td className="text-gray-500 min-w-44 md:w-auto">
                  {item?.gadgetAddedPerson?.itemAddedUser || "Anonymous"}
                </td>
                <td>
                  <div className="flex gap-2 items-center">
                    <span className="text-gray-500 text-lg cursor-pointer">
                      <PiPencil />
                    </span>
                    <span className="text-red-500 text-lg cursor-pointer">
                      <GoTrash onClick={() => handleDelete(item?._id)} />
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


      

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-6">
        <p className="text-gray-500 text-sm">
          Showing page {currentPage} of {totalPages || 1}
        </p>

        <div className="flex gap-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-3 py-1 rounded border ${
              currentPage === 1
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "bg-white text-gray-700 hover:bg-gray-50 cursor-pointer"
            }`}
          >
            Prev
          </button>

          {/* Dynamic Page Numbers */}
          {[...Array(totalPages)].map((_, index) => {
            const pageNumber = index + 1;
            // Show current page and 1 page before and after (if they exist)
            if (
              pageNumber === 1 ||
              pageNumber === totalPages ||
              (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
            ) {
              return (
                <button
                  key={pageNumber}
                  onClick={() => handlePageChange(pageNumber)}
                  className={`px-3 py-1 rounded border ${
                    currentPage === pageNumber
                      ? "bg-[#03b00b] text-white"
                      : "bg-white text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {pageNumber}
                </button>
              );
            }
            // Show ellipsis for skipped pages, but don't repeat them
            if (
              (pageNumber === currentPage - 2 && pageNumber > 2) ||
              (pageNumber === currentPage + 2 && pageNumber < totalPages - 1)
            ) {
              return (
                <span key={pageNumber} className="px-2 py-1">
                  ...
                </span>
              );
            }
            return null;
          })}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages || totalPages === 0}
            className={`px-3 py-1 rounded border ${
              currentPage === totalPages || totalPages === 0
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "bg-white text-gray-700 hover:bg-gray-50 cursor-pointer"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
