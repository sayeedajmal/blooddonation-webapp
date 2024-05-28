import axios from "axios";
import React, { useState } from "react";

const StaffSettingsForm = ({ staffMember, onClose }) => {
  const [staffName, setStaffName] = useState(staffMember.staffName || "");
  const [email, setEmail] = useState(staffMember.email || "");
  const [contactNumber, setContactNumber] = useState(
    staffMember.contactNumber || ""
  );
  const [address, setAddress] = useState(staffMember.address || "");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState("");
  const ApiUrl = process.env.REACT_APP_API_URL;

  const updateStaffSettings = async () => {
    try {
      const updatedStaff = {
        staffId: staffMember.staffId,
        staffName,
        email,
        contactNumber,
        address,
        password,
      };

      const response = await axios.patch(
        `${ApiUrl}/staff/updateStaff`,
        updatedStaff,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      setResponse(response.data);
      onClose();
    } catch (error) {
      setResponse("Error " + error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-2">
      <h1 className="text-3xl font-bold mb-8">Update Staff Settings</h1>
      <form
        className="flex flex-col items-start space-y-4 text-lg w-96"
        onSubmit={(e) => {
          e.preventDefault();
          updateStaffSettings();
        }}
      >
        <input
          type="text"
          value={staffName}
          onChange={(e) => setStaffName(e.target.value)}
          className="border border-gray-400 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          placeholder="Name"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-400 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          placeholder="Email"
        />
        <input
          type="text"
          value={contactNumber}
          onChange={(e) => setContactNumber(e.target.value)}
          className="border border-gray-400 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          placeholder="Contact Number"
        />
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="border border-gray-400 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          placeholder="Address"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-400 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          placeholder="Password"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Update
        </button>
      </form>
      {response && <p className="text-red-600 mt-4">{response}</p>}
    </div>
  );
};

export default StaffSettingsForm;
