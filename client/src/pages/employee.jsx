import React, { useEffect, useState } from "react";
import "./../components/style.css";
import EditEmployee from "../components/edit_employee";
import Delete_Employee from "../components/delete_employee";
import axios from "axios";
import ViewEmployee from "../components/view_employee";
import AddEmployee from "../components/add_employee";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
const Employee = () => {
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

  return (
    <div className="h-screen relative">
      {" "}
      {/* Navbar */}
      <Navbar />
      <div className="flex h-screen bg-gray-200 m-0 screen:h-screen overflow-auto screen:max-w-screen">
        {/* Sidebar */}
        <Sidebar />
        <div className="flex-1 p-12 mt-20 ">
          {/* Add Employee */}
          <div className="mb-5 flex ">
            <AddEmployee />
          </div>
          {/* Tables For employee */}

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
                    Address
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Contact
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Buttons
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
                    <td class="px-6 py-4">
                      {employee.province}, {employee.city},
                      {employee.municipality}, {employee.baranggay} (
                      {employee.zipcode})
                    </td>
                    <td class="px-6 py-4">{employee.mobile_number}</td>
                    <td class=" py-4 px-2 flex gap-2">
                      <ViewEmployee employee={employee} />
                      <EditEmployee employee={employee} />
                      <Delete_Employee employee={employee} />
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