import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const UpdateForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    vehicleName: "",
    category: "",
    pricePerDay: "",
    availability: "",
    coverImage: "",
    ownerName: "",
    userEmail: "",
    description: "",
    location: "",
  });

  const [loading, setLoading] = useState(true);

  // Fetch product
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        console.log("🔍 Fetching product:", id);
        const { data } = await axios.get(
          `https://my-travel-ease-server.vercel.app//products/${id}`
        );
        console.log(" Fetched:", data);

        setFormData({
          vehicleName: data.vehicleName || "",
          category: data.category || "",
          pricePerDay: data.pricePerDay || "",
          availability: data.availability || "",
          coverImage: data.coverImage || "",
          ownerName: data.ownerName || "",
          userEmail: data.userEmail || "",
          description: data.description || "",
          location: data.location || "",
        });
        setLoading(false);
      } catch (err) {
        console.error(" Fetch error:", err.response?.data);
        toast.error("Product not found");
        navigate("/myVehicles");
      }
    };

    fetchProduct();
  }, [id, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { _id, ...dataToUpdate } = formData;

    console.log(" Updating:", { id, dataToUpdate });

    try {
      const { data } = await axios.put(
        `https://my-travel-ease-server.vercel.app//products/${id}`,
        dataToUpdate
      );
      console.log(" Updated:", data);
      toast.success("Product updated successfully!");
      navigate("/myVehicles");
    } catch (err) {
      console.error(" Update failed:", err.response?.data);
      toast.error("Failed to update product");
    }
  };

  if (loading) {
    return <div className="text-center mt-10">Loading product...</div>;
  }

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-gray-100 p-6 rounded-lg shadow-lg mb-5 border-2 border-gray-200">
      <h2 className="text-3xl font-bold text-gray-700 mb-8 text-center">
        Update Form
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Vehicle Name
            </label>
            <input
              type="text"
              name="vehicleName"
              value={formData.vehicleName}
              onChange={handleChange}
              placeholder="Enter Vehicle Name"
              className="w-full px-4 py-3 border dark:text-gray-700 border-gray-300 rounded-lg "
              required
            />
          </div>
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Category
            </label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              placeholder="Enter Category"
              className="w-full px-4 py-3 border dark:text-gray-700 border-gray-300 rounded-lg "
              required
            />
          </div>
        </div>

        {/* Price and Location------------------ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Price per Day
            </label>
            <input
              type="text"
              name="pricePerDay"
              value={formData.pricePerDay}
              onChange={handleChange}
              placeholder="Enter Price per Day"
              className="w-full px-4 py-3 border dark:text-gray-700 border-gray-300 rounded-lg"
              required
            />
          </div>
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Location
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Enter Location"
              className="w-full px-4 py-3 border dark:text-gray-700 border-gray-300 rounded-lg "
              required
            />
          </div>
        </div>

        {/* Availability andImage-------------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Availability
            </label>
            <input
              type="text"
              name="availability"
              value={formData.availability}
              onChange={handleChange}
              placeholder="Enter Availability"
              className="w-full px-4 py-3 border dark:text-gray-700 border-gray-300 rounded-lg "
              required
            />
          </div>
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Image URL
            </label>
            <input
              type="text"
              name="coverImage"
              value={formData.coverImage}
              onChange={handleChange}
              placeholder="Enter Image URL"
              className="w-full px-4 py-3 dark:text-gray-700 border border-gray-300 rounded-lg focus:ring-2 "
            />
          </div>
        </div>

        {/* Owner Name and Email--------------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Owner Name
            </label>
            <input
              type="text"
              name="ownerName"
              value={formData.ownerName}
              onChange={handleChange}
              placeholder="Enter Owner Name"
              className="w-full px-4 py-3 border dark:text-gray-700 border-gray-300 rounded-lg focus:ring-2"
              required
            />
          </div>
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Owner Email
            </label>
            <input
              type="email"
              name="userEmail"
              value={formData.userEmail}
              onChange={handleChange}
              placeholder="Enter Owner Email"
              className="w-full px-4 py-3 border dark:text-gray-700 border-gray-300 rounded-lg"
              required
            />
          </div>
        </div>

        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter Description"
            rows="4"
            className="w-full px-4 py-3 border dark:text-gray-700 border-gray-300 rounded-lg "
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Update Now
        </button>
      </form>
    </div>
  );
};

export default UpdateForm;
