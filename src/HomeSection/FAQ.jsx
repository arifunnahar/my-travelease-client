import React from "react";

const faqs = [
  { q: "How do I book a package?", a: "You can book directly through our website using the 'Book Now' button." },
  { q: "Can I cancel or reschedule?", a: "Yes, you can cancel or reschedule based on our terms and conditions." },
  { q: "Do you offer group discounts?", a: "Yes, we offer special rates for group bookings." }
];

const FAQ = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 dark:rounded-lg  rounded-lg transition-colors">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
        Frequently Asked Questions
      </h2>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((item, index) => (
          <div
            key={index}
            className="
              p-4 border rounded-lg
              bg-white dark:bg-gray-800
              border-gray-200 dark:border-gray-700
              shadow-sm
              transition-all
            "
          >
            <h4 className="font-semibold text-gray-800 dark:text-white">{item.q}</h4>
            <p className="text-gray-600 dark:text-gray-300 mt-2">{item.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
