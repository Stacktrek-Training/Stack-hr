import React, { useState, useEffect } from "react";
import "./../components/style.css";
// import ShowDescription from "../components/hide_desc";
// import EditDeduction from "../components/edit_deduction";
import Sidebar from "../components/sidebar_hr";
import Navbar from "../components/navbar";
// import ShowTable from "../components/show_table";
import AddDeduction from "../components/add_deduction_sss";
import axios from "axios";
import EditDeductionSSS from "../components/edit_deduction_sss";

const SSS = ({ employee }) => {
  const employeeData = employee && employee.length > 0 ? employee[0] : null;

  const formatter = new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
    minimumFractionDigits: 2,
  });

  // fetch data in database
  const [SSS, setSSS] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/sss`)
      .then((response) => {
        setSSS(response.data);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, []);

  return (
    <div className="h-screen relative ">
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
            <AddDeduction />
          </div>

          <div class="relative Table shadow-md rounded-lg ">
            <table class="sticky top-0 text-center Data">
              <thead className=" text-gray-700 font-semibold uppercase">
                <tr>
                  <th
                    rowspan="3"
                    class="w-1/10 border px-4 py-8 rounded-tl-lg  border-gray-300 bg-gray-100">
                    #
                  </th>
                  <th
                    rowspan="3"
                    class="w-1/10 border px-4 py-8 rounded-tl-lg  border-gray-300 bg-gray-100">
                    Range of Compensation
                  </th>

                  <th
                    colspan="12"
                    scope="colgroup"
                    class="w-2/4 border border-gray-300 bg-gray-100">
                    Employer - Employee
                  </th>
                  <th
                    rowspan="3"
                    class="w-1/10 border px-4 py-8 rounded-tl-lg  border-gray-300 bg-gray-100">
                    Action
                  </th>
                </tr>
                <tr>
                  <th
                    colspan="3"
                    scope="colgroup"
                    class="w-1/4 border border-gray-300 bg-gray-100">
                    Social Security Contribution
                  </th>
                  <th
                    colspan="3"
                    scope="colgroup"
                    class="w-1/4 border border-gray-300 bg-gray-100">
                    Employee's Compensation
                  </th>
                  <th
                    colspan="3"
                    scope="colgroup"
                    class="w-1/4 border border-gray-300 bg-gray-100">
                    Mandatory Provident Fund (WISP)
                  </th>

                  <th
                    colspan="3"
                    scope="colgroup"
                    class="w-1/4 border border-gray-300 bg-gray-100">
                    TOTAL
                  </th>
                </tr>

                <tr>
                  <th scope="col" class="w-1/12 border border-gray-300 bg-gray-100">
                    ER
                  </th>
                  <th scope="col" class="w-1/12 border border-gray-300 bg-gray-100">
                    EE
                  </th>
                  <th scope="col" class="w-1/12 border border-gray-300 bg-gray-100">
                    TOTAL
                  </th>

                  <th scope="col" class="w-1/12 border border-gray-300 bg-gray-100">
                    ER
                  </th>
                  <th scope="col" class="w-1/12 border border-gray-300 bg-gray-100">
                    EE
                  </th>
                  <th scope="col" class="w-1/12 border border-gray-300 bg-gray-100">
                    TOTAL
                  </th>
                  
                  <th scope="col" class="w-1/12 border border-gray-300 bg-gray-100">
                    ER
                  </th>
                  <th scope="col" class="w-1/12 border border-gray-300 bg-gray-100">
                    EE
                  </th>
                  <th scope="col" class="w-1/12 border border-gray-300 bg-gray-100">
                    TOTAL
                  </th>

                  <th scope="col" class="w-1/12 border border-gray-300 bg-gray-100">
                    ER
                  </th>
                  <th scope="col" class="w-1/12 border border-gray-300 bg-gray-100">
                    EE
                  </th>
                  <th scope="col" class="w-1/12 border border-gray-300 bg-gray-100">
                    TOTAL
                  </th>
                </tr>
              </thead>

              <tbody className="text-gray-900">
                {/*Salary Range*/}
                {SSS.map((sss, index) => (
                  <tr
                    className="border border-gray-300 bg-white"
                    key={sss.deduction_id}>
                    <td className="border border-gray-300">{index + 1}</td>

                    <td className="border border-gray-300">
                      {`${formatter.format(sss.salary_range_1)} - ${
                        sss.salary_range_2 > 29750
                          ? "Above"
                          : formatter.format(sss.salary_range_2)
                      }`}
                    </td>

                    {/*Social Security Contribution*/}
                    <td class="w-1/12 px-6 py-4 capitalize border border-gray-300 bg-white">
                      {`${formatter.format(sss.employer_contribution_sss)}`}
                    </td>

                    <td class="w-1/12 border border-gray-300 bg-white">
                      {`${formatter.format(sss.employee_contribution_sss)}`}
                      </td>                    
                    
                    <td class="w-1/12 border border-gray-300 bg-white">
                      {`${
                        formatter.format(
                          parseFloat(sss.employee_contribution_sss) +
                          parseFloat(sss.employer_contribution_sss)
                        )
                      }`}
                    </td>
                    
                    {/*Employee's Compensation*/}
                    <td class="w-1/12 border border-gray-300 bg-white">{`${
                      sss.employer_contribution_ec == 0
                        ? "_"
                        : formatter.format(sss.employer_contribution_ec)
                    }`}</td>
                    <td class="w-1/12 border border-gray-300 bg-white">
                      {sss.employee_contribution_ec == 0
                        ? "_"
                        : formatter.format(sss.employee_contribution_ec)}
                    </td>
                    <td class="w-1/12 border border-gray-300 bg-white">{`${
                      sss.employer_contribution_ec &&
                      sss.employee_contribution_ec === 0
                        ? "_"
                        : formatter.format(
                            parseFloat(sss.employer_contribution_ec) +
                            parseFloat(sss.employee_contribution_ec)
                          )
                    }`}</td>
                    
                    {/*Mandatory Provident Fund (WISP)*/}
                    <td class="w-1/12 border border-gray-300 bg-white">
                      {sss.employer_contribution_mpf == 0
                        ? "_"
                        : `${formatter.format(sss.employer_contribution_mpf)}`}
                    </td>   
                    <td class="w-1/12 border border-gray-300 bg-white">
                      {sss.employee_contribution_mpf == 0
                        ? "_"
                        : `${formatter.format(sss.employee_contribution_mpf)}`}
                    </td>
                    <td class="w-1/12 border border-gray-300 bg-white">
                      {sss.employer_contribution_mpf &&
                      sss.employee_contribution_mpf === 0
                        ? "_"
                        : formatter.format(
                            parseFloat(sss.employer_contribution_mpf) +
                            parseFloat(sss.employee_contribution_mpf)
                          )}
                    </td>

                    {/*TOTAL*/}
                    <td class="w-1/12 border border-gray-300 bg-white">
                      {sss.employer_contribution_mpf &&
                      sss.employee_contribution_mpf === 0
                        ? "_"
                        : formatter.format(
                            parseFloat(sss.employer_contribution_sss) +
                            parseFloat(sss.employer_contribution_ec) +
                            parseFloat(sss.employer_contribution_mpf)
                         )}
                    </td>

                    <td class="w-1/12 border border-gray-300 bg-white">
                      {sss.employer_contribution_mpf &&
                      sss.employee_contribution_mpf === 0
                        ? "_"
                        : formatter.format(
                            parseFloat(sss.employee_contribution_sss) +
                            parseFloat(sss.employee_contribution_ec) +
                            parseFloat(sss.employee_contribution_mpf)
                          )}
                    </td>
                    <td class="w-1/12 border border-gray-300 bg-white">
                      {sss.employer_contribution_mpf &&
                      sss.employee_contribution_mpf === 0
                        ? "_"
                        : formatter.format(
                            parseFloat(sss.employer_contribution_sss) +
                            parseFloat(sss.employer_contribution_ec) +
                            parseFloat(sss.employer_contribution_mpf) +
                            parseFloat(sss.employee_contribution_sss) +
                            parseFloat(sss.employee_contribution_ec) +
                            parseFloat(sss.employee_contribution_mpf)
                          )}
                    </td>

                    <td class="w-1/12 border border-gray-300 px-4 bg-white">
                      <EditDeductionSSS sss={sss} />
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

export default SSS;
