import React, { useState, useEffect } from "react";
import "./../components/style.css";
import axios from "axios";
// import ShowDescription from "../components/hide_desc";
// import EditDeduction from "../components/edit_deduction";
import Sidebar from "../components/sidebar_hr";
import Navbar from "../components/navbar";
// import ShowTable from "../components/show_table";
import AddDeductionPagIbig from "../components/add_deduction_pagibig";
import EditDeductionPagIbig from "../components/edit_deduction_pagibig";

const PAGIBIG = ({ employee }) => {
  const employeeData = employee && employee.length > 0 ? employee[0] : null;

  const formatter = new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
    minimumFractionDigits: 2,
  });
  
  const [PAGIBIG, setPagibig] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:4000/pag-ibig`)
      .then((response) => {
        setPagibig(response.data);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, []);

  return (
    <div className="h-screen relative ">
      {" "}
      {/* Navbar */}
      <Navbar employee={employeeData} />
      <div className="flex h-screen bg-gray-200 m-0">
        {/* Sidebar */}

        <Sidebar />

        <div className="flex-1 p-12 mt-10">
          <div className=" flex justify-between mb-2">
            {" "}
            {/* <ShowTable /> */}
          </div>
          <div className="mb-5  ">
            <AddDeductionPagIbig />
          </div>
          <div class="relative Table  shadow-md rounded-lg ">
            <table class="sticky top-0 text-center text-xs">

              <thead className=" text-gray-700 font-semibold  uppercase">
                <tr>
                  <th
                    rowspan="2  "
                    class="w-1/10 border px-4 py-8 rounded-tl-lg  border-gray-300 bg-gray-100">
                    #
                  </th>
                  <th
                    rowspan="2"
                    class="w-1/10 border px-4 py-8 rounded-tl-lg  border-gray-300 bg-gray-100">
                    Monthly Compensation
                  </th>

                  <th
                    colspan="3"
                    scope="colgroup"
                    class="w-2/4 border border-gray-300 bg-gray-100">
                    Membership Savings (Contribution)
                  </th>
                  <th
                    rowspan="2"
                    class="w-1/10 border px-4 py-8 rounded-tl-lg  border-gray-300 bg-gray-100">
                    Action
                  </th>
                </tr>

                <tr>
                  <th scope="col" class="w-1/3 border border-gray-300 bg-gray-100">
                    Employee
                  </th>
                  <th scope="col" class="w-1/3 border border-gray-300 bg-gray-100">
                    Employeer (if any)
                  </th>
                  <th scope="col" class="w-1/3 border border-gray-300 bg-gray-100">
                    Total
                  </th>
                </tr>
              </thead>

              <tbody className="text-gray-900">
                {PAGIBIG.map((pagibig, index) => (
                  <tr
                    key={pagibig.deduction_id}
                    className="border border-gray-300 bg-white">
                    <td className="border border-gray-300 bg-white">{index + 1}</td>
                    <td className="w-1/5 px-6 py-4 capitalize border border-gray-300 bg-white">
                      {`${formatter.format(pagibig.salary_range_1)} ${"-"} ${
                        pagibig.salary_range_2 > 4999
                          ? "Above"
                          : formatter.format(pagibig.salary_range_2)
                      }`}
                    </td>

                    <td class="w-1/5 px-6 py-4 capitalize border border-gray-300 bg-white">
                      {`${pagibig.employee_contribution}${"%"}`}
                    </td>

                    <td class="w-1/5 border border-gray-300 bg-white">{`${
                      pagibig.employer_contribution
                    }${"%"}`}</td>
                    
                    <td class="w-1/5 border border-gray-300 px-4 bg-white">{`${
                      parseFloat(pagibig.employee_contribution) +
                      parseFloat(pagibig.employer_contribution)
                    }${"%"}`}</td>
                    <td class="w-1/5 border border-gray-300 px-4 bg-white">
                      <EditDeductionPagIbig pagibig={pagibig} />
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

export default PAGIBIG;
