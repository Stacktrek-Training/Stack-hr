import React from "react";
import "./../components/style.css";

function AddNew({ visible, onClose }) {
  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };

  if (!visible) return null;

  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="bg-white p-2 rounded">
        <div className="bg-white p-2 rounded">
          <div className="flex flex-col md:flex-row md:items-center">
            {/* Date picker */}
            <div className="w-full md:w-auto mb-2 md:mb-0 md:mr-2">
              <input
                type="date"
                className="p-2 rounded border-gray-300 w-full"
              />
            </div>

            <div class="relative max-w-sm">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                datepicker
                type="text"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Select date"
              />
            </div>

            {/* Dropdown */}
            <div className="w-full md:w-auto mb-2 md:mb-0 md:mx-2">
              <select className="p-2 rounded border-gray-300 w-full">
                <option value="january">January</option>
                <option value="february">February</option>
                <option value="march">March</option>
                <option value="april">April</option>
                <option value="may">May</option>
                <option value="june">June</option>
                <option value="july">July</option>
                <option value="august">August</option>
                <option value="september">September</option>
                <option value="october">October</option>
                <option value="november">November</option>
                <option value="december">December</option>
              </select>
            </div>

            {/* Amount input */}
            <div className="w-full md:w-auto mb-2 md:mb-0 md:mx-2 relative">
              <input
                type="number"
                className="p-2 rounded border-gray-300 w-full"
                placeholder="Enter amount"
              />
              <span className="absolute top-2 left-2 opacity-50 text-gray-500">
                Amount
              </span>
            </div>
          </div>

          {/* Upload image */}
          <div className="flex flex-col md:flex-row md:items-center m-1 md:m-2">
            <input
              type="file"
              className="p-2 rounded border-gray-300 mb-2 md:mb-0 md:mr-2"
            />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Upload
            </button>
          </div>

          {/* Add new button */}
          <div className="flex justify-end m-1 md:m-2">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Add New
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddNew;
