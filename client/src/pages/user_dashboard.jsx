import React, { useState } from "react";
import "./../components/style.css";
import ExpenseNavbar from "../components/expense_navbar";
import ButtonAddNew from "../components/user_button_addNew";
import ContainerDashboard from "../components/user_container_dashboard";

const User = () => (
  <div>
    <div className="bg-white h-40"></div>
    <div>
      <div className="bg-white h-40"></div>
      <div>
        <ExpenseNavbar />
      </div>
      <div>
        <ContainerDashboard />
      </div>
      <div className="flex justify-end">
        <ButtonAddNew />
      </div>
    </div>
    <div>
      <CircleProgressbar />
    </div>
    <div>
      <ButtonAddNew />
    </div>
  </div>
);

export default User;
