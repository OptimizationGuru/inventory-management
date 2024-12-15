import React from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { MdAdminPanelSettings } from 'react-icons/md';

interface NavbarProps {
  onToggleView: () => void;
  isAdmin: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ onToggleView, isAdmin }) => {
  return (
    <nav className="p-4 text-black flex justify-between items-center">
      <h1
        className={`flex gap-2 text-xl font-bold bg-transparent  bg-gradient-to-r text-transparent bg-clip-text from-purple-400 to-green-500  rounded-lg p-4  
          `}
      >
        Inventory Stats
      </h1>

      <div className="flex gap-2 items-center">
        <button
          onClick={onToggleView}
          className={`
    px-4 py-2 flex font-semibold text-transparent bg-clip-text  bg-gradient-to-r  from-purple-400 to-green-500 rounded-lg shadow-lg 
    ${isAdmin ? 'bg-gray-600 hover:from-purple-500 to-green-600 text-gray-300' : 'bg-gray-400 hover:bg-gray-600'}
  `}
        >
          Switch Mode
        </button>

        {isAdmin ? (
          <div className="flex gap-2 text-white bg-gradient-to-r text-transparent bg-clip-text from-purple-400 to-green-500  rounded-full shadow-2xl   text-lg font-semibold px-4 py-2  hover:bg-gray-700 hover:bg-opacity-70 mt-0">
            <MdAdminPanelSettings size={25} className="text-gray-400" /> Admin
          </div>
        ) : (
          <div className="flex gap-2  text-lg font-semibold py-2 px-4  hover:bg-gray-300 hover:bg-opacity-90 mt-0 bg-transparent  bg-gradient-to-r text-transparent bg-clip-text from-purple-600 to-green-500 rounded-lg p-4 shadow-lg">
            <FaUserAlt size={20} className="text-purple-500" /> User
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
