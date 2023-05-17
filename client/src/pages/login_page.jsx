import React from "react";

const Login = () => {
  return (
    <div className=" grid grid-cols-2  background h-screen ">
      <div className="logo"> </div>
      <div className="LoginForm w-9/12">
        <form className=" p-10 rounded-xl">
          <div class="mb-6 ">
            <input
              type="text"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-200 focus:border-gray-200 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Employee Number"
              required
            />
          </div>
          <div class="mb-6">
            <input
              type="password"
              placeholder="Password"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-200 focus:border-gray-200 block w-full p-2.5"
              required
            />
          </div>

          <a
            href="/dashboard"
            type="submit"
            class="text-white cursor:pointer bg-orange-500 hover:bg-orange-400 focus:ring-4 focus:outline-none  font-medium  text-sm px-20 py-2.5 text-center "
          >
            Login
          </a>
        </form>{" "}
        <div className="text-xl stack h-32"> </div>
      </div>
    </div>
  );
};

export default Login;
