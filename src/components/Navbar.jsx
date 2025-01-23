import React from 'react'
import userIcon from "../assets/user_icon.png"
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="flex items-center justify-between bg-black text-white p-4 px-10 shadow-sm">

        {/* Logo and Title Div */}
            <div className="flex items-center space-x-2">
                <div className="h-8 w-8 bg-pink-500 rounded-full"></div>
                <span className="text-lg font-semibold">User Management Dashboard</span>
            </div>

        {/* navigation links and and user icon */}
            <div className='flex items-center justify-between gap-10'>
                <div>
                    <ul className="flex items-center space-x-1 text-sm font-large gap-10">
                        <Link to='/'><li className="cursor-pointer hover:text-blue-500 hover:scale-150 transform transition-transform duration-300 ease-in-out">Home</li></Link>
                        <Link to='/dashboard'><li className="cursor-pointer hover:text-blue-500 hover:scale-150 transform transition-transform duration-300 ease-in-out">Dashboard</li></Link>
                        <Link to='https://princechowdhary.netlify.app/'><li className="cursor-pointer hover:text-blue-500 hover:scale-150 transform transition-transform duration-300 ease-in-out">About</li></Link>
                    </ul>
                </div>
                <div className="h-8 w-8 rounded-full bg-gray-200 overflow-hidden">
                    <img src={userIcon} alt="Profile" className="h-full w-full object-cover" />
                </div>

            </div>
        </div>
    );
}


export default Navbar