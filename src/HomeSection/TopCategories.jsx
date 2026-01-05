import React from "react";
import { motion } from "framer-motion";

const TopCategories = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.4 },
    }),
  };

  const categories = ["SUVs", "Electric Cars", "Vans", "Sedans"];

  return (
    <motion.section
      className="bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-2xl shadow-md hover:shadow-xl p-8 transition-colors"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white text-center">
        Top Categories
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((cat, index) => (
          <motion.div
            key={cat}
            className="
              p-8
              bg-white dark:bg-gray-700 
              border border-gray-200 dark:border-gray-600 
              rounded-lg text-center font-medium 
              hover:bg-gray-200 dark:hover:bg-gray-600 
              cursor-pointer transition-colors
            "
            custom={index}
            variants={categoryVariants}
            whileHover={{ scale: 1.05 }}
          >
            {cat}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default TopCategories;
