import React, { useState, useEffect } from "react";
import axios from "axios";

const AddSalaries = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalOpen = () => {
    setIsModalOpen(true);
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  const OnlyNumber = (event) => {
    event.target.value = event.target.value.replace(/[^0-9 . ₱]/gi, "");
  };

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/employees")
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  const [employee_id, setEmployeeId] = useState("");
  const [salary, setSalary] = useState("");
  const [rate_type, setRateType] = useState("");
  const [required_hours, setrequiredHours] = useState("");

  const handleSave = () => {
    axios
      .post("http://localhost:4000/salaries", {
        employee_id: parseInt(employee_id),
        salary: parseFloat(salary),
        rate_type: rate_type,
        required_hours: required_hours,
      })
      .then((response) => {
        console.log(response.data);
        window.location.href = "/salaries";
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  const formatter = new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
    minimumFractionDigits: 2,
  });
  return (
    <div className="flex w-full justify-between">
      <div class="flex items-center">
        <label for="simple-search" class="sr-only">
          Search
        </label>
        <div class="relative w-full search ">
          <div class="search_icon  inset-y-0  flex items-center  ">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>

          <input
            type="text"
            id="simple-search"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-30  pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search"
            required
            autoComplete="off"
          />
        </div>
      </div>
      {/* <!-- Modal toggle --> */}
      <button
        onClick={handleModalOpen}
        title="Add Salaries"
        class=" flex  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5  py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Add Salaries
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
            <div class="px-6 py-6 lg:px-8">
              <h3 class="mb-4 text-xl  font-bold text-gray-900 dark:text-white">
                Add Salaries
              </h3>
              <form
                class="space-y flex flex-wrap gap-1.5 flex-col  "
                onSubmit={handleSave}
              >
                <div>
                  <label
                    for="employee-name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Employee Name
                  </label>
                  <select
                    id="employee-name"
                    name="employee-name"
                    value={employee_id}
                    onChange={(e) => setEmployeeId(e.target.value)}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  >
                    <option value="" disabled selected hidden>
                      Employee Name
                    </option>
                    {employees.map((employee) => (
                      <option
                        className="capitalize"
                        value={employee.employee_id}
                        key={employee.employee_id}
                      >{`${employee.last_name} ${employee.first_name} ${employee.middle_name}`}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    for="salary"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Salary Rate
                  </label>
                  <input
                    type="text"
                    value={salary}
                    onChange={(e) => setSalary(e.target.value)}
                    onInput={OnlyNumber}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Salary Rate"
                    required
                  />
                </div>
                <div>
                  <label
                    for="type"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Rate Type
                  </label>
                  <select
                    id="type"
                    name="type"
                    value={rate_type}
                    onChange={(e) => setRateType(e.target.value)}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  >
                    <option value="" disabled selected hidden>
                      Rate Type
                    </option>
                    <option className="capitalize" value="Per Hour">
                      Per Hour
                    </option>
                    <option className="capitalize" value="Monthly">
                      Monthly
                    </option>
                    <option className="capitalize" value="Daily">
                      Daily
                    </option>
                  </select>
                </div>
                <div>
                  <label
                    for="required_hours"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Required Hours
                  </label>
                  <input
                    type="text"
                    value={required_hours}
                    onChange={(e) => setrequiredHours(e.target.value)}
                    onInput={OnlyNumber}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Required Hours"
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

export default AddSalaries;
