import React from "react";
import { FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const FooterBrand = () => (
  <div>
    <h3 className="text-2xl font-bold text-blue-800 mb-3">TravelEase</h3>
    <p className="text-sm leading-relaxed max-w-xs">
      Your trusted car selling & buying platform — making car trading smooth, safe, and effortless for everyone.
    </p>
    <div className="mt-4">
      <h4 className="text-md font-semibold text-blue-900 mb-2">Subscribe to our Newsletter</h4>
      <div className="flex gap-2">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-3 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 flex-1"
        />
        <button className="bg-blue-700 text-white px-4 py-2 rounded-r-md hover:bg-blue-800 transition">
          Subscribe
        </button>
      </div>
    </div>
  </div>
);

const FooterServices = () => (
  <div>
    <h4 className="text-lg font-semibold mb-3 text-blue-900">Our Services</h4>
    <ul className="space-y-2 text-sm">
      <li>
        <a href="" className="hover:text-blue-600 transition">Buy New & Used Cars</a>
      </li>
      <li>
        <a href="" className="hover:text-blue-600 transition">Car Valuation & Inspection</a>
      </li>
      <li>
        <a href="" className="hover:text-blue-600 transition">Car Loan Assistance</a>
      </li>
      <li>
        <a href="" className="hover:text-blue-600 transition">24/7 Customer Support</a>
      </li>
      <li>
        <a href="" className="hover:text-blue-600 transition">Quick Booking</a>
      </li>
    </ul>
  </div>
);

const FooterSocial = () => (
  <div>
    <h4 className="text-lg font-semibold mb-3 text-blue-900">Follow Us</h4>
    <div className="flex gap-4">
      {[FaXTwitter, FaInstagram, FaPinterest, FaFacebook].map((Icon, index) => (
        <a
          key={index}
          href="#"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-blue-700 shadow hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-700 hover:text-white transition-transform transform hover:scale-110"
        >
          <Icon />
        </a>
      ))}
    </div>
    <div className="mt-6">
      <h4 className="text-lg font-semibold mb-2 text-blue-900">Quick Links</h4>
      <ul className="space-y-1 text-sm">
        <li><a href="" className="hover:text-blue-600 transition">About Us</a></li>
        <li><a href="" className="hover:text-blue-600 transition">Contact</a></li>
        <li><a href="" className="hover:text-blue-600 transition">Privacy Policy</a></li>
        <li><a href="" className="hover:text-blue-600 transition">Terms & Conditions</a></li>
      </ul>
    </div>
  </div>
);

const Footer = () => (
  <footer className="bg-gradient-to-b from-blue-100 to-blue-300 text-gray-800 mt-auto pt-14 relative">



    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-8">
      <FooterBrand />
      <FooterServices />
      <FooterSocial />
    </div>

    <div className="border-t border-blue-700 mt-10 pt-4 text-center text-sm text-gray-700">
      © 2025 <span className="font-semibold text-blue-800">TravelEase</span>. All rights reserved.
    </div>
  </footer>
);

export default Footer;
