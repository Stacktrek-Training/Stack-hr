import React from "react";
import "./../components/style.css";
import "./../progressbar.js";

function CircleProgressbar() {
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
        <h1> Reimbursed(monthly)/Limmit</h1>{" "}
      </div>
    </div>
  );
}

export default CircleProgressbar;
