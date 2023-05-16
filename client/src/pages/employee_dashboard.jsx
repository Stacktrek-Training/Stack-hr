import React from "react";
import "./../components/style.css";
import Sidebar2 from "../components/sidebar2";
import Navbar from "../components/navbar";

const EmployeeDashboard = () => {
  // Assuming you have variables for totalAbsences and daysAttended
  const totalAbsences = 5;
  const daysAttended = 20;

  return (
    <div className="h-screen relative">
      {/* Navbar */}
      <Navbar />
      <div className="flex h-screen bg-gray-200 m-0">
        {/* Sidebar */}
        <Sidebar2 />
        <div className="flex-1 flex-wrap flex-col p-20">
          {/* Dashboard content */}
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-red-500 p-4 rounded-lg">
              <h2 className="text-3xl font-bold text-white">Total Absences</h2>
              <p className="text-2xl text-white">{totalAbsences}</p>
            </div>
            <div className="bg-green-500 p-4 rounded-lg">
              <h2 className="text-3xl font-bold text-white">Days Attended</h2>
              <p className="text-2xl text-white">{daysAttended}</p>
            </div>
          </div>
          {/* Other content for the dashboard */}
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
