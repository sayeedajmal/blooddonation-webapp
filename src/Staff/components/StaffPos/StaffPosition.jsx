import axios from "axios";
import React, { useEffect, useState } from "react";
import images from "../../../constants/images";
import Modal from "../Model";
import StaffPositionForm from "./StaffPositionForm";

const MessageComponent = ({ message }) => {
  return (
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 text-center rounded-md mb-4">
      {message}
    </div>
  );
};

const StaffPosition = () => {
  const [staff, setStaff] = useState([]);
  const [selectedStaff, setSelectedStaff] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

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
        if (error.response && error.response.status === 403) {
          setErrorMessage(error.response.data);
        } else {
          setErrorMessage("An error occurred: " + error.message);
        }
      }
    };
    getAllStaff();
  }, [ApiUrl]);

  const openModal = (staffMember) => {
    setSelectedStaff(staffMember);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedStaff(null);
  };

  return (
    <div className="bg-white bg-opacity-80 rounded-lg p-6 max-w-4xl h-screen mx-auto mt-4">
      {errorMessage ? (
        <MessageComponent message={errorMessage} />
      ) : (
        <>
          <h1 className="text-3xl font-bold mb-6 text-center">Staff Details</h1>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-2 h-4/6 overflow-auto p-3 custom-scrollbar">
            {staff.map((member) => (
              <div
                key={member.staffId}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                onClick={() => openModal(member)}
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
                  <strong>Contact:</strong> {member.contactNumber}
                </p>
                <p className="text-gray-600">
                  <strong>Email:</strong> {member.email}
                </p>
                <p className="text-gray-600">
                  <strong>Enabled:</strong> {member.enabled ? "Yes" : "No"}
                </p>
                <p className="text-gray-600">
                  <strong>Created At:</strong> {member.createdAt}
                </p>
                <p className="text-gray-600">
                  <strong>Updated At:</strong> {member.updatedAt || "N/A"}
                </p>
              </div>
            ))}
          </div>

          <Modal isOpen={isModalOpen} onClose={closeModal}>
            {selectedStaff && (
              <StaffPositionForm
                staffMember={selectedStaff}
                onClose={closeModal}
              />
            )}
          </Modal>
        </>
      )}
    </div>
  );
};

export default StaffPosition;
