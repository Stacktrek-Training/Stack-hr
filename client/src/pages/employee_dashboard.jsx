import React, { useEffect, useState } from "react";
import "./../components/style.css";
import Sidebar2 from "../components/sidebar_employee";
import Navbar from "../components/navbar";

const EmployeeDashboard = ({ employee }) => {
  console.log(employee);
  const employeeData = employee && employee.length > 0 ? employee[0] : null;
  const [totalAbsences, setTotalAbsences] = useState(0);
  const [daysAttended, setDaysAttended] = useState(0);
  const [totalUndertime, setDaysUndertime] = useState(0);
  const [totalLeave, setDaysLeave] = useState(0);

  useEffect(() => {
    // Fetch the attendance data from your backend API
    fetchAttendanceData()
      .then((data) => {
        setTotalAbsences(data.totalAbsences);
        setDaysAttended(data.daysAttended);
        setDaysUndertime(data.totalUndertime);
        setDaysLeave(data.totalLeave);
      })
      .catch((error) => {
        console.log("Error fetching attendance data:", error);
      });
  }, []);

  // Function to fetch attendance data from the backend API
  const fetchAttendanceData = async () => {
    try {
      const response = await fetch("/api/attendance"); // Replace "/api/attendance" with the appropriate API endpoint
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error("Failed to fetch attendance data");
    }
  };

  return (
    <div className="h-screen relative">
      {/* Navbar */}
      <Navbar employee={employeeData} />
      <div className="flex h-screen bg-gray-200 m-0">
        {/* Sidebar */}
        <Sidebar2 />
        <div className="flex-1 flex-wrap flex-col p-20">
          {/* other content for the dashboard */}
          {employeeData && (
            <div>
              <h1 className="font-extrabold text-4xl text-orange-500">
                Welcome {employeeData.first_name}
              </h1>
              <br></br>
              {/* Display other employee properties */}
            </div>
          )}
          {/* Dashboard content */}
          <div className="grid grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-300 p-12 rounded-lg border border-black">
              <h2 className="text-3xl font-bold text-black mb-8">
                Total Absences
              </h2>
              <p className="text-4xl text-red-500">{totalAbsences}</p>
            </div>
            <div className="bg-gray-300 p-12 rounded-lg border border-black">
              <h2 className="text-3xl font-bold text-black mb-8">
                Days Attended
              </h2>
              <p className="text-4xl text-green-500">{daysAttended}</p>
            </div>
          </div>
          <br /> <br /> {/* Line break */}
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-gray-300 p-12 rounded-lg border border-black">
              <h2 className="text-3xl font-bold text-black mb-8">
                Total Undertime
              </h2>
              <p className="text-4xl text-yellow-400">{totalUndertime}</p>
            </div>
            <div className="bg-gray-300 p-12 rounded-lg border border-black">
              <h2 className="text-3xl font-bold text-black mb-8">
                Total Leave
              </h2>
              <p className="text-4xl text-blue-500">{totalLeave}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
