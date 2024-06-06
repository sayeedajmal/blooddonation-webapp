import { motion } from "framer-motion";
import React from "react";
import { images } from "../../constants";
import { AppWrap } from "../../wrapper";
import "./Home.scss";

const Home = () => {
  return (
    <div
      id="Home"
      className="flex w-full h-screen flex-row bg-header-bg bg-cover bg-center"
    >
      <motion.div
        whileInView={{ x: [-200, 0], opacity: [0, 1] }}
        transition={{ type: "spring", stiffness: 100 }}
        className="flex flex-[0.65] flex-col justify-start"
      >
        <p className="m-20 w-72 text-left text-red-600 font-bold text-6xl">
          Help And Save Life By Donating Blood
        </p>
        <motion.div
          className="animate-pulse ml-20 w-32 h-32 "
          whileHover={{ scale: 1.4 }}
          whileTap={{
            scale: 0.5,
            borderRadius: "100%",
          }}
          transition={{ duration: 0.5 }}
        >
          <img src={images.bloodPressure} alt="Logo" className="scale-150" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AppWrap(Home, "home");
