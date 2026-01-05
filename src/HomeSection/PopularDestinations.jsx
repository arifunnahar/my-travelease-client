import React from "react";

const destinations = [
  { name: "Sundarbans", img: "https://i.ibb.co/xqw7wD1p/sundarban.jpg" },
  { name: "Cox's Bazar", img: "https://i.ibb.co/cXtJdv1j/coxbazar.jpg" },
  { name: "Bandarban", img: "https://i.ibb.co/STcSC1K/bandarban.jpg" },
];

const PopularDestinations = () => {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900 dark:rounded-lg rounded-lg transition-colors">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
        Popular Destinations in Bangladesh
      </h2>

      <div className="grid md:grid-cols-3 gap-6 px-4 max-w-7xl mx-auto">
        {destinations.map((city) => (
          <div
            key={city.name}
            className="
              rounded-lg overflow-hidden
              bg-white dark:bg-gray-800
              border border-gray-200 dark:border-gray-700
              shadow-lg hover:shadow-xl
              transition-all
            "
          >
            <img
              src={city.img}
              alt={city.name}
              className="w-full h-56 object-cover"
            />

            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                {city.name}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">
                Explore the beauty of {city.name} with our exclusive travel
                packages.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularDestinations;
