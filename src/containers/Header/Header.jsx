import React from "react";

import { motion } from "framer-motion";
import { images } from "../../constants";
import { AppWrap } from "../../wrapper";

import "./Header.scss";

const Header = () => {
  return (
    <div className="flex w-full h-screen flex-row p-4">
      <motion.div
        whileInView={{ x: [-200, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className=" flex flex-[0.65] flex-col h-0 justify-flex-start"
      >
        <p className="flex mt-8 w-72 text-left text-red-600  font-bold text-6xl">
          Help And Save Life By Donating Blood
        </p>

        <div className="animate-pulse">
          <img src={images.logo} alt="" />
        </div>
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
