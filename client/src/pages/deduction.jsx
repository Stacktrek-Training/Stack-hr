import React, { useState, useEffect } from "react";
import "./../components/style.css";
import ShowDescription from "../components/hide_desc";
import EditDeduction from "../components/edit_deduction";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import AddDeduction from "../components/add_deduction";
import axios from "axios";

const Deduction = () => {
  const formatter = new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
    minimumFractionDigits: 2,
  });
  const [deductions, setDeductions] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:4000/deductions`)
      .then((response) => {
        setDeductions(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="h-screen relative">
      {" "}
      {/* Navbar */}
      <Navbar />
      <div className="flex h-screen bg-gray-200 m-0">
        {/* Sidebar */}
        <Sidebar />
        <div className="flex-1 p-12 mt-20">
          <div className="mb-5 flex ">
            <AddDeduction />
          </div>
          <div class="relative Table overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 text-center uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 sticky top-0">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    #
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Deduction Name
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Description
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Reduction Amount (%)
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Buttons
                  </th>
                </tr>
              </thead>
              <tbody>
                {deductions.map((deduction, index) => (
                  <tr
                    key={deduction.deduction_id}
                    class="bg-white border-b text-center dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {" "}
                      {index + 1}
                    </th>
                    <td class="px-6 py-4 capitalize">
                      {" "}
                      {deduction.deduction_name}
                    </td>
                    <td class="description px-6 py-4 text-left">
                      {" "}
                      <ShowDescription
                        text={deduction.description}
                        maxWordCount={50}
                      />
                    </td>

                    <td class="px-6 py-4">
                      {""} {`${deduction.amount}${"%"}`}
                    </td>
                    <td class=" px-6 py-4">
                      {" "}
                      <EditDeduction deduction={deduction} />
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
