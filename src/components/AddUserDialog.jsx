import React, { useState } from 'react';

const AddUserDialog = ({ onClose, onAdd }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    username: '',
    company: {
      name: '',
    },
  });
  const [isClosing, setIsClosing] = useState(false);

  const handleChange = (e) => { // use to handle the updation
    const { name, value } = e.target;

    if (name === 'company') {
      setFormData((prev) => ({
        ...prev,
        company: { ...prev.company, name: value },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {  // use to submit the updation
    e.preventDefault();
    onAdd(formData);
    handleClose();
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 500);
  };

  return (
    <div className={`fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50 transition-opacity duration-500 ease-in-out opacity-0 ${!isClosing ? 'animate-fadeIn' : 'animate-fadeOut'
      }`}
    >
      <div className={`bg-black rounded-lg shadow-lg p-6 w-96 transform transition-all duration-300 ease-in-out scale-0 ${!isClosing ? 'animate-scaleIn' : 'animate-scaleOut'
        }`}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Add New User</h2>
          <button
            onClick={handleClose}
            className="text-xl font-bold text-white hover:text-gray-700"
          >
            x
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-white">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-2 p-2 border border-gray-300 rounded-md bg-gray-700"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-white">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full mt-2 p-2 border border-gray-300 rounded-md bg-gray-700"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-white">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-2 p-2 border border-gray-300 rounded-md bg-gray-700"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-white">Website</label>
            <input
              type="text"
              name="website"
              value={formData.website}
              onChange={handleChange}
              className="w-full mt-2 p-2 border border-gray-300 rounded-md bg-gray-700"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-white">Company</label>
            <input
              type="text"
              name="company"
              value={formData.company.name}
              onChange={handleChange}
              className="w-full mt-2 p-2 border border-gray-300 rounded-md bg-gray-700"
              required
            />
          </div>
          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={handleClose}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUserDialog;
