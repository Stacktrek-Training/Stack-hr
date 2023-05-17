import React, { useEffect, useState } from "react";
import "./../components/style.css";
import axios from "axios";
import Sidebar2 from "../components/sidebar_employee";
import Navbar from "../components/navbar";

function Attendance({ employee }) {
  console.log(employee);
  const employeeData = employee && employee.length > 0 ? employee[0] : null;

  const [employeeId, setEmployeeId] = useState("");
  const [timeIn, setTimeIn] = useState(null);
  const [timeOut, setTimeOut] = useState(null);
  const [workingHours, setWorkingHours] = useState(null);

  const handleTimeIn = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/attendance/in",
        {
          employeeId,
        }
      );
      const { time_in: recordedTimeIn } = response.data;
      alert("Attendance Time In recorded successfully.");
      setTimeIn(recordedTimeIn);
      setEmployeeId("");
    } catch (err) {
      if (err.response && err.response.status === 409) {
        alert("Attendance Time In already recorded for today.");
      } else {
        console.error(err.message);
        alert("Error recording Attendance Time In.");
      }
    }
  };

  const handleTimeOut = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        "http://localhost:4000/api/attendance/out",
        {
          employeeId,
        }
      );
      const { time_out: recordedTimeOut } = response.data;
      alert("Attendance Time Out recorded successfully.");
      setTimeOut(recordedTimeOut);
      setEmployeeId("");

      if (timeIn && recordedTimeOut) {
        const diffInMs =
          new Date(recordedTimeOut).getTime() - new Date(timeIn).getTime();
        const workingHours = (diffInMs / (1000 * 60 * 60)).toFixed(2);
        setWorkingHours(workingHours);

        await axios.put("http://localhost:4000/api/attendance", {
          employeeId,
          timeOut: recordedTimeOut,
          workingHours,
        });
      }
    } catch (err) {
      if (err.response && err.response.status === 400) {
        alert("Employee has already timed out today or has not timed in.");
      } else {
        console.error(err.message);
        alert("Error recording Attendance Time Out.");
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
        <div class="mx-auto w-[400px] mt-40">
          {employeeData.employee_number}
          <form class="flex-1 flex-wrap flex-col p-20">
            <div className="mb-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="employeeId"
                type="text"
                placeholder="Enter your ID"
                value={employeeId}
                onChange={(e) => setEmployeeId(e.target.value)}
                style={{ fontSize: "24px" }}
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                className="bg-green-400 hover:bg-green-500 hover:text-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-lg"
                type="submit"
                onClick={handleTimeIn}>
                Time In
              </button>
              <button
                className="bg-red-500 hover:bg-red-600 hover:text-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-lg"
                type="submit"
                onClick={handleTimeOut}>
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
