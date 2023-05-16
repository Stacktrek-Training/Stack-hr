import React from "react";
import "./../components/style.css";
import Sidebar2 from "../components/sidebar2";
import Navbar from "../components/navbar";

const EmployeeDashboard = ({ employee }) => {
  console.log(employee);
  const employeeData = employee && employee.length > 0 ? employee[0] : null;
  // Assuming you have variables for totalAbsences and daysAttended
  const totalAbsences = 5;
  const daysAttended = 20;

  return (
    <div className="h-screen relative">
      {/* Navbar */}
      <Navbar employeeId={employeeData?.employee_id} />
      <div className="flex h-screen bg-gray-200 m-0">
        {/* Sidebar */}
        <Sidebar2 />
        <div className="flex-1 flex-wrap flex-col p-20">
          {/* other content for the dashboard */}
          {employeeData && (
            <div>
              <h1 className="font-extrabold text-4xl">
                Welcome {employeeData.first_name}
              </h1>
              {/* Display other employee properties */}
            </div>
          )}
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
