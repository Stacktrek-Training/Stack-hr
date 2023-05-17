import React, { useEffect, useState } from "react";
import axios from "axios";
import "./../components/style.css";
import "./../progressbar.js";

function AdminCircularProgressbar() {
  const Expense = () => {
    // for getting all expenses data
    const [expenses, setExpense] = useState([]);
    const id = 1;

    useEffect(() => {
      axios
        .get(`http://localhost:4000/expense/${id}`)
        .then((response) => {
          setExpense(response.data);
        })
        .catch((error) => console.error(error));
    }, []);
  };

  return (
    <div className="flex justify-end item-center mr-16 mt-4">
      <div class=" ">
        <div class="skill mb-5 ">
          <div className="outer">
            <div className="inner">
              <div id="number"></div>
            </div>
          </div>

          <svg
            class="user_svg"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="160px"
            height="160px"
          >
            <defs>
              <linearGradient id="GradientColor">
                <stop offset="0%" stop-color="#5B9AD5" />
                <stop offset="100%" stop-color="#094BAC" />
              </linearGradient>
            </defs>
            <circle
              class="user_circle"
              cx="80"
              cy="80"
              r="70"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <div className="text-center">
          {" "}
          <h1> 7000/10000</h1>{" "}
        </div>
      </div>
    </div>
  );
}

export default AdminCircularProgressbar;
