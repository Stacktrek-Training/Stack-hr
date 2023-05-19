import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar2 from "../components/sidebar_employee";
import Navbar from "../components/navbar";

const EmployeeDashboard = ({ employee }) => {
  const employeeData = employee && employee.length > 0 ? employee[0] : null;
  const [totalAbsences, setTotalAbsences] = useState(0);
  const [daysAttended, setDaysAttended] = useState(0);

  useEffect(() => {
    if (employeeData) {
      axios
        .get(`/api/attendancetotal/${employeeData.employee_number}`)
        .then((response) => {
          const { totalAbsences, daysAttended } = response.data;
          setTotalAbsences(totalAbsences);
          setDaysAttended(daysAttended);
        })
        .catch((error) => {
          console.log("Error fetching attendance data:", error);
        });
    }
  }, [employeeData]);

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
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
