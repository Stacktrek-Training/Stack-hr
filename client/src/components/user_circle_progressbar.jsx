import React from "react";
import "./../components/style.css";
import "./../progressbar.js";
function CircleProgressbar() {
  return (
    <div class="progressBody">
      <div class="skill">
        <div className="outer">
          <div className="inner">
            <div id="number"></div>
          </div>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="160px"
          height="160px"
        >
          <defs>
            <linearGradient id="GradientColor">
              <stop offset="0%" stop-color="#e91e63" />
              <stop offset="100%" stop-color="#673ab7" />
            </linearGradient>
          </defs>
          <circle cx="80" cy="80" r="70" stroke-linecap="round" />
        </svg>
      </div>
    </div>
  );
}

export default CircleProgressbar;
