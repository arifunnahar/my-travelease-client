import React, { useState } from "react";

const blogPosts = [
  {
    id: "packing-tips",
    title: "Packing Tips",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    details:
      "Learn how to pack efficiently, save space, and travel light for any journey. Use packing cubes, roll clothes, and always keep essentials in carry-on.",
  },
  {
    id: "budget-travel",
    title: "Budget Travel",
    img: "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef",
    details:
      "Discover tips to explore Bangladesh and beyond without breaking the bank. Look for local transport, street food, and budget accommodations.",
  },
  {
    id: "top-destinations",
    title: "Top Destinations",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    details:
      "Explore the most beautiful destinations, hidden gems, and must-visit spots. Plan your itinerary wisely and allocate enough days for each place.",
  },
];

const BlogTips = () => {
  const [openId, setOpenId] = useState(null);

  const toggleDetails = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 dark:rounded-lg  rounded-lg transition-colors">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
        Travel Tips & Blog
      </h2>

      <div className="grid md:grid-cols-3 gap-6 px-4 max-w-7xl mx-auto">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="
              shadow-lg rounded-lg overflow-hidden
              bg-white dark:bg-gray-800
              border border-gray-200 dark:border-gray-700
              transition-all hover:shadow-xl
            "
          >
            <img
              src={post.img}
              alt={post.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                {post.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">
                {openId === post.id
                  ? post.details
                  : "Read our latest guide to make your travel easier and fun."}
              </p>

              <button
                onClick={() => toggleDetails(post.id)}
                className="
                  mt-4 px-4 py-1 rounded
                  bg-blue-600 text-white
                  dark:bg-blue-700 dark:hover:bg-blue-800
                  hover:bg-blue-700 transition-all
                "
              >
                {openId === post.id ? "Show Less" : "Read More"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogTips;
