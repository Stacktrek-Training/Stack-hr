import React, { useEffect, useState } from "react";
import "./../components/style.css";
import axios from "axios";

function Attendance() {
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
      const { timeIn: recordedTimeIn } = response.data;
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
      const { timeOut: recordedTimeOut } = response.data;
      alert("Attendance Time Out recorded successfully.");
      setTimeOut(recordedTimeOut);
      setEmployeeId("");

      if (timeIn && recordedTimeOut) {
        const diffInMs =
          new Date(recordedTimeOut).getTime() - new Date(timeIn).getTime();
        const workingHours = (diffInMs / (1000 * 60 * 60)).toFixed(2);
        setWorkingHours(workingHours);

        await axios.post("http://localhost:4000/api/attendance", {
          employeeId,
          timeIn,
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
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="w-full max-w-md">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2 "
              htmlFor="employeeId"
            >
              Employee ID
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="employeeId"
              type="text"
              placeholder="Enter Employee ID"
              value={employeeId}
              onChange={(e) => setEmployeeId(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-green-400 hover:bg-green-500 hover:text-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              onClick={handleTimeIn}
            >
              Time In
            </button>
            <button
              className="bg-red-500 hover:bg-red-600 hover:text-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              onClick={handleTimeOut}
            >
              Time Out
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Attendance;
