import React, { useEffect, useState } from "react";
import "./../components/style.css";
import axios from "axios";
import Sidebar2 from "../components/sidebar2";
import Navbar from "../components/navbar";

function Attendance1() {
  const [timeIn, setTimeIn] = useState(null);
  const [timeOut, setTimeOut] = useState(null);
  const id = 3;
  useEffect(() => {
    const fetchAttendance = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:4000/attendance/${id}`
        );
        if (data.length > 0) {
          // If employee has checked in, set the time_in state to the time_in value from the query result
          setTimeIn(data[0]), setTimeOut(data[0]);
        }
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchAttendance();
  }, []);

  const saveTimeIn = () => {
    try {
      axios
        .post(`http://localhost:4000/attendance`, {
          id: id,
        })
        .then((response) => {
          console.log(response.data);
          window.location.href = "/att";
        });
    } catch (error) {
      console.error(error.message);
    }
  };

  const saveTimeOut = async () => {
    try {
      await axios
        .put(`http://localhost:4000/attendance/${id}`)
        .then((response) => {
          console.log(response.data);
          window.location.href = "/att";
        });
    } catch (error) {
      console.error(error.message);
    }
  };
  const formatTime = (timeString) => {
    const date = new Date(`2023-05-10T${timeString}`);
    return date.toLocaleTimeString([], {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  };

  return (
    <div className="h-screen relative">
      {" "}
      {/* Navbar */}
      <Navbar />
      <div className="flex h-screen bg-gray-200 m-0">
        {/* Sidebar */}
        <Sidebar2 />
        <div class="mx-auto w-[400px] mt-40">
          <div className="mb-4">
            <div className="flex items-center justify-between">
              {timeIn ? (
                <button
                  onClick={saveTimeOut}
                  className="bg-red-500 hover:bg-red-600 hover:text-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-lg"
                  type="submit"
                >
                  Time Out
                </button>
              ) : (
                <button
                  onClick={saveTimeIn}
                  className="bg-green-400 hover:bg-green-500 hover:text-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-lg"
                  type="submit"
                >
                  Time In
                </button>
              )}
            </div>
            <div>
              {timeIn ? (
                <h1>Your time in is: {formatTime(timeIn.time_in)}</h1>
              ) : (
                ""
              )}
              {timeOut ? (
                <h1>
                  Your time out is: {timeOut && formatTime(timeOut.time_out)}
                </h1>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Attendance1;
