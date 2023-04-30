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
