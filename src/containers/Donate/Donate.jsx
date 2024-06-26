import { motion } from "framer-motion";
import React, { useState } from "react";
import { images } from "../../constants";
import { AppWrap } from "../../wrapper";
import "./Donate.scss";

const ThankYouMessage = ({ onReset }) => (
  <motion.div
    whileInView={{ y: [-200, 0], opacity: [0, 1] }}
    transition={{ type: "spring", stiffness: 100 }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="flex flex-col items-center text-center p-8 "
  >
    <img
      className="w-2/6 object-cover md:w-48 md:h-48 mb-4"
      src={images.handWhiteHeart}
      alt="Success"
    />
    <h2 className="uppercase tracking-wide text-xl text-primary-color bg-slate-100 p-2 opacity-70 font-bold mt-4">
      Registration Successful
    </h2>
    <p className="m-2 text-center font-bold uppercase text-green-500 bg-slate-100 p-2 opacity-70">
      Thank you for registering to donate blood!
    </p>
    <p className="m-2 text-center max-w-prose bg-slate-100 p-2 opacity-70">
      You can wait until you receive an email for your appointment.
    </p>
    <button
      onClick={onReset}
      className="bg-red-500 p-2 rounded-lg text-lg text-white  font-bold mt-4"
    >
      New Form
    </button>
  </motion.div>
);

const Donate = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    bloodType: "",
    contactNumber: "",
    city: "",
    lastDonationDate: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const apiUrl = process.env.REACT_APP_API_URL;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const responseData = document.getElementById("response");

    try {
      const response = await fetch(`${apiUrl}/donor/createDonor`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const contentType = response.headers.get("content-type");
      const data =
        contentType && contentType.includes("application/json")
          ? await response.json()
          : await response.text();

      if (typeof data === "object") {
        if (data.status === 400) {
          responseData.style.color = "red";
          responseData.innerText = "Fill All Fields, Code:" + data.status;
        } else {
          responseData.style.color = "red";
          responseData.innerText = data.message + ": " + data.status;
        }
      } else {
        responseData.style.color = "green";
        responseData.innerText = data;
        setSubmitted(true);
      }
    } catch (error) {
      responseData.style.color = "red";
      responseData.innerText = `Error ${error.message}`;
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      firstName: "",
      lastName: "",
      dob: "",
      bloodType: "",
      contactNumber: "",
      city: "",
      lastDonationDate: "",
      email: "",
    });
  };

  return (
    <div>
      {!submitted ? (
        <>
          <h1 className=" text-lg text-center m-4 font-bold" id="response">
            {" "}
          </h1>
          <motion.form
            whileInView={{ scale: [0, 1] }}
            transition={{ type: "spring", stiffness: 50 }}
            onSubmit={handleSubmit}
            className="w-[90%] m-auto p-2 text-sm  md:flex items-center shadow-lg hover:shadow-secondary-color rounded-lg bg-red-700"
          >
            {/* Image and Register Text */}
            <div className="hidden md:flex flex-col items-center md:flex-shrink-0">
              <img
                className="h-12 w-12 object-cover md:w-48 md:h-48"
                src={images.manHeart}
                alt="Register"
              />
              <div className="uppercase ml-3 tracking-wide text-xl text-white-color font-bold">
                Register Blood Donation
              </div>
              <p className="m-2 text-center font-bold uppercase text-white">
                Wanna Save Life! Register.
              </p>
            </div>

            {/* inputs */}
            <div className="p-2 md:p-8 grid grid-cols-2 gap-4 md:mt-4 ">
              <div className="mt-4">
                <label
                  className="block  text-sm font-bold mb-2"
                  htmlFor="firstName"
                >
                  First Name
                </label>
                <input
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                  id="firstName"
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  required
                />
              </div>

              <div className="mt-4">
                <label
                  className="block  text-sm font-bold mb-2"
                  htmlFor="lastName"
                >
                  Last Name
                </label>
                <input
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                  id="lastName"
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  required
                />
              </div>

              <div className="mt-4">
                <label className="block  text-sm font-bold mb-2" htmlFor="dob">
                  Birth Date
                </label>
                <input
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                  id="dob"
                  type="date"
                  placeholder="DOB"
                  name="dob"
                  required
                />
              </div>

              <div className="mt-4">
                <label
                  className="block  text-sm font-bold mb-2"
                  htmlFor="bloodType"
                >
                  Blood Group
                </label>
                <select
                  onChange={handleChange}
                  className="shadow appearance-none border rounded-full w-full py-2 px-3  text-black leading-tight focus:outline-none focus:shadow-outline"
                  id="bloodType"
                  name="bloodType"
                  required
                >
                  <option value="">Select your blood type</option>
                  <option value="A_POSITIVE">A+</option>
                  <option value="A_NEGATIVE">A-</option>
                  <option value="B_POSITIVE">B+</option>
                  <option value="B_NEGATIVE">B-</option>
                  <option value="AB_POSITIVE">AB+</option>
                  <option value="AB_NEGATIVE">AB-</option>
                  <option value="O_POSITIVE">O+</option>
                  <option value="O_NEGATIVE">O-</option>
                </select>
              </div>

              <div className="mt-4">
                <label
                  className="block  text-sm font-bold mb-2"
                  htmlFor="contactNumber"
                >
                  Contact Number
                </label>
                <input
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3  text-black leading-tight focus:outline-none focus:shadow-outline"
                  id="contactNumber"
                  type="tel"
                  placeholder="Contact Number"
                  name="contactNumber"
                  required
                />
              </div>

              <div className="mt-4">
                <label className="block  text-sm font-bold mb-2" htmlFor="city">
                  City
                </label>
                <input
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3  text-black leading-tight focus:outline-none focus:shadow-outline"
                  id="city"
                  type="text"
                  placeholder="City"
                  name="city"
                  required
                />
              </div>

              <div className="mt-4">
                <label
                  className="block  text-sm font-bold mb-2"
                  htmlFor="lastDonationDate"
                >
                  Last Donation Date
                </label>
                <input
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3  text-black leading-tight focus:outline-none focus:shadow-outline"
                  id="lastDonationDate"
                  type="date"
                  placeholder="Last Donation Date"
                  name="lastDonationDate"
                />
              </div>

              <div className="mt-4">
                <label
                  className="block  text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Email"
                  name="email"
                  required
                />
              </div>

              <div className="mt-2 col-span-2 text-center flex flex-col">
                <button
                  type="submit"
                  className="bg-white p-2 text-red-600 font-bold py-2 px-4 rounded-lg shadow-md focus:outline-none"
                >
                  Submit
                </button>
              </div>
            </div>
          </motion.form>
        </>
      ) : (
        <ThankYouMessage onReset={handleReset} />
      )}
    </div>
  );
};

export default AppWrap(Donate, "Donate");
