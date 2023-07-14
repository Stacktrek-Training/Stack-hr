import React, { useState } from "react";
import axios from "axios";

const EditWithholdingTax = ({ withholding_tax }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalOpen = () => {
    setIsModalOpen(true);
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  const OnlyNumber = (event) => {
    event.target.value = event.target.value.replace(/[^0-9.]/gi, "");
  };

  const [taxable_income_range_1, setRange1] = useState(withholding_tax.taxable_income_range_1);
  const [taxable_income_range_2, setRange2] = useState(withholding_tax.taxable_income_range_2);
  const [salary_type, setSalaryType] = useState(withholding_tax.salary_type);
  const [percentage, setPercentage] = useState(withholding_tax.percentage);
  const [amount_1, setAmount1] = useState(withholding_tax.amount_1);
  const [amount_2, setAmount2] = useState(withholding_tax.amount_2);
  const [id, setId] = useState(withholding_tax.deduction_id);

  const editWithholdingTax = async () => {
    await axios
      .put(`http://localhost:4000/withholding_tax/${id}`, {
        taxable_income_range_1: parseFloat(taxable_income_range_1),
        taxable_income_range_2: parseFloat(taxable_income_range_2),
        salary_type: salary_type,
        percentage: parseFloat(percentage),
        amount_1: parseFloat(amount_1),
        amount_2: parseFloat(amount_2),
      })
      .then((response) => {
        editWithholdingTax(response.data);
        window.location.href = "/withholding_tax";
      })
      .catch((error) => {
        console.error(error.message);
      });
  };
  return (
    <div className="flex w-full justify-between">
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
        <div class="relative w-full max-w-md  max-h-full Modal ">
          {/* <!-- Modal content --> */}
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button
              type="button"
              class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
              onClick={handleModalClose}
            >
              <svg
                aria-hidden="true"
                class="w-5 h-5 "
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
              <h3 class="mb-4 text-xl inline-flex gap-2 font-bold text-gray-900 dark:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-6 h-6"
                >
                  <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                  <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
                </svg>{" "}
                Edit Withholding Tax
              </h3>
              <form
                class="space-y flex flex-wrap gap-1.5 flex-col text-left  "
                onSubmit={editWithholdingTax}
              >
                
                <div>
                  <label
                    for="taxable_income_range_1"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Taxable Income Range 1
                  </label>
                  <input
                    type="text"
                    value={taxable_income_range_1}
                    onChange={(e) => setRange1(e.target.value)}
                    onInput={OnlyNumber}
                    maxLength={10}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Taxable Income Range 1"
                    required
                  />
                </div>

                <div>
                  <label
                    for="taxable_income_range_2"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Taxable Income Range 2
                  </label>
                  <input
                    type="text"
                    value={taxable_income_range_2}
                    onChange={(e) => setRange2(e.target.value)}
                    onInput={OnlyNumber}
                    maxLength={10}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Taxable Income Range 2"
                    required
                  />
                </div>

                <div>
                  <label
                    for="salary_type"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Salary Type
                  </label>
                  <select
                    id="salary_type"
                    name="salary_type"
                    value={salary_type}
                    onChange={(e) => setSalaryType(e.target.value)}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  >
                    <option value="" disabled selected hidden>
                      Salary Type
                    </option>

                    <option className="capitalize" value="Weekly">
                      Weekly
                    </option>
                    
                    <option className="capitalize" value="Semi-Monthly">
                      Semi-Monthly
                    </option>
                    
                    <option className="capitalize" value="Monthly">
                      Monthly
                    </option>
                  </select>
                </div>
              
                <div>
                  <label
                    for="percentage"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Percentage (%)
                  </label>
                  <input
                    type="text"
                    value={percentage}
                    onChange={(e) => setPercentage(e.target.value)}
                    onInput={OnlyNumber}
                    maxLength={3}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Percentage (%)"
                    required
                  />
                </div>

                <div>
                  <label
                    for="amount_1"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Amount 1
                  </label>

                  <input
                    type="text"
                    value={amount_1}
                    onChange={(e) => setAmount1(e.target.value)}
                    onInput={OnlyNumber}
                    maxLength={10}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Amount 1"
                    required
                  />
                </div>

                <div>
                  <label
                    for="amount_2"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Amount 2
                  </label>

                  <input
                    type="text"
                    value={amount_2}
                    onChange={(e) => setAmount2(e.target.value)}
                    onInput={OnlyNumber}
                    maxLength={10}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Amount 2"
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

export default EditWithholdingTax;



