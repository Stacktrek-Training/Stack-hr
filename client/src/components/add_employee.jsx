import React, { useState, useEffect } from "react";
import axios from "axios";

const AddEmployee = () => {
  // Open the modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalOpen = () => {
    setIsModalOpen(true);
  };
  // Close the Modal
  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  // Input only number
  const OnlyNumber = (event) => {
    event.target.value = event.target.value.replace(/[^0-9]/gi, "");
  };

  // for getting all employees
  //add employee

  const [first_name, setFirstName] = useState("");
  const [middle_name, setMiddleName] = useState("");
  const [last_name, setlastName] = useState("");
  const [address, setAddress] = useState("");
  const [mobile_number, setMobileNumber] = useState("");
  const [telephone_number, setTelephoneNumber] = useState("");
  const [work_email, setWorkEmail] = useState("");
  const [personal_email, setPersonalEmail] = useState("");
  const [emergency_contact_person, setEmergencyContactPerson] = useState("");
  const [emergency_contact_email, setEmergencyContactEmail] = useState("");
  const [emergency_contact_number, setEmergencyContactNumber] = useState("");
  const [relationship, setRelationship] = useState("");
  const [job_title, setJobTitle] = useState("");
  const [gender, setGender] = useState("");
  const [marital_status, setMaritalStatus] = useState("");
  const [birthday, setBirthday] = useState("");

  const handleSave = () => {
    axios
      .post("http://localhost:4000/employee", {
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
        window.location.href = "/employee";
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
              xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"></path>
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

      <button
        onClick={handleModalOpen}
        title="Add Employee"
        class=" flex  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5  py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button">
        Add Employee
      </button>

      <div
        id="modal"
        tabindex="-1"
        aria-hidden="true"
        class={`fixed  z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 ${
          isModalOpen ? "" : "hidden"
        } flex items-center justify-center`}>
        <div class="relative w-full max-w-2xl max-h-full Modal ">
          {/* <!-- Modal content --> */}
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button
              type="button"
              class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
              onClick={handleModalClose}>
              <svg
                aria-hidden="true"
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"></path>
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
            <div class="px-6 py-6 lg:px-8">
              <h3 class="mb-4 text-xl  font-bold text-gray-900 dark:text-white">
                Add Employee
              </h3>
              <form
                class="space-y flex flex-wrap gap-1.5 flex-col  "
                onSubmit={handleSave}>
                <div>
                  <label
                    for="firstname"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    First Name
                  </label>
                  <input
                    type="text"
                    value={first_name}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="First Name"
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label
                    for="middlename"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Middle Name
                  </label>
                  <input
                    type="text"
                    value={middle_name}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Middle Name"
                    onChange={(e) => setMiddleName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label
                    for="lastname"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Last Name
                  </label>
                  <input
                    type="text"
                    value={last_name}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Last Name"
                    required
                    onChange={(e) => setlastName(e.target.value)}
                  />
                </div>

                <div>
                  <label
                    for="birthday"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Birthday
                  </label>
                  <input
                    type="date"
                    value={birthday}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="birthday"
                    required
                    onChange={(e) => setBirthday(e.target.value)}
                  />
                </div>

                <div>
                  <label
                    for="gender"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Gender
                  </label>
                  <select
                    id="gender"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
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
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Marital Status
                  </label>
                  <select
                    id="marital_status"
                    value={marital_status}
                    onChange={(e) => setMaritalStatus(e.target.value)}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
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
                    for="Position"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    {" "}
                    Position
                  </label>

                  <select
                    value={job_title}
                    onChange={(e) => setJobTitle(e.target.value)}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
                    <option value="" disabled selected hidden>
                      Position
                    </option>
                    {job_roles.map((job_role) => (
                      <option
                        className="capitalize"
                        value={job_role.job_role_id}
                        key={
                          job_role.job_role_id
                        }>{`${job_role.job_title}`}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Address
                  </label>
                  <input
                    type="text"
                    value={address}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder=" Address"
                    required
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
                <div>
                  <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Mobile no.
                  </label>
                  <input
                    type="text"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder=" Mobile no."
                    onInput={OnlyNumber}
                    maxLength={11}
                    required
                    value={mobile_number}
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
                  class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
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

export default AddEmployee;
