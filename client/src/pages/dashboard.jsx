import React from "react";
import "./../components/style.css";
import Sidebar from "../components/sidebar_hr";
import Navbar from "../components/navbar";

const Dashboard = ({ employee }) => {
  const employeeData = employee && employee.length > 0 ? employee[0] : null;

  console.log(employee);
  return (
    <div className="h-screen relative">
      {" "}
      {/* Navbar */}
      <Navbar employee={employeeData} />
      <div className="flex h-screen bg-gray-200 m-0">
        {/* Sidebar */}
        <Sidebar />
        <div className="flex-1 flex-wrap  flex-col p-20 "></div>
      </div>
    </div>
  );
};

export default Dashboard;
