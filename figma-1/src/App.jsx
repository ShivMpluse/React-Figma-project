/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './App.css';
import Brands from './Components/Brands';

function App() {
  // State to toggle menu visibility on small screens
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle the menu state
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="bg-gray-100 w-full sm:mx-auto shadow-lg">
        <nav className="flex justify-between p-6 items-center w-full">
          {/* Logo */}
          <div className="logo">
            <img src="./images/brand_logo.png" alt="Logo" className="h-10" />
          </div>

          {/* Menu items for larger screens */}
          <div className={`menu flex md:flex-row flex-col md:gap-16 gap-4 md:items-center ${menuOpen ? 'block' : 'hidden'} md:block`}>
            <ul className="flex md:flex-row flex-col gap-4 font-bold">
              <li className='hover:border-b-4 ease-in border-black duration-300'>MENU</li>
              <li className='hover:border-b-4 ease-in border-black duration-300'>LOCATION</li>
              <li className='hover:border-b-4 ease-in border-black duration-300'>ABOUT</li>
              <li className='hover:border-b-4 ease-in border-black duration-300'>CONTACT</li>
            </ul>
          </div>

          {/* Login Button */}
          <div className="btn flex justify-center items-center">
            <button className="btn font-bold bg-red-600 py-2 px-3 text-white">LOGIN</button>
          </div>

          {/* Hamburger Button (visible on smaller screens) */}
          <div className="md:hidden flex items-center" onClick={toggleMenu}>
            <button className="text-2xl text-gray-800 py-2 px-3">
              {menuOpen ? '✖' : '☰'} {/* Change icon based on menu state */}
            </button>
          </div>
        </nav>
      </div> 
      <Brands className='mt-16'/>
    </>
  );
}

export default App;
