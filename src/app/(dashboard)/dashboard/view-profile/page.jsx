"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { FiCamera } from "react-icons/fi";
import React, { useEffect, useState } from "react";

const ViewProfile = () => {
  const { data: session, status } = useSession();
  const user = session?.user;
  const [currentCountry, setCurrentCountry] = useState("");
  const [currentCity, setCurrentCity] = useState("");
  const [dbUser, setDbUser] = useState(null);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_LINK}/api/location`
        );
        const data = await res.json();
        setCurrentCountry(data.country_name);
        setCurrentCity(data.city);
      } catch (error) {
        console.error("Location fetch failed:", error);
      }
    };

    fetchLocation();
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(
          `/api/auth/profile-update?email=${user?.email}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              // Authorization: `Bearer ${session.accessToken}`,
            },
          }
        );
        const data = await res.json();
        setDbUser(data);
      } catch (error) {
        console.error("User fetch failed:", error);
      }
    };
    fetchUser();
  }, [user?.email]);

  if (status === "loading")
    return <p className="text-center mt-10">Loading...</p>;
  if (!user)
    return (
      <p className="text-center mt-10 text-red-500">You are not logged in.</p>
    );

  return (
    <div className="min-h-screen bg-[#f1f4ff] p-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl">Profile</h1>
        <div className="flex justify-between items-center py-4">
          {/* Breadcrumb */}
          <div className="text-sm text-gray-600 mb-2">
            <span className="font-semibold"></span> / dashboard /{" "}
            <span className="text-[#03b00b] font-medium">view-profile</span>
          </div>

          {/* Header Right Date */}
          <div className="text-right border rounded-sm py-1 px-3 text-sm text-[#03b00b] font-medium">
            Today :{" "}
            {new Date().toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          </div>
        </div>
        {/* Banner */}
        <div className="rounded-xl  shadow-lg">
          <div className="relative">
            {/* Banner Image */}
            <img
              src="https://img.freepik.com/free-photo/3d-rendering-user-interface-design_23-2150709832.jpg"
              alt="Banner"
              className="w-full h-50 object-cover rounded-sm"
            />
            {/* Profile Card */}
            <div className="absolute bottom-[-40px] left-6 bg-white rounded-xl p-4 shadow-lg flex items-center w-[calc(100%-3em)] justify-between">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img
                    src={
                      dbUser?.photoURL ||
                      "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                    }
                    alt="Profile"
                    className="w-20 h-20 siz rounded-full border-4 border-white object-cover object-top ring-2 ring-[#03b00b]"
                  />
                  <div className="absolute bottom-1 right-1 bg-green-500 p-1 rounded-full text-white text-xs">
                    <FiCamera />
                  </div>
                </div>
                <div>
                  <h2 className="text-xl font-semibold">{dbUser?.name}</h2>
                  <div className="flex items-center gap-2">
                    <p className="text-sm mt-1 bg-blue-100 text-[#00B22C] px-2 py-1 rounded-xl capitalize">
                      {user.role || "user"}
                    </p>
                    <p className="text-sm text-gray-500">
                      {currentCity || "Dhaka"}
                    </p>
                    <p className="text-sm text-gray-500">
                      {currentCountry || "USA"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Socials & Follow */}
              <div className="flex items-center gap-4">
                <a href="#" className="text-blue-600 text-xl">
                  <FaFacebookF />
                </a>
                <a href="#" className="text-pink-500 text-xl">
                  <FaInstagram />
                </a>
                <a href="#" className="text-sky-500 text-xl">
                  <FaTwitter />
                </a>
                <button className="bg-[#6C63FF] text-white px-4 py-2 rounded-md font-medium hover:bg-indigo-700 transition">
                  Follow
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Edit Profile */}
        <div className="mt-24 text-center">
          <Link href="/dashboard/update">
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">
              Edit Profile
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;
