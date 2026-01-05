import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { FaCarSide, FaClipboardList } from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const DashboardHome = () => {
  const { user } = useContext(AuthContext);
  const [overview, setOverview] = useState({
    totalVehicles: 0,
    totalBookings: 0,
  });
  const [myProducts, setMyProducts] = useState([]);
  const [myBookings, setMyBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;

    const fetchData = async () => {
      try {
        setLoading(true);

        const [prodRes, bookRes] = await Promise.all([
          axios.get(
            `https://my-travel-ease-server.vercel.app/products?userEmail=${user.email}`
          ),
          axios.get(
            `https://my-travel-ease-server.vercel.app/bookings?userEmail=${user.email}`
          ),
        ]);

        const products = prodRes.data;
        const bookings = bookRes.data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );

        setMyProducts(products);
        setMyBookings(bookings);

        setOverview({
          totalVehicles: products.length,
          totalBookings: bookings.length,
        });
      } catch (err) {
        console.error("Error fetching dashboard data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user]);

  // Prepare data for BarChart
  const categoryData = myProducts.reduce((acc, curr) => {
    const existing = acc.find((item) => item.category === curr.category);
    if (existing) {
      existing.count += 1;
    } else {
      acc.push({ category: curr.category, count: 1 });
    }
    return acc;
  }, []);

  if (loading)
    return (
      <div className="h-[80vh] flex items-center justify-center">
        Loading...
      </div>
    );

  return (
    <div className="space-y-8">
      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-blue-100 p-6 rounded-xl shadow">
          <FaCarSide className="text-3xl text-blue-600 mb-2" />
          <h3 className="text-lg font-semibold">My Vehicles</h3>
          <p className="text-3xl font-bold">{overview.totalVehicles}</p>
        </div>
        <div className="bg-green-100 p-6 rounded-xl shadow">
          <FaClipboardList className="text-3xl text-green-600 mb-2" />
          <h3 className="text-lg font-semibold">My Bookings</h3>
          <p className="text-3xl font-bold">{overview.totalBookings}</p>
        </div>
      </div>

      {/* Vehicles Category BarChart */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-bold mb-4">My Vehicles by Category</h2>
        {categoryData.length > 0 ? (
          <div className="w-full h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={categoryData}
                margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" />
                <YAxis allowDecimals={false} />
                <Tooltip />
                <Bar dataKey="count" fill="#0088FE" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        ) : (
          <p className="text-center text-gray-500">No vehicle data available</p>
        )}
      </div>

      {/* My Vehicles Table */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-bold mb-4">My Vehicles</h2>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>#</th>
                <th>Vehicle</th>
                <th>Category</th>
                <th>Price</th>
                <th>Owner</th>
              </tr>
            </thead>
            <tbody>
              {myProducts.map((prod, idx) => (
                <tr key={prod._id}>
                  <td>{idx + 1}</td>
                  <td>{prod.vehicleName}</td>
                  <td>{prod.category}</td>
                  <td>{prod.pricePerDay}</td>
                  <td>{prod.ownerName}</td>
                </tr>
              ))}
              {myProducts.length === 0 && (
                <tr>
                  <td colSpan="5" className="text-center py-4">
                    You haven’t added any vehicles yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* My Bookings Table */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-bold mb-4">My Bookings</h2>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>No</th>
                <th>Vehicle</th>
                <th>Status</th>
                <th>Owner Email</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {myBookings.map((b, idx) => (
                <tr key={b._id}>
                  <td>{idx + 1}</td>
                  <td>{b.vehicleName}</td>
                  <td>{b.status || "Pending"}</td>
                  <td>{b.ownerEmail}</td>
                  <td>{new Date(b.createdAt).toLocaleDateString()}</td>
                </tr>
              ))}
              {myBookings.length === 0 && (
                <tr>
                  <td colSpan="5" className="text-center py-4">
                    No bookings found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
