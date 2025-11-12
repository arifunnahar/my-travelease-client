import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddVehicle = ({ onAdd }) => {
  const initialState = {
    vehicleName: '',
    ownerName: '',
    category: '',
    pricePerDay: '',
    location: '',
    availability: 'Available',
    coverImage: '',
    description: '',
    userEmail: '',
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    // Basic validation
    if (
      !formData.vehicleName ||
      !formData.ownerName ||
      !formData.category ||
      !formData.pricePerDay ||
      !formData.location ||
      !formData.coverImage ||
      !formData.description ||
      !formData.userEmail
    ) {
      toast.warning('Please fill out all fields!');
      return;
    }

    try {
      const res = await axios.post('http://localhost:3000/products', formData);

      if (res.status === 201) {
        const newVehicle = res.data; 

        toast.success('Vehicle added successfully!');

        // Reset form
        setFormData(initialState);

        // Notify parent (for updating list instantly)
        if (onAdd) {
          onAdd(newVehicle);
        }
      }
    } catch (err) {
      toast.error('Failed to add vehicle!');
      console.error('Error adding vehicle:', err);
    }
  };

  return (
    <div className="min-h-screen bg-pink-50 p-4 flex items-center justify-center">
      <div className="w-full max-w-lg">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">Add New Vehicle</h1>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 space-y-4"
        >
       
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label htmlFor="vehicleName" className="text-gray-500 text-[16px]">
                Vehicle Name
              </label>
              <input
                id="vehicleName"
                type="text"
                name="vehicleName"
                value={formData.vehicleName}
                onChange={handleChange}
                placeholder="Vehicle Name"
                className="text-sm px-3 py-2 border border-gray-300 rounded w-full"
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
                value={formData.ownerName}
                onChange={handleChange}
                placeholder="Owner Name"
                className="text-sm px-3 py-2 border border-gray-300 rounded w-full"
              />
            </div>
          </div>

          {/* Category and Price */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label htmlFor="category" className="text-gray-500 text-[16px]">
                Category
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="text-sm px-3 py-2 border border-gray-300 rounded w-full"
              >
                <option value="">Select Category</option>
                <option value="SUV">SUV</option>
                <option value="Sedan">Sedan</option>
                <option value="Truck">Truck</option>
                <option value="Van">Van</option>
              </select>
            </div>
            <div>
              <label htmlFor="pricePerDay" className="text-gray-500 text-[16px]">
                Price per Day ($)
              </label>
              <input
                id="pricePerDay"
                type="number"
                name="pricePerDay"
                value={formData.pricePerDay}
                onChange={handleChange}
                placeholder="Price per Day"
                className="text-sm px-3 py-2 border border-gray-300 rounded w-full"
              />
            </div>
          </div>

          {/* Location & Availability */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label htmlFor="location" className="text-gray-500 text-[16px]">
                Location
              </label>
              <input
                id="location"
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Location"
                className="text-sm px-3 py-2 border border-gray-300 rounded w-full"
              />
            </div>
            <div>
              <label htmlFor="availability" className="text-gray-500 text-[16px]">
                Availability
              </label>
              <select
                id="availability"
                name="availability"
                value={formData.availability}
                onChange={handleChange}
                className="text-sm px-3 py-2 border border-gray-300 rounded w-full"
              >
                <option value="Available">Available</option>
                <option value="Unavailable">Unavailable</option>
              </select>
            </div>
          </div>

          {/* Cover Image */}
          <div>
            <label htmlFor="coverImage" className="text-gray-500 text-[16px]">
              Cover Image URL
            </label>
            <input
              id="coverImage"
              type="url"
              name="coverImage"
              value={formData.coverImage}
              onChange={handleChange}
              placeholder="Cover Image URL"
              className="w-full text-sm px-3 py-2 border border-gray-300 rounded"
            />
          </div>

        
          <div>
            <label htmlFor="description" className="text-gray-500 text-[16px]">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={2}
              placeholder="Vehicle description..."
              className="w-full text-sm px-3 py-2 border border-gray-300 rounded resize-none"
            />
          </div>

          {/* User Email */}
          <div>
            <label htmlFor="userEmail" className="text-gray-500 text-[16px]">
              User Email
            </label>
            <input
              id="userEmail"
              type="email"
              name="userEmail"
              value={formData.userEmail}
              onChange={handleChange}
              placeholder="User Email"
              className="w-full text-sm px-3 py-2 border border-gray-300 rounded"
            />
          </div>

          {/* Button */}
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
