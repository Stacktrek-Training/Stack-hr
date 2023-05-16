import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { useState } from "react";
import Dashboard from "./pages/dashboard";
import Employee from "./pages/employee";
import Payroll from "./pages/payrolls";
import User from "./pages/user_dashboard";
import Salaries from "./pages/salaries";
import Deduction from "./pages/deduction";
import Table from "./components/Table";
import PhilHealth from "./pages/PhilHealth";
import SSS from "./pages/SSS";
import PAGIBIG from "./pages/PAG-IBIG";
import EmployeeDashboard from "./pages/employee_dashboard";
import Attendance from "./pages/employee_attendance";
import JobRoles from "./pages/jobroles";
import Login from "./pages/login_page";
import AttendanceHr from "./pages/attendance_hr";
import Admin from "./pages/admin_dashboard";

function App() {
  const [employee, setEmployee] = useState(() => {
    const storedEmployee = localStorage.getItem("employee");
    return storedEmployee ? JSON.parse(storedEmployee) : [];
  });

  const handleLogin = (employeeData) => {
    console.log(employeeData);
    setEmployee(employeeData);
    localStorage.setItem("employee", JSON.stringify(employeeData));
  };

  console.log(employee);
  return (
    <BrowserRouter>
      <Switch>
        {/* DEFUALT PATH */}
        <Route exact path="/">
          <Login onLogin={handleLogin} />
        </Route>
        <Route path="/dashboard">
          <Dashboard employee={employee} />
        </Route>
        <Route path="/employee">
          <Employee employee={employee} />
        </Route>
        <Route path="/attendance_hr">
          <AttendanceHr employee={employee} />
        </Route>
        <Route path="/employee_dashboard">
          {employee && <EmployeeDashboard employee={employee} />}
        </Route>

        <Route path="/employee_attendance">
          <Attendance employee={employee} />
        </Route>
        <Route path="/expense">
          <User />
        </Route>
        <Route path="/payroll">
          <Payroll />
        </Route>
        <Route path="/salaries">
          <Salaries employee={employee} />
        </Route>
        <Route path="/table">
          <Table />
        </Route>
        <Route path="/deduction">
          <Deduction employee={employee} />
        </Route>
        <Route path="/philhealth">
          <PhilHealth employee={employee} />
        </Route>
        <Route path="/sss">
          <SSS employee={employee} />
        </Route>
        <Route path="/pag-ibig">
          <PAGIBIG employee={employee} />
        </Route>
        <Route path="/jobroles">
          <JobRoles employee={employee} />
        </Route>
        <Route path="/expense-admin">
          <Admin />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
