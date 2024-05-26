import React, { useEffect, useState } from "react";
import axios from "../../Auth/Auth/axiosConfig";
import ShowList from "../ShowList";

const AppointDonor = () => {
  const [appointments, setAppointments] = useState([]);
  const [fieldNames, setFieldNames] = useState([]);
  const ApiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const getAllStaff = async () => {
      try {
        const response = await axios.get(`${ApiUrl}/donor/showDonor`, {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        if (response.status === 200) {
          setFieldNames(Object.keys(response.data[0]));
          setAppointments(response.data);
        } else {
          console.log("Failed to fetch staff");
        }
      } catch (error) {
        console.error("Error: ", error);
      }
    };
    getAllStaff();
  }, [ApiUrl]);

  return <ShowList fieldNames={fieldNames} data={appointments} />;
};

export default AppointDonor;
