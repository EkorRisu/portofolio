"use client";
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-transparent fixed w-full z-50 h-12">
      <div className="container mx-auto flex justify-end items-center py-2 px-4">

        {/* Toggle button (hamburger) for mobile */}
        <div className="sm:hidden">
          <button onClick={toggleMenu} className="text-white text-2xl">
            ☰
          </button>
        </div>

        {/* Menu Items */}
        <div className={`sm:flex sm:items-center sm:space-x-4 ${isOpen ? 'block' : 'hidden'} w-full sm:w-auto`}>
          <a href="#hero" className="block sm:inline-block text-white text-sm px-2 py-1 hover:text-gray-300">Home</a>
          <a href="#about" className="block sm:inline-block text-white text-sm px-2 py-1 hover:text-gray-300">About</a>
          <a href="#services" className="block sm:inline-block text-white text-sm px-2 py-1 hover:text-gray-300">Services</a>
          <a href="#contact" className="block sm:inline-block text-white text-sm px-2 py-1 hover:text-gray-300">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
