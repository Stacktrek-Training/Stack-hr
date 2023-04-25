import React, { useState, useEffect } from "react";
import "./../components/style.css";
// import ShowDescription from "../components/hide_desc";
// import EditDeduction from "../components/edit_deduction";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import ShowTable from "./show_table";
import axios from "axios";

const Table = () => {
  const formatter = new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
    minimumFractionDigits: 2,
  });

  return (
    <div className="h-screen relative">
      {" "}
      {/* Navbar */}
      <Navbar />
      <div className="flex h-screen bg-gray-200 m-0">
        {/* Sidebar */}
        <Sidebar />
        <div className="flex-1 p-12 mt-20">
          <div className=" flex justify-between mb-2">
            {" "}
            <ShowTable />
          </div>
          <div className="mb-5 flex "></div>
        </div>
      </div>
    </div>
  );
};

export default Table;
