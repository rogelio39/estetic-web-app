import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Turnos from './pages/Turnos';
import Login from './components/Login';
import './App.css';

const App = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <Router>
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <h1 className="hidden sm:block text-white text-2xl font-bold">Estética Glam</h1>

            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                onClick={toggleMobileMenu}
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset"
                aria-controls="mobile-menu"
                aria-expanded={mobileMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {/* Íconos: cambia según si está abierto o no */}
                <svg
                  className={`${mobileMenuOpen ? 'hidden' : 'block'} size-6`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <svg
                  className={`${mobileMenuOpen ? 'block' : 'hidden'} size-6`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Logo y enlaces de escritorio */}
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex shrink-0 items-center">
                <img className="h-8 w-auto" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <Link to="/" className="text-white px-3 py-2 rounded-md text-base font-medium hover:underline">Inicio</Link>
                  <Link to="/turnos" className="text-gray-300 px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-white hover:underline">Pedir Turno</Link>
                  <Link to="/login" className="text-gray-300 px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-white hover:underline">Login</Link>
                  <a href="https://wa.me/3815455655" target="_blank" rel="noreferrer" className="text-gray-300 px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-white hover:underline">WhatsApp</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Menú móvil: visible solo si mobileMenuOpen es true */}
        <div className={`${mobileMenuOpen ? 'block' : 'hidden'} sm:hidden`} id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3">
            <Link to="/" className="block rounded-md px-3 py-2 text-base font-medium text-white bg-gray-900" onClick={() => setMobileMenuOpen(false)}>Inicio</Link>
            <Link to="/login" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white" onClick={() => setMobileMenuOpen(false)}>Login</Link>
            <Link to="/turnos" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white" onClick={() => setMobileMenuOpen(false)}>Pedir turno</Link>
            <a href="https://wa.me/3815455655" target="_blank" rel="noreferrer" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Whatsapp</a>
          </div>
        </div>
      </nav>

      {/* Rutas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/turnos" element={<Turnos />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
