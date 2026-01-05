import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DashboardProfile = () => {
  const { user, setUser } = useContext(AuthContext);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [imagePreview, setImagePreview] = useState('');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!user) return;

    setName(user.displayName || '');
    setPhone(user.phone || '');
    setImagePreview(user.photoURL || '');
    setLoading(false);
  }, [user]);

  const handleSave = async () => {
    if (!name && !phone) {
      toast.info('Nothing to update');
      return;
    }

    try {
      setSaving(true);

      const updateData = { name, phone };

      const { data } = await axios.put(
         `https://my-travel-ease-server.vercel.app/users/${encodeURIComponent(user.email)}`,
        updateData
      );

      // Update context state
      setUser({
        ...user,
        displayName: data.displayName,
        phone: data.phone,
      });

      toast.success('Profile updated successfully!');
    } catch (err) {
      console.error(err);
      // Safe error message
      const message =
        err?.response?.data?.error || err.message || 'Failed to update profile';
      toast.error(message);
    } finally {
      setSaving(false);
    }
  };

  if (loading)
    return (
      <div className="h-[70vh] flex items-center justify-center text-gray-600">
        Loading profile...
      </div>
    );

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <ToastContainer />
      <h1 className="text-2xl font-bold mb-4">My Profile</h1>

      <div className="bg-white p-6 rounded-xl shadow space-y-6">
        {/* Profile Image (read-only) */}
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <label className="w-32 font-semibold text-gray-700">Profile</label>
          <div className="flex items-center gap-4">
            <img
              src={imagePreview || 'https://via.placeholder.com/80'}
              alt="Profile"
              className="w-20 h-20 rounded-full object-cover border"
            />
          </div>
        </div>

        {/* Email (read-only) */}
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <label className="w-32 font-semibold text-gray-700">Email:</label>
          <input
            type="text"
            value={user.email || ''}
            readOnly
            className="flex-1 border border-gray-300 rounded px-3 py-2 bg-gray-100 cursor-not-allowed"
          />
        </div>

        {/* Name (editable) */}
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <label className="w-32 font-semibold text-gray-700">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        {/* Phone (editable) */}
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <label className="w-32 font-semibold text-gray-700">Phone:</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter phone number"
            className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        {/* Save Button */}
        <div className="text-right">
          <button
            onClick={handleSave}
            disabled={saving}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            {saving ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardProfile;
