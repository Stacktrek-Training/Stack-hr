import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Employee from "./pages/employee";
import Payroll from "./pages/payrolls";
import User from "./pages/user_dashboard";
import Salaries from "./pages/salaries";
import Deduction from "./pages/deduction";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route path="/employee">
          <Employee />
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
        <Route path="/deduction">
          <Deduction />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
