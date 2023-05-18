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
    <div className="side bg-orange-500  text-white w-52">
      <ul className="ul">
        <div className="image p-6 ">
          <img src={image1} alt="logo" />
        </div>
        <a href="/employee_dashboard">
          <li className="py-3 mt-2 px-2 flex items-center text-center hover:bg-orange-600 hover:rounded-tl-lg hover:rounded-bl-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6"
            >
              <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
              <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
            </svg>
            <p className="block font-semibold text-xl pl-7">Dashboard</p>
          </li>
        </a>
        <a href="/employee_attendance">
          <li className="py-3 mt-2 px-2 flex items-center text-center hover:bg-orange-600 hover:rounded-tl-lg hover:rounded-bl-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6"
            >
              <path
                fill-rule="evenodd"
                d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z"
                clip-rule="evenodd"
              />
              <path d="M12,2.25a9.75,9.75,0,1,0,9.75,9.75A9.76,9.76,0,0,0,12,2.25Zm0,18a8.25,8.25,0,1,1,8.25-8.25A8.26,8.26,0,0,1,12,20.25ZM14.25,7.5V13.5L18,15.75l-.75,1.5L14.25,13.5v4.5H9.75v-4.5L6,17.25l.75-1.5,3.75,2.25V7.5Z" />
              <circle cx="12" cy="12" r="2.5" fill="currentColor" />
            </svg>

            <p className="block font-bold text-xl pl-7">Attendance</p>
          </li>
        </a>
        <a href="/employee_leave">
          <li className="py-3 mt-2 px-2 flex items-center text-center hover:bg-orange-600 hover:rounded-tl-lg hover:rounded-bl-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6"
            >
              <path d="M18.85,4.09A7.46,7.46,0,0,0,4.1,18.84l0,0A7.46,7.46,0,0,0,18.84,4.09Zm-1.68,11.23H16.19v1.69H12.85v-1.69H8.58V10.81h8.58Zm0-7.6H9.22L9.83,5.1H14.17l.6,2.62Z" />
            </svg>

            <p className="block font-semibold text-xl pl-7">Leave</p>
          </li>
        </a>
      </ul>
    </div>
  );
};
export default Sidebar2;
