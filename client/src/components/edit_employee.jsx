import React, {useState} from "react";
import axios from "axios";


    const EditEmployee = ({employee}) => { 
        console.log(employee)
        const [isModalOpen, setIsModalOpen] = useState(false);
        const handleModalOpen = () => {
            setIsModalOpen(true);
          };
        
          const handleModalClose = () => {
            setIsModalOpen(false);
          };
          const [firstName, setFirstName] = useState(employee.firstname);
          const [middleName, setMiddleName] = useState(employee.middlename);
          const [lastName, setLastName] = useState(employee.lastname);
          const [address, setAddress] = useState(employee.address);
          const [contact, setContact] = useState(employee.contact);
          const [jobTitle, setJobTitle] = useState(employee.job_title);
          const [id, setId] = useState(employee.employee_id);
        const editEmp= async (id) =>{
        
             const response = await axios.put(`http://localhost:4000/employee/${id}`, {
                firstname: firstName,
                middlename: middleName,
                lastname: lastName,
                address: address,
                contact: contact,
                job_title: jobTitle
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
  class=" border-none bg-blue-800 px-2 py-1 rounded-md text-white
  hover:bg-blue-700  font-semibold" 
  type="button">
  Edit
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
                <h3 class="mb-4 text-xl  font-bold text-gray-900 dark:text-white">Edit Employee</h3>
                <form class="space-y flex flex-wrap gap-4 flex-row" action="" onSubmit={editEmp(id)}>
                    <div>
                        <label for="firstname" 
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                        <input type="text"
                         class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                         placeholder="First Name" value={firstName} 
                         onChange={(e) => setFirstName(e.target.value)}
                         required
                        />
                       
                    </div>
                    <div>
                        <label for="middlename"
                         class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Middle Name</label>
                        <input type="text" 
                         placeholder="Middle Name" 
                         value={middleName}
                         onChange={(e) => setMiddleName(e.target.value)}
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                        required 
                        />
                    </div>
                    <div>
                        <label for="lastname"
                         class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Last Name</label>
                        <input type="text" 
                        placeholder="Last Name " 
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
                    </div>
                    <div>
                        <label for="Job roles"
                         class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Job roles</label>
                        <input type="text" 
                        value={jobTitle}
                        onChange={(e) => setJobTitle(e.target.value)}
                        placeholder="Job roles " 
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
                    </div>
                    <div>
                        <label for="address"
                         class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Address</label>
                        <input type="text"
                        value={address} 
                        onChange={(e) =>setAddress(e.target.value)}
                        placeholder="Address " 
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
                    </div> <div>
                        <label for="contact"
                         class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Contact</label>
                        <input type="number" 
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        placeholder="Contact " 
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
                    </div>
                    <button type="submit" 
                     class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                     >Update</button>
                </form>
            </div>
        </div>
    </div>
</div>
</>
      
    );
}

export default EditEmployee;