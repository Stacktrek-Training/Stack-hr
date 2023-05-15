import React, { useEffect, useState } from "react";
import axios from "axios";
import "./../components/style.css";
import "./../progressbar.js";

function CircleProgressbar(props) {
  const [reimburseLimit, setReimburseLimit] = useState(null);
  const id = 1;

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/employee/${id}`
        );
        setReimburseLimit(response.data[0].reimbursed_limit);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchEmployee();
  }, [id]);

  if (reimburseLimit === null) {
    return <div>Loading...</div>;
  }

  useEffect(() => {
    axios
      .get(`http://localhost:4000C/expense/${id}`)
      .then((response) => {
        setExpense(response.data);

        //calculate total amount
        let sum = 0;
        response.data.forEach((expense) => {
          sum += expense.data;
        });
          totalAmount = sum;
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div class="progressBody block py-7 px-5">
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
        <h1>{{sum}}/{reimburseLimit}</h1>{" "}
      </div>
    </div>
  );
}

export default CircleProgressbar;
