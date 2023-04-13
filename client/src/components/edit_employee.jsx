import React, {useState} from "react";
import { Modal, Button, Label, TextInput } from "flowbite-react";


    const EditEmployee = () => { 
    const [editModal, setEditModal] = useState(false);

    const UpdateModal = () => {
        setEditModal(!editModal);
    };

    const handleCloseModal = () => {
        setEditModal(false);
    };
    return ( 
        <div>
        <Button className=" border-none bg-blue-800 mr-2 rounded-md text-white
            hover:bg-blue-700 " onClick={UpdateModal}>
        Edit
        </Button>
        <Modal
  show={editModal}
  size="md"
  popup={true}
  onClose={handleCloseModal}
>
        <Modal.Header > <h2 className="font-bold"> Edit Employee </h2> </Modal.Header>
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
    );
}

export default EditEmployee;