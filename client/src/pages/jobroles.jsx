import React, { useState, useEffect } from "react";
import "./../components/style.css";
import Sidebar from "../components/sidebar_hr";
import Navbar from "../components/navbar";
import AddJobRoles from "../components/add_jobroles";
import EditJobRoles from "../components/edit_jobroles";
import axios from "axios";

const JobRoles = ({ employee }) => {
  const employeeData = employee && employee.length > 0 ? employee[0] : null;

  const [jobrole, setJobrole] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/jobroles")
      .then((response) => {
        setJobrole(response.data);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className="h-screen relative">
      {" "}
      {/* Navbar */}
      <Navbar employee={employeeData} />
      <div className="flex h-screen bg-gray-200 m-0">
        {/* Sidebar */}
        <Sidebar />
        <div className="flex-1 p-12 mt-10">
          <div className="flex justify-start mb-3">
            <h1 className="text-3xl font-bold text-gray-700">Position</h1>
          </div>
          <div className="mb-5 flex ">
            {/* Add Job Role */}
            <AddJobRoles />
          </div>
          <div class="relative Table overflow-x-auto shadow-md rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 text-center uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    #
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Position
                  </th>

                  <th scope="col" class="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {jobrole.map((jobrole, index) => (
                  <tr
                    class="bg-white border-b text-center dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    key={jobrole.job_role_id}>
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {index + 1}
                    </th>
                    <td class="px-6 py-4 capitalize">{jobrole.job_title}</td>
                    <td class=" px-6 py-4">
                      <EditJobRoles jobrole={jobrole} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobRoles;
