"use client"

import React, { useEffect, useState } from "react";
import { Lexend_Deca } from "next/font/google";

// Impor font
const lexendDeca = Lexend_Deca({ subsets: ['latin'], weight: '400' });

const Hero = () => {
    //teks h5
    const textArray=[
        "Beginner Photographer",
        "Beginner UI/UX Design",
        "Hardware Athusiast",
        "Petrol Head",
        "Transportation Anthusiast",
        "Weeb"
    ];
    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    useEffect(() => {
        // Timer untuk mengganti teks
        const intervalId = setInterval(() => {
            setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textArray.length);
        }, 5000);

        return () => clearInterval(intervalId); // Membersihkan interval saat komponen unmount
    }, []);

    return (
        <div id="hero" 
            className={`bg-[url('/wallpaper.jpg')] ${lexendDeca.className} bg-cover bg-center h-screen flex flex-col justify-center items-center`}>
            <div className="bg-black bg-opacity-40 bg-cover rounded-md p-20 text-center">
                <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl leading-tight">
                    Hi, I'm Wayan
                </h1>
                {/* Typewriter effect for h5 */}
                <h5 className="text-gray-300 text-lg sm:text-xl mt-2 border-r-4 border-gray-300 whitespace-nowrap overflow-hidden animate-typing">
                        {textArray[currentTextIndex]}
                </h5>
            </div>
        </div>
    );
};

export default Hero;
