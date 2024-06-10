import React from "react";

const Summery = ({ user }) => {
  return (
    <div>
      <main className="mt-6">
        {user ? (
          <div>
            <h2 className="text-lg font-bold text-green-600">
              Welcome, {user.staffName}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              <div className="p-6  rounded-lg shadow-md">
                <h2 className="text-lg font-medium">Total Donors</h2>
                <p className="mt-2 text-3xl font-bold">150</p>
              </div>
              <div className="p-6  rounded-lg shadow-md">
                <h2 className="text-lg font-medium">Appointments Today</h2>
                <p className="mt-2 text-3xl font-bold">25</p>
              </div>
              <div className="p-6  rounded-lg shadow-md">
                <h2 className="text-lg font-medium">Blood Units Collected</h2>
                <p className="mt-2 text-3xl font-bold">40</p>
              </div>
            </div>
          </div>
        ) : (
          <p>Loading user details...</p>
        )}
      </main>
    </div>
  );
};

export default Summery;
