import React, { useState, useEffect } from "react";
import image1 from "./../assets/logo.png";
import "./../components/style.css";
const Sidebar2 = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    // show the sidebar once the page is loaded
    setShowSidebar(true);
  }, []);

  return (
    <div className="side bg-orange-500  text-white w-64">
      <ul className="ul">
        <div className="image p-6 ">
          <img src={image1} alt="logo" />
        </div>
        <a href="/dashboard">
          <li className="py-3 mt-5 pl-10 flex items-center text-center hover:bg-orange-600 hover:rounded-tl-lg hover:rounded-bl-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6"
            >
              <path d="M21 9h-3V6c0-1.1-.9-2-2-2H8C6.9 4 6 4.9 6 6v3H3c-.6 0-1 .4-1 1v8c0 .6.4 1 1 1h18c.6 0 1-.4 1-1V10c0-.6-.4-1-1-1zm-6 8H9v-2h6v2zm4-4H5V11h14v2z" />
            </svg>

            <p className="block font-semibold text-xl pl-7">Dashboard</p>
          </li>
        </a>
        <a href="/attendance">
          <li className="py-3 mt-5  pl-10 flex items-center text-center hover:bg-orange-600 hover:rounded-tl-lg hover:rounded-bl-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6"
            >
              <path d="M12 2.6c-5.4 0-9.8 4.4-9.8 9.8s4.4 9.8 9.8 9.8 9.8-4.4 9.8-9.8-4.4-9.8-9.8-9.8zM12 20c-4.6 0-8.3-3.7-8.3-8.3S7.4 3.3 12 3.3 20.3 7 20.3 11.7 16.6 20 12 20z" />
              <path d="M12 5.5c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm-1.5 8.5l-2-2 1.4-1.4 0.6 0.6 3 3-0.6 0.6-1.4-1.4z" />
            </svg>

            <p className="block font-semibold text-xl pl-7"> Attendance </p>
          </li>
        </a>
        <a href="/leave">
          <li className="py-3 mt-5  pl-10 flex items-center text-center hover:bg-orange-600 hover:rounded-tl-lg hover:rounded-bl-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6"
            >
              <path d="M19 4h-1v1h-2V4H8v1H6V4H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-4 12h-4v-4h4v4zm2-6H7v-2h10v2z" />
            </svg>

            <p className="block font-semibold text-xl pl-7"> Leave </p>
          </li>
        </a>
      </ul>
    </div>
  );
};
export default Sidebar2;
