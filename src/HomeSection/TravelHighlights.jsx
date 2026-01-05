import React from "react";

const stats = [
  { number: "150+", label: "Trips Completed" },
  { number: "500+", label: "Happy Travelers" },
  { number: "120+", label: "Destinations" },
  { number: "50+", label: "Partner Airlines" },
];

const TravelHighlights = () => {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900 transition-colors rounded-lg">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
        Travel Highlights
      </h2>

      <div className="grid md:grid-cols-4 gap-6 px-4 text-center max-w-7xl mx-auto">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="
              bg-white dark:bg-gray-800
              border border-gray-200 dark:border-gray-700
              rounded-xl p-6
              shadow-md hover:shadow-lg
              transition-all
            "
          >
            <h3 className="text-4xl font-bold text-blue-600 dark:text-blue-400">
              {stat.number}
            </h3>

            <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TravelHighlights;
