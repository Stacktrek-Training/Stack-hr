import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar2 from "../components/sidebar_employee";
import Navbar from "../components/navbar";

const EmployeeDashboard = ({ employee }) => {
  const employeeData = employee && employee.length > 0 ? employee[0] : null;
  const [totalAbsences, setTotalAbsences] = useState(0);
  const [totalPresents, setTotalPresents] = useState(0);

  useEffect(() => {
    const fetchAttendanceData = async () => {
      if (employeeData) {
        try {
          const response = await axios.post(
            `http://localhost:4000/api/attendancetotal/${employeeData.employee_number}`
          );
          const { present_count, absent_count } = response.data;
          setTotalPresents(present_count);
          setTotalAbsences(absent_count);
        } catch (error) {
          console.log("Error fetching attendance data:", error);
        }
      }
    };

    fetchAttendanceData();
  }, [employeeData]);

  return (
    <div className="h-screen relative">
      <Navbar employee={employeeData} />
      <div className="flex h-screen bg-gray-200 m-0">
        <Sidebar2 />
        <div className="flex-1 flex-wrap flex-col p-20">
          {employeeData && (
            <div>
              <h1 className="font-extrabold text-4xl text-orange-500">
                Welcome {employeeData.first_name}
              </h1>
              <br />
              {/* Display other employee properties */}
            </div>
          )}
          <div className="grid grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-300 p-12 rounded-lg border border-black">
              <h2 className="text-3xl font-bold text-black mb-8">
                Total Absences
              </h2>
              <p className="text-4xl text-red-500">{totalAbsences}</p>
            </div>
            <div className="bg-gray-300 p-12 rounded-lg border border-black">
              <h2 className="text-3xl font-bold text-black mb-8">
                Total Presents
              </h2>
              <p className="text-4xl text-green-500">{totalPresents}</p>
            </div>
          </div>
          <br /> <br />
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
