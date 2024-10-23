// pages/_app.tsx
import React from 'react';
import Navbar from '@/components/navbar'
import Hero from '@/components/hero';
import About from '@/components/about'
import Projects from '@/components/project';

const MyApp = () => {
    return (
        <>
            <Navbar />
            <Hero/>
            <About/>
            <Projects/>
        </>
    );
};

export default MyApp;
