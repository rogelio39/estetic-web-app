import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';

import { FaWhatsapp, FaCalendarAlt, FaHome, FaSignInAlt } from 'react-icons/fa';
const Navbar = () => {
    const {user} = useAuth()

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };
    return (

        <nav className="bg-white border-b shadow-md">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center">
                        <img
                            className="h-10 w-auto mr-3 rounded-3xl"
                            src="/logo-estetica.jpg"
                            alt="Estética Glam"
                        />
                        <h1 className="text-pink-600 text-2xl font-semibold">STUDIO DI BELLEZA</h1>
                    </div>

                    <div className="sm:hidden">
                        <button
                            onClick={toggleMobileMenu}
                            type="button"
                            className="text-pink-600 hover:text-pink-800 focus:outline-none"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {mobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>

                    <div className="hidden sm:flex space-x-6">
                        <Link to="/" className="text-gray-700 hover:text-pink-600 text-base font-medium flex items-center">
                            <FaHome className="mr-1" /> Inicio
                        </Link>
                        <Link to="/turnos" className="text-gray-700 hover:text-pink-600 text-base font-medium flex items-center">
                            <FaCalendarAlt className="mr-1" /> Pedir Turno
                        </Link>

                        <Link to="/login" className="text-gray-700 hover:text-pink-600 text-base font-medium flex items-center">
                            <FaSignInAlt className="mr-1" /> {!user ? 'login' : 'logout'} 
                        </Link>

                        <a
                            href="https://wa.me/3815455655"
                            target="_blank"
                            rel="noreferrer"
                            className="text-gray-700 hover:text-pink-600 text-base font-medium flex items-center"
                        >
                            <FaWhatsapp className="mr-1" /> WhatsApp
                        </a>
                    </div>
                </div>
            </div>

            {mobileMenuOpen && (
                <div className="sm:hidden px-4 pt-2 pb-3 space-y-1 bg-white shadow-md">
                    <Link to="/" onClick={() => setMobileMenuOpen(false)} className="block text-gray-800 py-2">Inicio</Link>
                    <Link to="/turnos" onClick={() => setMobileMenuOpen(false)} className="block text-gray-800 py-2">Pedir Turno</Link>
                    <Link to="/login" onClick={() => setMobileMenuOpen(false)} className="block text-gray-800 py-2">Login</Link>
                    <a href="https://wa.me/3815455655" target="_blank" rel="noreferrer" className="block text-gray-800 py-2">WhatsApp</a>
                </div>
            )}
        </nav>
    )
}

export default Navbar
