import React from "react";
import { FaMapMarkerAlt, FaEnvelope,  FaCarSide } from "react-icons/fa";
import { Link } from "react-router";

const ProductCard = ({ product }) => {
  return (
    <div className="card bg-blue-200 shadow-md hover:shadow-lg transition-all duration-300 rounded-2xl overflow-hidden border border-blue-200">
      <figure className="relative p-2">
        <img
          src={product.coverImage}
          alt={product.vehicleName}
          className="h-52 w-full rounded-xl object-cover"
        />
        <div className="absolute top-3 left-3 bg-blue-400 text-white px-3 py-1 text-sm rounded-full shadow-md">
          {product.availability}
        </div>
      </figure>

      <div className="card-body px-5 py-4 space-y-3">
        <h2 className="text-lg font-semibold flex items-center gap-2 text-gray-700">
          <FaCarSide className="text-blue-500" />
          {product.vehicleName}
        </h2>

        <div className="flex items-center justify-between text-sm text-gray-900">
          <span className="flex items-center gap-1">
          ${product.pricePerDay}/day
          </span>
          <span className="flex items-center gap-1">
            <FaMapMarkerAlt className="text-blue-500" />{product.location}
          </span>
        </div>

        <p className="text-gray-600 flex items-center gap-2 text-sm">
          <FaEnvelope className="text-blue-500" /> {product.ownerEmail}
        </p>

        <div className="card-actions justify-end">
                  <Link to={`/product/${product._id}`} className="btn btn-sm w-full bg-blue-500 hover:bg-blue-600 text-white rounded-full px-4 ">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
