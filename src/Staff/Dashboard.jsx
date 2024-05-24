import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./Auth/Auth/AuthProvider";
import Summery from "./components/StaffPos/Summery";
import Donor from "./components/StaffPos/Donor";

const Dashboard = () => {
  const { token, user, fetchUserDetails, logout } = useAuth();
  const navigate = useNavigate();
  const [activeComponent, setActiveComponent] = useState("Dashboard");

  const StaffPos = [
    "Dashboard",
    "Donors",
    "Appointments",
    "Medical History",
    "Donations",
    "BloodBank",
    "Staffs",
    "Settings",
  ];

  useEffect(() => {
    if (!token) {
      navigate("/staff");
    } else if (!user) {
      fetchUserDetails();
    }
  }, [token, user, fetchUserDetails, navigate]);

  if (!token) {
    return navigate("/staff");
  }

  const handleButtonClick = (component) => {
    setActiveComponent(component);
  };

  return (
    <div className="flex h-screen">
      <div className="w-64 bg-gray-800 text-white flex flex-col">
        <div className="h-16 flex items-center justify-center bg-gray-900">
          <h1 className="text-xl font-bold">{user?.position || ""}</h1>
        </div>
        <nav className="flex-1 px-2 py-4 space-y-2">
          {StaffPos.map((item, index) => (
            <li
              key={index}
              onClick={() => handleButtonClick(item)}
              className="block px-4 py-2 bg-slate-500 rounded hover:bg-gray-700 cursor-pointer"
            >
              {item}
            </li>
          ))}
        </nav>
      </div>

      <div className="flex-1 bg-gray-100 p-6">
        <header className="flex items-center justify-between">
          <h1 className="text-2xl font-bold uppercase">{activeComponent}</h1>
          <button
            onClick={logout}
            className="px-4 py-2 bg-red-500 text-white rounded"
          >
            Log Out
          </button>
        </header>

        {/* Conditionally render components based on user existence */}
        {user && (
          <>
            {activeComponent === "Dashboard" && <Summery user={user} />}
            {activeComponent === "Donors" && <Donor />}
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
