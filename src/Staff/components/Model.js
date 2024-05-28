import React from "react";
import { motion } from "framer-motion";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="bg-white rounded-lg p-6 max-w-lg w-full"
      >
        <button
          onClick={onClose}
          className="absolute text-white top-2 right-2 text-xl font-bold"
        >
          X
        </button>
        {children}
      </motion.div>
    </div>
  );
};

export default Modal;
