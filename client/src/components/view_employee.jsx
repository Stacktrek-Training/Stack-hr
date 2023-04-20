import React, { useState, useEffect } from "react";
import axios from "axios";

const ViewEmployee = (emp) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  //get all the data in Employee Tables
  const [employees, setEmployees] = useState([]);
  const [employee, setEmployee] = useState(emp.employee_id);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/employee/${employee}`)
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <button
        onClick={handleModalOpen}
        class=" border-none bg-yellow-600 px-2 py-1 rounded-md text-white
  hover:bg-yellow-500  font-semibold"
        type="button"
        title="View"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-6 h-6"
        >
          <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
          <path
            fill-rule="evenodd"
            d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
            clip-rule="evenodd"
          />
        </svg>
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
        <div class="relative w-full max-w-xl  max-h-full">
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
            <div class="px-6 py-1 lg:px-8">
              <h3 class="mb-4 text-xl text-center mt-2  font-bold text-gray-900 dark:text-white">
                Employee Profile
              </h3>
              <form class="space-y text-left flex ">
                <div className="flex-1 flex-wrap  flex-col ">
                  <div className="mb-1">
                    <label
                      for="name"
                      class="block  text-sm font-semibold text-gray-900 dark:text-white"
                    >
                      Employee Name
                    </label>
                    <span className="capitalize"> Sunny Virgo</span>
                  </div>
                  <div className="mb-1">
                    <label
                      for=" gender"
                      class="block  text-sm font-semibold text-gray-900 dark:text-white"
                    >
                      Gender
                    </label>
                    <span> Male</span>
                  </div>
                  <div className="mb-1">
                    <label
                      for=" age"
                      class="block text-sm font-semibold text-gray-900 dark:text-white"
                    >
                      Age
                    </label>
                    <span> 16 yrs old</span>
                  </div>
                  <div className="mb-1">
                    <label
                      for=" status"
                      class="block text-sm font-semibold text-gray-900 dark:text-white"
                    >
                      Marital Status
                    </label>
                    <span> Married </span>
                  </div>
                  <div className="mb-1">
                    <label
                      for="jobroles"
                      class="block  text-sm font-semibold text-gray-900 dark:text-white"
                    >
                      Job Roles
                    </label>
                    <span> Front-End</span>
                  </div>
                  <div className="mb-1">
                    <label
                      for="address"
                      class="block  text-sm font-semibold text-gray-900 dark:text-white"
                    >
                      Address
                    </label>
                    <span> Antique</span>
                  </div>
                  <div className="mb-1">
                    <label
                      for=" mobilenumber"
                      class="block  text-sm font-semibold text-gray-900 dark:text-white"
                    >
                      Mobile Number
                    </label>
                    <span> 09090909090</span>
                  </div>
                </div>
                <div>
                  <div className="mb-1">
                    <label
                      for=" telnumber"
                      class="block  text-sm font-semibold text-gray-900 dark:text-white"
                    >
                      Telephone Number
                    </label>
                    <span> 09090909090</span>
                  </div>
                  <div className="mb-1">
                    <label
                      for="workemail"
                      class="block text-sm font-semibold text-gray-900 dark:text-white"
                    >
                      Work Email
                    </label>
                    <span> adada@dadad</span>
                  </div>
                  <div className="mb-1">
                    <label
                      for="personalemail"
                      class="block text-sm font-semibold text-gray-900 dark:text-white"
                    >
                      Personal Email
                    </label>
                    <span> adada@dadad</span>
                  </div>

                  <div className="mb-1">
                    <label
                      for="emcontactperson"
                      class="block  text-sm font-semibold text-gray-900 dark:text-white"
                    >
                      Emergency Contact Person
                    </label>
                    <span> Crespo</span>
                  </div>
                  <div className="mb-1">
                    <label
                      for="relationship"
                      class="block  text-sm font-semibold text-gray-900 dark:text-white"
                    >
                      Relationship
                    </label>
                    <span> Wife</span>
                  </div>
                  <div className="mb-1">
                    <label
                      for="emcontactemail"
                      class="block  text-sm font-semibold text-gray-900 dark:text-white"
                    >
                      Emergency Contact Email
                    </label>
                    <span> adada@dadad</span>
                  </div>
                  <div>
                    <label
                      for="emcontactnumber"
                      class="block  text-sm font-semibold text-gray-900 dark:text-white"
                    >
                      Emergency Contact Number
                    </label>
                    <span> 129719287</span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewEmployee;
