    import React, {useState} from "react"; 
    import image1 from './../assets/logo.png'
    import { Table } from "flowbite-react";
    import { Modal, Button, Label, TextInput } from "flowbite-react";


    const Employee = () => { 
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const handleCloseModal = () => {
        setShowModal(false);
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
            <a href="/Dashboard" className="block">
                Dashboard
            </a>
            </li>
            <li
            className="py-3 px-4 hover:bg-gray-900 hover:rounded-tl-lg hover:rounded-bl-lg"
            >
            <a href="#" className="block">
                Payrols
            </a>
            </li>
            <li 
            className="py-3 px-4 hover:bg-gray-900 hover:rounded-tl-lg hover:rounded-bl-lg"
            >
            <a href="/Employee" className="block">
                Employee
            </a>
            </li>
        </ul>
        </div>
        <div className="flex-1 p-12 mt-20">
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
        <Modal.Header />
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
                placeholder=" Job role"
                required={true}
            />
            </div>
            <div className="w-full flex justify-center ">
            <Button>
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
    
    </Table.Head>
    <Table.Body className="divide-y">
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            1
        </Table.Cell>
        <Table.Cell>
            Sunny Virgo
        </Table.Cell>
        <Table.Cell>
            Front-End
        </Table.Cell>
        
        </Table.Row>
    </Table.Body>
    </Table>
        </div>
    </div>
    )  
    }

    export default Employee;