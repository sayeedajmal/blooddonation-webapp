import React, { useEffect, useState } from "react";
import axios from "../../Auth/Auth/axiosConfig";
import ShowList from "../ShowList";

const DonorId = () => {
  const [donorId, setDonorId] = useState(null);
  const [fieldNames, setFieldNames] = useState([]);
  const [donorData, setDonorData] = useState([]);
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const getDonorById = async () => {
      if (donorId !== null && donorId !== "") {
        try {
          const response = await axios.get(`${apiUrl}/donor/${donorId}`, {
            withCredentials: true,
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          });

          if (response.status === 200) {
            setFieldNames(Object.keys(response.data));
            setDonorData([response.data]);
          }
        } catch (error) {}
      }
    };

    getDonorById();
  }, [donorId, apiUrl]);

  return (
    <>
      <div className="flex justify-center items-center text-lg">
        <h1 className="text-4xl">Enter Donor ID: </h1>
        <input
          type="number"
          placeholder="Enter Donor ID"
          className="m-4 bg-slate-600 p-2 rounded-full text-center text-white w-min"
          onChange={(e) => setDonorId(e.target.value)}
        />
      </div>

      <ShowList fieldNames={fieldNames} data={donorData} />
    </>
  );
};

export default DonorId;
