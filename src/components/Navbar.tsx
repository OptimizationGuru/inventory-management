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
        className={`flex gap-2 text-xl font-bold px-2 ${
          isAdmin ? 'text-white' : 'text-black'
        }`}
      >
        Inventory Stats
      </h1>

      <div className="flex gap-2 items-center">
        <button
          onClick={onToggleView}
          className={`
    px-4 py-2 flex font-semibold  rounded 
    ${isAdmin ? 'bg-gray-600 hover:bg-gray-500 text-gray-300' : 'bg-gray-200 hover:bg-gray-300'}
  `}
        >
          Switch Mode
        </button>

        {isAdmin ? (
          <div className="flex gap-2 text-white  text-lg font-semibold px-4 py-2 rounded-md hover:bg-gray-700 hover:bg-opacity-70 mt-0">
            <MdAdminPanelSettings size={25} /> Admin
          </div>
        ) : (
          <div className="flex gap-2 text-black text-lg font-semibold py-2 px-4 rounded-md hover:bg-gray-300 hover:bg-opacity-70 mt-0">
            <FaUserAlt size={20} /> User
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
