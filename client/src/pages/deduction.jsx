import React, { useState, useEffect } from "react";
import axios from "axios";
import "./../components/style.css";
// import ShowDescription from "../components/hide_desc";
// import EditDeduction from "../components/edit_deduction";
import Sidebar from "../components/sidebar_hr";
import Navbar from "../components/navbar";
// import ShowTable from "../components/show_table";

const Deduction = ({ employee }) => {
  const employeeData = employee && employee.length > 0 ? employee[0] : null;

  const formatter = new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
    minimumFractionDigits: 2,
  });
  const [deductions, setDeduction] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/deductions`)
      .then((response) => {
        setDeduction(response.data);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, []);
  return (
    <div className="h-screen relative">
      {" "}
      {/* Navbar */}
      <Navbar employee={employeeData} />
      <div className="flex h-screen bg-gray-200 m-0">
        {/* Sidebar */}
        <Sidebar />
        <div className="flex-1 justify-between p-12 mt-10">
          <div className="flex justify-start mb-3">
            <h1 className="text-3xl font-bold text-gray-700">Deductions</h1>
          </div>
          <div className=" flex justify-start mb-2"> </div>
          <div className="mb-5 flex justify-start  ">
            <div class="flex items-center">
              <label for="simple-search" class="sr-only">
                Search
              </label>
              <div class="relative w-full search ">
                <div class="search_icon  inset-y-0  flex items-center  ">
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"></path>
                  </svg>
                </div>

                <input
                  type="text"
                  id="simple-search"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-30  pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search"
                  required
                  autoComplete="off"
                />
              </div>
            </div>
          </div>
          <div class="relative Table overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 text-center uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 sticky top-0">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    #
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Employee Name
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Monthly Salary
                  </th>
                  <th scope="col" class="px-6 py-3">
                    SSS
                  </th>
                  <th scope="col" class="px-6 py-3">
                    PhilHealth
                  </th>
                  <th scope="col" class="px-6 py-3">
                    PAG-IBIG
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                {deductions.map((deduction, index) => (
                  <tr
                    key={deduction.deduction_id}
                    class="bg-white border-b text-center dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {" "}
                      {index + 1}
                    </th>
                    <td class="px-6 py-4 capitalize">
                      {`${deduction.last_name}${","} ${deduction.first_name} ${
                        deduction.middle_name
                      }`}{" "}
                    </td>
                    <td class="px-6 py-4 capitalize">
                      {formatter.format(deduction.monthly_salary)}
                    </td>
                    <td class="px-6 py-4">
                      {formatter.format(deduction.sss_deduction)}
                    </td>
                    <td class="px-6 py-4">
                      {formatter.format(deduction.philhealth_deduction)}
                    </td>
                    <td class=" px-6 py-4">
                      {formatter.format(deduction.pagibig_deduction)}
                    </td>
                    <td class=" px-6 py-4">
                      {formatter.format(
                        parseFloat(deduction.pagibig_deduction) +
                          parseFloat(deduction.philhealth_deduction) +
                          parseFloat(deduction.sss_deduction)
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deduction;
