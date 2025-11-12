import React from "react";
import { FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-blue-100 to-blue-300 text-gray-800 px-8 py-14 mt-auto shadow-inner">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
   
        <div>
          <h3 className="text-xl font-bold text-blue-800 mb-3">TravelEase</h3>
          <p className="text-sm leading-relaxed max-w-xs">
            Your trusted car selling & buying platform — making car trading smooth,
            safe, and effortless for everyone.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-3 text-blue-900">Our Services</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-blue-600 transition">
                Buy New & Used Cars
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition">
                Car Valuation & Inspection
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition">
                Car Loan Assistance
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition">
                24/7 Customer Support
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-blue-900">Follow Us</h4>
          <div className="flex gap-6 text-2xl">
            <a
              href="#"
              className="hover:text-blue-700 transition-transform transform hover:scale-110"
            >
              <FaXTwitter />
            </a>
            <a
              href="#"
              className="hover:text-blue-700 transition-transform transform hover:scale-110"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="hover:text-blue-700 transition-transform transform hover:scale-110"
            >
              <FaPinterest />
            </a>
            <a
              href="#"
              className="hover:text-blue-700 transition-transform transform hover:scale-110"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-blue-700 mt-10 pt-4 text-center text-sm text-gray-700">
        © 2025 <span className="font-semibold text-blue-800">TravelEase</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
