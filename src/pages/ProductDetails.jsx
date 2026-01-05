import React, { useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import useProducts from "../hooks/useProducts";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../context/AuthContext";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const ProductDetails = () => {
  const { id } = useParams();
  const { products, loading, error } = useProducts();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  if (loading)
    return (
      <p>
        <span className="loading loading-spinner loading-xl"></span>
      </p>
    );
  if (error) return <p>Error loading product</p>;

  const product = products.find((p) => String(p._id) === id);
  if (!product) return <p>Product not found</p>;

  const {
    coverImage,
    vehicleName,
    availability,
    pricePerDay,
    location,
    description,
    category,
    ownerName,
    userEmail: ownerEmail,
    images = [], // <-- Swiper এর জন্য
  } = product;

  // Booking data
  const bookingData = {
    vehicleName,
    coverImage,
    pricePerDay,
    location,
    ownerName,
    ownerEmail,
    userName: user?.name,
    userEmail: user?.email,
    status: "Pending",
    createdAt: new Date(),
  };

  const handleBookNow = async () => {
    if (!user) {
      toast.error("You must be logged in to book!");
      return;
    }

    try {
      await axios.post(
        "https://my-travel-ease-server.vercel.app/bookings",
        bookingData
      );
      toast.success("Booking successful!");
      setTimeout(() => {
        navigate("/myBooking");
      }, 1500);
    } catch (err) {
      console.error(err);
      toast.error("Booking failed. Please try again.");
    }
  };

  return (
    <div className="max-w-6xl mx-auto mt-10 px-4 md:px-8 mb-5 dark:text-white">
      <Link
        to="/"
        className="text-blue-600 hover:underline text-sm font-medium flex items-center gap-1 mb-4"
      >
        ← Back To Products
      </Link>

      <div className="grid md:grid-cols-2 gap-10 shadow-md rounded-2xl p-6 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
        {/* Left side */}
        <div>
          {/* Swiper Carousel */}
          <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center overflow-hidden">
            {images.length > 0 ? (
              <Swiper
                spaceBetween={10}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                modules={[Navigation, Pagination, Autoplay]}
              >
                {images.map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <img
                      src={img}
                      alt={`${vehicleName} ${idx + 1}`}
                      className="object-cover w-full h-64 rounded-xl"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : coverImage ? (
              <img
                src={coverImage}
                alt={vehicleName}
                className="object-cover w-full h-full rounded-xl"
              />
            ) : (
              <div className="text-gray-400">No Image Available</div>
            )}
          </div>

          {/* Description */}
          <div className="mt-6">
            <h3 className="font-semibold text-lg mb-2">Product Description</h3>
            <p className="text-gray-600 text-sm leading-relaxed dark:text-white">
              {description}
            </p>
            <div className="mt-4 flex flex-wrap gap-6 text-sm">
              <p>
                <span className="font-medium text-gray-800 dark:text-white">
                  Category:
                </span>{" "}
                {category}
              </p>
              <p>
                <span className="font-medium text-gray-800 dark:text-white">
                  Condition:
                </span>{" "}
                Good
              </p>
              <p>
                <span className="font-medium text-gray-800 dark:text-white">
                  Usage Time:
                </span>{" "}
                2 Years
              </p>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-gray-800 mb-3 dark:text-white">
              {vehicleName}
            </h1>
            <p className="text-2xl font-bold text-pink-600 mb-3 dark:text-white">
              ${pricePerDay}{" "}
              <span className="text-sm text-gray-500 dark:text-white">/ day</span>
            </p>

            <div className="border-t pt-3 mt-3">
              <h3 className="font-semibold text-gray-800 mb-2 dark:text-white">
                Product Details
              </h3>
              <p className="text-sm text-gray-600 dark:text-white">
                <span className="font-medium text-gray-700 dark:text-white">
                  Availability:
                </span>{" "}
                {availability}
              </p>
              <p className="text-sm text-gray-600 dark:text-white">
                <span className="font-medium text-gray-700 dark:text-white">
                  Location:
                </span>{" "}
                {location}
              </p>
            </div>

            <div className="border-t pt-3 mt-3">
              <h3 className="font-semibold text-gray-800 mb-2 dark:text-white">
                Seller Information
              </h3>
              <p className="text-sm text-gray-700 dark:text-white">
                <span className="font-medium">Name:</span> {ownerName}
              </p>
              <p className="text-sm text-gray-700 dark:text-white">
                <span className="font-medium">Email:</span> {ownerEmail}
              </p>
              <p className="text-sm text-gray-700 dark:text-white">
                <span className="font-medium">Role:</span> Owner
              </p>
            </div>
          </div>

          <button
            onClick={handleBookNow}
            disabled={!user}
            className={`mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-all ${
              !user ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {user ? "Book Now" : "Login to Book"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
