import React, { useState } from "react";
import axios from "axios";

const StatusSalaries = () => {
  const [isEnable, setIsActive] = useState(true);

  const handleClick = () => {
    setIsActive(!isEnable);
  };

  return (
    <>
      <span
        className={`bg-blue-800 text-white font-bold py-1 px-2 text-md rounded cursor-pointer ${
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
