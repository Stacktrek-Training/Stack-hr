import { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './components/dashboard'
import Employee from './components/employee';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/Employee">
          <Employee />
        </Route>
        <Route path="/Payroll">
        </Route>
        <Route path="/Dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
