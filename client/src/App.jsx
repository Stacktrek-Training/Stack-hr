import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { useState } from "react";
import Dashboard from "./pages/dashboard";
import Employee from "./pages/employee";
import Payroll from "./pages/payrolls";
import User from "./pages/user_dashboard";
import Salaries from "./pages/salaries";
import Deduction from "./pages/deduction";
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
    const storedEmployee = sessionStorage.getItem("employee");
    return storedEmployee ? JSON.parse(storedEmployee) : [];
  });

  const handleLogin = (employeeData) => {
    console.log(employeeData);
    setEmployee(employeeData);
    sessionStorage.setItem("employee", JSON.stringify(employeeData));
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
          {employee && <Dashboard employee={employee} />}
        </Route>
        <Route path="/employee">
          {employee && <Employee employee={employee} />}
        </Route>
        <Route path="/attendance_hr">
          {employee && <AttendanceHr employee={employee} />}
        </Route>
        <Route path="/employee_dashboard">
          {employee && <EmployeeDashboard employee={employee} />}
        </Route>

        <Route path="/employee_attendance">
          {employee && <Attendance employee={employee} />}
        </Route>
        <Route path="/expense">
          {employee && <User employee={employee} />}
        </Route>
        <Route path="/payroll">
          {employee && <Payroll employee={employee} />}
        </Route>
        <Route path="/salaries">
          {employee && <Salaries employee={employee} />}
        </Route>
        <Route path="/deduction">
          {employee && <Deduction employee={employee} />}
        </Route>
        <Route path="/philhealth">
          {employee && <PhilHealth employee={employee} />}
        </Route>
        <Route path="/sss">{employee && <SSS employee={employee} />}</Route>
        <Route path="/pag-ibig">
          {employee && <PAGIBIG employee={employee} />}
        </Route>
        <Route path="/jobroles">
          {employee && <JobRoles employee={employee} />}
        </Route>
        <Route path="/expense-admin">
          {employee && <Admin employee={employee} />}
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
