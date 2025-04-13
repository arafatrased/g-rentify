'use client'


import React from 'react';
import BreadCrumbs from '../../components/BreadCrumbs';
import { useSession, signOut } from 'next-auth/react';

const ChangePasswordPage = () => {
    const session = useSession()
    const user = session?.data?.user;
    const email = user?.email;
    console.log(email)

    const handleChangePassOnClick = () => {

        fetch('/api/auth/request-reset', {
            method: 'POST',
            body: JSON.stringify({ email }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.error(err))
        signOut({ callbackUrl: '/login' })
    // signOut({ callbackUrl: '/login' })

        
    }


    return (
        <div className='p-4 py-5'>
            {/* breadcrumb */}
            <BreadCrumbs />
            <div className="page-container py-16">
                {/* <div className='w-full md:w-10/12 lg:w-8/12 mx-auto bg-white p-10 rounded-xl'>
                    <h1 className='text-2xl md:text-2xl lg:text-3xl font-bold text-center'>Change your password?</h1>

                    <form className='w-10/12 mx-auto'>
                        <fieldset className="fieldset mt-8 mb-3">
                            <label htmlFor="">Old Password</label>
                            <input
                                type="text"
                                className="input w-full focus:outline-none focus:border-[#03b00b] bg-transparent rounded-[2px]"
                                placeholder="Enter Old Password *"
                            />
                        </fieldset>

                        <fieldset className="fieldset mb-3">
                            <label htmlFor="">New Password</label>
                            <input
                                type="text"
                                className="input w-full focus:outline-none focus:border-[#03b00b] bg-transparent rounded-[2px]"
                                placeholder="Enter New Password *"
                            />
                        </fieldset>

                        <fieldset className="fieldset mb-3">
                            <label htmlFor="">Re-enter New Password</label>
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
                </div> */}
                <div className='flex justify-center items-center flex-col mt-5 gap-6'>  
                    <p>{email}</p> 
                    <button className='border-2 rounded-2xl py-2 px-6 bg-white cursor-pointer text-green-700' onClick={handleChangePassOnClick}>Send email to change password</button>
                </div>

            </div>
        </div>
    );
};

export default ChangePasswordPage;