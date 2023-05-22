import React, { useEffect, useState } from "react";
import axios from "axios";
import "./../components/style.css";

function CircleProgressbar({ employee }) {
  const [reimburseLimit, setReimburseLimit] = useState(null);
  const [totalAmount, setTotalAmount] = useState(0);
  const [dashOffset, setDashOffset] = useState(0);
  const [percent, setPercent] = useState(0);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/employee/${employee}`
        );
        setReimburseLimit(response.data[0].reimbursed_limit);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchEmployee();
  }, [employee]);

  useEffect(() => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1; // add 1 to convert to 1-based index
    axios
      .get(`http://localhost:4000/sum/${employee}/${currentMonth}`)
      .then((response) => {
        setTotalAmount(response.data.total_amount);
        setPercent((totalAmount / reimburseLimit) * 100);
        setDashOffset(Math.floor(472 - 472 * (percent / 100)));
      })
      .catch((error) => console.error(error));
  }, [employee, reimburseLimit, totalAmount, percent]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (counter === Math.floor(percent)) {
        clearInterval(interval);
      } else {
        setCounter((prevCounter) => prevCounter + 1);
      }
    }, 30);

    return () => {
      clearInterval(interval);
    };
  }, [counter, percent]);

  const formattedTotalAmount = new Intl.NumberFormat().format(totalAmount);
  const formattedReimburseLimit = new Intl.NumberFormat().format(
    reimburseLimit
  );

  return (
    <div className="progressBody block py-7 px-5">
      <div className="skill mb-5 ">
        <div className="outer">
          <div className="inner">
            <div id="percentnumber">{counter}%</div>
          </div>
        </div>

        <svg
          className="user_svg"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="160px"
          height="160px"
        >
          <defs>
            <linearGradient id="GradientColor">
              <stop offset="0%" stopColor="#5B9AD5" />
              <stop offset="100%" stopColor="#094BAC" />
            </linearGradient>
          </defs>
          <circle
            className="user_circle"
            cx="80"
            cy="80"
            r="70"
            strokeLinecap="round"
            style={{ "--dash-offset": dashOffset }}
          />
        </svg>
      </div>
      <div className="text-center">
        <h1>
          ₱{formattedTotalAmount}/₱{formattedReimburseLimit}
        </h1>
      </div>
    </div>
  );
}

export default CircleProgressbar;
