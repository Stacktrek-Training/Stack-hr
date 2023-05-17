import React, { useState, useEffect } from "react";
import "./../components/style.css";
// import ShowDescription from "../components/hide_desc";
// import EditDeduction from "../components/edit_deduction";
import Sidebar from "../components/sidebar_hr";
import Navbar from "../components/navbar";
// import ShowTable from "../components/show_table";
import AddDeductionPhilHealth from "../components/add_deduction_philhealth";
import EditDeductionPhilHealth from "../components/edit_deduction_philhealth";
import axios from "axios";

const PhilHealth = ({ employee }) => {
  const employeeData = employee && employee.length > 0 ? employee[0] : null;

  const formatter = new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
    minimumFractionDigits: 2,
  });
  // fetch all the data in database
  const [philhealths, setPhilhealth] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:4000/philhealth`)
      .then((response) => {
        setPhilhealth(response.data);
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
        <div className="flex-1 p-12 mt-20">
          <div className=" flex justify-between mb-2">
            {/* {" show the dropdown table "} */}
            {/* <ShowTable /> */}
          </div>
          <div className="mb-5 flex ">
            <AddDeductionPhilHealth />
          </div>
          <div class="relative Table overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 text-center uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 sticky top-0">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    #
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Month Basic Salary
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Monthly Premium (%)
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Employee Share (%)
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Employer Share (%)
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {philhealths.map((philhealth, index) => (
                  <tr
                    key={philhealth.deduction_id}
                    class="bg-white border-b text-center dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {index + 1}
                    </th>
                    <td class="px-6 py-4 capitalize">
                      {`${formatter.format(philhealth.salary_range_1)}${"-"}${
                        philhealth.salary_range_2 > 90000
                          ? "Above"
                          : formatter.format(philhealth.salary_range_2)
                      }`}
                    </td>
                    <td class="px-6 py-4">
                      {`${philhealth.monthly_total_contribution}${"%"}`}
                    </td>

                    <td class="px-6 py-4">{`${parseFloat(
                      philhealth.monthly_total_contribution * 0.5
                    )}${"%"}`}</td>
                    <td class=" px-6 py-4">{`${parseFloat(
                      philhealth.monthly_total_contribution * 0.5
                    )}${"%"}`}</td>
                    <td class=" px-6 py-4">
                      <EditDeductionPhilHealth philhealth={philhealth} />
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

export default PhilHealth;
