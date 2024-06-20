import React, { useEffect, useState } from "react";

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/auth/users")
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => setUsers(data))
      .catch(error => {
        console.error("Error fetching users:", error);
        setError(error.message);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white flex flex-col items-center">
      <h1 className="text-4xl font-bold my-8">All Users</h1>
      {error && <p className="text-red-500">{error}</p>}
      <div className="w-full max-w-4xl">
        <div className="grid grid-cols-1 gap-6">
          {users.map(user => (
            <div key={user._id} className="bg-white bg-opacity-20 rounded-lg p-4 shadow-lg backdrop-blur-md w-full">
              <h2 className="text-2xl font-semibold">{user.username}</h2>
              <p className="mt-2">{user.email}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
