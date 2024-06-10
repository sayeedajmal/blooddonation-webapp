import axios from "axios";
import React, { useEffect, useState } from "react";

const CreateDonation = () => {
  const [appointId, setAppointId] = useState("");
  const [donationStatus, setDonationStatus] = useState("COMPLETED");
  const [quantity, setQuantity] = useState("");
  const [response, setResponse] = useState("");
  const ApiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setAppointId(params.get("appointId"));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("donationStatus", donationStatus);
    formData.append("quantity", quantity);

    try {
      const response = axios.post(
        `${ApiUrl}/donation/createDonation?appointId=${appointId}`,
        formData,
        {
          withCredentials: true,
          headers: {
            Authorization: `bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.status === 201) {
        alert(response.data);
        window.history.back();
      }
    } catch (error) {
      setResponse(error.response.data.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center ">
      <h1 className="text-3xl font-bold mb-5">Donation Form</h1>
      <h2 className="text-xl mb-5" id="appointId">
        Appointment Id: {appointId}
      </h2>
      <form
        className="w-full max-w-sm bg-white p-8 rounded-lg shadow-md"
        id="donationForm"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="donationStatus"
          >
            Donation Status:
          </label>
          <select
            id="donationStatus"
            name="donationStatus"
            value={donationStatus}
            onChange={(e) => setDonationStatus(e.target.value)}
            required
            className="block appearance-none w-full text-black bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="COMPLETED">COMPLETED</option>
            <option value="CANCELED">CANCELED</option>
            <option value="PENDING">PENDING</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="quantity"
          >
            Quantity:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            id="quantity"
            name="quantity"
            placeholder="Quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="reset"
          >
            Clear
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
      <div className="text-center mt-4">
        <p>{response}</p>
      </div>
    </div>
  );
};

export default CreateDonation;
