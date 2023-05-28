import React, { useEffect, useState } from "react";
import axios from "axios";
import profilePicture from "./../assets/profilepic.png";

function UserRow({ user }) {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const fetchPercent = async () => {
      const currentDate = new Date();
      const currentMonth = currentDate.getMonth() + 1; // add 1 to convert to 1-based index
      try {
        const response = await axios.get(
          `http://localhost:4000/sum/${user.employee_id}/${currentMonth}`
        );
        const totalAmount = response.data.total_amount;
        const userPercent = (totalAmount / user.reimbursed_limit) * 100;
        setPercent(userPercent);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPercent();
  }, [user]);

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="p-4"></td>
      <th
        scope="row"
        className="px-0.2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        <div className="flex items-center">
          <img
            className="w-8 rounded-full"
            src={profilePicture}
            alt="Profile"
          />
          <div className="ml-2">
            <strong>
              {user.first_name} {user.last_name}
            </strong>
          </div>
        </div>
      </th>
      <td className="px-12 py-4">{user.job_title}</td>
      <td className="px-6 py-4">
        <div className="flex items-center">
          <progress
            className={`w-1/4 h-2 rounded ${
              percent < 50 ? "bg-black-400" : "bg-black-400"
            }`}
            value={percent}
            max="100"
          />

          <span className="ml-2">{percent}%</span>
        </div>
      </td>
      <td className="px-12 py-4">₱{user.reimbursed_limit}</td>
    </tr>
  );
}

export default UserRow;
