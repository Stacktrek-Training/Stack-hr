import React from "react";

const StatusSalaries = () => {
  return (
    <>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded active:bg-blue-800">
        Active
      </button>
      <button class="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded">
        Inactive
      </button>
    </>
  );
};

export default StatusSalaries;
