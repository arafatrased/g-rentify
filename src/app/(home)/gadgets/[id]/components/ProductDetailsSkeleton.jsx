import React from "react";

export default function ProductDetailsSkeleton() {
  return (
    <div className="grid grid-cols-12 gap-8">
      {/* left item  */}
      <div className="col-span-12 xl:col-span-4 order-2 xl:order-1 flex flex-col gap-1 overflow-hidden transition-all duration-500">
        <div className="skeleton rounded w-full h-6"></div>
        <div className="skeleton rounded w-full h-[200px]"></div>
        <div className="skeleton rounded w-24 h-5 mb-10"></div>

        <div className="skeleton rounded w-full h-10 mb-1"></div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-1">
          {Array.from({ length: 16 }).map((_, idx) => (
            <div key={idx} className="skeleton rounded w-full h-5"></div>
          ))}
        </div>
      </div>

      {/* center item  */}
      <div className="col-span-12 xl:col-span-5 order-1 xl:order-2 rounded">
        <div className="skeleton rounded w-full h-[400px] mb-5"></div>
        <div className="skeleton rounded w-full h-12 mb-2"></div>
        <div className="ml-5 flex flex-col gap-2">
          {Array.from({ length: 5 }).map((_, idx) => (
            <div key={idx} className="skeleton rounded w-1/4 h-5"></div>
          ))}
        </div>
      </div>

      {/* right item  */}
      <div className="col-span-12 xl:col-span-3 order-3">
        <div className="skeleton rounded w-full h-[300px] mb-5"></div>
        <div className="skeleton rounded w-full h-12"></div>
      </div>
    </div>
  );
}
