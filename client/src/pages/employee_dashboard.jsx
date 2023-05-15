import React from "react";
import "./../components/style.css";
import Sidebar2 from "../components/sidebar2";
import Navbar from "../components/navbar";

const EmployeeDashboard = () => {
  return (
    <div className="h-screen relative">
      {" "}
      {/* Navbar */}
      <Navbar />
      <div className="flex h-screen bg-gray-200 m-0">
        {/* Sidebar */}
        <Sidebar2 />
        <div className="flex-1 flex-wrap  flex-col p-20 ">
          <h1>adminfdsfjdsjf</h1>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
