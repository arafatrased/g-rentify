"use client";
import { useSession } from "next-auth/react";
import React, { useState } from "react";

const UpdateProfile = () => {
  const { data: session } = useSession();
  const user = session?.user;

  const [name, setName] = useState(user?.name || "");
  const [image, setImage] = useState(user?.image || "");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name, image);

    try {
      const res = await fetch("/api/user/update", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, image }),
      });

      if (res.ok) {
        alert("Profile updated!");
        window.location.href = "/profile/view";
      } else {
        alert("Failed to update profile.");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-xl mx-auto bg-white shadow-md rounded-xl p-8">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Update Profile
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium">Name</label>
            <input
              type="text"
              // input w-full focus:outline-none focus:border-[#03b00b] bg-transparent rounded-[2px]
              className="input w-full px-4 py-2 focus:outline-none focus:border-[#03b00b] bg-transparent rounded-[2px] border"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">
              Profile Image URL
            </label>
            <input
              type="text"
              className="input w-full px-4 py-2 focus:outline-none focus:border-[#03b00b] bg-transparent rounded-[2px] border"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#03b00b] hover:bg-[#03b00cec] text-white py-2 rounded-md transition"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
