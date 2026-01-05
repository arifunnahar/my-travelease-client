import React from "react";

const Newsletter = () => {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900 transition-colors border border-gray-300 dark:border-gray-700 rounded-xl mx-4 md:mx-0">
      <h2 className="text-3xl font-bold text-center mb-4 text-gray-800 dark:text-white">
        Subscribe to Our Newsletter
      </h2>

      <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
        Get the latest travel deals and updates directly in your inbox.
      </p>

      <form className="flex justify-center flex-wrap gap-0 max-w-md mx-auto">
        <input
          type="email"
          placeholder="Enter your email"
          className="
            px-4 py-2
            rounded-l border
            border-gray-300 dark:border-gray-600
            bg-white dark:bg-gray-800
            text-gray-800 dark:text-white
            focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500
            w-64
            transition-all
          "
        />
        <button
          type="submit"
          className="
            bg-gray-800 dark:bg-gray-100
            text-white dark:text-gray-900
            px-6 py-2
            rounded-r border border-gray-300 dark:border-gray-600
            hover:bg-gray-700 dark:hover:bg-gray-200
            transition-all
          "
        >
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default Newsletter;
