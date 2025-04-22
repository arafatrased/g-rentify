import React from "react";

export default function MyAccount() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <div className="w-full lg:w-1/4">
          <div className="border border-gray-200 rounded shadow-sm">
            <div className="bg-[#03b00b] text-white px-4 py-2 font-semibold rounded-t">
              MY ACCOUNT
            </div>
            <div className="divide-y">
              <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
                Account Dashboard
              </button>
              <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
                My Orders <span className="ml-2">▶</span>
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full lg:w-3/4 space-y-8">
          {/* Account Info */}
          <div className="border border-gray-200 rounded shadow-sm">
            <div className="bg-[#03b00b] text-white px-4 py-2 font-semibold rounded">
              Account Information
            </div>
            <div className="p-4 space-y-2">
              <p className="font-medium">Sanjit Kumar Ghosh</p>
              <p>sanjitkumarghosh0@gmail.com</p>
              <button className="mt-2 bg-[#03b00b] text-white px-4 py-1 rounded hover:bg-sky-700">
                Change Password
              </button>
            </div>
          </div>

          {/* Billing Info */}
          <div className="border border-gray-200 rounded shadow-sm">
            <div className="bg-[#03b00b] text-white px-4 py-2 font-semibold rounded">
              Default Billing Address
            </div>
            <div className="p-4 space-y-2">
              <p className="font-medium">Sanjit Kumar Ghosh</p>
              <p>BD Dhamrai</p>
              <p>Dhaka, NY, 07008</p>
              <p>0140090252</p>
              <button className="mt-2 bg-[#03b00b] text-white px-4 py-1 rounded hover:bg-sky-700">
                Edit Bill Address
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
