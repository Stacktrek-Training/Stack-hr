import React, { useState } from "react";
import axios from "axios";
const EditDeductionPhilHealth = ({ philhealth }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalOpen = () => {
    setIsModalOpen(true);
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  // INPUT ONLY NUMBER AND .
  const OnlyNumber = (event) => {
    event.target.value = event.target.value.replace(/[^0-9.]/gi, "");
  };

  const [salary_range_1, setRange1] = useState(philhealth.salary_range_1);
  const [salary_range_2, setRange2] = useState(philhealth.salary_range_2);
  const [monthly_total_contribution, setTotal] = useState(
    philhealth.monthly_total_contribution
  );
  const [id, setId] = useState(philhealth.deduction_id);

  const editPhilhealth = async () => {
    await axios
      .put(`http://localhost:4000/philhealth/${id}`, {
        salary_range_1: salary_range_1,
        salary_range_2: salary_range_2,
        monthly_total_contribution: monthly_total_contribution,
      })
      .then((response) => {
        console.log(response.data);
        window.location.href = "/philhealth";
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <div className="flex w-full justify-between">
      {/* <!-- Modal toggle --> */}
      {/* <!-- Modal toggle --> */}
      <button
        onClick={handleModalOpen}
        class=" border-none bg-blue-800 px-2 py-1 rounded-md text-white
  hover:bg-blue-700  font-semibold text-xs tracking-widest"
        type="button"
        title="Edit"
      >
        Edit
      </button>

      {/* <!-- Main modal --> */}
      <div
        id="modal"
        tabindex="-1"
        aria-hidden="true"
        class={`fixed  z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 ${
          isModalOpen ? "" : "hidden"
        } flex items-center justify-center`}
      >
        <div class="relative w-full max-w-md  max-h-full Modal">
          {/* <!-- Modal content --> */}
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button
              type="button"
              class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
              onClick={handleModalClose}
            >
              <svg
                aria-hidden="true"
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
            <div class="px-6 py-6 lg:px-8 text-left">
              <h3 class="mb-4 text-xl  font-bold text-gray-900 dark:text-white">
                PhilHealth
              </h3>
              <form
                onSubmit={editPhilhealth}
                class="space-y flex flex-wrap gap-1.5 flex-col  "
              >
                <div>
                  <label
                    htmlFor="employee-name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Monthly Salary
                  </label>
                  <input
                    type="text"
                    onInput={OnlyNumber}
                    class="bg-gray-50 mb-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Range 1"
                    value={salary_range_1}
                    onChange={(e) => setRange1(e.target.value)}
                    required
                  />
                  <div>
                    <input
                      type="text"
                      onInput={OnlyNumber}
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="Range 2"
                      value={salary_range_2}
                      onChange={(e) => setRange2(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Monthly Prenium (%)
                  </label>
                  <input
                    onInput={OnlyNumber}
                    maxLength={5}
                    type="text"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Monthly Prenium"
                    value={monthly_total_contribution}
                    onChange={(e) => setTotal(e.target.value)}
                    required
                  />
                </div>

                <button
                  type="submit"
                  class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditDeductionPhilHealth;
