import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./Auth/Auth/AuthProvider";
import {
  Appoint,
  StaffPosition,
  StaffSettings,
  Summery,
  TodayAppointments
} from "./components";

const Dashboard = () => {
  const { token, user, fetchUserDetails, logout, isConnected } = useAuth();
  const navigate = useNavigate();
  const [activeComponent, setActiveComponent] = useState("Dashboard");
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const StaffPos = [
    "Dashboard",
    "Appointments",
    "Medical History",
    "Donations",
    "BloodBank",
    "Staffs",
    "Settings",
  ];

  useEffect(() => {
    if (!token) {
      navigate("/Dashboard");
    } else if (!user) {
      fetchUserDetails();
    }
  }, [token, user, fetchUserDetails, navigate]);

  if (!token) {
    return navigate("/LoginStaff");
  }

  const handleButtonClick = (component) => {
    setActiveComponent(component);
  };

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden">
      {isSidebarVisible && (
        <div className="w-64 bg-gray-800 flex flex-col">
          <div className="h-16 flex items-center justify-center bg-slate-300  ">
            <h1 className="text-l font-bold  uppercase text-red-600">
              POSTION: {isConnected ? user?.position || "" : "Server OFFLINE"}
            </h1>
          </div>
          <nav className="flex-1 px-2 py-4 space-y-2">
            <ul>
              {StaffPos.map((item, index) => (
                <li
                  key={index}
                  onClick={() => handleButtonClick(item)}
                  className={`block px-4 py-2 m-1 rounded hover:bg-white text-white hover:text-black cursor-pointer ${
                    activeComponent === item ? "bg-slate-500" : "bg-slate-700"
                  }`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}

      <div className="flex-1  p-6 relative">
        <header className="flex items-center justify-between">
          <h1 className="text-2xl font-bold uppercase">{activeComponent}</h1>
          <div>
            <button
              onClick={toggleSidebar}
              className="px-4 py-2 bg-blue-500 text-white rounded mr-2"
            >
              {isSidebarVisible ? "Hide Sidebar" : "Show Sidebar"}
            </button>
            <button
              onClick={logout}
              className="px-4 py-2 bg-red-500 text-white rounded"
            >
              Log Out
            </button>
          </div>
        </header>

        {user && (
          <>
            {activeComponent === "Dashboard" && <Summery user={user} />}
            {activeComponent === "Appointments" && <Appoint />}
            {activeComponent === "Donations" && <TodayAppointments />}
            {activeComponent === "Staffs" && <StaffPosition />}
            {activeComponent === "Settings" && <StaffSettings />}
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
