import React, { useState } from "react";
import "./../components/style.css";
import ExpenseNavbar from "../components/expense_navbar";
import ButtonAddNew from "../components/user_button_addNew";
import ContainerDashboard from "../components/user_container_dashboard";

const User = () => (
  <div>
    <div>
      <div className="bg-white h-40"></div>
      <div>
        <ExpenseNavbar />
      </div>
      <div>
        <ContainerDashboard />
      </div>
      <div className="bg-white h-20"></div>
      <div className="flex justify-end mr-10">
        <ButtonAddNew />
      </div>
    </div>
  </div>
);

export default User;
