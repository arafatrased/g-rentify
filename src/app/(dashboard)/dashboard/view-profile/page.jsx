"use client"
import { useSession } from 'next-auth/react';
import React from 'react';

const ViewProfile = () => {
    const session = useSession();
    const { data: userSession } = session;
    return (
        <div className='bg-white p-5 min-h-screen'>
            <h1>View Profile</h1>
            <div className="flex flex-col items-center justify-center mt-10">
                <img
                    src={userSession?.user?.image}
                    alt="Profile Picture"
                    className="w-24 h-24 rounded-full mb-4"
                />
                <h2 className="text-2xl font-semibold">{userSession?.user?.name}</h2>
                <p className="text-gray-600">{userSession?.user?.email}</p>
                <p className="text-gray-600">{userSession?.user?.role}</p>
            </div>
        </div>
    );
};

export default ViewProfile;