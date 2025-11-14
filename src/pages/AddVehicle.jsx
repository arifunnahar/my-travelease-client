import React, { useContext } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../context/AuthContext";
import LoadingSpinner from "../pages/LoadingSpinner";
import ErrorPage from "../pages/ErrorPage";
import { useState } from "react";

const AddVehicle = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const productData = Object.fromEntries(formData.entries());

    try {
      await axios.post(
        "https://my-travel-ease-server.vercel.app/products",
        productData
      );

      toast.success("Vehicle added successfully!");

      // Auto reset form
      form.reset();
    } catch (err) {
      console.log(err);
      toast.error("Failed to add vehicle. Try again.");
    }
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorPage />;

  return (
    <div className="min-h-screen  p-4 flex items-center justify-center">
      <ToastContainer />
      <div className="w-full max-w-lg">
        <h1 className="text-2xl font-bold text-center dark:text-white text-gray-800 mb-4">
          Add New Vehicle
        </h1>
        <form
          onSubmit={handleSubmit}
          className="bg-gray-100 p-5 rounded-lg shadow-sm border  border-gray-200 space-y-4"
        >
          {/* Vehicle Name and Owner */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label
                htmlFor="vehicleName"
                className="text-gray-500 text-[16px]"
              >
                Vehicle Name
              </label>
              <input
                id="vehicleName"
                type="text"
                name="vehicleName"
                placeholder="Vehicle Name"
                className="text-sm px-3 py-2 border border-gray-300  dark:text-gray-800 rounded w-full"
              />
            </div>
            <div>
              <label htmlFor="ownerName" className="text-gray-500 text-[16px]">
                Owner Name
              </label>
              <input
                id="ownerName"
                type="text"
                name="ownerName"
                defaultValue={user.displayName}
                readOnly
                placeholder="Owner Name"
                className="text-sm px-3 py-2 border dark:text-blue-800 border-gray-300 rounded w-full"
              />
            </div>
          </div>

          {/* Category Price */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label htmlFor="category" className="text-gray-500 text-[16px]">
                Category
              </label>
              <select
                id="category"
                name="category"
                className="text-sm px-3 py-2 border border-gray-300 dark:text-blue-800 rounded w-full"
              >
                <option value="">Select Category</option>
                <option value="SUV">SUV</option>
                <option value="Sedan">Sedan</option>
                <option value="Truck">Truck</option>
                <option value="Van">Van</option>
                <option value="Van">Electric</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="pricePerDay"
                className="text-gray-500 text-[16px]"
              >
                Price per Day ($)
              </label>
              <input
                id="pricePerDay"
                type="number"
                name="pricePerDay"
                placeholder="Price per Day"
                className="text-sm px-3 py-2 border dark:text-blue-800 border-gray-300 rounded w-full"
              />
            </div>
          </div>

          {/* Location -----and Availability ----------*/}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label htmlFor="location" className="text-gray-500 text-[16px]">
                Location
              </label>
              <input
                id="location"
                type="text"
                name="location"
                placeholder="Location"
                className="text-sm px-3 py-2 border dark:text-blue-800 border-gray-300 rounded w-full"
              />
            </div>
            <div>
              <label
                htmlFor="availability"
                className="text-gray-500 text-[16px]"
              >
                Availability
              </label>
              <select
                id="availability"
                name="availability"
                className="text-sm px-3 py-2 border dark:text-blue-800 border-gray-300 rounded w-full"
              >
                <option value="Available">Available</option>
                <option value="Unavailable">Booked</option>
              </select>
            </div>
          </div>

          {/* Cover Image -----------------*/}
          <div>
            <label htmlFor="coverImage" className="text-gray-500 text-[16px]">
              Cover Image URL
            </label>
            <input
              id="coverImage"
              type="url"
              name="coverImage"
              placeholder="Cover Image URL"
              className="w-full text-sm px-3 py-2 border dark:text-blue-800 border-gray-300 rounded"
            />
          </div>

          <div>
            <label htmlFor="description" className="text-gray-500 text-[16px]">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows={2}
              placeholder="Vehicle description..."
              className="w-full text-sm px-3 py-2 border dark:text-blue-800 border-gray-300 rounded resize-none"
            />
          </div>

          {/* User Email -------------*/}
          <div>
            <label htmlFor="userEmail" className="text-gray-500 text-[16px]">
              User Email
            </label>
            <input
              id="userEmail"
              type="email"
              name="userEmail"
              defaultValue={user.email}
              readOnly
              placeholder="User Email"
              className="w-full text-sm px-3 py-2 border dark:text-blue-800 border-gray-300 rounded"
            />
          </div>

          {/* Submit Button------------- */}
          <button
            type="submit"
            className="w-full py-2 text-sm bg-blue-600 hover:bg-blue-700 text-white font-medium rounded"
          >
            Add Vehicle
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddVehicle;
