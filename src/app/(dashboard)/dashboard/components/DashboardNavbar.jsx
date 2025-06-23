"use client";

import { useSession } from "next-auth/react";

export default function DashboardNavbar() {
  const session = useSession();
  const { data: userSession, status } = session;
  return (
    <div className="flex justify-end items-center p-3 backdrop-blur-sm bg-white/40 bg border-b border-gray-300 sticky top-0 z-40 ">
      <div className="flex flex-col justify-end items-end mr-4">
        <h1 className="text-sm">Welcome, {userSession?.user?.name} </h1>
        <h1>
          <span className="text-green-600 uppercase">
            {userSession?.user?.role}
          </span>{" "}
          Dashboard
        </h1>
      </div>
      <div>
        <div className="avatar">
          <div className="w-10 h-10 rounded-full">
            <img src={userSession?.user?.image} />
          </div>
        </div>
      </div>
    </div>
  );
}
