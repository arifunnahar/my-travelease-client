import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-400 text-center px-6">
      
    
   <span className="loading loading-ball loading-xs"></span>
<span className="loading loading-ball loading-sm"></span>
<span className="loading loading-ball loading-md"></span>
<span className="loading loading-ball loading-lg"></span>
<span className="loading loading-ball loading-xl"></span>

    
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
