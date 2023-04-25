import React, { useState, useEffect } from "react";
import "./../components/style.css";
// import ShowDescription from "../components/hide_desc";
// import EditDeduction from "../components/edit_deduction";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import ShowTable from "./show_table";

const PhilHealth = () => {
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
          <div class="relative Table overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 text-center uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 sticky top-0">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    #
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Month Basic Salary
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Monthly Premium
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Employee Share (%)
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Employer Share (%)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white border-b text-center dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    1
                  </th>
                  <td class="px-6 py-4 capitalize">Sunny Virgo</td>
                  <td class="px-6 py-4">3000</td>

                  <td class="px-6 py-4">100</td>
                  <td class=" px-6 py-4">1000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhilHealth;
