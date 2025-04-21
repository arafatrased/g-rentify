"use client";
import { useState } from "react";

export default function Dashboard() {
  const [value] = useState(75781);

  const stats = [
    {
      title: "Total Earnings",
      amount: "34,123.20 USD",
      icon: "💼",
      change: "+2.8% Increase",
      changeColor: "text-green-500",
    },
    {
      title: "Total Orders",
      amount: "63,234 NOU",
      icon: "📦",
      change: "-7.8% Loss",
      changeColor: "text-red-500",
    },
    {
      title: "Today Visitor",
      amount: "425,34 NOU",
      icon: "👥",
      change: "+4.6% Growth",
      changeColor: "text-green-500",
    },
    {
      title: "Total Expense",
      amount: "26,482.46 USD",
      icon: "📤",
      change: "+23% Increase",
      changeColor: "text-green-500",
    },
  ];

  return (
    <div className="p-6 space-y-6 bg-gray-100 min-h-screen">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-4 rounded-xl shadow-sm flex flex-col gap-2">
            <div className="text-3xl">{stat.icon}</div>
            <h4 className="text-sm text-gray-500">{stat.title}</h4>
            <div className="text-xl font-bold">{stat.amount}</div>
            <div className={`text-sm ${stat.changeColor}`}>{stat.change}</div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Bar Chart Placeholder */}
        <div className="bg-white p-4 rounded-xl shadow-sm col-span-1 md:col-span-1">
          <h4 className="text-lg font-semibold mb-2">Audiences Metrics</h4>
          <div className="h-48 bg-gray-100 flex items-center justify-center rounded">
            <span className="text-gray-400">[Bar Chart]</span>
          </div>
        </div>

        {/* Doughnut Chart */}
        <div className="bg-white p-4 rounded-xl shadow-sm">
          <div className="flex justify-between items-center mb-2">
            <h4 className="text-lg font-semibold">Total Value</h4>
            <div className="space-x-2 text-sm">
              <button className="px-2 py-1 bg-gray-200 rounded">ALL</button>
              <button className="px-2 py-1 bg-gray-200 rounded">1M</button>
              <button className="px-2 py-1 bg-gray-200 rounded">6M</button>
              <button className="px-2 py-1 bg-blue-600 text-white rounded">1Y</button>
            </div>
          </div>
          <div className="h-48 bg-gray-100 flex flex-col items-center justify-center rounded">
            <span className="text-gray-400 mb-1">[Donut Chart]</span>
            <div className="text-2xl font-bold">${value}</div>
          </div>
        </div>

        {/* Live Users Map */}
        <div className="bg-white p-4 rounded-xl shadow-sm">
          <div className="flex justify-between items-center mb-2">
            <h4 className="text-lg font-semibold">Live Users By Country</h4>
            <button className="text-sm px-3 py-1 bg-blue-600 text-white rounded">Export Report</button>
          </div>
          <div className="h-48 bg-gray-100 flex items-center justify-center rounded">
            <span className="text-gray-400">[World Map]</span>
          </div>
        </div>
      </div>
    </div>
  );
}
