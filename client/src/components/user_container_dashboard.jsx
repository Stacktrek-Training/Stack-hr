import React from "react";
import profilePicture from "./../assets/profilepic.png";
import CircleProgressbar from "../components/user_circle_progressbar";

function ContainerDashboard() {
  return (
    <div className=" BoxMonth">
      <div className="flex">
        <div className="w-72 h-72 rounded-xl ml-10 flex flex-col justify-center items-center">
          <span className="align-middle text-center">Supervisor</span>
          <img
            className="object-cover rounded-lg shadow-xl"
            src={profilePicture}
            alt="Profile"
          />
        </div>

        <div>
          <div className="flex-1 mx-10 relative align-middle text-center p-1 shadow-2xl">
            <span>April</span>
            {/* Right side: container */}
            <div className=" Box flex align-middle text-center">
              <div class="justify-center items-center">
                <CircleProgressbar />
              </div>{" "}
              {/* Top 3 */}
              <div className="p-10">
                <div className="flex items-center">
                  <span className="mr-4 text-left">1. Food</span>
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
                    <div className="h-full bg-blue-500 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContainerDashboard;
