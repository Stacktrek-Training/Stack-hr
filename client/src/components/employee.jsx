import React, { useEffect, useState } from "react";
import image1 from "./../assets/logo.png";
import image2 from "./../assets/th.jfif";
import EditEmployee from "./edit_employee";
import Delete_Employee from "./delete_employee";
import axios from "axios";
import "./style.css";

const Employee = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalOpen = () => {
    setIsModalOpen(true);
  };
  const handleZipCodeChange = (event) => {
    event.target.value = event.target.value.replace(/[^0-9]/gi, "");
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // for getting all employees
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/employee")
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  //add employee

  const [first_name, setFirstName] = useState("");
  const [middle_name, setMiddleName] = useState("");
  const [last_name, setlastName] = useState("");
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [municipality, setMunicipality] = useState("");
  const [baranggay, setBaranggay] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [mobile_number, setMobileNumber] = useState("");
  const [telephone_number, setTelephoneNumber] = useState("");
  const [work_email, setWorkEmail] = useState("");
  const [personal_email, setPersonalEmail] = useState("");
  const [emergency_contact_person, setEmergencyContactPerson] = useState("");
  const [emergency_contact_email, setEmergencyContactEmail] = useState("");
  const [emergency_contact_number, setEmergencyContactNumber] = useState("");
  const [relationship, setRelationship] = useState("");
  const [job_title, setJobTitle] = useState("");

  const handleSave = () => {
    axios
      .post("http://localhost:4000/employee", {
        first_name: first_name,
        middle_name: middle_name,
        last_name: last_name,
        province: province,
        city: city,
        municipality: municipality,
        baranggay: baranggay,
        zipcode: zipcode,
        mobile_number: mobile_number,
        telephone_number: telephone_number,
        work_email: work_email,
        personal_email: personal_email,
        emergency_contact_person: emergency_contact_person,
        emergency_contact_email: emergency_contact_email,
        emergency_contact_number: emergency_contact_number,
        relationship: relationship,
        job_title: job_title,
      })
      .then((response) => {
        console.log(response.data);
        window.location.href = "/employee";
      })
      .catch((error) => {
        console.error(error.message);
      });
    handleCloseModal();
  };
  //delete employee

  async function deleteEmp(id) {
    try {
      axios.delete(`http://localhost:4000/employee/${id}`).then((response) => {
        console.log(response.data);
        window.location.href = "/employee";
      });
    } catch (error) {
      console.error(error.message);
    }
  }
  return (
    <div className="h-screen relative">
      {" "}
      {/* Use relative position for the parent container */}
      <nav className="bg-gray-200 border-b-slate-300 border-b-2 dark:bg- dark:border-gray-700 fixed w-full ">
        {" "}
        {/* Use absolute position for the navbar */}
        <div className="p-2 px-2 flex justify-end items-center pr-10 mx-auto">
          <div class="font-bold text-black pl-5 ">
            <div className="mr-2">Sunny Virgo</div>
          </div>
          <div>
            <a
              type="button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="Button  flex justify-left cursor-pointer "
            >
              <img
                class="avatar rounded-full hover:ring-2 hover:ring-gray-400 focus:ring-1 "
                src={image2}
                alt="User dropdown"
              />
            </a>
            <div
              className={`${
                isDropdownOpen ? "" : "hidden "
              } absolute right-2 top-10 mt-2 py-2 w-52 bg-white rounded-md  font-bold shadow-lg z-10 text-center`}
            >
              <h1 className=" px-4 py-2 text-sm text-gray-700 cursor-default hover:text-gray-900 border-b border-solid border-gray-200">
                Sunny Virgo
                <p className="pt-2"> Admin</p>
              </h1>
              <a
                href="#"
                className=" px-4 py-2 text-sm flex text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-6 h-6 mr-3"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                Profile
              </a>
              <a
                href="#"
                className=" px-4 py-2 text-sm flex text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-6 h-6 mr-3"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm5.03 4.72a.75.75 0 010 1.06l-1.72 1.72h10.94a.75.75 0 010 1.5H10.81l1.72 1.72a.75.75 0 11-1.06 1.06l-3-3a.75.75 0 010-1.06l3-3a.75.75 0 011.06 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                Logout
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div className="flex h-screen bg-gray-200 m-0">
        <div className="side bg-orange-500 w-64 text-white">
          <ul className="ul">
            <div className="image p-6 ">
              <img src={image1} alt="logo" />
            </div>
            <a href="/">
              <li className="py-3 mt-10 pl-10 flex items-center text-center hover:bg-orange-600 hover:rounded-tl-lg hover:rounded-bl-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-6 h-6"
                >
                  <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                  <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                </svg>
                <p className="block font-semibold text-xl pl-7">Dashboard</p>
              </li>
            </a>
            <a href="/Employee">
              <li className="py-3 mt-5  pl-10 flex items-center text-center hover:bg-orange-600 hover:rounded-tl-lg hover:rounded-bl-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z"
                    clip-rule="evenodd"
                  />
                  <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
                </svg>
                <p className="block font-semibold text-xl pl-7"> Employee </p>
              </li>
            </a>
            <a href="/Payroll">
              <li className="py-3 mt-5 pl-10 flex items-center text-center hover:bg-orange-600 hover:rounded-tl-lg hover:rounded-bl-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-6 h-6"
                >
                  <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 01-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004zM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 01-.921.42z" />
                  <path
                    fill-rule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v.816a3.836 3.836 0 00-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 01-.921-.421l-.879-.66a.75.75 0 00-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 001.5 0v-.81a4.124 4.124 0 001.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 00-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 00.933-1.175l-.415-.33a3.836 3.836 0 00-1.719-.755V6z"
                    clip-rule="evenodd"
                  />
                </svg>
                <p className="block font-semibold text-xl pl-7"> Payrolls</p>
              </li>
            </a>
            <a href="/Salaries">
              <li className="py-3 mt-5  pl-10 flex items-center text-center hover:bg-orange-600 hover:rounded-tl-lg hover:rounded-bl-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-6 h-6"
                >
                  <path d="M4.5 3.75a3 3 0 00-3 3v.75h21v-.75a3 3 0 00-3-3h-15z" />
                  <path
                    fill-rule="evenodd"
                    d="M22.5 9.75h-21v7.5a3 3 0 003 3h15a3 3 0 003-3v-7.5zm-18 3.75a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z"
                    clip-rule="evenodd"
                  />
                </svg>
                <p className="block font-semibold text-xl pl-7"> Salaries </p>
              </li>
            </a>
            <a href="/Deduction">
              <li className="py-3 mt-5  pl-10 flex items-center text-center hover:bg-orange-600 hover:rounded-tl-lg hover:rounded-bl-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-6 h-6"
                >
                  <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 01-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004zM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 01-.921.42z" />
                  <path
                    fill-rule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v.816a3.836 3.836 0 00-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 01-.921-.421l-.879-.66a.75.75 0 00-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 001.5 0v-.81a4.124 4.124 0 001.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 00-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 00.933-1.175l-.415-.33a3.836 3.836 0 00-1.719-.755V6z"
                    clip-rule="evenodd"
                  />
                </svg>
                <p className="block font-semibold text-xl pl-7"> Deduction </p>
              </li>
            </a>
          </ul>
        </div>
        <div className="flex-1 p-12 mt-20">
          {/* Modal */}
          <div className="mb-5 flex ">
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
                class=" flex  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5  py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
              >
                Add Employee
              </button>
            </div>
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
                    <h3 class="mb-4 text-xl  font-bold text-gray-900 dark:text-white">
                      Add Employee
                    </h3>
                    <form
                      class="space-y flex flex-wrap gap-1.5 flex-col  "
                      onSubmit={handleSave}
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
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
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
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
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
                          for="Job roles"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          {" "}
                          Job Roles
                        </label>
                        <input
                          type="text"
                          value={job_title}
                          placeholder=" Job roles"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          required
                          onChange={(e) => setJobTitle(e.target.value)}
                        />
                      </div>
                      <div>
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          Province
                        </label>
                        <input
                          type="text"
                          value={province}
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          placeholder="Province"
                          required
                          onChange={(e) => setProvince(e.target.value)}
                        />
                      </div>
                      <div>
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          City
                        </label>
                        <input
                          type="text"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          placeholder="City"
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          Municipality
                        </label>
                        <input
                          type="text"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          placeholder="Municipality"
                          value={municipality}
                          onChange={(e) => setMunicipality(e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          Baranggay
                        </label>
                        <input
                          type="text"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          placeholder="Baranggay"
                          value={baranggay}
                          onChange={(e) => setBaranggay(e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          Zip Code
                        </label>
                        <input
                          type="text"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          placeholder="  Zip Code"
                          onInput={handleZipCodeChange}
                          maxLength={4}
                          value={zipcode}
                          onChange={(e) => setZipcode(e.target.value)}
                          required
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
                          onInput={handleZipCodeChange}
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
                          onInput={handleZipCodeChange}
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
                          onChange={(e) =>
                            setEmergencyContactPerson(e.target.value)
                          }
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
                          onChange={(e) =>
                            setEmergencyContactEmail(e.target.value)
                          }
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
                          onInput={handleZipCodeChange}
                          value={emergency_contact_number}
                          onChange={(e) =>
                            setEmergencyContactNumber(e.target.value)
                          }
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
          {/* Tables For employee */}

          <div class="relative Table overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 sticky top-0">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    #
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Employee Name
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Job Roles
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Address
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Contact
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Buttons
                  </th>
                </tr>
              </thead>
              <tbody>
                {employees.map((employee, index) => (
                  <tr
                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    key={employee.employee_id}
                  >
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {index + 1}
                    </th>
                    <td class="px-6 py-4 capitalize">
                      {employee.last_name}, {employee.first_name}{" "}
                      {employee.middle_name}
                    </td>
                    <td class="px-6 py-4">{employee.job_title}</td>
                    <td class="px-6 py-4">
                      {employee.province}, {employee.city},
                      {employee.municipality}, {employee.baranggay} (
                      {employee.zipcode})
                    </td>
                    <td class="px-6 py-4">{employee.mobile_number}</td>
                    <td class=" py-4 flex gap-2">
                      <EditEmployee employee={employee} />{" "}
                      <Delete_Employee employee={employee} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employee;
