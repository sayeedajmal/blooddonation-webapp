import React, { useState } from "react";

const AppointForm = () => {
  const [donorId] = useState(
    new URLSearchParams(window.location.search).get("donorId")
  );
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(
        `http://localhost:8080/api/v1/appointment/createAppointment?donorId=${donorId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();
      setResponseMessage(data.message);
    } catch (error) {
      console.error("Error:", error.message);
      setResponseMessage(error.toString());
    }
  };

  return (
    <div className="flex flex-col items-center">
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
          />
          <input
            className="form-control block w-full p-3 mb-4 text-xl border border-gray-300 rounded-md"
            type="time"
            name="appointmentTime"
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
    </div>
  );
};

export default AppointForm;
