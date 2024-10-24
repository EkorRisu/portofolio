"use client";
import React from "react";
import { FaFacebookF, FaInstagram, } from "react-icons/fa";
import { FaGithub, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0 px-4">
        
        {/* Logo atau Nama Brand */}
        <div className="text-lg font-bold">Portofolio</div>

        {/* Ikon Media Sosial */}
        <div className="flex space-x-6 text-lg">
          <a href="https://web.facebook.com/wayan.febrian.528/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/tegar_wayan08/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
            <FaInstagram />
          </a>
          <a href="https://github.com/EkorRisu" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaGithub />
        </a>
          <a href="https://x.com/Bukan_Wibu05" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
            <FaXTwitter />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-400">
          © {new Date().getFullYear()} Wayan Portofolio. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
