import React from "react";
import "./../components/style.css";
import Admin from "./admin_dashboard";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";

const Dashboard = () => {
  return (
    <div className="h-screen relative">
      {" "}
      {/* Navbar */}
      <Navbar />
      <div className="flex h-screen bg-gray-200 m-0">
        {/* Sidebar */}
        <Sidebar />
        <div className="flex-1 flex-wrap  flex-col p-20 ">
          <Admin />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
