import React, { useState } from "react";
import axios from "../../Auth/Auth/axiosConfig";
import ConfirmationModal from "./ConfirmationModal";
const AppointForm = () => {
  const donorId = parseInt(
    new URLSearchParams(window.location.search).get("donorId"),
    10
  );

  const [responseMessage, setResponseMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState(null);
  const apiUrl = process.env.REACT_APP_API_URL;

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const newFormData = new FormData(form);
    setFormData(newFormData);
    setShowModal(true);
  };

  const handleConfirm = async () => {
    setShowModal(false);

    try {
      const response = await axios.post(
        `${apiUrl}/appointment/createAppointment?donorId=${donorId}`,
        formData,
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.status === 201) {
        alert(response.data);
        window.history.back();
      }
      setResponseMessage(response.data);
    } catch (error) {
      console.error("Error:", error);
      setResponseMessage(error.response.data.message);
    }
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  return (
    <div className="flex flex-col items-center min-h-screen">
      <h1 className="text-center text-3xl font-bold mt-8">
        Appointment Creation
      </h1>
      <h2 className="text-center text-xl mt-5">Donor Id: {donorId}</h2>
      <form className="mt-8 w-full max-w-sm" onSubmit={handleSubmit}>
        <div className="flex flex-col items-center">
          <input
            className="form-control block w-full p-3 mb-4 text-xl border border-gray-300 rounded-md"
            type="date"
            name="appointmentDate"
            required
          />
          <input
            className="form-control block w-full p-3 mb-4 text-xl border border-gray-300 rounded-md"
            type="time"
            name="appointmentTime"
            required
          />
          <div className="flex space-x-4">
            <button
              className="bg-gray-500 text-white rounded-md px-4 py-2"
              type="reset"
            >
              Clear
            </button>
            <button
              className="bg-red-500 text-white rounded-md px-4 py-2"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
      {responseMessage && (
        <h2 className="text-center text-xl mt-5">{responseMessage}</h2>
      )}
      <ConfirmationModal
        show={showModal}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    </div>
  );
};

export default AppointForm;
