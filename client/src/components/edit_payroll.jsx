import React, { useState, useEffect } from "react";
import axios from "axios";

const EditPayroll = ({ payrolls }) => {
  console.log(payrolls);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  const OnlyNumber = (event) => {
    event.target.value = event.target.value.replace(/[^0-9 .]/gi, "");
  };

  const [employee_id, setEmployeeId] = useState(payrolls.employee_id);
  const [days_attended, setDaysAttended] = useState(payrolls.days_attended);
  const [overtime, setOvertime] = useState(payrolls.overtime);
  const [holidays, setHolidays] = useState(payrolls.holidays);
  const [thirteenth_month, setThirteenthMonth] = useState(payrolls.thirteenth_month);
  const [allowance, setAllowance] = useState(payrolls.allowance);
  const [other_bonus, setOtherBonus] = useState(payrolls.other_bonus);

  const [Employees, setEmployees] = useState([]);
    useEffect(() => {
    axios
      .get(`http://localhost:4000/employee`)
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => console.error(error));
  }, []);
  

  const editPayroll = async () => {
    const response = await axios
      .put(`http://localhost:4000/payrolls/${employee_id}`, {
        employee_id: parseInt(employee_id),
        days_attended: parseFloat(days_attended),
        overtime: parseFloat(overtime),
        holidays: parseFloat(holidays),
        thirteenth_month: parseFloat(thirteenth_month),
        allowance: parseFloat(allowance),
        other_bonus: parseFloat(other_bonus),
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <>
      {/* <!-- Modal toggle --> */}
      <button
        onClick={handleModalOpen}
        class=" border-none bg-blue-800 px-2 py-1 rounded-md text-white hover:bg-blue-700  font-semibold text-xs tracking-widest"
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
        } flex items-center justify-center text-left`}
      >
        <div class="relative w-full max-w-md max-h-full">
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
              <h3 class="mb-4 text-xl text-left flex  font-bold text-gray-900 dark:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-6 h-6"
                >
                  <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                  <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
                </svg>{" "}
                Edit Payroll
              </h3>
              
              <form
                class="space-y flex flex-wrap gap-1.5 flex-col  "
                onSubmit={editPayroll}
              >
                <div>
                  <label
                    for="employee-name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Employee Name
                  </label>

                  <select
                    id="employee_name"
                    name="employee_name"
                    value={employee_id}
                    onChange={(e) => setEmployeeId(e.target.value)}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required>
                    
                    <option value="" hidden>
                      Choose Employee
                    </option>

                    {Employees.map((employee) => (
                      <option
                        className="capitalize"
                        value={employee.employee_id}
                        key={employee.employee_id}>
                        
                        {`${employee.last_name}, ${employee.first_name} ${employee.middle_name}`}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    for="days_attended"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Days Attended
                  </label>
                  <input
                    type="text"
                    value={days_attended}
                    onChange={(e) => setDaysAttended(e.target.value)}
                    onInput={OnlyNumber}
                    maxLength={2}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Days Attended"
                    required/>
                </div>

                <div>
                  <label
                    for="overtime"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Overtime (Hours)
                  </label>
                  <input
                    type="text"
                    value={overtime}
                    onChange={(e) => setOvertime(e.target.value)}
                    onInput={OnlyNumber}
                    maxLength={2}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Overtime (Hours)"
                    required/>
                </div>

                <div>
                  <label
                    for="required_Holidays"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Number of Holidays
                  </label>

                  <input
                    type="text"
                    value={holidays}
                    onChange={(e) => setHolidays(e.target.value)}
                    onInput={OnlyNumber}
                    maxLength={2}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Number of Holidays"
                    required/>
                </div>
              
                <h3 class="mt-8 font-bold text-sm text-gray-900 dark:text-white">
                  Bonus
                </h3>
                
                <div>
                  <label
                    for="thirteenth_month"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    13th Month
                  </label>
                  <input
                    type="text"
                    value={thirteenth_month}
                    onChange={(e) => setThirteenthMonth(e.target.value)}
                    onInput={OnlyNumber}
                    maxLength={10}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="13th Month"
                    required/>
                </div>

                <div>
                  <label
                    for="allowance"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Allowance
                  </label>
                  <input
                    type="text"
                    value={allowance}
                    onChange={(e) => setAllowance(e.target.value)}
                    onInput={OnlyNumber}
                    maxLength={10}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Allowance"
                    required/>
                </div>

                <div>
                  <label
                    for="other_bonus"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Other Bonus
                  </label>

                  <input
                    type="text"
                    value={other_bonus}
                    onChange={(e) => setOtherBonus(e.target.value)}
                    onInput={OnlyNumber}
                    maxLength={10}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Others"
                    required/>
                </div>

                <button
                  type="submit"
                  class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditPayroll;



