import React, { useEffect, useState } from "react";
import "./../components/style.css";
import EditEmployee from "../components/edit_employee";
import axios from "axios";
import ViewEmployee from "../components/view_employee";
import AddEmployee from "../components/add_employee";
import Sidebar from "../components/sidebar_hr";
import Navbar from "../components/navbar";
const Employee = ({ employee }) => {
  // for getting all employees
  const employeeData = employee && employee.length > 0 ? employee[0] : null;

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
      <Navbar employee={employeeData} />
      <div className="flex h-screen bg-gray-200 m-0 screen:h-screen overflow-auto screen:max-w-screen">
        {/* Sidebar */}
        <Sidebar />
        <div className="flex-1 p-12 mt-10 ">
          <div className="flex justify-start mb-3">
            <h1 className="text-3xl font-bold text-gray-700">Employees</h1>
          </div>
          {/* Add Employee */}
          <div className="mb-7 flex ">
            <AddEmployee />
          </div>
          {/* Tables For employee */}

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
                    Job Roles
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Address
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Contact
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Action
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
                    <td class="px-6 py-4 capitalize">{employee.address}</td>
                    <td class="px-6 py-4">{employee.mobile_number}</td>
                    <td class=" py-4 px-2 flex gap-2 text-center">
                      <ViewEmployee employee={employee} />
                      <EditEmployee employee={employee} />
                    </td>
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

export default Employee;
