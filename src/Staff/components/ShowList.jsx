import React from "react";
import { useNavigate } from "react-router-dom";

const ShowList = ({ fieldNames, data }) => {
  const navigate = useNavigate();

  const handleRowClick = (donorId) => {
    navigate(`/appointForm?donorId=${donorId}`);
  };

  return (
    <div className="container mx-auto m-4 bg-gray-800 text-white p-4 rounded-lg">
      <table className="table-auto min-w-min">
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
          {data.map((dataObject, index) => (
            <tr
              key={index}
              className="hover:bg-gray-700 hover:delay-75 text-center"
            >
              {fieldNames.map((fieldName) => (
                <td
                  onClick={() => handleRowClick(dataObject.donorId)}
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

export default ShowList;
