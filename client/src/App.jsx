import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";
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
import Attendance1 from "./pages/attendance_trial";
import JobRoles from "./pages/jobroles";
import AttendanceHr from "./pages/attendance_hr";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* DEFUALT PATH */}
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route path="/employee">
          <Employee />
        </Route>
        <Route path="/attendance_hr">
          <AttendanceHr />
        </Route>
        <Route path="/employee_dashboard">
          <EmployeeDashboard />
        </Route>

        <Route path="/employee_attendance">
          <Attendance />
        </Route>
        <Route path="/expense">
          <User />
        </Route>
        <Route path="/payroll">
          <Payroll />
        </Route>
        <Route path="/salaries">
          <Salaries />
        </Route>
        <Route path="/table">
          <Table />
        </Route>
        <Route path="/deduction">
          <Deduction />
        </Route>
        <Route path="/philhealth">
          <PhilHealth />
        </Route>
        <Route path="/sss">
          <SSS />
        </Route>
        <Route path="/pag-ibig">
          <PAGIBIG />
        </Route>
        <Route path="/jobroles">
          <JobRoles />
        </Route>
        <Route path="/att">
          <Attendance1 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
