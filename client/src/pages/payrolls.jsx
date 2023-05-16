import React, { useState, useEffect } from "react";
import "./../components/style.css";
import Sidebar from "../components/sidebar_hr";

import Navbar from "../components/navbar";

const Payroll = () => {
  const formatter = new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
    minimumFractionDigits: 2,
  });

  return (
    <div className="h-screen relative">
      {" "}
      {/* Navbar */}
      <Navbar />
      <div className="flex h-screen bg-gray-200 m-0">
        {/* Sidebar */}
        <Sidebar />
        <div className="flex-1 p-12 mt-20 ml-14">
          <div className="mb-5 flex text-3xl font-bold text-gray-700">
            {" "}
            Payroll
          </div>
          <div class="relative Table overflow-x-scroll max-w-4xl shadow-md  sm:rounded-lg">
            <table class="sticky top-0 text-center  Data">
              <colgroup class="bg-gray-100"></colgroup>
              <colgroup class="bg-gray-100"></colgroup>
              <colgroup class="bg-gray-100"></colgroup>
              <colgroup class="bg-gray-100"></colgroup>
              <colgroup class="bg-gray-100"></colgroup>
              <colgroup class="bg-gray-100"></colgroup>
              <colgroup class="bg-gray-100"></colgroup>
              <colgroup class="bg-gray-100"></colgroup>
              <colgroup class="bg-gray-100"></colgroup>
              <colgroup class="bg-gray-100"></colgroup>
              <colgroup class="bg-gray-100"></colgroup>
              <colgroup class="bg-gray-100"></colgroup>
              <colgroup class="bg-gray-100"></colgroup>
              <colgroup class="bg-gray-100"></colgroup>
              <colgroup class="bg-gray-100"></colgroup>
              <colgroup class="bg-gray-100"></colgroup>
              <colgroup class="bg-gray-100"></colgroup>
              <colgroup class="bg-gray-100"></colgroup>
              <colgroup class="bg-gray-100"></colgroup>
              <colgroup class="bg-gray-100"></colgroup>
              <colgroup class="bg-gray-100"></colgroup>
              <colgroup class="bg-gray-100"></colgroup>
              <colgroup class="bg-gray-100"></colgroup>
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
                    JobRole
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
                  <th
                    colspan="3"
                    scope="colgroup"
                    class="w-1/10 border border-gray-300 px-2">
                    Deduction
                  </th>
                </tr>
                <tr>
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
                    Social Insurance
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
                  <th
                    scope="col"
                    class="w-1/12 border border-gray-300 capitalize px-2">
                    Social Insurance
                  </th>
                  <th
                    scope="col"
                    class="w-1/12 border border-gray-300 capitalize px-2">
                    PhilHealth
                  </th>
                  <th
                    scope="col"
                    class="w-1/12 border border-gray-300 capitalize px-2"></th>
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
                  <td class="   border border-gray-300">40000</td>
                  <td class=" border border-gray-300">-1585.45</td>
                  <td class=" border border-gray-300">19.62</td>
                  <td class=" border border-gray-300">381.82</td>
                  <td class=" border border-gray-300">3.78</td>
                  <td class=" border border-gray-300">38796.36</td>
                  <td class=" border border-gray-300 px-4">-960</td>
                  <td class=" border border-gray-300">-600</td>
                  <td class=" border border-gray-300">-1500</td>
                  <td class=" border border-gray-300">35736.36</td>
                  <td class=" border border-gray-300 px-4">-300.91</td>
                  <td class=" border border-gray-300 px-4">10000</td>
                  <td class=" border border-gray-300 px-4">-10000</td>
                  <td class=" border border-gray-300 px-4">-2547.56</td>
                  <td class=" border border-gray-300 px-4">32887.89</td>
                  <td class=" border border-gray-300 px-4">3207.96</td>
                  <td class=" border border-gray-300 px-4">-90</td>
                  <td class=" border border-gray-300 px-4">-600</td>
                  <td class=" border border-gray-300 px-4">-3180</td>
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
