import React, { useState } from "react";
import axios from "axios";

const EditDeductionSSS = ({ sss }) => {
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
  const [salary_range_1, setRange1] = useState(sss.salary_range_1);
  const [salary_range_2, setRange2] = useState(sss.salary_range_2);
  const [employee_contribution_sss, setEmployeeSSS] = useState(
    sss.employee_contribution_sss
  );
  const [employer_contribution_sss, setEmployerSSS] = useState(
    sss.employer_contribution_sss
  );
  const [employee_contribution_ec, setEMployeeEC] = useState(
    sss.employee_contribution_ec
  );
  const [employer_contribution_ec, setEMployerEC] = useState(
    sss.employer_contribution_ec
  );
  const [employee_contribution_mpf, setEMployeeMPF] = useState(
    sss.employee_contribution_mpf
  );
  const [employer_contribution_mpf, setEMployerMPF] = useState(
    sss.employer_contribution_mpf
  );
  const [id, setId] = useState(sss.deduction_id);

  const editSSS = async () => {
    await axios
      .put(`http://localhost:4000/sss/${id}`, {
        salary_range_1: salary_range_1,
        salary_range_2: salary_range_2,
        employee_contribution_sss: employee_contribution_sss,
        employer_contribution_sss: employer_contribution_sss,
        employee_contribution_ec: employee_contribution_ec,
        employer_contribution_ec: employer_contribution_ec,
        employee_contribution_mpf: employee_contribution_mpf,
        employer_contribution_mpf: employer_contribution_mpf,
      })
      .then((response) => {
        editSSS(response.data);
        window.location.href = "/sss";
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
                Social Security System
              </h3>
              <form
                class="space-y flex flex-wrap gap-1.5 flex-col text-left  "
                onSubmit={editSSS}
              >
                <div>
                  <label
                    htmlFor="employee-name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Range of Compensation
                  </label>
                  <input
                    type="text"
                    onInput={OnlyNumber}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Range 1"
                    value={salary_range_1}
                    onChange={(e) => setRange1(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <input
                    onInput={OnlyNumber}
                    type="text"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Range 2"
                    value={salary_range_2}
                    onChange={(e) => setRange2(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="employee-name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Social Security (%)
                  </label>
                  <input
                    onInput={OnlyNumber}
                    maxLength={5}
                    type="text"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Employee"
                    value={employee_contribution_sss}
                    onChange={(e) => setEmployeeSSS(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <input
                    onInput={OnlyNumber}
                    maxLength={5}
                    type="text"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Employer"
                    value={employer_contribution_sss}
                    onChange={(e) => setEmployerSSS(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="employee-name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Employees Compensation
                  </label>
                  <input
                    onInput={OnlyNumber}
                    type="text"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Employee"
                    value={employee_contribution_ec}
                    onChange={(e) => setEMployeeEC(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <input
                    onInput={OnlyNumber}
                    type="text"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Employeer"
                    value={employer_contribution_ec}
                    onChange={(e) => setEMployerEC(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Mandatory Provident Fund (%)
                  </label>
                  <input
                    type="text"
                    onInput={OnlyNumber}
                    maxLength={5}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Employee"
                    value={employee_contribution_mpf}
                    onChange={(e) => setEMployeeMPF(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    maxLength={5}
                    onInput={OnlyNumber}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Employeer"
                    value={employer_contribution_mpf}
                    onChange={(e) => setEMployerMPF(e.target.value)}
                    required
                  />
                </div>

                <button
                  type="submit"
                  class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditDeductionSSS;
