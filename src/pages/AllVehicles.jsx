import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ProductCard from "./ProductCard";

const AllVehicles = () => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [priceSort, setPriceSort] = useState("newest");
  const [locationSort, setLocationSort] = useState("all");
  const [categorySort, setCategorySort] = useState("all");

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          "https://my-travel-ease-server.vercel.app/products"
        );
        setVehicles(data);
      } catch (err) {
        toast.error(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const category = [...new Set(vehicles.map((cat) => cat.category))];
  const location = [...new Set(vehicles.map((loc) => loc.location))];

  const filteredVehicles = vehicles
    .filter((vehicle) =>
      locationSort === "all" ? true : vehicle.location === locationSort
    )
    .filter((vehicle) =>
      categorySort === "all" ? true : vehicle.category === categorySort
    )
    .sort((a, b) => {
      if (priceSort === "low-high") return a.pricePerDay - b.pricePerDay;
      if (priceSort === "high-low") return b.pricePerDay - a.pricePerDay;
      return 0;
    });

  return (
    <section className="w-full p-8 md:p-8 bg-base-100">
      <div className="container mx-auto">
      
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <h2 className="text-3xl font-bold text-base-content">All Vehicles</h2>

          <div className="flex flex-wrap justify-center md:justify-end gap-2">
            {/* Category Filter -------------*/}
            <select
              value={categorySort}
              onChange={(e) => setCategorySort(e.target.value)}
              className="select select-bordered bg-blue-50 text-gray-900 w-full sm:w-auto focus:outline-none"
            >
              <option value="all">All Categories</option>
              {category.map((cat, ind) => (
                <option key={ind} value={cat}>
                  {cat}
                </option>
              ))}
            </select>

            {/* Price Filter------------ */}
            <select
              value={priceSort}
              onChange={(e) => setPriceSort(e.target.value)}
              className="select select-bordered bg-blue-50 text-gray-900 w-full sm:w-auto focus:outline-none"
            >
              <option value="newest">Price</option>
              <option value="low-high">Low to High</option>
              <option value="high-low">High to Low</option>
            </select>

            {/* Location Filter----------- */}
            <select
              value={locationSort}
              onChange={(e) => setLocationSort(e.target.value)}
              className="select select-bordered bg-blue-50 text-gray-900 w-full sm:w-auto focus:outline-none"
            >
              <option value="all">Locations</option>
              {location.map((loc, ind) => (
                <option key={ind} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Vehicle Grid */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="flex flex-col items-center">
              <span className="loading loading-spinner loading-lg text-blue-500"></span>
              <p className="mt-2 text-lg font-semibold text-gray-700">
                Loading Vehicles...
              </p>
            </div>
          </div>
        ) : filteredVehicles.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-64 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">Oops! No Vehicles Found</h2>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVehicles.map((vehicle) => (
              <ProductCard key={vehicle._id} product={vehicle} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default AllVehicles;
