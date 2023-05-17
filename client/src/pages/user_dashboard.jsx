import React, { useState } from "react";
import "./../components/style.css";
import ExpenseNavbar from "../components/expense_navbar";
import ButtonAddNew from "../components/user_button_addNew";
import ContainerDashboard from "../components/user_container_dashboard";
import TableContainer from "../components/user_table_container";

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
      <div className="flex justify-end m-5 md:mr-20">
        <ButtonAddNew />
      </div>
      <div className="p-2 md:mx-20">
        <TableContainer />
      </div>
    </div>
  </div>
);

export default User;
