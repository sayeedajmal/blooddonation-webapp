import React, { useState } from "react";
import { motion } from "framer-motion";
import "tailwindcss/tailwind.css";

const StaffPositionForm = ({ staffMember, onClose }) => {
  const [position, setPosition] = useState(staffMember.position || "");
  const [enabled, setEnabled] = useState(staffMember.enabled || false);
  const [response, setResponse] = useState("");
  const ApiUrl = process.env.REACT_APP_API_URL;

  const updateStaffPosition = async () => {
    try {
      const response = await fetch(
        `${ApiUrl}/staff/updateStaffPosition?staffId=${
          staffMember.staffId
        }&position=${encodeURIComponent(position)}&enabled=${enabled}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const data = await response.text();
      setResponse(data);
      onClose();
    } catch (error) {
      setResponse("Error " + error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-2">
      <h1 className="text-4xl mb-8">Update Staff Position</h1>
      <form
        className="flex flex-col items-center space-y-4 text-2xl"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          placeholder="Position"
          id="position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          className="p-2 border border-gray-300 rounded-lg"
        />
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="enabled"
            checked={enabled}
            onChange={(e) => setEnabled(e.target.checked)}
            className="h-6 w-6"
          />
          <span>Enabled</span>
        </label>
        <div className="flex space-x-4">
          <button
            type="reset"
            onClick={() => {
              setPosition("");
              setEnabled(false);
            }}
            className="px-4 py-2 bg-red-500 text-white rounded-lg"
          >
            Clear
          </button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="button"
            onClick={updateStaffPosition}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            Submit
          </motion.button>
        </div>
      </form>
      <h3 className="text-2xl mt-8" id="responseShow">
        {response}
      </h3>
    </div>
  );
};

export default StaffPositionForm;
