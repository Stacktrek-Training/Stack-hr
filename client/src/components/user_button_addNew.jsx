import React, { useState } from "react";
import AddNew from "./user_addnew";

function ButtonAddNew() {
  const [showAddNew, setShowAddNew] = useState(false);

  const handleOnClose = () => setShowAddNew(false);
  return (
    <div>
      <button
        onClick={() => setShowAddNew(true)}
        type="button"
        class="text-white bg-gradient-to-br from-orange-400 via-f0b673 to-orange-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-orange-200 dark:focus:ring-orange-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
      >
        Add New
      </button>
      <div>
        <AddNew onClose={handleOnClose} visible={showAddNew} />
      </div>
    </div>
  );
}

export default ButtonAddNew;
