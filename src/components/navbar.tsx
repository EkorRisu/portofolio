"use client";
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-transparent fixed w-full z-50 h-16">
      <div className="container mx-auto flex justify-between items-center py-2 px-4">

        {/* Logo or Brand Name */}
        <div className="text-white text-xl font-bold">
          
        </div>

        {/* Toggle button (hamburger) for mobile */}
        <div className="sm:hidden">
          <button onClick={toggleMenu} className="text-white text-2xl">
            {isOpen ? '✖' : '☰'}
          </button>
        </div>

        {/* Menu Items */}
        <div className={`absolute sm:static top-16 left-0 w-full sm:w-auto bg-gray-800 sm:bg-transparent transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'} sm:flex sm:items-center sm:space-x-4`}>
          <a href="#hero" className="block sm:inline-block text-white text-sm px-4 py-2 hover:text-gray-300 relative group">Home
            <span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </a>
          <a href="#about" className="block sm:inline-block text-white text-sm px-4 py-2 hover:text-gray-300 relative group">About
            <span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </a>
          <a href="#project" className="block sm:inline-block text-white text-sm px-4 py-2 hover:text-gray-300 relative group">Project
            <span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </a>
          <a href="#contact" className="block sm:inline-block text-white text-sm px-4 py-2 hover:text-gray-300 relative group">Contact
            <span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
