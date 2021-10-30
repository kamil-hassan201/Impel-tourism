import React from 'react';
import Banner from '../Banner/Banner';
import Destinations from '../Destinations/Destinations';
import Guides from '../Guides/Guides';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Destinations></Destinations>
            <Guides></Guides>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;