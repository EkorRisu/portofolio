// pages/_app.tsx
import React from 'react';
import Navbar from '@/components/navbar'
import Hero from '@/components/hero';
import About from '@/components/about'
import Projects from '@/components/project';
import Contact from '@/components/contact';

const MyApp = () => {
    return (
        <>
            <Navbar />
            <Hero/>
            <About/>
            <Projects/>
            <Contact/>
        </>
    );
};

export default MyApp;
