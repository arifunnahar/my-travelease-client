import React from "react";
import { Link } from "react-router-dom";

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <span className="loading loading-spinner loading-lg"></span>

      <Link to="/" className="mt-4 text-blue-600 underline">
        Go Home
      </Link>
    </div>
  );
};

export default LoadingSpinner;
