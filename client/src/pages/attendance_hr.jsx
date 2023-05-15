import React, { useEffect, useState } from "react";
import "./../components/style.css";
import axios from "axios";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
const AttendanceHr = () => {
  // for getting all employees
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/employee")
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="h-screen relative">
      {" "}
      {/* Navbar */}
      <Navbar />
      <div className="flex h-screen bg-gray-200 m-0 screen:h-screen overflow-auto screen:max-w-screen">
        {/* Sidebar */}
        <Sidebar />

        <div className="flex-1 p-12 mt-10 ">
          {/* Add Employee */}
          {/* Tables For employee */}
          <div className="flex justify-start mb-3">
            <h1 className="text-3xl font-bold text-gray-700">
              Employee Attendance
            </h1>
          </div>
          <div className="flex w-full justify-between mb-5">
            <div class="flex items-center">
              <label for="simple-search" class="sr-only">
                Search
              </label>
              <div class="relative w-full search ">
                <div class="search_icon  inset-y-0  flex items-center  ">
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>

                <input
                  type="text"
                  id="simple-search"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-30  pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search"
                  required
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="flex space-x-1">
              <input
                type="date"
                className="ml-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-30  pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <button
                title="Sort"
                class=" flex  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5  py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
              >
                SORT
              </button>
            </div>
          </div>

          <div className="relative Table overflow-x-auto shadow-md ">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 sticky top-0">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    #
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Employee Name
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Job Role
                  </th>

                  <th scope="col" class="px-6 py-3">
                    Date
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Time In
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Time Out
                  </th>
                </tr>
              </thead>
              <tbody>
                {employees.map((employee) => (
                  <tr
                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    key={employee.employee_id}
                  >
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {employee.employee_number}
                    </th>
                    <td class="px-6 py-4 capitalize">
                      {employee.last_name}, {employee.first_name}{" "}
                      {employee.middle_name}
                    </td>
                    <td class="px-6 py-4">{employee.job_title}</td>
                    <td class="px-6 py-4 capitalize">January, 1 2000</td>
                    <td class="px-6 py-4 capitalize">8:00 AM</td>
                    <td class="px-6 py-4">4:00 PM</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div
            className="mt-2 flex justify-center
          "
          ></div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceHr;
