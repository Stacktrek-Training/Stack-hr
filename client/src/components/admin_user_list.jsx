import React from "react";
import profilePicture from "./../assets/profilepic.png";

function UserList() {
  return (
    <div className=" mt-2 ml-2 mr-6 mb-8">
      <div className="">
        <table class="w-full ml-2 border-2 border-orange-400 to-orange-400 text-sm text-left text-gray-500 dark:text-gray-400 ">
          <thead class="text-xs text-gray-700 uppercase bg-gradient-to-br from-orange-500 to-orange-400 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="p-4"></th>
              <th scope="col" class="px-6 py-3 text-white">
                USERNAME
              </th>
              <th scope="col" class="px-12 py-3 text-white">
                WORK
              </th>
              <th scope="col" class="px-6 py-3 text-white">
                PERCENT
              </th>
              <th scope="col" class="px-7 py-3 text-white">
                TOTAL
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td class=" p-4"></td>
              <th
                scope="row"
                class="px-0.2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <div class=" flex items-center">
                  <img
                    className="w-8 rounded-full"
                    src={profilePicture}
                    alt="Profile"
                  />
                  <div className="ml-2">
                    <strong>Gil Benedict Chiu</strong>
                  </div>
                </div>
              </th>

              <td class="px-12 py-4">Admin</td>
              <td class="px-8 py-4">50%</td>
              <td class="px-8 py-4">
                <button className=" rounded-sm text-blue-400">view</button>{" "}
              </td>
            </tr>

            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td class=" p-4"></td>
              <th
                scope="row"
                class="px-0.2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <div class=" flex items-center">
                  <img
                    className="w-8 rounded-full"
                    src={profilePicture}
                    alt="Profile"
                  />
                  <div className="ml-2">
                    <strong>Gil Benedict Chiu</strong>
                  </div>
                </div>
              </th>

              <td class="px-12 py-4">Admin</td>
              <td class="px-8 py-4">50%</td>
              <td class="px-8 py-4">
                <button className=" rounded-sm text-blue-400">view</button>{" "}
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td class=" p-4"></td>
              <th
                scope="row"
                class="px-0.2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <div class=" flex items-center">
                  <img
                    className="w-8 rounded-full"
                    src={profilePicture}
                    alt="Profile"
                  />
                  <div className="ml-2">
                    <strong>Gil Benedict Chiu</strong>
                  </div>
                </div>
              </th>

              <td class="px-12 py-4">Admin</td>
              <td class="px-8 py-4">50%</td>
              <td class="px-8 py-4">
                <button className=" rounded-sm text-blue-400">view</button>{" "}
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td class=" p-4"></td>
              <th
                scope="row"
                class="px-0.2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <div class=" flex items-center">
                  <img
                    className="w-8 rounded-full"
                    src={profilePicture}
                    alt="Profile"
                  />
                  <div className="ml-2">
                    <strong>Gil Benedict Chiu</strong>
                  </div>
                </div>
              </th>

              <td class="px-12 py-4">Admin</td>
              <td class="px-8 py-4">50%</td>
              <td class="px-8 py-4">
                <button className=" rounded-sm text-blue-400">view</button>{" "}
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td class=" p-4"></td>
              <th
                scope="row"
                class="px-0.2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <div class=" flex items-center">
                  <img
                    className="w-8 rounded-full"
                    src={profilePicture}
                    alt="Profile"
                  />
                  <div className="ml-2">
                    <strong>Gil Benedict Chiu</strong>
                  </div>
                </div>
              </th>

              <td class="px-12 py-4">Admin</td>
              <td class="px-8 py-4">50%</td>
              <td class="px-8 py-4">
                <button className=" rounded-sm text-blue-400">view</button>{" "}
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td class=" p-4"></td>
              <th
                scope="row"
                class="px-0.2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <div class=" flex items-center">
                  <img
                    className="w-8 rounded-full"
                    src={profilePicture}
                    alt="Profile"
                  />
                  <div className="ml-2">
                    <strong>Gil Benedict Chiu</strong>
                  </div>
                </div>
              </th>

              <td class="px-12 py-4">Admin</td>
              <td class="px-8 py-4">50%</td>
              <td class="px-8 py-4">
                <button className=" rounded-sm text-blue-400">view</button>{" "}
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td class=" p-4"></td>
              <th
                scope="row"
                class="px-0.2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <div class=" flex items-center">
                  <img
                    className="w-8 rounded-full"
                    src={profilePicture}
                    alt="Profile"
                  />
                  <div className="ml-2">
                    <strong>Gil Benedict Chiu</strong>
                  </div>
                </div>
              </th>

              <td class="px-12 py-4">Admin</td>
              <td class="px-8 py-4">50%</td>
              <td class="px-8 py-4">
                <button className=" rounded-sm text-blue-400">view</button>{" "}
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td class=" p-4"></td>
              <th
                scope="row"
                class="px-0.2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <div class=" flex items-center">
                  <img
                    className="w-8 rounded-full"
                    src={profilePicture}
                    alt="Profile"
                  />
                  <div className="ml-2">
                    <strong>Gil Benedict Chiu</strong>
                  </div>
                </div>
              </th>

              <td class="px-12 py-4">Admin</td>
              <td class="px-8 py-4">50%</td>
              <td class="px-8 py-4">
                <button className=" rounded-sm text-blue-400">view</button>{" "}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserList;
