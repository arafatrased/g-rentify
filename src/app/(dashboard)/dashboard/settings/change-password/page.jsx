'use client'
import Button from '@/app/(home)/components/Button';
import Link from 'next/link';
import React from 'react';
import BreadCrumbs from '../../components/BreadCrumbs';

const ChangePasswordPage = () => {
    return (
        <div className='p-4 py-5'>
            {/* breadcrumb */}
            <BreadCrumbs />
            <div className="page-container py-16">
                <h1 className='text-3xl md:text-3xl lg:text-4xl font-bold text-center'>Want to change your password?</h1>

                <form className='w-10/12 md:w-8/12 lg:w-4/12 mx-auto'>
                    <fieldset className="fieldset mt-8 mb-3">
                        <input
                            type="text"
                            className="input w-full focus:outline-none focus:border-[#03b00b] bg-transparent rounded-[2px]"
                            placeholder="Enter Old Password *"
                        />
                    </fieldset>

                    <fieldset className="fieldset mb-3">
                        <input
                            type="text"
                            className="input w-full focus:outline-none focus:border-[#03b00b] bg-transparent rounded-[2px]"
                            placeholder="Enter New Password *"
                        />
                    </fieldset>

                    <fieldset className="fieldset mb-3">
                        <input
                            type="text"
                            className="input w-full focus:outline-none focus:border-[#03b00b] bg-transparent rounded-[2px]"
                            placeholder="Confirm Password *"
                        />
                    </fieldset>

                    <Link href={'/reset-password'} className='mb-3 underline text-green-600'>Forgot Password?</Link>


                    <fieldset className="fieldset mb-3">
                        <input type="submit" value={'Change Password'} className='bg-[#00B22C] text-white px-5 py-2 text-sm rounded active:scale-[0.95] transition-all duration-300 cursor-pointer w-full uppercase' />
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default ChangePasswordPage;