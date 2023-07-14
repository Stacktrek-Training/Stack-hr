import React, { useState, useEffect } from "react";
import axios from "axios";
import "./../components/style.css";
import Sidebar from "../components/sidebar_hr";
import Navbar from "../components/navbar";
import AddPayroll from "../components/add_payroll";
import EditPayroll from "../components/edit_payroll";


const Payroll = ({ employee }) => {
  const employeeData = employee && employee.length > 0 ? employee[0] : null;

  const [payrolls, setPayrolls] = useState([]);
    useEffect(() => {
      axios
        .get(`http://localhost:4000/payrolls`)
        .then((response) => {
          setPayrolls(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }, []);

  const formatter = new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
    minimumFractionDigits: 2,});


  return (
    <div className="h-screen relative">
      {/* Navbar */}
      <Navbar employee={employeeData} />

      <div className="flex h-screen bg-gray-200 m-0">
        {/* Sidebar */}
        <Sidebar />
        
        <div className="flex-1 p-12  mt-10">
          <div className="flex justify-start mb-5">
            <h1 className="text-3xl font-bold text-gray-700">Payrolls</h1>
          </div>
          
           <div className="mb-5 flex ">
            {/* Add Payroll */}
            <AddPayroll />
          </div>

          <div class="relative Tables overflow-x-scroll  w-full  shadow-md sm:rounded-lg ">
            <table class="w-max sticky top-0 text-center Data">
              <thead className="text-gray-700 font-semibold uppercase">
                <tr>
                  <th colspan="4" class="border px-3 py-2 rounded-md  border-gray-300 bg-gray-100">
                    Employee Information
                  </th>
                
                  <th colspan="5" class="border px-3 py-2 rounded-md border-gray-300 bg-gray-100">
                    Gross Pay Details
                  </th>
                
                  <th colspan="5" class="border px-3 py-2 rounded-md border-gray-300 bg-gray-100">
                    Deduction Details
                  </th>
                
                  <th colspan="4" class="border px-3 py-2 rounded-md border-gray-300 bg-gray-100">
                    Bonuses (Not Included in Deductions)
                  </th>
                
                  <th colspan="4" class="border px-3 py-2 rounded-md  border-gray-300 bg-gray-100">
                    TOTAL
                  </th>
                </tr>

                <tr>
                  <th scope="colgroup" class="border px-3 py-2 rounded-md  border-gray-300 bg-white">
                    #
                  </th>

                  <th scope="colgroup" class="border px-3 py-2 rounded-md  border-gray-300 bg-white">
                    Employee Name
                  </th>

                  <th scope="colgroup" class="border px-3 py-2 rounded-md  border-gray-300 bg-white">
                    Position
                  </th>

                  <th scope="colgroup" class="border px-3 py-2 rounded-md  border-gray-300 bg-white">
                    Salary Type
                  </th>

                  <th scope="colgroup" class="border px-3 py-2 rounded-md border-gray-300 bg-white">
                    Basic Pay
                  </th>

                  <th scope="colgroup" class="border px-3 py-2 rounded-md border-gray-300 bg-white">
                    Gross Pay
                  </th>

                  <th scope="colgroup" class="border px-3 py-2 rounded-md border-gray-300 bg-white">
                    Overtime Pay
                  </th>

                  <th scope="colgroup" class="border px-3 py-2 rounded-md border-gray-300 bg-white">
                    Holiday Pay
                  </th>

                  <th scope="colgroup" class="border px-3 py-2 rounded-md border-gray-300 bg-white">
                    Total Gross Pay
                  </th>

                  <th scope="colgroup" class="border px-3 py-2 rounded-md border-gray-300 bg-white">
                    Pag-Ibig
                  </th>

                  <th scope="colgroup" class="border px-3 py-2 rounded-md border-gray-300 bg-white">
                    PHilHealth
                  </th>

                  <th scope="colgroup" class="border px-3 py-2 rounded-md border-gray-300 bg-white">
                    SSS
                  </th>

                  <th scope="colgroup" class="border px-3 py-2 rounded-md border-gray-300 bg-white">
                    Taxable Income
                  </th>

                  <th scope="colgroup" class="border px-3 py-2 rounded-md border-gray-300 bg-white">
                    Withholding Tax
                  </th>

                  <th scope="colgroup" class="border px-3 py-2 rounded-md border-gray-300 bg-white">
                    13th Month
                  </th>

                  <th scope="colgroup" class="border px-3 py-2 rounded-md border-gray-300 bg-white">
                    Allowance
                  </th>

                  <th scope="colgroup" class="border px-3 py-2 rounded-md border-gray-300 bg-white">
                    Other Bonuses
                  </th>

                  <th scope="colgroup" class="border px-3 py-2 rounded-md border-gray-300 bg-white">
                    Total Bonus
                  </th>

                  <th scope="colgroup" class="border px-3 py-2 rounded-md border-gray-300 bg-white">
                    Net Pay
                  </th>

                  <th scope="colgroup" class="border px-3 py-2 rounded-md border-gray-300 bg-white">
                    Date Created
                  </th>

                  <th scope="colgroup" class="border px-3 py-2 rounded-md border-gray-300 bg-white">
                    Date Updated
                  </th>

                  <th scope="colgroup" class="border px-3 py-2 rounded-md border-gray-300 bg-white">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody className="text-gray-900">
                {payrolls.map((payrolls, index) => {
                  return (
                  <tr key={payrolls.form_number}
                    class="bg-white border-b text-center dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                    {/*EMPLOYEE INFORMATION*/}
                      <td class="border border-gray-300 px-3 bg-white">
                        {index + 1}
                      </td>

                      <td class="border border-gray-300 px-3 bg-white">
                        {payrolls.last_name}, {payrolls.first_name} {payrolls.middle_name}
                      </td>
                        
                      <td className="border border-gray-300 px-3 bg-white">
                        {payrolls.job_title}
                      </td>

                      <td className="border border-gray-300 px-3 bg-white">
                        {payrolls.rate_type}
                      </td>

                    {/*GROSS PAY DETAILS*/}
                      <td class="border border-gray-300 px-3 bg-white">
                        {formatter.format(payrolls.salary)}
                      </td>

                      <td class="border border-gray-300 px-3 bg-white">
                        {formatter.format(payrolls.gross_pay)}
                      </td>

                      <td class="border border-gray-300 px-3 bg-white">
                        {payrolls.overtime == 0
                          ? "_"
                          : `${formatter.format(payrolls.overtime_pay)}`}
                      </td>

                      <td class="border border-gray-300 px-3 bg-white">
                        {payrolls.holidays == 0
                          ? "_"
                          : `${formatter.format(payrolls.holiday_pay)}`}
                      </td>

                      <td class="border border-gray-300 px-3 bg-white">
                        {formatter.format(payrolls.total_gross_pay)}
                      </td>
                    
                    {/*DEDUCTION DETAILS*/}
                      <td class="border border-gray-300 px-3 bg-white">
                         {payrolls.pagibig_deductions == 0
                          ? "_"
                          : `${formatter.format(payrolls.pagibig_deductions)}`}
                      </td>
                      
                      <td class="border border-gray-300 px-3 bg-white">
                         {payrolls.philhealth_deductions == 0
                          ? "_"
                          : `${formatter.format(payrolls.philhealth_deductions)}`}
                      </td>
                      
                      <td class="border border-gray-300 px-3 bg-white">
                         {payrolls.sss_deductions == 0
                          ? "_"
                          : `${formatter.format(payrolls.sss_deductions)}`}
                      </td>
                      
                      <td class="border border-gray-300 px-3 bg-white">
                         {payrolls.taxable_income == 0
                          ? "_"
                          : `${formatter.format(payrolls.taxable_income)}`}
                      </td>
                      
                      <td class="border border-gray-300 px-3 bg-white">
                         {payrolls.withholding_tax == 0
                          ? "_"
                          : `${formatter.format(payrolls.withholding_tax)}`}
                      </td>
                    
                    {/*BONUS*/}
                      <td class="border border-gray-300 px-3 bg-white">
                         {payrolls.thirteenth_month == 0
                          ? "_"
                          : `${formatter.format(payrolls.thirteenth_month)}`}
                      </td>
                      
                      <td class="border border-gray-300 px-3 bg-white">
                         {payrolls.allowance == 0
                          ? "_"
                          : `${formatter.format(payrolls.allowance)}`}
                      </td>

                      <td class="border border-gray-300 px-3 bg-white">
                         {payrolls.other_bonus == 0
                          ? "_"
                          : `${formatter.format(payrolls.other_bonus)}`}
                      </td>

                      <td class="border border-gray-300 px-3 bg-white">
                         {payrolls.total_bonus == 0
                          ? "_"
                          : `${formatter.format(payrolls.total_bonus)}`}
                      </td>
                    
                    {/*TOTAL*/}
                      <td class="border border-gray-300 px-3 bg-white">
                        {formatter.format(payrolls.net_pay)}
                      </td>
                      
                      <td class="border border-gray-300 px-3 bg-white">
                        {`${new Date(payrolls.date_created).toLocaleDateString()}` === "1/1/1970"
                          ? "_"
                          : `${new Date(payrolls.date_created).toLocaleDateString()}`}
                      </td>
                      
                      <td class="border border-gray-300 px-3 bg-white">
                         {`${new Date(payrolls.date_updated).toLocaleDateString()}` === "1/1/1970"
                          ? "_"
                          : `${new Date(payrolls.date_updated).toLocaleDateString()}`}
                      </td>

                      <td class="border border-gray-300 px-3 bg-white">
                        <EditPayroll payrolls={payrolls} />
                      </td>
                  </tr>
                );})}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payroll;

