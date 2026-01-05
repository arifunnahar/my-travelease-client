import React from "react";
import { FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router";

const FooterBrand = () => (
  <div>
    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
      TravelEase
    </h3>
    <p className="text-sm leading-relaxed max-w-xs text-gray-600 dark:text-gray-300">
      Your trusted car selling & buying platform — making car trading smooth,
      safe, and effortless for everyone.
    </p>
  </div>
);

const FooterServices = () => (
  <div>
    <h4 className="text-lg font-semibold mb-2 text-blue-900 dark:text-blue-400">
      Our Services
    </h4>
    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
      <li>
        <a href="" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
          Buy New & Used Cars
        </a>
      </li>
      <li>
        <a href="" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
          Car Valuation & Inspection
        </a>
      </li>
      <li>
        <a href="" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
          24/7 Customer Support
        </a>
      </li>
      <li>
        <a href="" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
          Quick Booking
        </a>
      </li>
    </ul>
  </div>
);

const FooterSocial = () => (
  <div>
    <h4 className="text-lg font-semibold mb-2 text-blue-900 dark:text-blue-400">
      Quick Links
    </h4>
    <ul className="space-y-1 text-sm flex gap-4 text-gray-600 dark:text-gray-300">
      <li>
        <Link to="/about" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
          About Us
        </Link>
      </li>
      <li>
        <Link  to="/contact"href="" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
          Contact
        </Link>
      </li>
    
    </ul>

    <h4 className="text-lg font-semibold mt-4 mb-2 text-blue-900 dark:text-blue-400">
      Follow Us
    </h4>

    <div className="flex gap-4">
      {[FaXTwitter, FaInstagram, FaPinterest, FaFacebook].map((Icon, index) => (
        <a
          key={index}
          href="#"
          className="w-10 h-10 flex items-center justify-center rounded-full
          bg-white dark:bg-gray-700
          text-blue-700 dark:text-blue-300
          shadow
          hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-700
          hover:text-white transition-transform transform hover:scale-110"
        >
          <Icon />
        </a>
      ))}
    </div>
  </div>
);

const Footer = () => (
  <footer
    className="
      bg-gray-100 dark:bg-gray-900
      border-t border-gray-200 dark:border-gray-700
      text-gray-800 dark:text-gray-200
      mt-auto pt-14 relative
    "
  >
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-8">
      <FooterBrand />
      <FooterServices />
      <FooterSocial />
    </div>

    <div className="border-t border-gray-300 dark:border-gray-700 mt-10 pt-4 text-center text-sm text-gray-600 dark:text-gray-400">
      © 2025{" "}
      <span className="font-semibold text-blue-800 dark:text-blue-400">
        TravelEase
      </span>
      . All rights reserved.
    </div>
  </footer>
);

export default Footer;
