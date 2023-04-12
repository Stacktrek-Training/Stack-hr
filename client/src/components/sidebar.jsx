import React from "react";
import image1 from './../assets/logo.png'
const  Sidebar = () => { 
    return (

        <div className="flex h-screen bg-gray-200 m-0">
        <div className="bg-orange-500 w-64 text-white">
          <div className="p-6">
            <img src={image1} alt="logo"/>          </div>
          <ul className="pl-2">
            <li 
            className="py-3 px-4 hover:bg-gray-900 hover:rounded-tl-lg hover:rounded-bl-lg "
            >
              <a href="/Dashboard" className="block font-semibold">
                Dashboard
              </a>
            </li>
            <li
             className="py-3 px-4 hover:bg-gray-900 hover:rounded-tl-lg hover:rounded-bl-lg"
            >
              <a href="#" className="block font-semibold">
                Payrols
              </a>
            </li>
            <li 
            className="py-3 px-4 hover:bg-gray-900 hover:rounded-tl-lg hover:rounded-bl-lg"
            >
              <a href="/Employee" className="block font-semibold">
                Employee
              </a>
            </li>
          </ul>
        </div>
        <div className="flex-1 p-10">
          <h1>Main Content Area</h1>
        </div>
      </div>
      
    );
};

export default Sidebar;
