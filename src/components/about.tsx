"use client"; // Pastikan ini ada di bagian atas

import React, { useEffect, useRef } from "react";
import { LuFigma } from "react-icons/lu";
import { SiAdobelightroom, SiAdobephotoshop, SiCanva } from "react-icons/si";

const About = () => {
  const aboutSection = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0");
            entry.target.classList.add("animate-fadeIn");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (aboutSection.current) {
      observer.observe(aboutSection.current);
    }

    return () => {
      if (aboutSection.current) {
        observer.unobserve(aboutSection.current);
      }
    };
  }, []);

  return (
    <div
      id="about"
      ref={aboutSection}
      className="min-h-screen bg-gray-900 flex flex-col justify-center items-center opacity-0 transition-opacity duration-700 relative overflow-hidden"
    >
      {/* Latar Belakang */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-black opacity-50" />
      
      <div className="container mx-auto py-14 px-6 lg:px-8 text-center relative z-10">
        {/* Heading About Me */}
        <h1 className="text-4xl font-bold text-white mb-4">About Me</h1>
        
        {/* Garis Pemisah Vertikal */}
        <div className="flex items-center mb-4">
          <hr className="w-1/2 border-gray-500" />
          <div className="mx-4 h-16 border-l-2 border-gray-500" />
          <hr className="w-1/2 border-gray-500" />
        </div>
        
        {/* Deskripsi */}
        <h4 className="text-lg text-gray-300 mb-4">
          Hi there! I’m Wayan, a proud student from SMKN 21 Jakarta. I have a passion for photography and love exploring new places using public transportation. There's something special about capturing moments and discovering the vibrant life of the city as I travel.
        </h4>

        {/* Logo Abstrak */}
        <div className="flex justify-center space-x-8 mb-6">
          <div className="text-white text-5xl hover:text-gray-400 transition duration-300">
            <SiAdobelightroom />
          </div>
          <div className="text-white text-5xl hover:text-gray-400 transition duration-300">
            <SiAdobephotoshop />
          </div>
          <div className="text-white text-5xl hover:text-gray-400 transition duration-300">
            <SiCanva />
          </div>
          <div className="text-white text-5xl hover:text-gray-400 transition duration-300">
            <LuFigma />
          </div>
        </div>

        {/* Tombol Aksi */}
        <a
          href="#portfolio"
          className="mt-4 inline-block bg-white text-gray-900 px-6 py-2 rounded-full shadow hover:bg-gray-200 transition duration-300"
        >
          Check Out My Work
        </a>
      </div>
    </div>
  );
};

export default About;
