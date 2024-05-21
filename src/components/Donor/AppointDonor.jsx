import React, { useEffect, useState } from "react";
import ShowList from "../ShowList";

const AppointDonor = () => {
  const [appointments, setAppointments] = useState([]);
  const [fieldNames, setFieldNames] = useState([]);
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const getAllAppointments = async () => {
      try {
        console.log("API URL:", apiUrl);
        const response = await fetch(`${apiUrl}/appointment/doAppointDonor`);
        const responseData = await response.json();

        if (response.ok) {
          setFieldNames(Object.keys(responseData[0]));
          setAppointments(responseData);
        } else {
          console.error("Failed to fetch appointments");
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };

    getAllAppointments();
  },[]);

  return <ShowList fieldNames={fieldNames} data={appointments} />;
};

export default AppointDonor;
