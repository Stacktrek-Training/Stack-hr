import React from "react";

function TableContainer() {
  return (
    <div className="p-10 bg-gray-100 shadow-inner">
      <div class="overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="p-4"></th>
              <th scope="col" class="px-6 py-3">
                Date
              </th>
              <th scope="col" class="px-6 py-3">
                Category
              </th>
              <th scope="col" class="px-6 py-3">
                Amount
              </th>
              <th scope="col" class="px-6 py-3">
                Receipt
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td class="w-4 p-4"></td>
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                May 8, 2023
              </th>
              <td class="px-6 py-4">Food</td>
              <td class="px-6 py-4">₱580</td>
              <td class="px-6 py-4">
                <button className=" rounded-sm text-blue-400">view</button>{" "}
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td class="w-4 p-4"></td>
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                May 7, 2023
              </th>
              <td class="px-6 py-4">Transportation</td>
              <td class="px-6 py-4">₱700</td>
              <td class="px-6 py-4">
                <button className=" rounded-sm text-blue-400">view</button>{" "}
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td class="w-4 p-4"></td>
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                May 5, 2023
              </th>
              <td class="px-6 py-4">Food</td>
              <td class="px-6 py-4">₱300</td>
              <td class="px-6 py-4">
                <button className=" rounded-sm text-blue-400">view</button>{" "}
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td class="w-4 p-4"></td>
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                May 3, 2023
              </th>
              <td class="px-6 py-4">Internet</td>
              <td class="px-6 py-4">₱1500</td>
              <td class="px-6 py-4">
                <button className=" rounded-sm text-blue-400">view</button>{" "}
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td class="w-4 p-4"></td>
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                May 2, 2023
              </th>
              <td class="px-6 py-4">Non-Coding Activity</td>
              <td class="px-6 py-4">₱500</td>
              <td class="px-6 py-4">
                <button className=" rounded-sm text-blue-400">view</button>{" "}
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td class="w-4 p-4"></td>
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                May 1, 2023
              </th>
              <td class="px-6 py-4">Office Supplies</td>
              <td class="px-6 py-4">₱400</td>
              <td class="px-6 py-4">
                <button className=" rounded-sm text-blue-400">view</button>{" "}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableContainer;
