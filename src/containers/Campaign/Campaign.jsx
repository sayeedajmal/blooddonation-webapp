import { motion } from "framer-motion";
import React from "react";
import { AppWrap } from "../../wrapper";
import "./Campaign.scss";

const Campaign = () => {
  const CampaignDate = "August 30th, 2021 | 10.00 AM";

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <motion.div
      className="flex flex-col ml-auto text-center p-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      variants={containerVariants}
    >
      <motion.h2
        className="text-6xl text-gray-900 uppercase "
        variants={textVariants}
        transition={{ duration: 0.5 }}
      >
        Donate
      </motion.h2>
      <motion.h1
        className="text-8xl text-red-600 uppercase font-bold"
        variants={textVariants}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Your Blood
      </motion.h1>
      <motion.h3
        className="text-5xl text-gray-800 uppercase m-3"
        variants={textVariants}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        {CampaignDate}
      </motion.h3>

      <motion.button
        variants={textVariants}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="p-3 rounded-full bg-red-400 w-3/5 text-white font-bold text-3xl m-auto hover:scale-105"
      >
        Book Now
      </motion.button>
    </motion.div>
  );
};

export default AppWrap(Campaign, "Campaign");
