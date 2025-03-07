import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Addproduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3001/api/v1", {
      name,
      description,
      price,
      image,
    });

    navigate("/");
  };

  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center text-white px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-white">Add Product</h1>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-gray-200 text-black p-6 rounded-lg shadow-2xl border border-gray-300"
      >
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Product Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-3 rounded-lg bg-white border border-gray-400 text-black focus:ring-2 focus:ring-black outline-none"
            placeholder="Enter product name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Product Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            className="w-full p-3 rounded-lg bg-white border border-gray-400 text-black focus:ring-2 focus:ring-black outline-none"
            placeholder="Enter product price"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">
            Product Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="w-full p-3 rounded-lg bg-white border border-gray-400 text-black focus:ring-2 focus:ring-black outline-none resize-none h-24"
            placeholder="Enter product description"
          ></textarea>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Product Image URL</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
            className="w-full p-3 rounded-lg bg-white border border-gray-400 text-black focus:ring-2 focus:ring-black outline-none"
            placeholder="Enter image URL"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white p-3 rounded-lg font-semibold hover:bg-gray-900 transition-all shadow-lg"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default Addproduct;
