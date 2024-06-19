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

const DonorId = () => {
  const [donorId, setDonorId] = useState(null);
  const [fieldNames, setFieldNames] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
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
        } catch (error) {
          if (error.response && error.response.status === 409) {
            setErrorMessage(error.response.data.message);
          } else {
            setErrorMessage("An error occurred: " + error);
          }
        }
      }
    };

    getDonorById();
  }, [donorId,donorData,apiUrl,fieldNames]);

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
      {errorMessage ? (
        <MessageComponent message={errorMessage} />
      ) : (
        <ShowList fieldNames={fieldNames} data={donorData} />
      )}
    </>
  );
};

export default DonorId;
