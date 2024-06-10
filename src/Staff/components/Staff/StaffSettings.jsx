import React, { useState } from "react";
import Modal from "../Model";
import { useAuth } from "../../Auth/Auth/AuthProvider";
import StaffSettingsForm from "./StaffSettingsForm";

const StaffSettings = () => {
  const { user } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className=" bg-opacity-80 rounded-lg p-6 max-w-4xl mx-auto mt-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Settings</h1>
      <div className="grid grid-cols-1 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="mb-4">
            <h2 className="text-2xl font-bold mb-2 text-gray-800 ">
              {user.staffName}
            </h2>
            <p className="text-gray-600">
              <strong>ID :</strong> {user.staffId}
            </p>
            <p className="text-gray-600">
              <strong>Position:</strong> {user.position}
            </p>
            <p className="text-gray-600">
              <strong>Contact Number:</strong> {user.contactNumber}
            </p>
            <p className="text-gray-600">
              <strong>Email:</strong> {user.email}
            </p>
            <p className="text-gray-600">
              <strong>Address:</strong> {user.address}
            </p>
            <p className="text-gray-600">
              <strong>Enabled:</strong> {user.enabled ? "Yes" : "No"}
            </p>
            <p className="text-gray-600">
              <strong>Created At:</strong> {user.createdAt}
            </p>
            <p className="text-gray-600">
              <strong>Updated At:</strong> {user.updatedAt}
            </p>
          </div>
          <button
            onClick={openModal}
            className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Edit Settings
          </button>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <StaffSettingsForm staffMember={user} onClose={closeModal} />
      </Modal>
    </div>
  );
};

export default StaffSettings;
