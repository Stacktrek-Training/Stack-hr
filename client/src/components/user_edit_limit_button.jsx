import React, { useState } from "react";
import EditLimitModal from "./user_edit_limit_modal";

function EditLimitButton({ employee }) {
  const [showEditLimitModal, setshowEditLimitModal] = useState(false);

  const handleOnClose = () => setshowEditLimitModal(false);
  return (
    <div>
      <button
        type="button"
        onClick={() => setshowEditLimitModal(true)}
        class="absolute bottom-2 right-2 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
      >
        Edit Limit
      </button>

      <div>
        <EditLimitModal
          employee={employee}
          onClose={handleOnClose}
          visible={showEditLimitModal}
        />
      </div>
    </div>
  );
}

export default EditLimitButton;
