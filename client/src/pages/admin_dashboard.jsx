import React from "react";
import profilePicture from "./../assets/profilepic.png";

const Admin = () => {
  return (
    <div className="flex">
      <div className="text-center relative">
        <span className=" flex items-center justify-center text-black font-bold">
          WORK POSITION
        </span>
        <img
          className="h-relative w-full object-cover md:h-64 md:w-48"
          src={profilePicture}
          alt="Profile"
        />
        <span className="flex items-center justify-center text-black font-bold">
          USERNAME
        </span>
      </div>

      <div>
        <div className="h-60 w-2/3 mt-8 mx-10 relative bg-white align-middle text-center  rounded">
          <span className="font-bold">April</span>

          {/* Users */}
          <div className="w-full Box flex align-middle text-center">
            <div className="p-10">
              <div className="flex items-center">
                <img
                  className="w-8 h-8 rounded-full mr-2"
                  src={profilePicture}
                  alt="Profile"
                />
                <span className="mr-4 text-left">1. Gil</span>
                <div className="w-1/2 h-4 bg-gray-300 rounded-full overflow-hidden">
                  <div className="h-full bg-orange-400 rounded-full animate-pulse"></div>
                </div>
              </div>
              {/* Left side: Month container */}
              <div className="flex items-center mt-4">
                <img
                  className="w-8 h-8 rounded-full mr-2"
                  src={profilePicture}
                  alt="Profile"
                />
                <span className="mr-4 text-left">2. Veronica</span>
                <div className="w-24 h-4 bg-gray-300 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 rounded-full animate-pulse"></div>
                </div>
              </div>

              <div className="flex items-center mt-4">
                <img
                  className="w-8 h-8 rounded-full mr-2"
                  src={profilePicture}
                  alt="Profile"
                />
                <span className="mr-4 text-left">3. John Mark</span>
                <div className="w-24 h-4 bg-gray-300 rounded-full overflow-hidden">
                  <div className="h-full bg-orange-400 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
