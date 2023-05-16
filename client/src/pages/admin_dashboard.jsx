import React from "react";
import ExpenseNavbar from "../components/expense_navbar";
import CircleProgressbar from "../components/admin_circle_progressbar";
import profilePicture from "./../assets/profilepic.png";

const Admin = () => {
  return (
    <div>
      <div>
        <ExpenseNavbar />
      </div>
      <div>
        <div className="border-4 border-orange-300 h-72 w-120 mt-32 mr-16 ml-16 flex-1 mx-10 relative bg-white align-middle text-center  shadow-2xl rounded-xl">
          <div className="mt-0.1">
            <span className="font-bold  ">MONTH</span>
          </div>
          {/* Users */}
          <div className="w-full Box flex align-middle text-center">
            <div className="ml-16 mt-2 ">
              <div className="flex items-center">
                <img
                  className="w-16 h-16 rounded-full mr-2"
                  src={profilePicture}
                  alt="Profile"
                />
                <span className="mr-4 text-left">1. Gil Benedict Chiu</span>
              </div>

              <div className="flex items-center mt-4">
                <img
                  className="w-16 h-16 rounded-full mr-2"
                  src={profilePicture}
                  alt="Profile"
                />
                <span className="mr-4 text-left">2. Veronica Castillo</span>
              </div>

              <div className="flex items-center mt-4">
                <img
                  className="w-16 h-16 rounded-full mr-2"
                  src={profilePicture}
                  alt="Profile"
                />
                <span className="mr-4 text-left">3. John Mark Chavez</span>
              </div>
            </div>

            <div className="w-full justify-end items-center">
              <CircleProgressbar />
            </div>
          </div>
        </div>
      </div>
      <div className="ml-24 mt-4 flex justify-start  ">
        <div class="flex  items-center">
          <label for="simple-search" class="sr-only">
            Search
          </label>
          <div class="relative w-full search ">
            <div class="search_icon  inset-y-0  flex items-center  ">
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-gray-500 text-blue-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>

            <input
              type="text"
              id="simple-search"
              class="bg-gray-50 border-2 border-blue-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-30  pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
              required
              autoComplete="off"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
