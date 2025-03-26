"use client";
import { useState } from "react";
import Image from "next/image";

export default function AddProduct() {
  const [product, setProduct] = useState({
    title: "",
    category: "",
    description: "",
    price: "",
    productDate: "",
    gender: "",
    sizes: [],
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setProduct({ ...product, image: file });
  };

  const handleSizeChange = (e) => {
    setProduct({ ...product, sizes: e.target.value.split(",") });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product submitted:", product);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Add Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <label className="block">Upload Image</label>
              <input
                type="file"
                onChange={handleImageUpload}
                className="w-full p-2 border rounded"
              />
              {product.image && (
                <Image
                  src={URL.createObjectURL(product.image)}
                  alt="Preview"
                  width={200}
                  height={200}
                />
              )}
            </div>
            <div className="space-y-4">
              <input
                type="text"
                name="title"
                placeholder="Title"
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
              <select
                name="category"
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              >
                <option value="">Select Category</option>
                <option value="Electronics">Electronics</option>
                <option value="Clothing">Clothing</option>
              </select>
              <textarea
                name="description"
                placeholder="Description"
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              ></textarea>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="date"
                  name="productDate"
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                />
                <input
                  type="number"
                  name="price"
                  placeholder="Price"
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <select
                name="gender"
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              >
                <option value="">-- Gender --</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              <input
                type="text"
                name="sizes"
                placeholder="Enter sizes (comma separated)"
                onChange={handleSizeChange}
                className="w-full p-2 border rounded"
              />
            </div>
          </div>
          <div className="mt-4 flex gap-4">
            <button
              type="submit"
              className="bg-purple-600 text-white px-4 py-2 rounded"
            >
              Add Product
            </button>
            <button type="button" className="border px-4 py-2 rounded">
              Save Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
