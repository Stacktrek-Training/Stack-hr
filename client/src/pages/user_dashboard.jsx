import React, { useState } from "react";
import "./../components/style.css";
import ExpenseNavbar from "../components/expense_navbar";
import CircleProgressbar from "../components/user_circle_progressbar";
import ButtonAddNew from "../components/user_button_addNew";
import profilePicture from "./../assets/profilepic.png";

const User = () => {
  return (
    <div>
      <div className="bg-white h-40"></div>
      <div>
        <ExpenseNavbar />
      </div>
      <div className="flex">
        <div className=" w-72 h-72  rounded-xl ml-10">
          <img
            className="object-cover rounded-lg  "
            src={profilePicture}
            alt="Profile"
          />
        </div>
        <div>
          <div className="flex-1 bg-red-50 mx-10 relative ">
            <div className=" flex  "></div>
            {/* Right side: container */}
            <div className=" Box text-center  flex m-1 md:m-2 bg-red-500">
              <div class=" ">
                <CircleProgressbar />
              </div>{" "}
              April
            </div>
          </div>
        </div>
      </div>
      <div>
        <ButtonAddNew />
      </div>
    </div>
  );
};

export default User;
