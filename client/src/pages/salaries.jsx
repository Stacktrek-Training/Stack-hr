import React, { useState, useEffect } from "react";
import "./../components/style.css";
import EditSalary from "../components/edit_salaries";
import Sidebar from "../components/sidebar_hr";
import axios from "axios";
import Navbar from "../components/navbar";
import AddSalaries from "../components/add_salaries";

const Salaries = ({ employee }) => {
  const employeeData = employee && employee.length > 0 ? employee[0] : null;

  const [salaries, setSalaries] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/salaries")
      .then((response) => {
        setSalaries(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/employees")
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  const formatter = new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
    minimumFractionDigits: 2,
  });

  return (
    <div className="h-screen relative">
      {" "}
      {/* Navbar */}
      <Navbar employee={employeeData} />
      <div className="flex h-screen bg-gray-200 m-0">
        {/* Sidebar */}
        <Sidebar />
        <div className="flex-1 p-12 mt-10">
          <div className="flex justify-start mb-3">
            <h1 className="text-3xl font-bold text-gray-700">Salaries</h1>
          </div>
          <div className="mb-5 flex ">
            {/* Add Salaries */}
            <AddSalaries />
          </div>
          <div class="relative Table overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 text-center uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    #
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Employee Name
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Rate
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Type
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Hours Required
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {salaries.map((salary, index) => {
                  return (
                    <tr
                      class="bg-white border-b text-center dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                      key={salary.salary_id}>
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {index + 1}
                      </th>
                      <td class="px-6 py-4 capitalize">
                        {salary.last_name}, {salary.first_name}{" "}
                        {salary.middle_name}
                      </td>
                      <td class="px-6 py-4">
                        {formatter.format(salary.salary)}
                      </td>
                      <td class="px-6 py-4">{salary.rate_type}</td>
                      <td class="px-6 py-4">{`${
                        salary.hours_required
                      } ${"Hours"}`}</td>
                      <td class=" px-6 py-4">
                        <EditSalary salaries={salary} />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Salaries;
