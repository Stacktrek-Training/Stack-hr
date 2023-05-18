import React, { useEffect, useState } from "react";
import axios from "axios";

function TableContainer({ employee }) {
  const [expenses, setExpenses] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:4000/expense/${employee.employee_id}`)
      .then((response) => {
        setExpenses(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="md:p-10 bg-gray-100 shadow-inner">
      <div class=" shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gradient-to-br from-orange-500 to-orange-400 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="p-4"></th>
              <th scope="col" class="px-6 py-3 text-white">
                Date
              </th>
              <th scope="col" class="px-6 py-3 text-white">
                Category
              </th>
              <th scope="col" class="px-6 py-3 text-white">
                Amount
              </th>
              <th scope="col" class="px-6 py-3 text-white">
                Receipt
              </th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300">
                <td class="w-4 p-4"></td>
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {new Date(expense.date).toLocaleDateString()}
                </th>
                <td class="px-6 py-4">{expense.category}</td>
                <td class="px-6 py-4">₱{expense.amount}</td>
                <td class="px-6 py-4">
                  <button className="rounded-sm text-blue-400">view</button>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableContainer;
