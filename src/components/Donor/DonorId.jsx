import React, { useEffect, useState } from "react";
import ShowList from "../ShowList";

const DonorId = () => {
  const [donorId, setDonorId] = useState(null);
  const [fieldNames, setFieldNames] = useState([]);
  const [donorData, setDonorData] = useState([]);

  useEffect(() => {
    const getDonorById = async () => {
      if (donorId !== null && donorId !== "") {
        try {
          const response = await fetch(
            `http://localhost:8080/api/v1/donor/${donorId}`
          );
          const responseData = await response.json();

          if (response.ok) {
            setFieldNames(Object.keys(responseData));
            setDonorData([responseData]);
          } else {
            setFieldNames(Object.keys(responseData));
            setDonorData([responseData]);
          }
        } catch (error) {
          console.error("An error occurred:", error);
        }
      }
    };

    getDonorById();
  }, [donorId]);

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
