import React, { useState } from "react";
import AddNew from "./user_addnew";

function ButtonAddNew({ employee }) {
  const [showAddNew, setShowAddNew] = useState(false);

  const handleOnClose = () => setShowAddNew(false);
  return (
    <div>
      <button
        onClick={() => setShowAddNew(true)}
        type="button"
        class="text-white bg-gradient-to-br from-orange-400 via-f0b673 to-orange-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-orange-200 dark:focus:ring-orange-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
      >
        Add New
      </button>
      <div>
        <AddNew
          employee={employee.employee_id}
          onClose={handleOnClose}
          visible={showAddNew}
        />
      </div>
    </div>
  );
}

export default ButtonAddNew;
