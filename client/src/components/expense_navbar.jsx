import React, { useState } from "react";
import profilePicture from "./../assets/profilepic.png";

const ExpenseNavbar = ({ employee }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div>
      {/* Top navbar */}
      <nav className="bg-white shadow-lg pb-4 fixed top-0 w-full z-10">
        <div className="mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="fixed top-0 left-0 px-4 py-2">
              <h1 className="text-2xl font-bold text-blue-600">
                STACK
                <span className="text-orange-500">X</span>PENSE
              </h1>
            </div>
          </div>
        </div>
      </nav>
      {/* Line separator */}
      <hr className="border-black fixed" />
      {/* Bottom navbar */}
      <nav className="bg-white shadow-lg pb-3 pt-3 fixed top-12 left-0 w-full z-10 border-t border-gray-400">
        <div className="mx-auto px-4 flex justify-between items-center">
          {/* Left side: profile picture and username */}
          <div className="flex items-center">
            <img
              className="w-8 h-8 rounded-full mr-2"
              src={profilePicture}
              alt="Profile"
            />
            <span className="text-gray-700 font-bold">
              {employee.first_name} {employee.last_name}
            </span>
          </div>
          {/* Right side: menu button */}
          <div className="md:hidden">
            <button
              className="flex items-center px-3 py-2 border rounded text-gray-700 border-gray-700 hover:text-gray-900 hover:border-gray-900"
              onClick={toggleSidebar}
            >
              <svg
                className="h-4 w-4 mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm1 5a1 1 0 100 2h12a1 1 0 100-2H4z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          {/* Right side: clickable items */}
          <div className="hidden md:block items-center">
            <a
              href="#"
              className="text-blue-600 hover:text-blue-600 mr-10 relative"
            >
              Dashboard
              <div className="absolute top-9 left-0 w-full h-1 bg-blue-600"></div>
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 mr-10">
              Statistics
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 mr-10">
              Logout
            </a>
          </div>
        </div>
        {/* Menu sidebar */}
        {showSidebar && (
          <div className="md:hidden  bg-white py-2 px-4">
            <a
              href="#"
              className="block text-gray-700 hover:text-gray-900 mb-2"
            >
              Dashboard
            </a>
            <a
              href="#"
              className="block text-gray-700 hover:text-gray-900 mb-2"
            >
              Statistics
            </a>
            <a
              href="#"
              className="block text-gray-700 hover:text-gray-900 mb-2"
            >
              Logout
            </a>
          </div>
        )}
        <div></div>
      </nav>
    </div>
  );
};

export default ExpenseNavbar;
