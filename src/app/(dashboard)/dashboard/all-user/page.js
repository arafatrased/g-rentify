/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { FaEdit } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";
import UserStatusCard from "./../components/UseStatsCard";
import UserModal from "../components/UserModal";
import Image from "next/image";

const AllUser = () => {
  const [statusData, setStatusData] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [filterRole, setFilterRole] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalUsers, setTotalUsers] = useState(0);
  const [limit, setLimit] = useState(12); // users per page
  const totalPages = Math.ceil(totalUsers / limit);

  const fetchStatusData = useCallback(async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_SERVER_LINK}/user-status`
      );
      setStatusData(res.data);
    } catch (err) {
      console.error("Error fetching status data:", err);
    }
  }, []);

  const fetchUsers = useCallback(
    async (page = 1, limitVal = 12) => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_SERVER_LINK}/alluser`,
          {
            params: {
              page,
              limit: limitVal,
              role: filterRole || undefined,
              status: filterStatus || undefined,
              search: search || undefined,
            },
          }
        );
        setAllUsers(res.data.users);
        setTotalUsers(res.data.totalUsers);
      } catch (err) {
        console.error("Error fetching users:", err);
      }
    },
    [filterRole, filterStatus, search]
  );

  useEffect(() => {
    fetchStatusData(); // Fetch the status counts
    if (limit) {
      fetchUsers(currentPage, limit);
    }
  }, [fetchStatusData, fetchUsers, currentPage, limit]);

  const openModal = (userId) => {
    document.getElementById("my_modal_1")?.showModal();
    setSelectedUserId(userId);
  };

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div id="all-user" className="p-5">
      <UserModal
        userId={selectedUserId}
        openModal={openModal}
        allUsers={allUsers}
      />

      {/* Breadcrumb */}
      <div className="mb-5">
        <div className="breadcrumbs text-sm mb-6">
          <ul>
            <li>
              <Link href={"/dashboard"}>Dashboard</Link>
            </li>
            <li>
              <Link className="text-[#03b00b]" href={"/dashboard/all-user"}>
                All User
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Status Cards */}
      <div className="grid grid-cols-12 items-center gap-5 mb-6">
        {statusData.map((status, index) => (
          <div key={index} className="col-span-2">
            <UserStatusCard
              number={status.number}
              title={status.title}
              bgColor={status.bgColor}
            />
          </div>
        ))}
      </div>

      <div className="bg-white shadow-md p-5 rounded-md">
        {/* Filters (left static, implement if needed) */}
        <div className="grid grid-cols-12 gap-5 mb-6">
          <div className="col-span-3">
            <fieldset className="fieldset w-full">
              <legend className="fieldset-legend">Show By</legend>
              <select
                className="select w-full border"
                onChange={(e) => setLimit(parseInt(e.target.value))}
              >
                <option value={12}>12 Row</option>
                <option value={24}>24 Row</option>
                <option value={36}>36 Row</option>
              </select>
            </fieldset>
          </div>
          <div className="col-span-3">
            <fieldset className="fieldset w-full">
              <legend className="fieldset-legend">Role By</legend>
              <select
                className="select w-full border"
                value={filterRole}
                onChange={(e) => setFilterRole(e.target.value)}
              >
                <option value="">All</option>
                <option value="admin">Admin</option>
                <option value="borrower">Borrower</option>
                <option value="lender">Lender</option>
              </select>
            </fieldset>
          </div>
          <div className="col-span-3">
            <fieldset className="fieldset w-full">
              <legend className="fieldset-legend">Status By</legend>
              <select
                className="select w-full border"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                <option value="">All</option>
                <option value="pending">Pending</option>
                <option value="approved">Approved</option>
                <option value="blocked">Blocked</option>
              </select>
            </fieldset>
          </div>
          <div className="col-span-3">
            <fieldset className="fieldset w-full">
              <legend className="fieldset-legend">Search By</legend>
              <input
                className="input border w-full"
                type="search"
                placeholder="Name / Email / Number"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </fieldset>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table border border-[#e3e3e3]">
            <thead>
              <tr className="border-b border-[#e3e3e3]">
                <th>Num</th>
                <th>Name</th>
                <th>Role</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Status</th>
                <th>Created</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {allUsers.map((user, index) => (
                <tr key={user._id} className="border-b border-[#e3e3e3]">
                  <th>#{(currentPage - 1) * limit + index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={user?.photoURL || "/default-user.png"}
                            alt={user?.name}
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{user?.name}</div>
                        <div className="text-sm opacity-50">
                          {user?.address}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{user?.role}</td>
                  <td>{user?.email}</td>
                  <td>{user?.phone}</td>
                  <td>{user?.status}</td>
                  <td>{user?.created}</td>
                  <td className="flex gap-4">
                    <span
                      onClick={() => openModal(user?._id)}
                      className="text-lg text-[#2AA75F] cursor-pointer"
                    >
                      <FaEdit />
                    </span>
                    <span className="text-lg text-[#E32A46] cursor-pointer">
                      <FaTrashCan />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-6 px-2">
          <p>
            Showing {limit} of {totalUsers} results
          </p>
          <div className="join">
            <button
              className="join-item btn"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Prev
            </button>
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                className={`join-item btn ${
                  currentPage === i + 1 ? "btn-active" : ""
                }`}
                onClick={() => handlePageChange(i + 1)}
              >
                {i + 1}
              </button>
            ))}
            <button
              className="join-item btn"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUser;
