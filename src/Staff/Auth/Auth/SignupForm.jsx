import axios from "./axiosConfig";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignupForm = ({ setIsLogin }) => {
  const [formData, setFormData] = useState({
    staffName: "",
    contactNumber: "",
    email: "",
    address: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const apiUrl = process.env.REACT_APP_API_URL;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${apiUrl}/signup`, formData);
      localStorage.setItem("token", response.data.access_token);
      setMessage(response.data.message);
      navigate("/dashboard");
    } catch (error) {
      setMessage(error.response ? error.response.data : error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="staffName"
          >
            Name
          </label>
          <input
            type="text"
            id="staffName"
            name="staffName"
            value={formData.staffName}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="contactNumber"
          >
            Contact Number
          </label>
          <input
            type="text"
            id="contactNumber"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="address"
          >
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        {message && (
          <p className=" m-auto text-red-500 bg-white text-xs italic w-fit p-1 rounded-full text-center">
            {message}
          </p>
        )}
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 m-1 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Sign Up
        </button>
      </form>
      <p className="text-center mt-4">
        Already have an account?{" "}
        <button
          className="text-blue-500 hover:underline focus:outline-none"
          onClick={() => setIsLogin(true)}
        >
          Log in
        </button>
      </p>
    </div>
  );
};

export default SignupForm;
