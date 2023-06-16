import React, { useEffect, useState } from "react";
import axios from "axios";
import profilePicture from "./../assets/profilepic.png";
import UserRow from "./../components/admin_rows.jsx";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/employee");
        setUsers(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mt-2 mr-8 ml-3 mb-8">
      <div className="">
        <table className="w-full ml-2 border-2 border-orange-400 to-orange-400 text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gradient-to-br from-orange-500 to-orange-400 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4"></th>
              <th scope="col" className="px-6 py-3 text-white">
                FULL NAME
              </th>
              <th scope="col" className="px-12 py-3 text-white">
                JOB TITLE
              </th>
              <th scope="col" className="px-10 py-3 text-white">
                PROGRESS
              </th>
              <th scope="col" className="px-7 py-3 text-white">
                REIMBURSE LIMIT
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <UserRow key={user.id} user={user} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserList;
