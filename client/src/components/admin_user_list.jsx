import React from "react";
import profilePicture from "./../assets/profilepic.png";

function UserList() {
  const progress = 50; // Set the progress value dynamically based on your data

  return (
    <div className="mt-2 mr-8 ml-3 mb-8">
      <div className="">
        <table className="w-full ml-2 border-2 border-orange-400 to-orange-400 text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gradient-to-br from-orange-500 to-orange-400 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4"></th>
              <th scope="col" className="px-6 py-3 text-white">
                USERNAME
              </th>
              <th scope="col" className="px-12 py-3 text-white">
                WORK
              </th>
              <th scope="col" className="px-10 py-3 text-white">
                PROGRESS
              </th>
              <th scope="col" className="px-7 py-3 text-white">
                TOTAL
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="p-4"></td>
              <th
                scope="row"
                className="px-0.2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <div className="flex items-center">
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

              <td className="px-12 py-4">Admin</td>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <progress
                    className="w-1/4 h-2 rounded bg-blue-400"
                    value={progress}
                    max="100"
                  />
                  <span className="ml-2">{`${progress}%`}</span>
                </div>
              </td>
              <td className="px-8 py-4">
                <button className="rounded-sm text-blue-400">view</button>{" "}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserList;
