"use client";
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-transparent fixed w-full z-50 h-15">
      <div className="container mx-auto flex justify-end items-center py-2 px-4">

        {/* Toggle button (hamburger) for mobile */}
        <div className="sm:hidden">
          <button onClick={toggleMenu} className="text-white text-2xl">
            ☰
          </button>
        </div>

        {/* Menu Items */}
        <div className={`sm:flex sm:items-center sm:space-x-4 ${isOpen ? 'block' : 'hidden'} w-full sm:w-auto`}>
          <a href="#hero" className="block sm:inline-block text-white text-sm px-2 py-1 hover:text-gray-300 relative group">Home
            <span
              className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
            />
          </a>
          <a href="#about" className="block sm:inline-block text-white text-sm px-2 py-1 hover:text-gray-300 relative group">About
          <span
              className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
            />
          </a>
          <a href="#project" className="block sm:inline-block text-white text-sm px-2 py-1 hover:text-gray-300 relative group">Project
          <span
              className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
            />
          </a>
          <a href="#contact" className="block sm:inline-block text-white text-sm px-2 py-1 hover:text-gray-300 relative group">Contact
          <span
              className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
            />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
