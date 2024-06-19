import React, { useState } from "react";
import TodayAppointments from "../Appoint/TodaysAppointment";
import AppointDonor from "../Donor/AppointDonor";
import DonorId from "../Donor/DonorId";

const Appoint = () => {
  const donorHandler = [
    "AppointDonor",
    "TodayAppointment",
    "DeleteAppoint",
    "DonorId",
  ];
  const [activeComponent, setActiveComponent] = useState(null);

  const handleButtonClick = (component) => {
    setActiveComponent(component);
  };

  return (
    <>
      <div className="flex justify-start items-start text-2xl m-4">
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
      {activeComponent === "AppointDonor" && <AppointDonor />}
      {activeComponent === "DonorId" && <DonorId />}
      {activeComponent === "TodayAppointment" && <TodayAppointments />}
    </>
  );
};

export default Appoint;
