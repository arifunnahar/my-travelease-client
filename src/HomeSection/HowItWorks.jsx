import React from "react";

const steps = [
  {
    icon: "📝",
    title: "Choose a Package",
    desc: "Select the perfect travel package for your dream trip.",
  },
  {
    icon: "💳",
    title: "Book Online",
    desc: "Secure your trip easily through our online booking system.",
  },
  {
    icon: "✈️",
    title: "Enjoy Your Trip",
    desc: "Pack your bags and have an unforgettable experience.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900 dark:rounded-lg rounded-lg transition-colors">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
        How it Works
      </h2>

      <div className="grid md:grid-cols-3 gap-6 px-4 text-center max-w-7xl mx-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            className="
              bg-white dark:bg-gray-800
              border border-gray-200 dark:border-gray-700
              rounded-xl p-6
              shadow-md hover:shadow-lg
              transition-all
            "
          >
            <div className="text-5xl mb-4">{step.icon}</div>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              {step.title}
            </h3>

            <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
