import React, { useState } from "react";
import useProducts from "../hooks/useProducts";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../pages/LoadingSpinner";
import ErrorPage from "../pages/ErrorPage";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MyVehicles = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { products, setProducts } = useProducts();
  console.log(products);

  const handleDelete = async (id) => {
    try {
      const { data } = await axios.delete(
        `https://my-travel-ease-server.vercel.app/products/${id}`
      );
      if (data) {
        // Remove deleted item from state
        setProducts((prev) => prev.filter((prod) => prod._id !== id));

        toast.success("Vehicle deleted successfully!", {});
      }
    } catch (error) {
      console.error("Failed to delete product:", error);
      toast.error("Failed to delete vehicle!", {});
    }
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorPage />;

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Toast Container */}
      <ToastContainer />

      {/* Header */}
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        My Products: <span className="text-blue-600">{products.length}</span>
      </h2>

      {/* Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-blue-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">
                  Sl. No
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">
                  Image
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">
                  Product Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">
                  Owner
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="bg-blue-50">
              {products.map((product, index) => (
                <tr key={product._id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {index + 1}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap">
                    <img
                      src={product.coverImage}
                      alt={product.vehicleName}
                      className="h-10 w-10 rounded object-cover"
                    />
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {product.vehicleName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {product.category}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {product.pricePerDay}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-400 text-white">
                      {product.availability}
                    </span>
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <div className="flex flex-col">
                      <span>{product.ownerName}</span>
                      <span className="text-xs text-gray-500">
                        {product.userEmail}
                      </span>
                    </div>
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => navigate(`/product/${product._id}`)}
                        className="bg-green-50 text-green-600 px-2 py-1 rounded text-xs hover:bg-green-100 transition"
                      >
                        View
                      </button>

                      <button
                        onClick={() => navigate(`/editProduct/${product._id}`)}
                        className="bg-blue-50 text-blue-600 px-2 py-1 rounded text-xs hover:bg-blue-100 transition"
                      >
                        Update
                      </button>

                      <button
                        onClick={() => handleDelete(product._id)}
                        className="bg-red-50 text-red-600 px-2 py-1 rounded text-xs hover:bg-red-100 transition"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyVehicles;
