import React from 'react';
import './Banner.css';
import { HashLink } from 'react-router-hash-link';


const Banner = () => {
    return (
        <div className="banner flex justify-center items-center py-8 md:py-0">
            <div className="text-center">
                <h1 className=" md:leading-normal md:mx-20 text-3xl md:text-7xl font-bold font-mono text-white">Explore The World With <br /> <span className=" text-yellow-300">Impel Tourism</span></h1>
                <p className="md:w-3/5 mt-4 md:mt-8 text-center mx-auto text-gray-600">
                    We provide travelers with an authentic Jordanian experience that they
                    can remember for the rest of their lives
                </p>
                <HashLink to="/home/#destinations"><button className="border text-white mt-10 hover:bg-yellow-300 border-gray-400 px-8 py-3">Explore Places</button></HashLink>
            </div>
        </div>
    );
};

export default Banner;