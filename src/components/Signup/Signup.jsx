import React, { useState } from "react";

import { images } from "../../constants";

const Signup = () => {
  const URL = "http://localhost:8080/api/v1";
  /* 
  //For Signup Validation
  const Signup = () => {
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


    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
      setErrors({ ...errors, [name]: "" });
    };

    const handleSubmit = () => {
      const newErrors = {};
      Object.keys(formData).forEach((key) => {
        if (!formData[key]) {
          newErrors[key] = `${key} is required`;
        }
      });
      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
      } else {
        console.log("Form data:", formData);
      }
    };
  }; */

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const responseData = document.getElementById("response");

      await fetch({ URL } + `/donor/createDonor`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          responseData.innerText = data;
        })
        .catch((error) => {
          responseData.innerText = error.message;
        });
    } catch (error) {}
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-center min-h-screen"
    >
      <div className="md:flex items-center shadow-lg  shadow-primary-color rounded-lg">
        {/* Image and SignUp Text */}
        <div className="flex flex-col items-center md:flex-shrink-0">
          <img
            className="h-12 w-12 object-cover md:w-48 md:h-48"
            src={images.logo}
            alt="Signup"
          />
          <div className="uppercase tracking-wide text-sm text-primary-color  font-bold">
            Sign Up
          </div>
          <h2 className="mt-2 text-2xl font-semibold text-gray-900">
            Create an account
          </h2>
          <p className="m-2 text-center text-gray-600">
            Fill in the form below to get started.
          </p>
          <p
            id="response"
            className="m-2 text-center text-green-500 flex flex-wrap"
          />
          {/*  <Link
            to="/Login"
            className="text-green-600 uppercase font-bold underline"
          >
            Already Signed Up?
          </Link> */}
        </div>

        {/* inputs */}
        <div className="p-8 grid grid-cols-2 gap-4 mt-4 ">
          <div className="mt-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="firstName"
            >
              firstName
            </label>
            <input
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-color leading-tight focus:outline-none focus:shadow-outline"
              id="firstName"
              type="text"
            //  value={formData.firstName}
              placeholder="firstName"
            />
          </div>

          <div className="mt-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="lastName"
            >
              lastName
            </label>
            <input
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-color leading-tight focus:outline-none focus:shadow-outline"
              id="lastName"
              type="text"
             // value={formData.lastName}
              placeholder="lastName"
            />
          </div>

          <div className="mt-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="dob"
            >
              BirthDate
            </label>
            <input
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-color leading-tight focus:outline-none focus:shadow-outline"
              id="dob"
              type="date"
             // value={formData.dob}
              placeholder="dob"
            />
          </div>

          <div className="mt-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="bloodType"
            >
              Blood Group
            </label>
            <select
              className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="bloodType"
              name="bloodType"
             // value={formData.bloodType}
            >
              <option value="">Select your blood type</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>

          <div className="mt-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="contactNumber"
            >
              contactNumber
            </label>
            <input
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="contactNumber"
              type="tel"
              //value={formData.contactNumber}
              placeholder="contactNumber"
            />
          </div>

          <div className="mt-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="city"
            >
              city
            </label>
            <input
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="city"
              type="text"
            //  value={formData.city}
              placeholder="city"
            />
          </div>

          <div className="mt-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="lastDonationDate"
            >
              lastDonationDate
            </label>
            <input
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="lastDonationDate"
              type="date"
              //value={formData.lastDonationDate}
              placeholder="lastDonationDate"
            />
          </div>

          <div className="mt-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
            //  value={formData.email}
              placeholder="Email Address"
            />
          </div>
        </div>
        {/* SignUp Button */}
        <div className="m-8 flex flex-col justify-center items-center">
          <button
            className="w-full bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </div>
    </form>
  );
};

export default Signup;
