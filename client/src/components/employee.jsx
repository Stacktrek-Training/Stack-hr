import React, { useEffect, useState } from 'react'
import image1 from './../assets/logo.png'
import { Table } from "flowbite-react";
import { Modal, Button, Label, TextInput } from "flowbite-react";
import EditEmployee from "./edit_employee";
import axios from 'axios';
import './style.css';

    const Employee = () => { 
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };
    // for getting all employees
    const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/employee')
      .then(response => {
        setEmployees(response.data);
      })
      .catch(error => console.error(error));
  }, []);

  //add employee

  const [name, setName] = useState("");
  const [jobRoles, setJobRoles] = useState("");

  const handleSave = () => {
    axios.post("http://localhost:4000/employee", {
        full_name: name,
        job_title: jobRoles,
        
      })
      .then((response) => {
        console.log(response.data);
        window.location.href = '/employee';
      })
      .catch((error) => {
        console.error(error.message);
      });
    handleCloseModal();
  };
    return (
        
        <div className="flex h-screen bg-gray-200 m-0">
        <div className="bg-orange-500 w-64 text-white">
        <div className="p-6">
            <img src={image1} alt="logo"/>          </div>
        <ul className="pl-2">
            <li 
            className="py-3 px-4 hover:bg-gray-900 hover:rounded-tl-lg hover:rounded-bl-lg"
            >
            <a href="/Dashboard" className="block font-semibold">
                Dashboard
            </a>
            </li>
            <li
            className="py-3 px-4 hover:bg-gray-900 hover:rounded-tl-lg hover:rounded-bl-lg"
            >
            <a href="#" className="block font-semibold">
                Payrols
            </a>
            </li>
            <li 
            className="py-3 px-4 hover:bg-gray-900 hover:rounded-tl-lg hover:rounded-bl-lg"
            >
            <a href="/Employee" className="block font-semibold">
                Employee
            </a>
            </li>
        </ul>
        </div>
        <div className="flex-1 p-12 mt-9">
            {/* Modal */}
    <div className="mb-5 flex ">
    <Button  onClick={toggleModal}>
    Add Employee
    </Button>
    
<form class="flex items-center">   
    <label for="simple-search" class="sr-only">Search</label>
    <div class="relative w-full search ">
        <div class="search_icon  inset-y-0  flex items-center  ">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400"
             fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path 
             fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
             clip-rule="evenodd"></path></svg>
        </div>
        <input type="text" id="simple-search" 
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-30  pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
         placeholder="Search"
         required/>
    </div>
    <button type="submit" class="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        <span class="sr-only">Search</span>
    </button>
</form>


<Modal
  show={showModal}
  size="md"
  popup={true}
  onClose={handleCloseModal}
>
        <Modal.Header><h2 className="font-bold"> Add Employee </h2> </Modal.Header> 
        <Modal.Body>
        <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
            <div>
            <div className="mb-2 block">
                <Label
                htmlFor="name"
                value="Employee Name"
                />
            </div>
            <TextInput
                type='text'
                placeholder="Employee Name"
                name='name'
                onChange={(e) => setName(e.target.value)}
               
            />
            </div>
            <div>
            <div className="mb-2 block">
                <Label
                htmlFor="jobroles"
                value=" Job roles"
                />
            </div>
            <TextInput
                id="jobroles"
                type="text"
                placeholder="Job role"
                required={true}
                value={jobRoles}
                onChange={(e) => setJobRoles(e.target.value)}
            />
            </div>
            <div>
            <div className="mb-2 block">
                <Label
                value="Salary ₱"
                />
            </div>
            <TextInput
                id="salary"
                type="number"
                placeholder="Salary"
                required={true}
            />
            </div>
            
            <div className="w-full flex justify-center ">
            <Button onClick={handleSave}>
                Save 
            </Button>
            </div>
        </div>
        </Modal.Body>
    </Modal>
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
                    Buttons
                </th>
            </tr>
        </thead>
        <tbody>
        {employees.map((employee, index) => (
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"  key={employee.employee_id}>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {index + 1}
                </th>
                <td class="px-6 py-4">
                {employee.job_title}
                </td>
                <td class="px-6 py-4">
                Salary
                </td>
                <td class=" py-4 flex">
                <EditEmployee/> <button className=" border-none bg-red-800 px-2 py-1 rounded-md text-white
            hover:bg-red-700  font-semibold " > Delete</button>
                </td>
            </tr>
               ))}
        </tbody>
    </table>
</div>

        </div>
    </div>
    )  
    }

    export default Employee;