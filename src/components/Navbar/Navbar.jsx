import React, { useState } from "react";
import "./Navbar.scss";

import { motion } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import DarkMode from "./DarkMode";
import { images } from "../../constants";

const Navbar = () => {
  /* Setting The Toggle For Mobile View */
  const [Toggle, setToggle] = useState(false);
  const NavLinks = [
    "Home",
    "Service",
    "Campaign",
    "Donate",
    "RequestBlood",
    "Contact",
  ];
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>

      {/* Links */}
      <ul className="app__navbar-links font-black">
        {NavLinks.map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <a href={`#${item}`}>{item.toUpperCase()}</a>
            <div />
          </li>
        ))}
      </ul>

      {/* Toggle Night Mode */}
      <DarkMode />
      {/* Signup and Login For Authorities */}
      <div className="bg-white p-2 rounded-full mr-2 hover:bg-red-800 group hover:transition-all duration-700 ease-out hover:scale-105">
        <Link
          to="/LoginStaff"
          className="text-red-500 text-sm font-bold group-hover:text-white uppercase "
        >
          Staff
        </Link>
      </div>

      {/* Menu */}
      <div className="app__navbar-menu">
        <HiMenuAlt3 onClick={() => setToggle(true)} />

        {Toggle && (
          <motion.div
            whileInView={{ x: [200, 0] }}
            transition={{ duration: 0.4, ease: "easeIn" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {NavLinks.map((item) => (
                <li key={item}>
                  <a href={`#${item}`}>{item.toUpperCase()}</a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
