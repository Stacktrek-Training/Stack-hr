import React, { useEffect, useState } from "react";
import "./../components/style.css";
import axios from "axios";
import Sidebar from "../components/sidebar_hr";
import Navbar from "../components/navbar";
const AttendanceHr = ({ employee }) => {
  const employeeData = employee && employee.length > 0 ? employee[0] : null;

  // for getting all employees
  const [attendanceData, setAttendanceData] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");

  useEffect(() => {
    fetchAttendanceData(selectedDate);
  }, [selectedDate]);

  const fetchAttendanceData = (date) => {
    const currentDate = date || new Date().toISOString().split("T")[0];
    axios
      .post("http://localhost:4000/employeeAttendance", { date: currentDate })
      .then((response) => {
        setAttendanceData(response.data);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="h-screen relative">
      {" "}
      {/* Navbar */}
      <Navbar employee={employeeData} />
      <div className="flex h-screen bg-gray-200 m-0 screen:h-screen overflow-auto screen:max-w-screen">
        {/* Sidebar */}
        <Sidebar />

        <div className="flex-1 p-12 mt-10 ">
          {/* Add Employee */}
          {/* Tables For employee */}
          <div className="flex justify-start mb-5">
            <h1 className="text-3xl font-bold text-gray-700">
              Employee Attendance
            </h1>
          </div>
          <div className="flex w-full justify-between mb-6">
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
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"></path>
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
            <form action="">
              <div className="flex space-x-1">
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="ml-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-30  pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
            </form>
          </div>

          <div className="relative Table overflow-x-auto shadow-md rounded-lg ">
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
                {attendanceData.map((attendance) => (
                  <tr
                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    key={attendance.attendance_id}>
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {attendance.employee_number}
                    </th>
                    <td class="px-6 py-4 capitalize">
                      {`${attendance.last_name}${", "}${
                        attendance.first_name
                      } ${attendance.middle_name}`}
                    </td>

                    <td class="px-6 py-4 capitalize">
                      {" "}
                      {new Date(attendance.time_in).toLocaleDateString(
                        "en-US",
                        {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        }
                      )}
                    </td>
                    <td class="px-6 py-4 capitalize">
                      {new Date(attendance.time_in).toLocaleTimeString(
                        "en-US",
                        {
                          hour: "numeric",
                          minute: "numeric",
                          hour12: true,
                        }
                      )}
                    </td>
                    <td class="px-6 py-4">
                      {attendance.time_out
                        ? new Date(attendance.time_out).toLocaleTimeString(
                            "en-US",
                            {
                              hour: "numeric",
                              minute: "numeric",
                              hour12: true,
                            }
                          )
                        : "-----------"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div
            className="mt-2 flex justify-center
          "></div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceHr;
