import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Header = () => {
    const { user, logOut, setUser } = useAuth();
    const [navbarOpen, setNavbarOpen] = React.useState(false);

    const handleLogOut = () => {
        logOut();
        setUser(null);
    }

    return (
        <div className=" md:w-full top-0">
            <nav className=" relative flex flex-wrap items-center justify-between px-2 py-3 bg-gray-100 text-black ">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <NavLink
                            className="text-sm    leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase  "
                            to="/home"
                        >
                            <span className="">Impel Tourism</span>
                        </NavLink>
                        <button
                            className="  cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            <li className="nav-item">
                                <NavLink
                                    className="px-3 py-2 flex items-center text-xs uppercase    leading-snug   hover:opacity-75"
                                    to="/home"
                                >
                                    <span className="ml-2">Home</span>
                                </NavLink>
                            </li>
                            {
                                user &&
                                <li className="nav-item">
                                    <NavLink
                                        className="px-3 py-2 flex items-center text-xs uppercase    leading-snug   hover:opacity-75"
                                        to="/myorders"
                                    >
                                        <span className="ml-2">My Orders</span>
                                    </NavLink>
                                </li>


                            }
                            {
                                user && <li className="nav-item">
                                    <NavLink
                                        className="px-3 py-2 flex items-center text-xs uppercase    leading-snug   hover:opacity-75"
                                        to="/manageorders"
                                    >
                                        <span className="ml-2">Manage Orders</span>
                                    </NavLink>
                                </li>
                            }
                            {
                                !user ?
                                    <li className="nav-item">
                                        <NavLink
                                            className="px-3 py-2 flex items-center text-xs uppercase    leading-snug   hover:opacity-75"
                                            to="/signin"
                                        >
                                            <span className="ml-2">Sign in</span>
                                        </NavLink>
                                    </li>
                                    :
                                    <li className="nav-item">
                                        <NavLink
                                            onClick={handleLogOut}
                                            className="px-3 py-2 flex items-center text-xs uppercase    leading-snug text-red-400 hover:opacity-75"
                                            to="/signin"
                                        >
                                            <span className="ml-2">Sign Out <span className=" "> ({user?.displayName})</span> </span>
                                        </NavLink>
                                    </li>
                            }

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;