import { motion } from "framer-motion";
import React from "react";
import { BiGlobe } from "react-icons/bi";
import { FaLocationPin } from "react-icons/fa6";
import { MdEmail, MdPhoneAndroid } from "react-icons/md";
import images from "../../constants/images";
import { AppWrap } from "../../wrapper";
import "./Contact.scss";

const Contact = () => {
  return (
    <motion.div
      className="w-3/6 flex items-center justify-center rounded-3xl shadow-md"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false }}
    >
      <div className="rounded-lg shadow-lg p-8 w-full">
        <div className="flex flex-col md:flex-row">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
          >
            <h2 className="text-lg font-bold uppercase mb-4">Connect US</h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium ">Name</label>
                <input
                  type="text"
                  className="mt-1 text-black block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium ">Email</label>
                <input
                  type="email"
                  className="mt-1 text-black block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium ">Subject</label>
                <input
                  type="text"
                  className="mt-1 text-black block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium ">Message</label>
                <textarea className="mt-1 text-black block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
              </div>
              <motion.button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
          <motion.div
            className="border-l-primary-color border-red-500 w-5/6 bg-cyan-950 ml-4 rounded-full self-center"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
          >
            <img src={images.bloodPressure} alt="Map" />
          </motion.div>
        </div>
        <div className="flex flex-row text-s overflow-hidden text-center p-2">
          <motion.div
            className="flex flex-col items-center justify-center w-2/3"
            whileHover={{ scale: 1.1 }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
          >
            <FaLocationPin />
            <p className="m-5" target="blank">
              Show On Map
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center justify-center w-2/3"
            whileHover={{ scale: 1.1 }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
          >
            <MdPhoneAndroid />
            <a href="tel:+919964716450" className="m-5" target="blank">
              Contact Phone
            </a>
          </motion.div>
          <motion.div
            className="flex flex-col items-center justify-center w-2/3"
            whileHover={{ scale: 1.1 }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
          >
            <MdEmail />
            <a
              href="mailto:sayeedajmala06@gmail.com"
              className="m-5"
              target="blank"
            >
              Send Email
            </a>
          </motion.div>
          <motion.div
            className="flex flex-col items-center justify-center w-2/3"
            whileHover={{ scale: 1.1 }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
          >
            <BiGlobe />
            <a
              href="https://sayeedthedev.web.app"
              className="m-5"
              target="blank"
            >
              Visit Portfolio
            </a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default AppWrap(Contact, "Contact");
