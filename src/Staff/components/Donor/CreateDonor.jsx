import React, { useState } from "react";
import { images } from "../../../constants";

const CreateDonor = () => {
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
  const apiUrl = process.env.REACT_APP_API_URL;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const responseData = document.getElementById("response");

    var donorData = {
      firstName: document.getElementById("firstName").value,
      lastName: document.getElementById("lastName").value,
      dob: document.getElementById("dob").value,
      bloodType: document.getElementById("bloodType").value,
      contactNumber: document.getElementById("contactNumber").value,
      email: document.getElementById("email").value,
      city: document.getElementById("city").value,
      lastDonationDate: document.getElementById("lastDonationDate").value,
    };

    try {
      await fetch(`${apiUrl}/donor/createDonor`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(donorData),
      }) // HERE'S CHECKS THE RESPONSE. IF AND GET THE TYPE OF
        //CONTENT IF IT'S HAVE APPLICTION/JSON THEN JSON ORTHERWISE JUST RETURN THE TEXT
        .then((response) => {
          const contentType = response.headers.get("content-type");
          if (contentType && contentType.includes("application/json")) {
            return response.json();
          } else {
            return response.text();
          }
        })
        .then((data) => {
          /* Object Error */
          if (typeof data === "object") {
            responseData.style.color = "red";
            if (data.status === 400) {
              responseData.color = "red";
              responseData.innerText = "Fill All Fields, Code:" + data.status;
            } else responseData.innerText = data.message + ": " + data.status;
          } else {
            responseData.style.color = "green";
            responseData.innerText = data;
          }
        })
        .catch((error) => {
          responseData.style.color = "red";
          responseData.innerText = `Error ${error.message}`;
        });
    } catch (error) {
      responseData.innerText = error.message;
    }
  };

  return (
    <>
      <h1
        className="text-black text-lg text-center m-4 font-bold"
        id="response"
      >
        {" "}
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-center"
      >
        <div className="md:flex items-center shadow-lg  shadow-primary-color rounded-lg">
          {/* Image and Register Text */}
          <div className="flex flex-col items-center md:flex-shrink-0">
            <img
              className="h-12 w-12 object-cover md:w-48 md:h-48"
              src={images.logo}
              alt="Register"
            />
            <div className="uppercase ml-3 tracking-wide text-xl text-primary-color  font-bold">
              Register Blood Donation
            </div>
            <p className="m-2 text-center font-bold uppercase text-green-500">
              Wanna Save Life! Register.
            </p>
            <p className="m-2 text-center max-w-prose text-green-500 flex flex-wrap" />
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
                placeholder="firstName"
                required
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
                placeholder="lastName"
                required
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
                placeholder="dob"
                required
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
                required
              >
                <option value="">Select your blood type</option>
                <option value="A_POSITIVE">A+</option>
                <option value="A_NEGATIVE">A-</option>
                <option value="B_POSITIVE">B+</option>
                <option value="B_NIGATIVE">B-</option>
                <option value="AB_POSITIVE">AB+</option>
                <option value="AB_NEGATIVE">AB-</option>
                <option value="O_POSITIVE">O+</option>
                <option value="O_NEGATIVE">O-</option>
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
                placeholder="city"
                required
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
                placeholder="Email Address"
                required
              />
            </div>
          </div>
          {/* Register Button */}
          <div className="m-8 flex flex-col justify-center items-center">
            <button
              className="w-full bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Register
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default CreateDonor;
