// import React from "react";
// import { motion } from "framer-motion";

// const StaticSections = () => {
//   const sectionVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
//   };

//   const categoryVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: (i) => ({
//       opacity: 1,
//       y: 0,
//       transition: { delay: i * 0.1, duration: 0.4 },
//     }),
//   };

//   const categories = ["SUVs", "Electric Cars", "Vans", "Sedans"];

//   return (
//     <div className="space-y-12 px-4 py-8 md:px-16 bg-gray-50 dark:bg-gray-900 dark:rounded-lg transition-colors min-h-screen">
      
//       {/* Top Categories */}
//       <motion.section
//         className="bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-2xl shadow-md hover:shadow-xl p-6 transition-colors"
//         variants={sectionVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//       >
//         <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Top Categories</h2>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//           {categories.map((cat, index) => (
//             <motion.div
//               key={cat}
//               className="
//                 p-6 
//                 bg-white dark:bg-gray-700 
//                 border border-gray-200 dark:border-gray-600 
//                 rounded-lg text-center font-medium 
//                 hover:bg-gray-200 dark:hover:bg-gray-600 
//                 cursor-pointer transition-colors
//               "
//               custom={index}
//               variants={categoryVariants}
//               whileHover={{ scale: 1.05 }}
//             >
//               {cat}
//             </motion.div>
//           ))}
//         </div>
//       </motion.section>

//       {/* Featured Owner */}
//       <motion.section
//         className="bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-2xl shadow-md hover:shadow-xl p-6 transition-colors"
//         variants={sectionVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//       >
//         <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Featured Owner</h2>
//         <div className="flex flex-col md:flex-row items-center gap-6">
//           <motion.img
//             src="https://i.ibb.co/ZzD7Pbz6/Screenshot-17.png"
//             alt="Featured Owner"
//             className="w-32 h-32 md:w-36 md:h-36 rounded-full object-cover border-4 border-gray-300 dark:border-gray-600"
//             whileHover={{ scale: 1.1 }}
//             transition={{ type: "spring", stiffness: 300 }}
//           />
//           <div>
//             <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
//               Arifun Nahar
//             </h3>
//             <p className="text-gray-700 dark:text-gray-300 max-w-lg">
//               Spotlight on a trusted host who provides top-quality vehicles and excellent service for travelers.
//             </p>
//           </div>
//         </div>
//       </motion.section>

//     </div>
//   );
// };

// export default StaticSections;
