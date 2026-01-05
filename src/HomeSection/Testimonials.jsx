import React from "react";

const testimonials = [
  {
    name: "Alice",
    text: "Amazing experience! Highly recommend this travel agency for planning your trips.",
  },
  {
    name: "John",
    text: "Best travel packages ever. Smooth booking and excellent service!",
  },
  {
    name: "Maria",
    text: "A wonderful experience. Every detail was perfectly arranged.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900 dark:rounded-lg rounded-lg transition-colors">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
        Testimonials
      </h2>

      <div className="grid md:grid-cols-3 gap-6 px-4 max-w-7xl mx-auto">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="
              p-6 shadow-lg rounded-lg text-center
              bg-white dark:bg-gray-800
              border border-gray-200 dark:border-gray-700
              hover:shadow-xl transition-all
            "
          >
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
              "{t.text}"
            </p>

            <h4 className="font-semibold text-gray-800 dark:text-white">
              {t.name}
            </h4>

            <span className="text-sm text-gray-500 dark:text-gray-400">
              Traveler
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
