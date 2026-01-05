import React from "react";
import { motion } from "framer-motion";



import FeaturedPackages from "./FeaturedPackages";
import HowItWorks from "./HowItWorks";
import TravelHighlights from "./TravelHighlights";
import Testimonials from "./Testimonials";
import BlogTips from "./BlogTips";
import Newsletter from "./Newsletter";
import FAQ from "./FAQ";
import CallToAction from "./CallToAction";


import PopularDestinations from "./PopularDestinations";

import TopCategories from "./TopCategories";
import FeaturedOwner from "./FeaturedOwner";

const HomeSection = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="space-y-12 px-4 py-8 md:px-16">


      <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <PopularDestinations />
      </motion.section>

      <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <FeaturedPackages />
      </motion.section>

      <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <HowItWorks />
      </motion.section>

      <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <TravelHighlights />
      </motion.section>

      <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <Testimonials />
      </motion.section>

      <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <BlogTips />
      </motion.section>


      <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <FAQ />
      </motion.section>

     
      <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
       <TopCategories/>
      </motion.section>
     
      <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
       <FeaturedOwner/>
      </motion.section>
      


           <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <CallToAction />
      </motion.section>

      
          
          
      <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <Newsletter />
      </motion.section>

    </div>
  );
};

export default HomeSection;
