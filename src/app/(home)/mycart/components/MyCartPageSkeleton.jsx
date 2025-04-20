import React from "react";

export default function MyCartPageSkeleton() {
  return (
    <>
      <div className="col-span-12 lg:col-span-8 xl:col-span-9 flex flex-col gap-5">
        <div className="skeleton rounded w-full h-8"></div>
        {[...Array(3)].map((_, index) => (
          <div key={index} className="skeleton rounded w-full h-16"></div>
        ))}
        <div className="skeleton rounded w-40 h-8 mt-5"></div>
        <div className="skeleton rounded w-60 h-2"></div>
        <div className="flex items-center gap-5">
          <div className="skeleton rounded w-full h-8"></div>
          <div className="skeleton rounded w-40 h-8"></div>
        </div>
      </div>

      <div className="col-span-12 lg:col-span-4 xl:col-span-3">
        <div className="skeleton rounded w-full h-96"></div>
      </div>
    </>
  );
}
