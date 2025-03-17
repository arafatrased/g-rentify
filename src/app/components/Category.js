"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

const Category = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/json/category.json");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setCategories(data.categories);
      } catch (error) {
        console.error("Error fetching category data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="py-14">
      <div className="container mx-auto px-3">
        {/* Section Title */}
        {/* section title */}
        <h1 className="text-3xl font-semibold">Popular Products</h1>
        <div className="w-full h-0.5 bg-gray-200 my-3"></div>
        <div className="max-w-64 h-0.5 bg-[#03b00b] -mt-[15px]"></div>
        {/* main content here */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 my-8">
          {categories.map((category, index) => (
            <div className="flex flex-col items-center text-center" key={index}>
              <div className="w-28 h-28 flex items-center justify-center bg-white rounded-full shadow-lg border border-gray-200 p-2">
                <Image
                  src={category.image}
                  alt={category.name}
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <h2 className="text-lg font-semibold mt-3">{category.name}</h2>
              <p className="text-gray-500 text-sm">({category.items} items)</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
