"use client";
import React from "react";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineMail } from "react-icons/md";
import Button from "@/app/components/Button";
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const LoginForm = () => {
    const router = useRouter();
    const handleLogin = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        try {
            const response = await signIn('credentials', {
                email,
                password,
                callbackUrl: "/",
                redirect: false
            });
            if (response.ok) {
                router.push("/");
                toast.success("Login successful")
            }
        }
        catch (err) {
            console.log(err)
            toast.error("Invalid email or password")
        };
        e.target.reset();

    }
    return (
        <form onSubmit={handleLogin} className="p-8 mb-4 w-full flex items-center flex-col gap-5 justify-center">

            {/* email input with icon */}
            <div className="w-full md:w-[80%] relative">
                <MdOutlineMail
                    className=" absolute top-3.5 left-3 text-[1.5rem] text-[#777777]" />
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email address"
                    className="peer border-border border rounded-md outline-none pl-10 pr-4 py-3 w-full focus:border-primary transition-colors duration-300"
                />
            </div>

            {/* password input with icon */}
            <div className="w-full md:w-[80%] relative">
                <RiLockPasswordLine
                    className=" absolute top-3.5 left-3 text-[1.5rem] text-[#777777]" />
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    className="peer border-border border rounded-md outline-none pl-10 pr-4 py-3 w-full focus:border-primary transition-colors duration-300"
                />
            </div>

            {/* submit button */}
            <Button buttonText={"Log In"} type="submit" className="w-full md:w-[80%]"></Button>


        </form>
    );
};

export default LoginForm;