import React, { useState } from "react";
import image2 from "./../assets/User-Icon.jpg";
import "./../components/style.css";
import classNames from "classnames";

const Navbar = ({ employee }) => {
  console.log(employee);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const navbarClasses = classNames({
    "dark-mode": darkMode,
  });

  return (
    <nav
      className={`bg-gray-200 border-b-slate-300 border-b-2  fixed w-full ${navbarClasses}`}>
      {" "}
      {/* Use absolute position for the navbar */}
      <div className="p-2 px-2 flex justify-end items-center pr-10 mx-auto">
        <div class="font-bold text-black pl-5 ">
          <div className="mr-2">{`${employee.first_name} ${employee.last_name}`}</div>
        </div>
        <div>
          <a
            type="button"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className=" flex justify-left cursor-pointer ">
            <img
              class="avatar rounded-full h-7 w-7 hover:ring-2 hover:ring-gray-400 focus:ring-1 "
              src={image2}
              alt="User dropdown"
            />
          </a>
          <div
            className={`${
              isDropdownOpen ? "" : "hidden "
            } absolute z-50 right-2 top-7 mt-2 py-2 w-52 bg-white rounded-md font-bold   shadow-lg z-999 text-center Form`}>
            <h1 className=" px-4 py-2 text-sm font-bold text-gray-700 cursor-default hover:text-gray-900 border-b border-solid border-gray-200">
              {`${employee.first_name} ${employee.last_name}`}
              <p className="pt-2 font-normal"> {employee.job_title}</p>
            </h1>

            <a
              href="#"
              className=" px-4 py-2 text-sm flex text-gray-700 hover:bg-gray-100 hover:text-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6 mr-3">
                <path
                  fill-rule="evenodd"
                  d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  clip-rule="evenodd"
                />
              </svg>
              Profile
            </a>
            <a
              href="/"
              className=" px-4 py-2 text-sm flex text-gray-700 hover:bg-gray-100 hover:text-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6 mr-3">
                <path
                  fill-rule="evenodd"
                  d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm5.03 4.72a.75.75 0 010 1.06l-1.72 1.72h10.94a.75.75 0 010 1.5H10.81l1.72 1.72a.75.75 0 11-1.06 1.06l-3-3a.75.75 0 010-1.06l3-3a.75.75 0 011.06 0z"
                  clip-rule="evenodd"
                />
              </svg>
              Logout
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
