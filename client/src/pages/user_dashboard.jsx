import React, { useState } from "react";
import "./../components/style.css";
import ExpenseNavbar from "../components/expense_navbar";
import ButtonAddNew from "../components/user_button_addNew";
import ContainerDashboard from "../components/user_container_dashboard";
import TableContainer from "../components/user_table_container";

const User = ({ employee }) => {
  const employeeData = employee && employee.length > 0 ? employee[0] : null;

  return (
    <div>
      <div>
        <div className="bg-white h-40"></div>
        <div>
          <ExpenseNavbar employee={employeeData} />
        </div>
        <div>
          <ContainerDashboard employee={employeeData} />
        </div>
        <div className="bg-white h-20"></div>
        <div className="flex justify-end m-5 md:mr-20">
          <ButtonAddNew employee={employeeData} />
        </div>
        <div className="p-2 md:mx-20">
          <TableContainer employee={employeeData} />
        </div>
      </div>
    </div>
  );
};

export default User;
