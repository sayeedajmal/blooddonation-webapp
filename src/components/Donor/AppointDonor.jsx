import React, { useEffect, useState } from "react";

const AppointDonor = () => {
  const [appointments, setAppointments] = useState([]);
  const [fieldNames, setFieldNames] = useState([]);

  useEffect(() => {
    const getAllAppointments = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/api/v1/appointment/doAppointDonor"
        );
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

    // Call the function to fetch data when the component mounts
    getAllAppointments();
  }, []);

  return (
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
          {appointments.map((dataObject, index) => (
            <tr key={index} className="hover:bg-gray-700 hover:delay-75 ">
              {fieldNames.map((fieldName) => (
                <td
                  key={fieldName}
                  className="px-4 py-2 border-b border-gray-700"
                >
                  {dataObject[fieldName]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppointDonor;
