import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import UserTable from '../components/UserTable';
import AddUserDialog from '../components/AddUserDialog';
import EditUserDialog from '../components/EditUserDialog';

function Dashboard() {
  const url = "https://jsonplaceholder.typicode.com/users/";  // api url
  const [userData, setUserData] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showDialog, setShowDialog] = useState(false);
  const [showAddUserDialog, setShowAddUserDialog] = useState(false);

  useEffect(() => {   // to load data from api on the dashboard
    const fetchData = async () => {
      try {
        const resp = await fetch(url);
        const data = await resp.json();
        if (resp.ok)
          setUserData(data);
        else
          throw new Error(`Response status: ${resp.status}`);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const handleEdit = (user) => {   // use to edit the exisiting user data
    setSelectedUser(user);
    setShowDialog(true);
  };

  const handleDelete = async (id) => {    // use to delete the exisiting user data
    const confirmDelete = window.confirm('Are you sure you want to delete this user?');
    if (!confirmDelete) return;

    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete user');
      }

      setUserData((prevData) => prevData.filter((user) => user.id !== id));
      alert('User deleted successfully');
    } catch (error) {
      alert('Failed to delete user');
    }
  };

  const handleSave = (updatedUser) => {    // use to save the  edited data
    setUserData((prevData) =>
      prevData.map((user) =>
        user.id === updatedUser.id ? { ...user, ...updatedUser } : user
      )
    );
  };

  const handleOpenAddUserDialog = () => {
    setShowAddUserDialog(true);
  };

  const handleCloseAddUserDialog = () => {
    setShowAddUserDialog(false);
  };

  const handleAddUser = async (newUser) => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });

      const data = await response.json();

      console.log('New user added:', data);

      setUserData((prevUsers) => [...prevUsers, data]);

      setShowAddUserDialog(false);
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="w-full h-full p-4 px-10">
        <div className="flex justify-between gap-6 md:gap-10 text-sm font-medium mb-10">
          <button
            className="ml-auto mr-12 bg-gradient-to-r from-orange-500 to-purple-500 text-white px-8 py-4 rounded-full cursor-pointer hover:border-purple-600 hover:scale-110 transform transition-transform duration-300 ease-in-out"
            onClick={handleOpenAddUserDialog}
          >
            + Add
          </button>
        </div>
        <UserTable
          userData={userData}
          onEdit={handleEdit}
          onDelete={handleDelete}
          />
      </div>

      {showAddUserDialog && (
        <AddUserDialog
          onClose={handleCloseAddUserDialog}
          onAdd={handleAddUser}
        />
      )}

      {showDialog && (
        <EditUserDialog
          user={selectedUser}
          onClose={() => setShowDialog(false)}
          onSave={handleSave}
        />
      )}

    </>
  );
}

export default Dashboard;