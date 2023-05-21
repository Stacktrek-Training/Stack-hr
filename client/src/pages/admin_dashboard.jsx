import React, { useState } from "react";
import ExpenseNavbar from "../components/expense_navbar";
import CircleProgressbar from "../components/admin_circle_progressbar";
import profilePicture from "./../assets/profilepic.png";
import UserList from "../components/admin_user_list";
import UserGrid from "../components/admin_user_grid";

const Admin = ({ employee }) => {
  const [isListView, setIsListView] = useState(false);
  const employeeData = employee && employee.length > 0 ? employee[0] : null;
  const userListData = [
    "1. Gil Benedict Chiu",
    "2. Veronica Castillo",
    "3. John Mark Chavez",
  ];

  const toggleView = () => {
    setIsListView(!isListView);
  };

  return (
    <div>
      <div>
        {" "}
        <ExpenseNavbar employee={employeeData} />
      </div>
      <div>
        <div className="border-4 border-orange-400 h-72 w-120 mt-32 mr-16 ml-16 flex-1 mx-10 relative bg-white align-middle text-center  shadow-2xl rounded-3xl">
          <div className="mt-0.1">
            <span className="font-bold">MONTH</span>
          </div>
          {/* Users */}
          <div className="w-full Box flex align-middle text-center">
            <div className="ml-16 mt-2 ">
              {userListData.map((user, index) => (
                <div className="flex items-center" key={index}>
                  <img
                    className="w-16 h-16 rounded-full mr-2"
                    src={profilePicture}
                    alt="Profile"
                  />
                  <span className="mr-4 text-left">{user}</span>
                </div>
              ))}
            </div>
            {/* Circle Progress Bar */}
            <div className="w-full justify-end items-center">
              <CircleProgressbar />
            </div>
          </div>
        </div>
      </div>
      {/* List, Grid, Search Bar */}
      <form className="flex items-center">
        <div className="flex ml-24 mt-6">
          <button
            type="button"
            className={`text-white bg-blue-500 border-2 border-blue-500 focus:outline-none hover:bg-orange-500 focus:ring-1 focus:ring-blue-500 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 ${
              isListView ? "bg-orange-500" : ""
            }`}
            onClick={() => setIsListView(true)}
          >
            List
          </button>
        </div>
        <div className="flex ml-26 mt-6">
          <button
            type="button"
            className={`text-white bg-blue-500 border-2 border-blue-500 focus:outline-none hover:bg-orange-500 focus:ring-1 focus:ring-blue-500 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 ${
              !isListView ? "bg-orange-500" : ""
            }`}
            onClick={() => setIsListView(false)}
          >
            Grid
          </button>
        </div>
        <label htmlFor="simple-search" className="sr-only">
          Search
        </label>
        <div className="relative w-1/4 mt-4">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="simple-search"
            className="bg-gray-50 border-2 border-blue-500 text-gray-900 text-sm rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search"
            required
          ></input>
        </div>
        <span className="sr-only">Search</span>
      </form>
      {/* Bottom User list */}
      {isListView ? (
        <div className="mt-6">
          <UserList data={userListData} />
        </div>
      ) : (
        <div className="mt-6">
          <UserGrid data={userListData} />
        </div>
      )}
    </div>
  );
};

export default Admin;
