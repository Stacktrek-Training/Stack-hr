import React, { useState, useEffect } from "react";
import axios from "axios";

const EditEmployee = ({ employee }) => {
  console.log(employee);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalOpen = () => {
    setIsModalOpen(true);
  };
  const OnlyNumber = (event) => {
    event.target.value = event.target.value.replace(/[^0-9]/gi, "");
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const [first_name, setFirstName] = useState(employee.first_name);
  const [middle_name, setMiddleName] = useState(employee.middle_name);
  const [last_name, setLastName] = useState(employee.last_name);
  const [address, setAddress] = useState(employee.address);
  const [mobile_number, setMobileNumber] = useState(employee.mobile_number);
  const [telephone_number, setTelephoneNumber] = useState(
    employee.telephone_number
  );
  const [work_email, setWorkEmail] = useState(employee.work_email);
  const [personal_email, setPersonalEmail] = useState(employee.personal_email);
  const [emergency_contact_person, setEmergencyContactPerson] = useState(
    employee.emergency_contact_person
  );
  const [emergency_contact_email, setEmergencyContactEmail] = useState(
    employee.emergency_contact_email
  );
  const [emergency_contact_number, setEmergencyContactNumber] = useState(
    employee.emergency_contact_number
  );
  const [relationship, setRelationship] = useState(employee.relationship);
  const [job_title, setJobTitle] = useState(employee.job_role_id);
  const [gender, setGender] = useState(employee.gender);
  const [marital_status, setMaritalStatus] = useState(employee.marital_status);
  const [birthday, setBirthday] = useState(
    new Date(employee.birthday).toLocaleDateString("en-CA")
  );

  const [id, setId] = useState(employee.employee_id);
  const editEmp = async () => {
    const response = await axios
      .put(`http://localhost:4000/employee/${id}`, {
        first_name: first_name,
        middle_name: middle_name,
        last_name: last_name,
        address: address,
        mobile_number: mobile_number,
        telephone_number: telephone_number,
        work_email: work_email,
        personal_email: personal_email,
        emergency_contact_person: emergency_contact_person,
        emergency_contact_email: emergency_contact_email,
        emergency_contact_number: emergency_contact_number,
        relationship: relationship,
        job_title: job_title,
        gender: gender,
        marital_status: marital_status,
        birthday: birthday,
      })

      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  const [job_roles, setJobRoles] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/jobroles")
      .then((response) => {
        setJobRoles(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
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
        <div class="relative w-full max-w-2xl max-h-full">
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
              <h3 class="mb-4 text-xl inline-flex  font-bold text-gray-900 dark:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-6 h-6"
                >
                  <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                  <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
                </svg>
                Edit Employee
              </h3>
              <form
                class="space-y flex flex-wrap gap-1 flex-col text-left"
                onSubmit={editEmp}
              >
                <div>
                  <label
                    for="firstname"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="First Name"
                    value={first_name}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label
                    for="middlename"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    {" "}
                    Middle Name
                  </label>
                  <input
                    type="text"
                    placeholder="Middle Name"
                    value={middle_name}
                    onChange={(e) => setMiddleName(e.target.value)}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                  />
                </div>
                <div>
                  <label
                    for="lastname"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    {" "}
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Last Name "
                    value={last_name}
                    onChange={(e) => setLastName(e.target.value)}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                  />
                </div>

                <div>
                  <label
                    for="birthday"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Birthday
                  </label>
                  <input
                    type="date"
                    value={birthday}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="birthday"
                    onChange={(e) => setBirthday(e.target.value)}
                  />
                </div>

                <div>
                  <label
                    for="gender"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Gender
                  </label>
                  <select
                    id="gender"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  >
                    <option value="" disabled selected hidden>
                      Gender
                    </option>

                    <option className="capitalize" value="Male">
                      Male{" "}
                    </option>
                    <option className="capitalize" value="Female">
                      Female
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    for="marital_status"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Marital Status
                  </label>
                  <select
                    id="marital_status"
                    value={marital_status}
                    onChange={(e) => setMaritalStatus(e.target.value)}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  >
                    <option value="" disabled selected hidden>
                      {" "}
                      Marital Status
                    </option>
                    <option className="capitalize" value="Single">
                      Single
                    </option>
                    <option className="capitalize" value="Married">
                      Married
                    </option>
                    <option className="capitalize" value="Widowed">
                      Widowed
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    for="Job roles"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    {" "}
                    Job roles
                  </label>
                  <select
                    id="Job Roles"
                    value={job_title}
                    onChange={(e) => setJobTitle(e.target.value)}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  >
                    <option value="" disabled selected hidden>
                      Job Roles
                    </option>
                    {job_roles.map((job_role) => (
                      <option
                        className="capitalize"
                        value={job_role.job_role_id}
                        key={job_role.job_role_id}
                      >{`${job_role.job_title}`}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Complete Address
                  </label>
                  <input
                    type="text"
                    value={address}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Complete Address"
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
                <div>
                  <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Mobile no.
                  </label>
                  <input
                    type="text"
                    value={mobile_number}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder=" Mobile no."
                    onInput={OnlyNumber}
                    maxLength={11}
                    required
                    onChange={(e) => setMobileNumber(e.target.value)}
                  />
                </div>
                <div>
                  <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Telephone no.
                  </label>
                  <input
                    type="text"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder=" Telephone no."
                    onInput={OnlyNumber}
                    maxLength={15}
                    value={telephone_number}
                    onChange={(e) => setTelephoneNumber(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Work Email
                  </label>
                  <input
                    type="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder=" Work Email"
                    value={work_email}
                    onChange={(e) => setWorkEmail(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Personal Email
                  </label>
                  <input
                    type="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder=" Personal Email"
                    value={personal_email}
                    onChange={(e) => setPersonalEmail(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Emergency Contact Person
                  </label>
                  <input
                    type="text"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Emergency Contact Person"
                    value={emergency_contact_person}
                    onChange={(e) => setEmergencyContactPerson(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Relationship
                  </label>
                  <input
                    type="text"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Relationship"
                    value={relationship}
                    onChange={(e) => setRelationship(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Emergency Contact Email
                  </label>
                  <input
                    type="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Emergency Contact Email"
                    value={emergency_contact_email}
                    onChange={(e) => setEmergencyContactEmail(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Emergency Contact No
                  </label>
                  <input
                    type="text"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Emergency Contact No"
                    maxLength={11}
                    onInput={OnlyNumber}
                    value={emergency_contact_number}
                    onChange={(e) => setEmergencyContactNumber(e.target.value)}
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
    </>
  );
};

export default EditEmployee;
