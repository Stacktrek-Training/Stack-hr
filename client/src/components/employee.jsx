import React, { useEffect, useState } from 'react'
import image1 from './../assets/logo.png'
import EditEmployee from "./edit_employee";
import axios from 'axios';
import './style.css';

    const Employee = () => { 
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleModalOpen = () => {
        setIsModalOpen(true);
      };
    
      const handleModalClose = () => {
        setIsModalOpen(false);
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

  const [firstname, setFirstName] = useState("");
  const [middlename, setMiddleName] = useState("");
  const [lastname, setlastName] = useState("");
  const [jobRoles, setJobRoles] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");

  const handleSave = () => {
    axios.post("http://localhost:4000/employee", {
        firstname: firstname,
        middlename: middlename,
        lastname: lastname,
        job_title: jobRoles,
        address: address,
        contact: contact,
        
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
  //delete employee

  async function deleteEmp(id){
    try {
        axios.delete(`http://localhost:4000/employee/${id}`)
        .then((response) =>{
            console.log(response.data);
            window.location.href = '/employee';
        })
    } catch (error) {
        console.error(error.message)
    }
  }
    return (
        
        <div className="flex h-screen bg-gray-200 m-0">
        <div className="bg-orange-500 w-64 text-white">
        <div className="p-6">
            <img src={image1} alt="logo"/>          </div>
        <ul className="pl-2">
            <li 
            className="py-3 px-4 hover:bg-orange-600 hover:rounded-tl-lg hover:rounded-bl-lg"
            >
            <a href="/Dashboard" className="block font-semibold">
                Dashboard
            </a>
            </li>
            <li
            className="py-3 px-4 hover:bg-orange-600 hover:rounded-tl-lg hover:rounded-bl-lg"
            >
            <a href="/Payrol" className="block font-semibold">
                Payrols
            </a>
            </li>
            <li 
            className="py-3 px-4 hover:bg-orange-600 hover:rounded-tl-lg hover:rounded-bl-lg"
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
    
    
<div class="flex items-center">   
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
</div>
{/* <!-- Modal toggle --> */}
<button 
  onClick={handleModalOpen}
  class=" Add block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" 
  type="button">
  Add Employee
</button>
{/* <!-- Main modal --> */}
<div id="modal" tabindex="-1" aria-hidden="true"
    class={`fixed  z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 ${
        isModalOpen ? '' : 'hidden'
      } flex items-center justify-center`}>

    <div class="relative w-full max-w-md max-h-full">
        {/* <!-- Modal content --> */}
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button type="button" 
            class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            onClick={handleModalClose}>
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                <span class="sr-only">Close modal</span>
            </button>
            <div class="px-6 py-6 lg:px-8">
                <h3 class="mb-4 text-xl  font-bold text-gray-900 dark:text-white">Add Employee</h3>
                <form class="space-y flex flex-wrap gap-4 flex-row  " action="#" onSubmit={handleSave} >
                    <div>
                        <label for="firstname" 
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                        <input type="text"
                          value={firstname}
                         class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                         placeholder="First Name" 
                         onChange={(e) => setFirstName(e.target.value)}
                        required/>
                       
                    </div>
                    <div>
                        <label for="middlename" 
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Middle Name</label>
                        <input type="text"
                          value={middlename}
                         class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                         placeholder="Middle Name" 
                        onChange={(e) => setMiddleName(e.target.value)}
                        required/>
                       
                    </div>
                    <div>
                        <label for="lastname" 
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                        <input type="text"
                          value={lastname}
                         class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                         placeholder="Last Name" required
                               
         onChange={(e) => setlastName(e.target.value)}/>
                       
                    </div>
                   
                    <div>
                        <label for="Job roles"
                         class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Job Roles</label>
                        <input type="text" 
                        value={jobRoles}
                        placeholder=" Job roles" 
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                        required 
                        onChange={(e) => setJobRoles(e.target.value)}/>
                    </div>
                    <div>
                        <label for="address" 
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                        <input type="text"
                          value={address}
                         class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                         placeholder="Address" required
                               
         onChange={(e) => setAddress(e.target.value)}/>
                       
                    </div>
                    <div>
                        <label for="contact" 
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contact</label>
                        <input type="number"
                          value={contact}
                         class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                         placeholder="Contact" required
                               
         onChange={(e) => setContact(e.target.value)}/>
                       
                    </div>
                    <button type="submit" 
                     class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                     >Save</button>
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
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"  key={employee.employee_id}>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {index + 1}
                </th>
                <td class="px-6 py-4">
                {employee.lastname}, {employee.firstname}  {employee.middlename}
                </td>
                <td class="px-6 py-4">
                {employee.job_title}
                </td>
                <td class="px-6 py-4">
                {employee.address}
                </td>
                <td class="px-6 py-4">
                {employee.contact}
                </td>
                <td class=" py-4 flex">
                <EditEmployee employee= {employee}/> <button className=" border-none bg-red-800 px-2 py-1 rounded-md text-white
            hover:bg-red-700  font-semibold " onClick={()=>deleteEmp(employee.employee_id)} > Delete</button>
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