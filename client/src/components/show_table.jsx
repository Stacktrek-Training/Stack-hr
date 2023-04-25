import React from "react";

const ShowTable = () => {
  function redirectToPage() {
    const dropdown = document.getElementById("employee-name");
    const selectedValue = dropdown.value;

    // Construct the URL based on the selected value
    let url;
    if (selectedValue === "sss") {
      url = "http://localhost:5173/sss";
    } else if (selectedValue === "philhealth") {
      url = "http://localhost:5173/philhealth";
    } else if (selectedValue === "pagibig") {
      url = "https://example.com/pagibig";
    } else if (selectedValue === "deduction") {
      url = "http://localhost:5173/Deduction";
    } else if (selectedValue === "default") {
      return;
    }

    // Redirect to the selected URL
    window.location.href = url;
  }

  return (
    <>
      <div className="flex items-center">
        <div>
          <select
            id="employee-name"
            name="employee-name"
            onChange={redirectToPage}
            className="bg-gray-50 border border-gray-300 text-slate-500 text-sm rounded-lg focus:border-slate-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            required
          >
            <option value="default">Select Deduction</option>
            <option value="deduction" className="text-black">
              Deduction
            </option>
            <option value="sss" className="text-black">
              SSS
            </option>
            <option value="philhealth" className="text-black">
              PhilHealth
            </option>
            <option value="pagibig" className="text-black">
              PAG-IBIG
            </option>
          </select>
        </div>
      </div>
    </>
  );
};

export default ShowTable;
