import React, { useEffect, useState } from "react";
import axios from "../../Auth/Auth/axiosConfig";
import ShowList from "../ShowList";

const MessageComponent = ({ message }) => {
  return (
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 text-center  rounded-md mb-4">
      {message}
    </div>
  );
};

const AppointDonor = () => {
  const [appointments, setAppointments] = useState([]);
  const [fieldNames, setFieldNames] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const ApiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const AppointDonor = async () => {
      try {
        const response = await axios.get(
          `${ApiUrl}/appointment/doAppointDonor`,
          {
            withCredentials: true,
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        if (response.status >= 200 && response.status < 300) {
          setFieldNames(Object.keys(response.data[0]));
          setAppointments(response.data);
        }
      } catch (error) {
        if (error.response && error.response.status === 409) {
          setErrorMessage(error.response.data.message);
        } else {
          setErrorMessage("An error occurred: " + error);
        }
      }
    };

    AppointDonor();
  }, [ApiUrl]);

  if (errorMessage) {
    return <MessageComponent message={errorMessage} />;
  } else return <ShowList fieldNames={fieldNames} data={appointments} />;
};

export default AppointDonor;
