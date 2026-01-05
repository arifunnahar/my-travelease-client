import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router-dom";

const ErrorPage = ({ message = "The page you’re looking for doesn’t exist or has been moved." }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 text-center px-6">
      
      
      <FaExclamationTriangle className="text-red-500 text-6xl mb-4 animate-bounce" />

      {/* Error Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-2">
        Oops! Page Not Found
      </h1>

      
      <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm md:text-base">
        {message}
      </p>

      
      <Link
        to="/"
        className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition duration-300"
      >
        Go Home
      </Link>
    </div>
  );
};

export default ErrorPage;
