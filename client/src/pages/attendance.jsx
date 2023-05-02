import React, { useEffect, useState } from "react";
import "./../components/style.css";
import axios from "axios";
import Sidebar2 from "../components/sidebar2";
import Navbar from "../components/navbar";

const Attendance = () => {
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

  const [timeIn, setTimeIn] = useState({});
  const [timeOut, setTimeOut] = useState({});

  const handleTimeIn = (employee) => {
    setTimeIn((prevTimeIn) => ({
      ...prevTimeIn,
      [employee.employee_id]: new Date(),
    }));
  };

  const handleTimeOut = (employee) => {
    setTimeOut((prevTimeOut) => ({
      ...prevTimeOut,
      [employee.employee_id]: new Date(),
    }));

    // Calculate working hours
    const timeInMs = timeIn[employee.employee_id]?.getTime();
    const timeOutMs = new Date().getTime(); // use current time as time out
    const workingHoursMs = timeOutMs - timeInMs;
    const workingHours = Math.floor(workingHoursMs / (1000 * 60 * 60));
    const workingMinutes = Math.floor(
      (workingHoursMs % (1000 * 60 * 60)) / (1000 * 60)
    );
    const workingHoursStr = `${workingHours} hours ${workingMinutes} minutes`;

    // Send POST request to backend API
    axios
      .post("http://localhost:4000/attendance", {
        employee_id: employee.employee_id,
        time_in: timeIn[employee.employee_id],
        time_out: new Date(),
        working_hours: workingHoursStr,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const calculateWorkingHours = (employee) => {
    const timeInMs = timeIn[employee.employee_id]?.getTime();
    const timeOutMs = timeOut[employee.employee_id]?.getTime();
    if (timeInMs && timeOutMs) {
      const workingHoursMs = timeOutMs - timeInMs;
      const workingHours = Math.floor(workingHoursMs / (1000 * 60 * 60));
      const workingMinutes = Math.floor(
        (workingHoursMs % (1000 * 60 * 60)) / (1000 * 60)
      );
      return `${workingHours} hours ${workingMinutes} minutes`;
    } else {
      return "N/A";
    }
  };

  return (
    <div className="h-screen relative">
      {" "}
      {/* Navbar */}
      <Navbar />
      <div className="flex h-screen bg-gray-200 m-0 screen:h-screen overflow-auto screen:max-w-screen">
        {/* Sidebar */}
        <Sidebar2 />
        {/* Searchbar */}
        <div className="flex-1 p-12 mt-20 ">
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
          <br></br>
          {/* Tables For employee attendance */}

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
                    Job Roles
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Time In
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Time Out
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Working Hours
                  </th>
                </tr>
              </thead>

              <tbody>
                {employees.map((employee, index) => (
                  <tr
                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    key={employee.employee_id}
                  >
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {index + 1}
                    </th>
                    <td class="px-6 py-4 capitalize">
                      {employee.last_name}, {employee.first_name}{" "}
                      {employee.middle_name}
                    </td>
                    <td class="px-6 py-4">{employee.job_title}</td>
                    <td>
                      {timeIn[employee.employee_id] ? (
                        <div>
                          {timeIn[employee.employee_id].toLocaleString()}
                        </div>
                      ) : (
                        <button
                          onClick={() => handleTimeIn(employee)}
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                          Time In
                        </button>
                      )}
                    </td>
                    <td>
                      {timeOut[employee.employee_id] ? (
                        <div>
                          {timeOut[employee.employee_id].toLocaleString()}
                        </div>
                      ) : (
                        <button
                          onClick={() => handleTimeOut(employee)}
                          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        >
                          Time Out
                        </button>
                      )}
                    </td>

                    <td>{calculateWorkingHours(employee)}</td>
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

export default Attendance;
