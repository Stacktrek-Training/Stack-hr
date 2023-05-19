import React, { useEffect, useState } from "react";
import "./../components/style.css";
import axios from "axios";
import Sidebar2 from "../components/sidebar_employee";
import Navbar from "../components/navbar";

function Attendance({ employee }) {
  console.log(employee);
  const employeeData = employee && employee.length > 0 ? employee[0] : null;

  const [employeeNumber, setEmployeeNumber] = useState("");
  const [timeIn, setTimeIn] = useState(null);
  const [timeOut, setTimeOut] = useState(null);
  const [workingHours, setWorkingHours] = useState(null);
  const [status, setStatus] = useState("");
  const id = employeeData.employee_id;
  const handleTimeIn = async (e) => {
    e.preventDefault();
    try {
      if (employeeNumber === employeeData.employee_number) {
        const response = await axios.post(
          "http://localhost:4000/api/attendance/in",
          {
            employeeNumber,
            id,
          }
        );
        const { time_in: recordedTimeIn } = response.data;
        alert("Attendance Time In recorded successfully.");
        setTimeIn(recordedTimeIn);
        setEmployeeNumber("");
      } else {
        alert("Employee number is not yours");
      }
    } catch (err) {
      if (err.response && err.response.status === 409) {
        alert("Attendance Time In already recorded for today.");
      } else {
        console.error(err.message);
        alert("Error recording Attendance Time In.");
      }
    }
  };

  // Handler for recording time out
  const handleTimeOut = async (e) => {
    e.preventDefault();

    try {
      if (employeeNumber === employeeData.employee_number) {
        const response = await axios.put(
          "http://localhost:4000/api/attendance/out",
          {
            employeeNumber,
          }
        );

        const { time_out: recordedTimeOut } = response.data;

        setTimeOut(recordedTimeOut);
        setEmployeeNumber("");

        if (timeOut) {
          alert("You have already timed out for today.");
          return;
        }

        const diffInMs = new Date(recordedTimeOut) - new Date(timeIn);
        const workingHours = (diffInMs / (1000 * 60 * 60)).toFixed(2);
        setWorkingHours(workingHours);

        let newStatus = "";
        if (workingHours >= 1) {
          newStatus = "Present";
        } else {
          newStatus = "Absent";
        }
        setStatus(newStatus);

        await axios.put("http://localhost:4000/api/attendance", {
          employeeNumber,
          timeOut: recordedTimeOut,
          workingHours,
          status: newStatus,
        });
        alert("Attendance Time Out recorded successfully.");
        // Reset the timeIn state to null
        setTimeIn(null);
      } else {
        alert("Employee number is not yours");
      }
    } catch (err) {
      if (err.response && err.response.status === 400) {
        alert("Employee has already timed out today or has not timed in.");
      }
    }
  };
  return (
    <div className="h-screen relative">
      {/* Navbar */}
      <Navbar employee={employeeData} />
      <div className="flex h-screen bg-gray-200 m-0">
        {/* Sidebar */}
        <Sidebar2 />
        <div class="mx-auto w-[400px] mt-40 ">
          <form class="flex-1 flex-wrap flex-col p-20">
            {/* Display Time In */}
            {timeIn && !timeOut && (
              <div className="text-center mb-4">
                <p className="text-lg font-semibold text-green-500">Time In</p>
                <p className="text-2xl font-semibold">
                  Date: {new Date(timeIn).toLocaleDateString()}
                </p>
                <p className="text-2xl font-semibold">
                  Time: {new Date(timeIn).toLocaleTimeString()}
                </p>
              </div>
            )}
            {/* Display Time Out */}
            {timeOut && (
              <div className="text-center mb-4">
                <p className="text-lg   font-semibold text-red-500">Time Out</p>
                <p className="text-2xl font-semibold">
                  Date: {new Date(timeOut).toLocaleDateString()}
                </p>
                <p className="text-2xl font-semibold">
                  Time: {new Date(timeOut).toLocaleTimeString()}
                </p>
              </div>
            )}

            <div className="mb-4 w-200">
              <input
                className="shadow appearance-none border rounded w-full h-12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="employeeNumber"
                type="text"
                placeholder="Enter your employee number"
                value={employeeNumber}
                onChange={(e) => setEmployeeNumber(e.target.value)}
                style={{ fontSize: "14px" }}
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                className="bg-green-400 hover:bg-green-500 hover:text-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-lg"
                type="submit"
                onClick={handleTimeIn}
              >
                Time In
              </button>
              <button
                className="bg-red-500 hover:bg-red-600 hover:text-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-lg"
                type="submit"
                onClick={handleTimeOut}
              >
                Time Out
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Attendance;
