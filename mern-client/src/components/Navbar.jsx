import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBarsStaggered } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import logoImg from '../assets/mylogo.png'; // Import the logo image

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(prev => !prev); 
    };

    const navItems = [
        { label: "Home", path: "/" },
        { label: "About", path: "/about" },
        { label: "Shop", path: "/shop" },
        { label: "Dashboard", path: "/admin/dashboard" },
        { label: "Blog", path: "/blog" },
    ];

    return (
        <header className='w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300'>
            <nav className="py-0 lg:px-24 px-4 bg-red-300 fixed top-0 w-full">
                <div className="container mx-auto flex justify-between items-center p-4 text-base gap-8">

                    <Link to="/" className='text-2xl font-bold text-red-800 flex items-center gap-2'>
                        <img src={logoImg} alt="Logo" className="h-16 w-16" /> {/* Increased logo size */}
                        BOOK SYNC
                    </Link>
                    <button onClick={toggleMenu} className='md:hidden'>
                        {isMenuOpen ? <FaXmark className='h-5 w-5 text-black'/> : <FaBarsStaggered className='h-5 w-5 text-black'/>}
                    </button>
                    <ul className="hidden md:flex space-x-8">
                        {navItems.map(({ label, path }) => (
                            <li key={path}>
                                <Link 
                                    to={path} 
                                    className='block text-base text-red-900 uppercase font-medium cursor-pointer transition-all duration-200 hover:text-red-600 hover:underline'
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {isMenuOpen && (
                    <div className="space-y-4 px-4 mt-16 py-7 bg-red-600 fixed top-0 right-0 left-0">
                        <ul>
                            {navItems.map(({ label, path }) => (
                                <li key={path} className='py-2'>
                                    <Link 
                                        to={path} 
                                        className='block text-base text-white uppercase font-medium cursor-pointer transition-all duration-200 hover:text-gray-200'
                                    >
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Navbar;
