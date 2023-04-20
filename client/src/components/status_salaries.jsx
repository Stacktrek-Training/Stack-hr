import React, { useState } from "react";
import axios from "axios";

const StatusSalaries = (salary) => {
  console.log(salary);
  const [isEnable, setIsActive] = useState(true);

  const handleClick = () => {
    setIsActive(!isEnable);
  };
  const [status, setStatus] = useState(salary.status);

  return (
    <>
      <span
        className={`bg-blue-800 text-white font-bold py-1 px-2 hover:bg-blue-700 text-md rounded cursor-pointer ${
          isEnable ? "bg-blue-800" : "bg-red-500 !important"
        }`}
        onClick={handleClick}
      >
        {isEnable ? "Enable" : "Disabled"}
      </span>
    </>
  );
};

export default StatusSalaries;
