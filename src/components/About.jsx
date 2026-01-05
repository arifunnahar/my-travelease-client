import React from "react";

const About = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg p-6 transition-colors">
        <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">About Us</h1>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          TravelEase is a leading platform connecting travelers with trusted vehicle owners across Bangladesh. Our mission is to simplify travel planning by providing safe, reliable, and convenient vehicle access.
        </p>

        <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Our Vision:</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 mb-4">
          <li>Make travel planning seamless for everyone</li>
          <li>Support local vehicle owners with fair earning opportunities</li>
          <li>Promote safe and eco-friendly transportation solutions</li>
        </ul>

        <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Core Values:</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 mb-4">
          <li>Trust & Transparency</li>
          <li>Reliability & Quality</li>
          <li>Customer Satisfaction</li>
        </ul>

        <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Featured Owner:</h2>
        <p className="text-gray-700 dark:text-gray-300">
          <strong>Arifun Nahar</strong> – Lead Travel Manager. Focused on ensuring travelers receive the best vehicles and services, Arifun supervises quality checks and customer support.
        </p>
      </div>
    </div>
  );
};

export default About;
