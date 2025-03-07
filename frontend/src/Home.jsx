import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [addproducts, setAddproducts] = useState([]);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const res = await axios.get("http://localhost:3001/api/v1/");
      setAddproducts(res.data);
    } catch (error) {
      console.error("Fetch error", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/api/v1/${id}`);
      setAddproducts(addproducts.filter((product) => product._id !== id));
    } catch (error) {
      console.error("Delete error", error);
    }
  };

  return (
    <div className="bg-black min-h-screen text-white px-6 py-8">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-white">
        Product List
      </h1>

      <div className="flex justify-center mb-8">
        <Link
          to="/addproduct"
          className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-all duration-300 shadow-lg"
        >
          + Add Product
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {addproducts.length > 0 ? (
          addproducts.map((product) => (
            <div
              key={product._id}
              className="bg-gray-200 text-black p-6 rounded-lg shadow-xl flex flex-col items-center border border-gray-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-48 h-48 object-cover rounded-md mb-4 shadow-md border border-gray-400"
              />
              <h2 className="text-2xl font-bold">{product.name}</h2>
              <p className="text-gray-600 text-sm text-center mt-2">
                {product.description}
              </p>
              <p className="text-black font-bold text-lg mt-2">
                ${product.price}
              </p>
              <button
                onClick={() => handleDelete(product._id)}
                className="mt-4 bg-black text-white px-5 py-2 rounded-lg font-semibold hover:bg-gray-900 transition-all duration-300 shadow-md"
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-400 text-lg col-span-full">
            No products available. Add a new product!
          </p>
        )}
      </div>
    </div>
  );
};

export default Home;
