import React from 'react';

const UserTable = ({ userData, onEdit, onDelete }) => {
  return (
    <div className="container mx-auto px-4">
    {/* table heading */}
      <table className="min-w-full border-gray-800 shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-500">
          <tr>
            <th className="px-4 py-2 text-left text-sm font-semibold text-white">User ID</th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-white">Name</th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-white">Username</th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-white">Email</th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-white">Website</th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-white">Company</th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-white">Edit/Delete</th>
          </tr>
        </thead>
        <tbody>
        {/* table data */}
          {userData.map((user) => (
            <tr key={user.id} className="border-t hover:bg-gray-500">
              <td className="px-4 py-2 text-sm text-white">{user.id}</td>
              <td className="px-4 py-2 text-sm text-white">{user.name}</td>
              <td className="px-4 py-2 text-sm text-white">{user.username}</td>
              <td className="px-4 py-2 text-sm text-white">{user.email}</td>
              <td className="px-4 py-2 text-sm text-white">{user.website}</td>
              <td className="px-4 py-2 text-sm text-white">{user.company.name}</td>
              <td className="px-4 py-2 text-sm text-white flex gap-2">
              {/* button to edit */}
                <button
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
                  onClick={() => onEdit(user)}
                >
                  Edit
                </button>
                {/* button to delete */}
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                  onClick={() => onDelete(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
