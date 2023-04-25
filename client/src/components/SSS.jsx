import React, { useState, useEffect } from "react";
import "./../components/style.css";
// import ShowDescription from "../components/hide_desc";
// import EditDeduction from "../components/edit_deduction";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import ShowTable from "./show_table";
import AddDeduction from "./add_deduction_sss";

const SSS = () => {
  const formatter = new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
    minimumFractionDigits: 2,
  });

  return (
    <div className="h-screen relative ">
      {" "}
      {/* Navbar */}
      <Navbar />
      <div className="flex h-screen bg-gray-200 m-0">
        {/* Sidebar */}
        <Sidebar />
        <div className="flex-1 p-12 mt-20">
          <div className=" flex justify-between mb-2">
            {" "}
            <ShowTable />
          </div>
          <div className="mb-5  ">
            <AddDeduction />
          </div>
          <div class="relative Table  shadow-md rounded-lg ">
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
              <thead className=" text-gray-700 font-semibold uppercase">
                <tr>
                  <th
                    rowspan="3"
                    class="w-1/10 border px-4 py-8 rounded-tl-lg  border-gray-300"
                  >
                    #
                  </th>
                  <th
                    rowspan="3"
                    class="w-1/10 border px-4 py-8 rounded-tl-lg  border-gray-300"
                  >
                    Range of Compensation
                  </th>

                  <th
                    colspan="12"
                    scope="colgroup"
                    class="w-2/4 border border-gray-300"
                  >
                    Employer - Employee
                  </th>
                </tr>
                <tr>
                  <th
                    colspan="3"
                    scope="colgroup"
                    class="w-1/4 border border-gray-300"
                  >
                    Social Security
                  </th>
                  <th
                    colspan="3"
                    scope="colgroup"
                    class="w-1/4 border border-gray-300"
                  >
                    Employees Compensation
                  </th>
                  <th
                    colspan="3"
                    scope="colgroup"
                    class="w-1/4 border border-gray-300"
                  >
                    Mandatory Provident Fund
                  </th>
                  <th
                    colspan="3"
                    scope="colgroup"
                    class="w-1/4 border border-gray-300"
                  >
                    Total Contribution
                  </th>
                </tr>
                <tr>
                  <th scope="col" class="w-1/12 border border-gray-300">
                    ER
                  </th>
                  <th scope="col" class="w-1/12 border border-gray-300">
                    EE
                  </th>
                  <th scope="col" class="w-1/12 border border-gray-300">
                    TOTAL
                  </th>
                  <th scope="col" class="w-1/12 border border-gray-300">
                    ER
                  </th>
                  <th scope="col" class="w-1/12 border border-gray-300">
                    EE
                  </th>
                  <th scope="col" class="w-1/12 border border-gray-300">
                    TOTAL
                  </th>
                  <th scope="col" class="w-1/12 border border-gray-300">
                    ER
                  </th>
                  <th scope="col" class="w-1/12 border border-gray-300">
                    EE
                  </th>
                  <th scope="col" class="w-1/12 border border-gray-300">
                    TOTAL
                  </th>
                  <th scope="col" class="w-1/12 border border-gray-300">
                    ER
                  </th>
                  <th scope="col" class="w-1/12 border border-gray-300">
                    EE
                  </th>
                  <th scope="col" class="w-1/12 border border-gray-300">
                    TOTAL
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-900">
                <tr className="border border-gray-300 ">
                  <td className="border border-gray-300">1</td>
                  <td className="border border-gray-300">Below 4,250</td>

                  <td class="w-1/12 px-6 py-4 capitalize border border-gray-300">
                    380
                  </td>
                  <td class="w-1/12 border border-gray-300">180</td>
                  <td class="w-1/12 border border-gray-300">560</td>
                  <td class="w-1/12 border border-gray-300">10</td>
                  <td class="w-1/12 border border-gray-300">-</td>
                  <td class="w-1/12 border border-gray-300">10</td>
                  <td class="w-1/12 border border-gray-300">-</td>
                  <td class="w-1/12 border border-gray-300">-</td>
                  <td class="w-1/12 border border-gray-300">-</td>
                  <td class="w-1/12 border border-gray-300">390</td>
                  <td class="w-1/12 border border-gray-300">180</td>
                  <td class="w-1/12 border border-gray-300">570</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SSS;
