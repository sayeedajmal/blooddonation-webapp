import React, { useEffect, useState } from "react";

const DonorId = () => {
  const [donorId, setDonorId] = useState(null);
  const [fieldNames, setFieldNames] = useState([]);
  const [donorData, setDonorData] = useState(null);

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
            setDonorData(responseData);
          } else {
            setFieldNames(Object.keys(responseData));
            setDonorData(responseData);
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

      <div className="container mx-auto m-4 bg-gray-800 text-white p-4 rounded-lg">
        <table className="table-auto w-full">
          <thead id="Header">
            <tr>
              {fieldNames.map((fieldName, index) => (
                <th key={index} className="px-4 py-2 border-b border-gray-700">
                  {fieldName}
                </th>
              ))}
            </tr>
          </thead>
          <tbody id="DataBody">
            {donorData && (
              <tr className="hover:bg-gray-700 hover:delay-75 text-center ">
                {fieldNames.map((fieldName) => (
                  <td
                    key={fieldName}
                    className="px-4 py-2 border-b border-gray-700"
                  >
                    {donorData[fieldName]}
                  </td>
                ))}
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DonorId;
