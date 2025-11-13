import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-white text-center px-6">
      {/* Icon */}
      <FaExclamationTriangle className="text-red-500 text-6xl mb-4 animate-bounce" />

      
      <h1 className="text-4xl font-bold text-gray-800 mb-2">Oops! Page Not Found</h1>
      <p className="text-gray-600 mb-6">
        The page you’re looking for doesn’t exist or has been moved.
      </p>

    
      <Link
        to="/"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition duration-300"
      >
        Go Home
      </Link>
    </div>
  );
};

export default ErrorPage;
