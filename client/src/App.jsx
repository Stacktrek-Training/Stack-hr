import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Employee from "./pages/employee";
import Attendance from "./pages/attendance";
import Payroll from "./pages/payrolls";
import User from "./pages/user_dashboard";
import Salaries from "./pages/salaries";
import Deduction from "./pages/deduction";
import Table from "./components/Table";
import PhilHealth from "./components/PhilHealth";
import SSS from "./components/SSS";
import PAGIBIG from "./components/PAG-IBIG";
import JobRoles from "./pages/jobroles";

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
        <Route path="/attendance">
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
      </Switch>
    </BrowserRouter>
  );
}

export default App;
