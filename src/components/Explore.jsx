import React from "react";

const Explore = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg p-6 transition-colors">
        <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">Explore Our Fleet</h1>
        <p className="text-gray-700 dark:text-gray-300 mb-2">
          TravelEase offers a wide variety of vehicles for rent or purchase. Our collection includes SUVs, Sedans, Vans, and Electric Cars. Each vehicle is carefully inspected to ensure quality, safety, and reliability.
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Users can browse categories, compare features, and check availability. From economical daily commute vehicles to premium cars for special occasions, we have options for every traveler.
        </p>
        <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Key Highlights:</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
          <li>Filter vehicles by type, price, and location</li>
          <li>View detailed specifications and images</li>
          <li>Contact owners directly for bookings</li>
        </ul>
      </div>
    </div>
  );
};

export default Explore;
