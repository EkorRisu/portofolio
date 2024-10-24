"use client"

import React, { useEffect, useState } from "react";
import { Lexend_Deca } from "next/font/google"; 

// Impor font
const lexendDeca = Lexend_Deca({ subsets: ['latin'], weight: '400' });

const Hero = () => {
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
    const phrases = ["Beginner Photographer", "Tech Enthusiast", "Transportation Enthusiast", "Beginner UI/UX", "PetrolHead"];

    // Typewriter Effect
    useEffect(() => {
        const currentPhrase = phrases[index % phrases.length];
        const timeout = setTimeout(
            () => {
                setText((prev) =>
                    prev.length < currentPhrase.length
                        ? currentPhrase.slice(0, prev.length + 1)
                        : ""
                );

                if (text === "") {
                    setIndex((prev) => prev + 1);
                }
            },
            text === currentPhrase ? 1500 : 150
        );

        return () => clearTimeout(timeout);
    }, [text, index]);


    return (
        <div id="hero"
            className={`bg-[url('/wallpaper.jpg')] ${lexendDeca.className} bg-cover bg-center h-screen flex flex-col justify-center items-center`}>
            <div className="bg-black bg-opacity-40 bg-cover rounded-md p-20 text-center">
                <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl leading-tight">
                    Hi, I'm Wayan
                </h1>
                {/* Typewriter effect for h5 */}
                <h2 className="text-2xl md:text-3xl text-secondary mt-2 h-8 text-white/70">
                    {text}
                    <span className="animate-blink">|</span>
                </h2>
             </div>
        </div>
    );
};

export default Hero;
