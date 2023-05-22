import React from "react";
import profilePicture from "./../assets/profilepic.png";

const UserGrid = () => {
  // Mock user data
  const users = [
    { id: 1, name: "Gil Benedict Chiu", progress: 75 },
    { id: 2, name: "John Mark Chavez", progress: 60 },
    { id: 3, name: "Veronica Castillo", progress: 90 },
    { id: 4, name: "Carthe Orbina", progress: 40 },
    { id: 5, name: "Jasmin Nicole Santiago", progress: 65 },
    { id: 6, name: "Alexandra Marie Pascual", progress: 80 },
    { id: 7, name: "Kriska Louie Plama", progress: 50 },
    { id: 8, name: "Anthony Banayad", progress: 70 },
    { id: 9, name: "Janssen Gubatan", progress: 85 },
    { id: 10, name: "Rose Anne Reyes", progress: 55 },
  ];

  return (
    <div className="bg-gray-200 p-6 shadow-md ml-4 mr-4 mb-4 rounded-md">
      <div className="grid grid-cols-2 gap-4 mt-6">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white p-4 shadow-md rounded-md flex flex-col items-center"
          >
            <img
              className="w-16 h-16 rounded-full mb-2"
              src={profilePicture}
              alt="Profile"
            />
            <div>
              <strong>ADMIN</strong>
            </div>
            <span className="text-left mb-2">{user.name}</span>
            <div className="w-full h-4 bg-gray-300 rounded-md overflow-hidden">
              <div
                className="h-full bg-blue-500"
                style={{ width: `${user.progress}%` }}
              />
            </div>
            <span className="mt-2">{user.progress}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserGrid;
