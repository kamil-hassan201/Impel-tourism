import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';


const Footer = () => {
    return (
        <div className=" w-full mt-8">
            <footer className="bg-gray-100 text-black">
                <div className="container flex flex-col p-4 mx-auto md:p-8 lg:flex-row divide-coolGray-400">
                    <ul
                        className=" self-center py-6 space-y-4 font-light text-center md:space-x-8 sm:flex sm:space-y-0 sm:justify-around sm:space-x-4 lg:flex-1 lg:justify-start">
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/signin">Sign in</Link></li>
                        <li> <HashLink to="/home/#destinations">Destinations</HashLink> </li>
                        <li> <HashLink to="/home/#reviews">Reviews</HashLink> </li>

                    </ul>
                    <div className="flex flex-col justify-center pt-6 lg:pt-0">
                        <div className="flex justify-center space-x-12">
                            <NavLink to=""><i className="fab fa-facebook-square text-2xl"></i></NavLink>
                            <NavLink to=""><i className="fab fa-linkedin text-2xl"></i></NavLink>
                            <NavLink to=""><i className="fab fa-instagram-square text-2xl"></i></NavLink>
                            <NavLink to=""><i className="fab fa-youtube text-2xl"></i></NavLink>
                        </div>
                    </div>
                </div>

            </footer>
        </div >
    );
};

export default Footer;