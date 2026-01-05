import React from "react";
import { motion } from "framer-motion";

const FeaturedOwner= () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      className="bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-2xl shadow-md hover:shadow-xl p-8 md:p-12 transition-colors"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800 dark:text-white">
        Featured Owner
      </h2>

      <div className="flex flex-col md:flex-row items-center md:justify-center gap-6">
        <motion.img
          src="https://i.ibb.co/ZzD7Pbz6/Screenshot-17.png"
          alt="Featured Owner"
          className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-2 border-gray-300 dark:border-gray-600"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 250 }}
        />

        <div className="text-center md:text-left max-w-md">
          <h3 className="text-xl md:text-2xl font-semibold mb-2 text-gray-800 dark:text-white">
            Arifun Nahar
          </h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base">
            Spotlight on a trusted host who provides top-quality vehicles and excellent service for travelers.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default FeaturedOwner;
