import axios from "axios";
import React, { useEffect, useState } from "react";
import images from "../../../constants/images";

const StaffPosition = () => {
  const [staff, setStaff] = useState([]);
  const ApiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const getAllStaff = async () => {
      try {
        const response = await axios.get(`${ApiUrl}/staff/showStaff`, {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        if (response.status === 200) {
          setStaff(response.data);
        } else {
          console.log("Failed to fetch staff");
        }
      } catch (error) {
        console.error("Error: ", error);
      }
    };
    getAllStaff();
  }, [ApiUrl]);

  return (
    <div className="bg-white bg-opacity-80 rounded-lg p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Staff Details</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-6">
        {staff.map((member) => (
          <div
            key={member.staffId}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={images.manHeart}
              alt={member.staffName}
              className="w-full h-48 object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-xl font-bold mb-2 text-gray-800">
              {member.staffName}
            </h2>
            <p className="text-gray-600">
              <strong>Position:</strong> {member.position}
            </p>
            <p className="text-gray-600">
              <strong>Contact:</strong> {member.contact_number}
            </p>
            <p className="text-gray-600">
              <strong>Email:</strong> {member.email}
            </p>
            <p className="text-gray-600">
              <strong>Enabled:</strong> {member.enabled ? "Yes" : "No"}
            </p>
            <p className="text-gray-600">
              <strong>Created At:</strong> {member.created_at}
            </p>
            <p className="text-gray-600">
              <strong>Updated At:</strong> {member.updated_at || "N/A"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StaffPosition;
