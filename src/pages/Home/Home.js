import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import HomeService from '../HomeService/HomeService';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeService></HomeService>
            <Contact></Contact>
            <About></About>
        </div>
    );
};

export default Home;