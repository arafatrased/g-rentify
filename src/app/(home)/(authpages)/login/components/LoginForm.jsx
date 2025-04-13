"use client";
import React, { useState } from "react";
// import { RiLockPasswordLine } from "react-icons/ri";
// import { MdOutlineMail } from "react-icons/md";
// import Button from "@/app/components/Button";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (response.ok) {
        router.push("/");
        toast.success("Login successful");
      }
    } catch (err) {
      console.log(err);
      toast.error("Invalid email or password");
    }
    e.target.reset();
  };
  const handleGoogleLogin = async () => {
    const result = await signIn("google", {
      callbackUrl: "/",
    });
    if (result.error) {
      toast.error("Google login failed. Please try again.");
    }
  };

  return (
    <div className="w-10/12 mx-auto flex justify-center items-center bg-white-100 px-4 py-20 mb-3">
      <div className="w-full max-w-lg mx-auto p-6 bg-white  rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800  mb-6">
          User Login
        </h2>
        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email Field */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
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
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-700"
              required
            />
            <div
              className="absolute right-3 top-11 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>
          <div>
            <Link href={'/reset-password'}><li className="underline">Forgot Password?</li></Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-3 bg-green-500 text-white hover:bg-green-600 font-bold rounded-lg transition duration-300"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="px-3 text-gray-500 ">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Google Login Button */}
        <button
          onClick={handleGoogleLogin}
          className="w-full py-3 bg-gray-200 text-gray-600 font-bold rounded-lg hover:bg-gray-300 hover:text-gray-700 transition duration-300 flex gap-3 justify-center items-center"
        >
          <FcGoogle className="text-xl" />
          Continue with Google
        </button>

        {/* Register Link */}
        <p className="text-center text-gray-600 mt-6 ">
          Dont have an account?{" "}
          <Link href="/registrar" className="text-blue-600 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );

  // return (
  //     <form onSubmit={handleLogin} className="p-8 mb-4 w-full flex items-center flex-col gap-5 justify-center">

  //         {/* email input with icon */}
  //         <div className="w-full md:w-[80%] relative">
  //             <MdOutlineMail
  //                 className=" absolute top-3.5 left-3 text-[1.5rem] text-[#777777]" />
  //             <input
  //                 type="email"
  //                 name="email"
  //                 id="email"
  //                 placeholder="Email address"
  //                 className="peer border-border border rounded-md outline-none pl-10 pr-4 py-3 w-full focus:border-primary transition-colors duration-300"
  //             />
  //         </div>

  //         {/* password input with icon */}
  //         <div className="w-full md:w-[80%] relative">
  //             <RiLockPasswordLine
  //                 className=" absolute top-3.5 left-3 text-[1.5rem] text-[#777777]" />
  //             <input
  //                 type="password"
  //                 name="password"
  //                 id="password"
  //                 placeholder="Password"
  //                 className="peer border-border border rounded-md outline-none pl-10 pr-4 py-3 w-full focus:border-primary transition-colors duration-300"
  //             />
  //         </div>

  //         {/* submit button */}
  //         <Button buttonText={"Log In"} type="submit" className="w-full md:w-[80%]"></Button>

  //     </form>
  // );
};

export default LoginForm;
