"use client";

import React, { useEffect, useRef } from "react";

const About = () => {
  const aboutSection = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeIn");
          }
        });
      },
      {
        threshold: 0.1, // Elemen akan mulai terlihat ketika 10% dari elemen masuk ke viewport
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
      className="min-h-screen bg-gray-900 flex flex-col justify-center items-center opacity-0"
    >
      <div className="container mx-auto py-14 px-6 lg:px-8 text-center">
        {/* Heading About Me */}
        <h1 className="text-4xl font-bold text-white mb-4">About Me</h1>
        
        {/* Garis Pemisah */}
        <hr className="w-1/2 mx-auto border-gray-500 mb-4" />
        
        {/* Deskripsi */}
        <h4 className="text-lg text-gray-300">
          Hello, I am Wayan from SMKN 21 Jakarta. I like photos and traveling with public transportation.
        </h4>
      </div>
    </div>
  );
};

export default About;
