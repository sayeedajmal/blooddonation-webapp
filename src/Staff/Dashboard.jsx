import React from "react";

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white flex flex-col">
        <div className="h-16 flex items-center justify-center bg-gray-900">
          <h1 className="text-xl font-bold">Blood Donor Staff</h1>
        </div>
        <nav className="flex-1 px-2 py-4 space-y-2">
          <a href="##" className="block px-4 py-2 rounded hover:bg-gray-700">
            Dashboard
          </a>
          <a href="###" className="block px-4 py-2 rounded hover:bg-gray-700">
            Donors
          </a>
          <a href="##" className="block px-4 py-2 rounded hover:bg-gray-700">
            Appointments
          </a>
          <a href="##" className="block px-4 py-2 rounded hover:bg-gray-700">
            Reports
          </a>
          <a href="##" className="block px-4 py-2 rounded hover:bg-gray-700">
            Settings
          </a>
        </nav>
      </div>

      <div className="flex-1 bg-gray-100 p-6">
        <header className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Dashboard</h1>
          <button className="px-4 py-2 bg-red-500 text-white rounded">
            Log Out
          </button>
        </header>

        <main className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h2 className="text-lg font-medium">Total Donors</h2>
              <p className="mt-2 text-3xl font-bold">150</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h2 className="text-lg font-medium">Appointments Today</h2>
              <p className="mt-2 text-3xl font-bold">25</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h2 className="text-lg font-medium">Blood Units Collected</h2>
              <p className="mt-2 text-3xl font-bold">40</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
