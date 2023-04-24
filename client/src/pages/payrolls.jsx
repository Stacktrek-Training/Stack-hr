import React, { useState } from "react";
import "./../components/style.css";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";

const Payroll = () => {
  return (
    <div className="h-screen relative">
      {" "}
      {/* Navbar */}
      <Navbar />
      <div className="flex h-screen bg-gray-200 m-0">
        {/* Sidebar */}
        <Sidebar />
        <div className="flex-1 p-20 ">
          <h1>Main Content Area</h1>
        </div>
      </div>
    </div>
  );
};

export default Payroll;
