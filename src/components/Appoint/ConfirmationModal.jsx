// ConfirmationModal.jsx
import React from 'react';

const ConfirmationModal = ({ show, onConfirm, onCancel }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded-md">
        <h2 className="text-lg font-bold mb-4">Confirm Submission</h2>
        <p className="mb-4">Are you sure you want to submit the form?</p>
        <div className="flex justify-end space-x-4">
          <button
            className="bg-gray-500 text-white rounded-md px-4 py-2"
            onClick={onCancel}
          >
            No
          </button>
          <button
            className="bg-red-500 text-white rounded-md px-4 py-2"
            onClick={onConfirm}
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
