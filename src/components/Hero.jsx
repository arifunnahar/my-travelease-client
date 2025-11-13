import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Hero = () => {
  return (
    <section className="hero-slider mt-40 md:mt-5 lg:mt-10">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="mySwiper"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative w-full h-[500px] overflow-hidden">
            <img
              src="https://i.ibb.co.com/v61NgbXL/travel-elements-composition-with-letters-1.jpg"
              alt="Hero Slide 1"
              className="w-full h-full object-cover rounded-xl brightness-75"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white px-4">
              <h2 className="text-5xl font-bold mb-3 drop-shadow-lg">
                Find Your Perfect Ride
              </h2>
              <p className="text-lg md:text-xl font-medium drop-shadow-md mb-5">
                Rent, buy, or sell cars easily with TravelEase
              </p>
              <Link
                to="/allVehicles"
                className="bg-blue-100 hover:bg-blue-300 text-gray-800 px-6 py-3 rounded-full font-semibold shadow-md transition-all duration-300 hover:scale-105"
              >
               All Vehicles
              </Link>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative w-full h-[500px] overflow-hidden">
            <img
              src="https://i.ibb.co.com/BHkWqh5P/adventure-holiday-journey-trip-concept.jpg"
              alt="Hero Slide 2"
              className="w-full h-full object-cover rounded-xl brightness-75"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center px-4">
              <h2 className="text-5xl font-bold mb-3 drop-shadow-lg">
                Drive Your Dream Car
              </h2>
              <p className="text-lg md:text-xl font-medium drop-shadow-md mb-5">
                Quality cars for every budget and lifestyle
              </p>
              <Link
                to="/allVehicles"
                className="bg-blue-100 hover:bg-blue-300 text-gray-800 px-6 py-3 rounded-full font-semibold shadow-md transition-all duration-300 hover:scale-105"
              >
              All Vehicles
              </Link>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative w-full h-[500px] overflow-hidden">
            <img
              src="https://i.ibb.co.com/tTwpY4my/travel-elements-composition-with-letters.jpg"
              alt="Hero Slide 3"
              className="w-full h-full object-cover rounded-xl brightness-75"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center px-4">
              <h2 className="text-5xl font-bold mb-3 drop-shadow-lg">
                Trusted Car Marketplace
              </h2>
              <p className="text-lg md:text-xl font-medium drop-shadow-md mb-5">
                Safe, secure, and reliable car transactions with TravelEase
              </p>
              <Link
                to="/allVehicles"
                className="bg-blue-100 hover:bg-blue-300 text-gray-800 px-6 py-3 rounded-full font-semibold shadow-md transition-all duration-300 hover:scale-105"
              >
              All Vehicles 
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Hero;
