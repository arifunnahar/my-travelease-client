import React from "react";
import { motion } from "framer-motion";

const StaticSections = () => {
  
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.4 } }),
  };

  const categories = ["SUVs", "Electric Cars", "Vans", "Sedans"];

  return (
    <div className="space-y-12 px-4 py-8 md:px-16">
      
      {/* Top Categories */}
      <motion.section
        className="bg-blue-100 rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-bold mb-6 text-blue-800">Top Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <motion.div
              key={cat}
              className="p-6 bg-blue-300 rounded-lg text-center font-medium hover:bg-blue-400 transition cursor-pointer"
              custom={index}
              variants={categoryVariants}
              whileHover={{ scale: 1.05 }}
            >
              {cat}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Featured Owner */}
      <motion.section
        className="bg-blue-100 dark:text-blue-700 rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-bold mb-6 text-blue-800">Featured Owner</h2>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <motion.img
            src="https://i.ibb.co.com/ZzD7Pbz6/Screenshot-17.png"
            alt="Featured Owner"
            className="w-28 h-28 rounded-full object-cover border-4 border-blue-200"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <div>
            <h3 className="text-xl font-semibold mb-2">Arifun Nahar</h3>
            <p className="text-gray-700 max-w-lg">
              Spotlight on a trusted host who provides top-quality vehicles and excellent service for travelers.
            </p>
          </div>
        </div>
      </motion.section>

      {/* About TravelEase */}
      <motion.section
        className="bg-blue-100 rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-bold mb-4 text-blue-800">About TravelEase</h2>
        <p className="text-gray-700 max-w-2xl">
          TravelEase connects travelers with reliable car owners across Bangladesh. Whether you want to rent, buy, or explore new destinations, we make the journey simple, safe, and enjoyable.
        </p>
      </motion.section>

    </div>
  );
};

export default StaticSections;
