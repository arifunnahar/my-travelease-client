import React from "react";

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg p-6 transition-colors">
        <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">Contact Us</h1>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Have a question or need assistance? Our customer support team is ready to help you. Fill out the contact form or use the contact details below to reach us.
        </p>

        <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Contact Details:</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 mb-4">
          <li><strong>Email:</strong> support@travelease.com</li>
          <li><strong>Phone:</strong> +880 123 456 789</li>
          <li><strong>Address:</strong> Dhaka, Bangladesh</li>
        </ul>

        <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Additional Info:</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
          <li>Response time: within 24 hours</li>
          <li>Support available: Monday to Saturday, 9 AM – 6 PM</li>
          <li>For vehicle owners: reach us to list your vehicles</li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
