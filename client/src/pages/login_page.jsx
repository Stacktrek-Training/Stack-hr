import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [employeeNumber, setEmployeeNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:4000/employee-login`,
        {
          employee_number: employeeNumber,
          password: password,
        }
      );
      const employee = response.data;
      localStorage.setItem("employee", JSON.stringify(employee)); // Store employee data in localStorage
      window.location.href = "/employee_dashboard";
      onLogin(employee);
    } catch (error) {
      setError(error.response.data);
    }
  };

  return (
    <div className=" grid grid-cols-2  background h-screen ">
      <div className="logo"> </div>
      <div className="LoginForm w-9/12">
        <form className=" p-10 rounded-xl" onSubmit={handleSubmit}>
          <div class="mb-6 ">
            <input
              type="text"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-200 focus:border-gray-200 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Employee Number"
              value={employeeNumber}
              onChange={(e) => setEmployeeNumber(e.target.value)}
              required
            />
          </div>
          <div class="mb-6">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-200 focus:border-gray-200 block w-full p-2.5"
              required
            />
          </div>

          <button
            href="/dashboard"
            type="submit"
            class="text-white cursor:pointer bg-orange-500 hover:bg-orange-400 focus:ring-4 focus:outline-none  font-medium  text-sm px-20 py-2.5 text-center "
          >
            Login
          </button>
        </form>{" "}
        <div className="text-xl stack h-32"> </div>
      </div>
    </div>
  );
};

export default Login;
