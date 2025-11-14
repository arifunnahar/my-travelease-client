import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

const MyBookings = () => {
  const { user } = useContext(AuthContext); 
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!user?.email) {
      setLoading(false);
      return;
    }

    const fetchBookings = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          `https://my-travel-ease-server.vercel.app/bookings?userEmail=${user.email}`
        );
        // Extra frontend filter for safety
        const userBookings = res.data.filter(b => b.userEmail === user.email);
        setBookings(userBookings);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch bookings.");
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, [user?.email]);

  const handleRemove = async (id) => {
    try {
      await axios.delete(`https://my-travel-ease-server.vercel.app/bookings/${id}`);
      setBookings((prev) => prev.filter((b) => b._id !== id));
    } catch (err) {
      console.error(err);
      setError("Failed to remove booking.");
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  if (loading) {
    return <p className="text-center mt-6"><span className="loading loading-ball loading-xl"></span></p>;
  }

  if (error) {
    return <p className="text-center text-red-500 mt-6">{error}</p>;
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        My Bookings: <span>{bookings.length}</span>
      </h2>

      {bookings.length === 0 ? (
        <p className="text-gray-500">No bookings yet.</p>
      ) : (
        <div className="bg-blue-200 rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-blue-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase">
                    Sl. No
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase">
                    Product
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase">
                    Price
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase">
                    Booking Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase">
                    User Info
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody className="bg-blue-100">
                {bookings.map((b, index) => (
                  <tr key={b._id} className="bg-blue-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {index + 1}
                    </td>

                    {/* Product image and name -------------------------*/}
                    <td className="px-6 py-4 whitespace-nowrap flex items-center gap-3">
                      <img
                        src={b.coverImage}
                        alt={b.vehicleName}
                        className="w-12 h-12 object-cover rounded-md border"
                      />
                      <span className="text-gray-800 font-medium">{b.vehicleName}</span>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      ${b.pricePerDay}
                    </td>

                    {/* Booking Date ------------------*/}
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {b.createdAt ? formatDate(b.createdAt) : "N/A"}
                    </td>

                    {/* User Info----------------------- */}
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      <div>{b.userName || user?.displayName || "N/A"}</div>
                      <div className="text-gray-500 text-xs">{b.userEmail || user?.email || "N/A"}</div>
                    </td>

                    {/* Actions------------------ */}
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <button
                        onClick={() => handleRemove(b._id)}
                        className="bg-red-100 text-red-600 px-3 py-1 rounded text-xs hover:bg-red-200 transition"
                      >
                        Remove Booking
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyBookings;
