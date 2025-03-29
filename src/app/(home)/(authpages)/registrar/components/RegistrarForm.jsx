"use client";
// import { RiAccountCircleLine, RiLockPasswordLine } from "react-icons/ri";
// import { MdOutlineMail } from "react-icons/md";
// import Button from '@/app/components/Button';

import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { registrarUser } from "../../../../actions/auth/registrarUser";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Link from "next/link";

const RegistrarForm = ({ regiTitle, role }) => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  // const [photoUrl, setPhotoUrl] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    const payload = {
      name,
      email,
      password,
      role: role,
    };
    console.log(payload);
    const registrarSingleUser = await registrarUser(payload);
    if (registrarSingleUser.insertedId) {
      toast.success("User registered successfully");
      router.push("/login");
    } else {
      toast.error("User registration failed");
    }
    e.target.reset();
  };

  const handleGoogleRegister = async () => {};

  return (
    <div className="w-10/12 mx-auto flex justify-center items-center bg-white-100 px-4 py-20 mb-3">
      <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center  text-gray-800 mb-6">
          {regiTitle}
        </h2>
        <form onSubmit={handleRegister} className="space-y-4">
          {/* Name Field */}
          <div>
            <label className="block  text-gray-700 font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full  px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-700"
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block  text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full  px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-700"
              required
            />
          </div>

          {/* Password Field */}
          <div className="relative">
            <label className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setPasswordError("");
              }}
              placeholder="Enter your password"
              className="w-full  px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-700"
              required
            />
            <div
              className="absolute right-3 top-11 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
            {passwordError && (
              <p className="text-red-600 text-sm mt-1">{passwordError}</p>
            )}
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full py-3 bg-green-500 text-white hover:bg-green-600 font-bold rounded-lg transition duration-300"
          >
            Register
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="px-3 text-gray-500">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Google register Button */}
        <button
          onClick={handleGoogleRegister}
          className="w-full py-3 bg-gray-200 text-gray-600 font-bold rounded-lg hover:bg-gray-300 hover:text-gray-700 transition duration-300 flex gap-3 justify-center items-center"
        >
          <FcGoogle className="text-xl" /> Continue with Google
        </button>

        {/* Login Link */}
        <p className="text-center text-gray-600 mt-6">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegistrarForm;
