import React from "react";

const packages = [
  {
    name: "Beach Escape",
    img: "https://i.ibb.co/ycZNJC2f/rowan-heuvel-U6t80-TWJ1-DM-unsplash.jpg",
  },
  {
    name: "Mountain Adventure",
    img: "https://i.ibb.co/fd02qc71/kalen-emsley-Bkci-8qcdv-Q-unsplash.jpg",
  },
  {
    name: "City Tour",
    img: "https://i.ibb.co/hxVpfkCt/henning-witzel-ukvgqriu-Ogo-unsplash.jpg",
  },
];

const FeaturedPackages = () => {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900 dark:rounded-lg rounded-lg transition-colors">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
        Featured Packages
      </h2>

      <div className="grid md:grid-cols-3 gap-6 px-4 max-w-7xl mx-auto">
        {packages.map((pkg) => (
          <div
            key={pkg.name}
            className="
              rounded-lg overflow-hidden
              bg-white dark:bg-gray-800
              border border-gray-200 dark:border-gray-700
              shadow-lg hover:shadow-xl
              transition-all
            "
          >
            <img
              src={pkg.img}
              alt={pkg.name}
              className="w-full h-56 object-cover"
            />

            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                {pkg.name}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">
                Experience {pkg.name} with our curated itineraries.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedPackages;
