'use client'


import React from 'react';
import BreadCrumbs from '../../components/BreadCrumbs';
import { useSession, signOut } from 'next-auth/react';
import toast from 'react-hot-toast';
import Link from 'next/link';

const ChangePasswordPage = () => {
    const session = useSession()
    const user = session?.data?.user;
    const email = user?.email;


    const handleChangePassOnClick = () => {

        fetch('/api/auth/request-reset', {
            method: 'POST',
            body: JSON.stringify({ email }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    toast.success('Email sent.')
                } else {
                    toast.error('Something went wrong. Please try again later.')
                }
            })
            .catch(err => console.error(err))
        toast.success('Email sent to your email address. Please check your inbox.')
        signOut({ callbackUrl: '/login' })
        // signOut({ callbackUrl: '/login' })


    }


    return (
        <div className='p-4 py-5'>
            {/* breadcrumb  */}
            <div className="breadcrumbs text-sm mb-6">
                <ul>
                    <li>
                        <Link href={"/dashboard"}>Dashboard</Link>
                    </li>
                    <li>
                        <Link href='/dashboard/settings'>
                            Settings
                        </Link>
                    </li>
                    <li>
                        <Link href='/dashboard/settings/change-password' className="text-[#03b00b]">
                            Change Password
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="page-container py-16 mx-auto">
                <div className='flex justify-center items-center flex-col mt-5 gap-6 p-10 bg-white rounded-lg shadow-md'>
                    <h1 className='text-2xl font-semibold'>Want to Change Password?</h1>
                    <p>{email}</p>
                    <button className='border-2 rounded-2xl py-2 px-6 bg-white cursor-pointer text-green-700 hover:text-red-800' onClick={handleChangePassOnClick}>Send email to change your current password</button>
                </div>
            </div>
        </div>
    );
};

export default ChangePasswordPage;