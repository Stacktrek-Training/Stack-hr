import React from "react";
import "./../components/style.css";
import Sidebar2 from "../components/sidebar2";
import Navbar from "../components/navbar";

const EmployeeDashboard = ({ employee }) => {
  console.log(employee);
  const employeeData = employee && employee.length > 0 ? employee[0] : null;

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
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
