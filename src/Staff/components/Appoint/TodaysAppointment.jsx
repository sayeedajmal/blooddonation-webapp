import React, { useEffect, useState } from "react";
import axios from "../../Auth/Auth/axiosConfig";

const MessageComponent = ({ message }) => {
  return (
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 text-center rounded-md mb-4">
      {message}
    </div>
  );
};

const TodaysAppointment = () => {
  const [appointments, setAppointments] = useState([]);
  const [fieldNames, setFieldNames] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const ApiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const getTodaysAppointments = async () => {
      try {
        const response = await axios.get(
          `${ApiUrl}/appointment/todayAppointments`,
          {
            withCredentials: true,
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        if (response.status >= 200 && response.status < 300) {
          const data = response.data;
          setFieldNames(Object.keys(data[0]));
          setAppointments(data);
        }
      } catch (error) {
        if (error.response && error.response.status === 409) {
          setErrorMessage(error.response.data.message);
        } else {
          setErrorMessage("An error occurred: " + error);
        }
      }
    };

    getTodaysAppointments();
  }, [ApiUrl]);

  return (
    <div className="bg-gray-100 flex flex-col items-center justify-center">
      <div className="w-full max-w-4xl p-6 bg-white shadow-md rounded-lg">
        <h1 className="text-4xl font-bold text-center text-gray-800 p-4">
          Today's Appointments
        </h1>
        {errorMessage ? (
          <MessageComponent message={errorMessage} />
        ) : (
          <div className="overflow-x-auto">
            <table className="table-auto w-full text-center border-collapse border border-gray-300">
              <thead className="bg-gray-200">
                <tr>
                  {fieldNames.map((fieldName, index) => (
                    <th
                      key={index}
                      className="border border-gray-300 px-4 py-2 text-gray-700"
                    >
                      {fieldName}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {appointments.map((appointment, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-100 cursor-pointer"
                    onClick={() =>
                      window.open(
                        `CreateDonation.html?appointId=${appointment.appointmentId}`
                      )
                    }
                  >
                    {fieldNames.map((fieldName) => (
                      <td
                        key={fieldName}
                        className="border border-gray-300 px-4 py-2 text-gray-600"
                      >
                        {typeof appointment[fieldName] === "object"
                          ? `${appointment.donor.firstName} ${appointment.donor.lastName}`
                          : appointment[fieldName]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default TodaysAppointment;
