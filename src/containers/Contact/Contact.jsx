import { motion } from "framer-motion";
import React, { useState } from "react";
import { BiGlobe } from "react-icons/bi";
import { FaLocationPin } from "react-icons/fa6";
import { MdEmail, MdPhoneAndroid } from "react-icons/md";
import axios from "../../Staff/Auth/Auth/axiosConfig";
import images from "../../constants/images";
import { AppWrap } from "../../wrapper";
import "./Contact.scss";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false); // State to track if form submitted

  const apiUrl = process.env.REACT_APP_API_URL;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    const messageShow = document.getElementById("messageShow");

    e.preventDefault();
    try {
      const response = await axios.post(`${apiUrl}/contactOrg`, formData);
      if (response.status === 200) setSubmitted(true);
    } catch (error) {
      if (error.code === "ERR_NETWORK") {
        messageShow.innerText = "Server Is Offline";
        messageShow.style.color = "red";
      }
      console.log(error);
    }
  };

  // Greeting message template
  const greetingMessage = (
    <div className="text-green-500 text-center font-bold">
      Thank you for contacting us! We will get back to you soon.
    </div>
  );

  return (
    <div className="w-[90vw] md:w-[60vw] rounded-lg shadow-lg p-5 bg-slate-600">
      {submitted ? (
        greetingMessage
      ) : (
        <div className="flex flex-col md:flex-row">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
          >
            <h2
              className="text-lg text-center font-bold uppercase md:mb-4"
              id="messageShow"
            >
              Connect US
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium ">Name</label>
                <input
                  name="name"
                  onChange={handleChange}
                  id="name"
                  required
                  value={formData.name}
                  type="text"
                  className="mt-1 text-black block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium ">Email</label>
                <input
                  name="email"
                  onChange={handleChange}
                  id="email"
                  required
                  value={formData.email}
                  type="email"
                  className="mt-1 text-black block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium ">Topic</label>
                <input
                  name="topic"
                  onChange={handleChange}
                  id="topic"
                  required
                  value={formData.topic}
                  type="text"
                  className="mt-1 text-black block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium ">Message</label>
                <textarea
                  name="message"
                  onChange={handleChange}
                  id="message"
                  required
                  value={formData.message}
                  className="mt-1 text-black block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
          <motion.div
            className="hidden md:flex w-4/6 bg-cyan-950 ml-4 rounded-full self-center"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
          >
            <img
              className="md:animate-pulse"
              src={images.bloodPressure}
              alt="Map"
            />
          </motion.div>
        </div>
      )}
      <div className="mt-5 flex flex-row text-sm md:text-s  text-center">
        <motion.div
          className="flex flex-col items-center justify-center w-2/3"
          whileHover={{ scale: 1.1 }}
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
        >
          <FaLocationPin />
          <p>
            Show Map
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
          <a href="tel:+919964716450" target="blank">
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
          
            target="blank"
          >
            Visit Portfolio
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default AppWrap(Contact, "Contact");
