import React, { useState } from "react";
import TodayAppointments from "../Appoint/TodaysAppointment";

const Appoint = () => {
  const donorHandler = ["TodayAppointment", "DeleteAppoint"];
  const [activeComponent, setActiveComponent] = useState(null);

  const handleButtonClick = (component) => {
    setActiveComponent(component);
  };

  return (
    <>
      <div className="flex justify-center items-center text-2xl m-4">
        <ul className="flex justify-evenly w-5/12">
          {donorHandler.map((item, index) => (
            <li key={index}>
              <button
                onClick={() => handleButtonClick(item)}
                className="px-5 py-3 text-white rounded-full m-2 bg-slate-600"
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Conditionally render components based on the button clicked */}
      {activeComponent === "TodayAppointment" && <TodayAppointments />}
    </>
  );
};

export default Appoint;
