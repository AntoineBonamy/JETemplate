import React from 'react';
import Navbar from '../03.Components/Navbar';
import Hero from '../02.Sections/Hero';

const HomePage = () => {
    return (
        <div classname="h-full w-full max-w-7xl p-6 flex flex-col gap-40">
            <Navbar />
            <Hero />
        </div>
    );
};

export default HomePage;
