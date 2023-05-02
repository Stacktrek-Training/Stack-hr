import React, { useState } from "react";
import "./../components/style.css";
import ExpenseNavbar from "../components/expense_navbar";
import CircleProgressbar from "../components/user_circle_progressbar";
import ButtonAddNew from "../components/user_button_addNew";

const User = () => {
  return (
    <div>
      <div className="bg-white h-40"></div>
      <div>
        <ExpenseNavbar />
      </div>
      <div>
        <CircleProgressbar />
      </div>
      <div>
        <ButtonAddNew />
      </div>
    </div>
  );
};

export default User;
