import { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Sidebar from './components/sidebar'
import Employee from './components/employee';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/Employee">
          <Employee />
        </Route>
        <Route path="/Payrol">
        </Route>
        <Route path="/">
          <Sidebar />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
