import React from "react";

const CallToAction = () => {
  return (
    <section className="py-16 
      bg-gray-100 dark:bg-gray-800 
      text-gray-800 dark:text-gray-100 
      text-center 
      rounded-xl 
      border border-gray-300 dark:border-gray-600
      transition-colors"
    >
      <h2 className="text-3xl font-bold mb-4">
        Ready for Your Next Adventure?
      </h2>

      <p className="mb-8 text-gray-700 dark:text-gray-300">
        Book your dream trip today and explore the world with our exclusive packages.
      </p>

      <button className="
        bg-white dark:bg-gray-700 
        text-gray-700 dark:text-white 
        font-semibold px-6 py-3 
        rounded 
        border border-gray-300 dark:border-gray-600
        hover:bg-gray-200 dark:hover:bg-gray-600
        transition-all
      ">
        Book Now
      </button>
    </section>
  );
};

export default CallToAction;
