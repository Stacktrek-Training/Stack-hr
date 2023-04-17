import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./components/dashboard";
import Employee from "./components/employee";
import Payroll from "./components/payrolls";
import User from "./components/user_dashboard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/Employee">
          <Employee />
        </Route>
        <Route path="/Expense">
          <User />
        </Route>
        <Route path="/Payroll">
          <Payroll />
        </Route>
        <Route path="/Dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
