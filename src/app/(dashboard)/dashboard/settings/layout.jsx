'use client'
import Link from 'next/link';
import React from 'react';

const SettingLayout = ({children}) => {
    return (
        <div className='min-h-screen'>
            <nav className='flex justify-between items-center px-4 py-1 bg-gray-200'>
                <ul className='flex space-x-4'>
                    <Link href={'/dashboard/settings'}><li className='cursor-pointer'><span className='hover:text-green-700'>Update Profile</span></li></Link>
                    <Link href={'/dashboard/settings/change-role'}><li className='cursor-pointer'><span className='hover:text-green-700'>Become Lender</span></li></Link>   
                    <Link href={'/dashboard/settings/change-password'}><li className='cursor-pointer'><span className='hover:text-green-700'>Change Password</span></li></Link>
                </ul>
                <h1 className='text-xl font-bold'>Settings</h1>
            </nav>
            {/* Add your settings form or content here */}
            {children}
            
        </div>
    );
};

export default SettingLayout;