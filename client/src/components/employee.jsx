import React, { useEffect, useState } from 'react'
    import image1 from './../assets/logo.png'
    import { Table } from "flowbite-react";
    import { Modal, Button, Label, TextInput } from "flowbite-react";
import EditEmployee from "./edit_employee";
import axios from 'axios';


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
        <div className="flex-1 p-12 mt-20">
            {/* Modal */}
    <div className="mb-10">
    <Button onClick={toggleModal}>
    Add Employee
    </Button>

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
                id="name"
                type='text'
                placeholder="Employee Name"
                required={true}
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
        <Table hoverable={true}>
    <Table.Head>
        <Table.HeadCell>
        #   
        </Table.HeadCell>
        <Table.HeadCell>
        Employee Name
        </Table.HeadCell>
        <Table.HeadCell>
        Job roles
        </Table.HeadCell>
        <Table.HeadCell>
        Salary
        </Table.HeadCell>
        <Table.HeadCell>
        Buttons
        </Table.HeadCell>
    
    </Table.Head>
    <Table.Body className="divide-y">
        {employees.map((employee, index) => (
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={employee.employee_id}>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{index + 1}</Table.Cell>
            <Table.Cell>{employee.full_name}</Table.Cell>
            <Table.Cell>{employee.job_title}</Table.Cell>
            <Table.Cell>Salary</Table.Cell>
            <Table.Cell className='flex'><EditEmployee/>   <button className=" border-none bg-red-800 px-2 py-1 rounded-md text-white
            hover:bg-red-700  font-semibold " > Delete</button></Table.Cell>
          </Table.Row>
        ))}





    </Table.Body>
    </Table>
        </div>
    </div>
    )  
    }

    export default Employee;