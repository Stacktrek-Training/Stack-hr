import React from "react";
import profilePicture from "./../assets/profilepic.png";
import CircleProgressbar from "../components/user_circle_progressbar";

function AdminContainerDashboard() {
  return (
    <div className=" BoxMonth">
      <div className="flex">
        <div className="w-72 h-72 rounded-xl ml-10 flex flex-col justify-center items-center">
          <span className="align-middle text-center font-bold">Supervisor</span>
          <img
            className="object-cover rounded-lg shadow-xl"
            src={profilePicture}
            alt="Profile"
          />
        </div>

        <div>
          <div className="flex-1 mx-10 relative align-middle text-center p-1 shadow-2xl">
            <span className="font-bold">April</span>
            {/* Right side: container */}
            <div className=" Box flex align-middle text-center">
              <div class="justify-center items-center">
                <CircleProgressbar />
              </div>{" "}
              {/* Top 3 */}
              <div className="p-10 mt-5">
                <div className="flex items-center">
                  <span className="mr-4 text-left">1. Food</span>
                  <div className="w-1/2 h-4 bg-gray-300 rounded-full overflow-hidden">
                    <div className="h-full bg-orange-400 rounded-full animate-pulse"></div>
                  </div>
                </div>
                <div className="flex items-center mt-4">
                  <span className="mr-4 text-left">2. Transportation</span>
                  <div className="w-24 h-4 bg-gray-300 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full animate-pulse"></div>
                  </div>
                </div>
                <div className="flex items-center mt-4">
                  <span className="mr-4 text-left">3. Others</span>
                  <div className="w-24 h-4 bg-gray-300 rounded-full overflow-hidden">
                    <div className="h-full bg-orange-400 rounded-full animate-pulse"></div>
                  </div>
                </div>
                <button
                  type="button"
                  class="absolute bottom-2 right-2 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                  Edit Limit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminContainerDashboard;
