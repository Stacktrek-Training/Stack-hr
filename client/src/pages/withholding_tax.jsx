import React, { useState, useEffect } from "react";
import axios from "axios";
import "./../components/style.css";
import Sidebar from "../components/sidebar_hr";
import Navbar from "../components/navbar";
import AddWithholdingTax from "../components/add_withholding_tax";
import EditWithholdingTax from "../components/edit_withholding_tax";

const WithholdingTax = ({ employee }) => {
  const employeeData = employee && employee.length > 0 ? employee[0] : null;

  const formatter = new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
    minimumFractionDigits: 2,
  });

  const [withholding_tax, setWithholdingTax] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/withholding_tax`)
      .then((response) => {
        setWithholdingTax(response.data);
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
          <div className="mb-5 flex ">
            {/* Add Withholding Tax */}
            <AddWithholdingTax />
          </div>

          <div class="relative Table overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 text-center uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 sticky top-0">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Taxable Income
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Salary Type
                  </th>
                  
                  <th scope="col" class="px-6 py-3">
                    Percentage (%)
                  </th>
                  
                  <th scope="col" class="px-6 py-3">
                    Amount 1
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Amount 2
                  </th>

                  <th scope="col" class="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {withholding_tax.map((withholding_tax, index) => (
                  <tr
                    key={withholding_tax.deduction_id}
                    class="bg-white border-b text-center dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                    <td class="px-6 py-4 capitalize">
                     {`${formatter.format(withholding_tax.taxable_income_range_1)} ${"-"} ${
                        withholding_tax.taxable_income_range_2 >= 999999.99
                          ? "Above"
                          : formatter.format(withholding_tax.taxable_income_range_2)
                      }`}
                    </td>
                    <td class="px-6 py-4 capitalize">
                      {withholding_tax.salary_type}
                    </td>

                    <td class="px-6 py-4">
                      {`${withholding_tax.percentage}${"%"}`}
                    </td>

                    <td class="px-6 py-4">
                      {formatter.format(withholding_tax.amount_1)}
                    </td>
                    
                    <td class="px-6 py-4">
                      {`${formatter.format(withholding_tax.amount_2)}`}
                    </td>

                    <td class="px-6 py-4 items-center">
                      <EditWithholdingTax withholding_tax={withholding_tax} />
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

export default WithholdingTax;




