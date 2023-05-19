import React, { useState, useEffect } from "react";
import "./../components/style.css";
import Sidebar from "../components/sidebar_hr";

import Navbar from "../components/navbar";

const Payroll = ({ employee }) => {
  const employeeData = employee && employee.length > 0 ? employee[0] : null;

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
        <div className="flex-1 p-12  mt-10">
          <div className="flex justify-start mb-5">
            <h1 className="text-3xl font-bold text-gray-700">Payroll</h1>
          </div>
          <div className="mb-5 flex justify-between w-full ">
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
            </div>{" "}
            {/* Add Salaries */}{" "}
            <form action="">
              <div className=" ">
                <input
                  type="date"
                  className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-30  pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
            </form>{" "}
          </div>
          <div class="relative Tables overflow-x-scroll  w-full  shadow-md sm:rounded-lg ">
            <table class="sticky top-0 text-center  Data">
              <colgroup class="bg-white"></colgroup>
              <colgroup class="bg-white"></colgroup>
              <colgroup class="bg-white"></colgroup>
              <colgroup class="bg-white"></colgroup>
              <colgroup class="bg-white"></colgroup>
              <colgroup class="bg-white"></colgroup>
              <colgroup class="bg-white"></colgroup>
              <colgroup class="bg-white"></colgroup>
              <colgroup class="bg-white"></colgroup>
              <colgroup class="bg-white"></colgroup>
              <colgroup class="bg-white"></colgroup>
              <colgroup class="bg-white"></colgroup>
              <colgroup class="bg-white"></colgroup>
              <colgroup class="bg-white"></colgroup>
              <colgroup class="bg-white"></colgroup>
              <colgroup class="bg-white"></colgroup>
              <colgroup class="bg-white"></colgroup>
              <colgroup class="bg-white"></colgroup>
              <colgroup class="bg-white"></colgroup>
              <colgroup class="bg-white"></colgroup>
              <colgroup class="bg-white"></colgroup>

              <thead className=" text-gray-700 font-semibold uppercase">
                <tr>
                  <th
                    rowspan="3"
                    class="w-1/10 border px-4 py-8 rounded-tl-lg  border-gray-300">
                    #
                  </th>
                  <th
                    rowspan="3"
                    class="w-1/10 border px-4 py-8 rounded-tl-lg  border-gray-300">
                    Employee
                  </th>
                  <th
                    rowspan="3"
                    class="w-1/10 border px-4 py-8 rounded-tl-lg  border-gray-300">
                    Position
                  </th>
                  <th
                    colspan="2"
                    scope="colgroup"
                    class="w-1/2 border border-gray-300">
                    Salary
                  </th>
                  <th colspan="1" class="w-1/10 border border-gray-300 px-2">
                    {" "}
                    Monthly Base
                  </th>
                  <th
                    colspan="1"
                    scope="colgroup"
                    class="w-1/10 border border-gray-300 px-2">
                    {" "}
                    Monthly-Item
                  </th>
                  <th
                    rowspan="3"
                    class="w-1/10 border px-4 py-8 rounded-tl-lg  border-gray-300">
                    Regular Hours Taken (Hrs.)
                  </th>
                  <th
                    colspan="2"
                    scope="colgroup"
                    class="w-1/2 border border-gray-300">
                    Over Time
                  </th>
                  <th
                    rowspan="3"
                    class="w-1/2 border px-4 py-8 rounded-tl-lg  border-gray-300">
                    Gross Pay
                  </th>
                  <th
                    colspan="3"
                    scope="colgroup"
                    class="w-1/10 border border-gray-300 ">
                    Deduction
                  </th>
                  <th
                    rowspan="3"
                    class="w-1/10 border px-4 py-8 rounded-tl-lg  border-gray-300">
                    Taxable Pay
                  </th>
                  <th
                    rowspan="3"
                    class="w-1/10 border px-4 py-8 rounded-tl-lg  border-gray-300">
                    Exempt Pay
                  </th>

                  <th
                    colspan="1"
                    scope="colgroup"
                    class="w-1/10 border border-gray-300 px-2">
                    Allowance
                  </th>
                  <th
                    colspan="1"
                    scope="colgroup"
                    class="w-1/10 border border-gray-300 px-2">
                    Advance
                  </th>
                  <th
                    colspan="1"
                    scope="colgroup"
                    class="w-1/10 border border-gray-300 px-2">
                    Deduction
                  </th>
                  <th
                    rowspan="3"
                    class="w-1/10 border px-4 py-8 rounded-tl-lg  border-gray-300">
                    Net Pay
                  </th>
                  <th
                    colspan="1"
                    scope="colgroup"
                    class="w-1/10 border border-gray-300 px-2">
                    Bunos
                  </th>
                </tr>
                <tr>
                  <th
                    scope="col"
                    class="w-1/12 border border-gray-300 capitalize px-2">
                    13th
                  </th>
                  <th
                    scope="col"
                    class="w-1/12 border border-gray-300 capitalize px-2">
                    15th
                  </th>
                  <th
                    scope="col"
                    class="w-1/12 border border-gray-300 capitalize px-2">
                    Base Pay
                  </th>
                  <th
                    scope="col"
                    class="w-1/12 border border-gray-300 capitalize px-2">
                    Regular Taken
                  </th>
                  <th
                    scope="col"
                    class="w-1/12 border border-gray-300 capitalize px-2">
                    Overtime: Regular Worked
                  </th>
                  <th
                    scope="col"
                    class="w-1/12 border border-gray-300 capitalize px-2">
                    Overtime: Regular Worked (Hrs.)
                  </th>
                  <th
                    scope="col"
                    class="w-1/12 border border-gray-300 capitalize px-2">
                    Pag-IBIG
                  </th>
                  <th
                    scope="col"
                    class="w-1/12 border border-gray-300 capitalize px-2">
                    PhilHealth
                  </th>
                  <th
                    scope="col"
                    class="w-1/12 border border-gray-300 capitalize px-2">
                    SSS
                  </th>
                  <th
                    scope="col"
                    class="w-1/12 border border-gray-300 capitalize px-2">
                    Allowances
                  </th>
                  <th
                    scope="col"
                    class="w-1/12 border border-gray-300 capitalize px-2">
                    Cash Advance
                  </th>
                  <th
                    scope="col"
                    class="w-1/12 border border-gray-300 capitalize px-2">
                    BIR
                  </th>
                  <th
                    scope="col"
                    class="w-1/12 border border-gray-300 capitalize px-2">
                    13th Month
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-900">
                <tr className="border border-gray-300 ">
                  <td className="border border-gray-300">1</td>

                  <td className="border border-gray-300 capitalize">
                    Sunny Virgo
                  </td>

                  <td class="w-1/21 px-2 py-4 capitalize border border-gray-300">
                    Full Stack
                  </td>
                  <td class=" border border-gray-300 px-4">40000</td>
                  <td class=" border border-gray-300 px-4">-1585.45</td>
                  <td class=" border border-gray-300 px-4">19.62</td>
                  <td class=" border border-gray-300 px-4">381.82</td>
                  <td class=" border border-gray-300 px-4">3.78</td>
                  <td class=" border border-gray-300 px-4">38796.36</td>
                  <td class=" border border-gray-300 px-4">-960</td>
                  <td class=" border border-gray-300 px-4">-600</td>
                  <td class=" border border-gray-300 px-4">-1500</td>
                  <td class=" border border-gray-300 px-4">35736.36</td>
                  <td class=" border border-gray-300 px-4">-300.91</td>
                  <td class=" border border-gray-300 px-4">10000</td>
                  <td class=" border border-gray-300 px-4">-10000</td>
                  <td class=" border border-gray-300 px-4">-2547.56</td>
                  <td class=" border border-gray-300 px-4">32887.89</td>
                  <td class=" border border-gray-300 px-4">3207.96</td>
                  <td class=" border border-gray-300 px-4">-90</td>
                  <td class=" border border-gray-300 px-4">-600</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payroll;
