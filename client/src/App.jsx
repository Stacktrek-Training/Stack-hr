import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./components/dashboard";
import Employee from "./components/employee";
import Payroll from "./components/payrolls";
import User from "./components/user_dashboard";
import Salaries from "./components/salaries";
import Deduction from "./components/deduction";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route path="/Employee">
          <Employee />
        </Route>
        <Route path="/Expense">
          <User />
        </Route>
        <Route path="/Payroll">
          <Payroll />
        </Route>
        <Route path="/Salaries">
          <Salaries />
        </Route>
        <Route path="/Deduction">
          <Deduction />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
