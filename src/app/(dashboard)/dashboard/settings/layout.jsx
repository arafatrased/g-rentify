'use client'
import Link from 'next/link';
import { usePathname } from "next/navigation";
import React from 'react';

const SettingLayout = ({children}) => {
    const pathname = usePathname();
    const isActive = (href) => pathname === href;
    const activeClass = "bg-green-500 text-white py-2 px-4 rounded-xl";
    const inactiveClass = "border-transparent hover:bg-[#03b00b10]";

    return (
        <div className='min-h-screen'>
            <nav className='flex justify-between items-center px-4 py-1 bg-gray-200'>
                <ul className='flex space-x-4'>
                    <Link href={'/dashboard/settings'}><li className='cursor-pointer'><span className={`${
            isActive("/dashboard/settings") ? activeClass : inactiveClass
          }`}>Update Profile</span></li></Link>  
                    <Link href={'/dashboard/settings/change-password'}><li className='cursor-pointer'><span className={`${
            isActive("/dashboard/settings/change-password") ? activeClass : inactiveClass
          }`}>Change Password</span></li></Link>
                </ul>
                <h1 className='text-xl font-bold'>Settings</h1>
            </nav>
            {/* Add your settings form or content here */}
            {children}
            
        </div>
    );
};

export default SettingLayout;