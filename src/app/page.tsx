// pages/_app.tsx
import React from 'react';
import Navbar from '@/components/navbar'
import Hero from '@/components/hero';
import About from '@/components/about'

const MyApp = () => {
    return (
        <>
            <Navbar />
            <Hero/>
            <About/>
        </>
    );
};

export default MyApp;
