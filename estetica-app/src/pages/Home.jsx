import React from 'react'
import { Link } from "react-router-dom";
import { FaWhatsapp, FaCalendarAlt, FaHome, FaHandSparkles  } from 'react-icons/fa';
import { FiShoppingCart } from "react-icons/fi";
import { useAuth } from "../Context/AuthContext";


const Home = () => {
        const {user} = useAuth();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-amber-50 text-center px-4 relative">

            {/* Capa oscura con menos opacidad */}


            {/* Contenido */}
            <div className="bg-white/50 backdrop-blur-md rounded-xl p-6 shadow-lg mb-4">
                <h2 className="text-3xl font-bold mb-4 text-black">
                    {user ? `${user}, ` : ''}Bienvenido a Estética STUDIO DI BELLEZA
                </h2>
                <p className="mb-6 text-lg text-black">
                    Tu lugar de confianza para verte y sentirte mejor.
                </p>
            </div>


            <div className="space-y-4 w-full max-w-sm">
                <Link
                    to="/"
                    className="block w-full text-lg font-medium text-gray-800 bg-[#e6dcc6] px-6 py-3 rounded-xl shadow-md hover:scale-105 hover:bg-[#d9ccb3] transition transform duration-200"
                >
                    <FaHome className="mr-1" /> Inicio
                </Link>
                <Link
                    to="/turnos"
                    className="block w-full text-lg font-medium text-gray-800 bg-[#e6dcc6] px-6 py-3 rounded-xl shadow-md hover:scale-105 hover:bg-[#d9ccb3] transition transform duration-200"
                >
                    <FaCalendarAlt className="mr-1" /> Pedir Turno
                </Link>
                {/* <Link
                    to="/login"
                    className="block w-full text-lg font-medium text-gray-800 bg-[#e6dcc6] px-6 py-3 rounded-xl shadow-md hover:scale-105 hover:bg-[#d9ccb3] transition transform duration-200"
                >
                    <FaSignInAlt className="mr-1" /> Login
                </Link> */}
                <a
                    href="https://wa.me/3815455655"
                    target="_blank"
                    rel="noreferrer"
                    className="block w-full text-lg font-medium text-gray-800 bg-[#e6dcc6] px-6 py-3 rounded-xl shadow-md hover:scale-105 hover:bg-[#d9ccb3] transition transform duration-200"
                >
                    <FaWhatsapp className="mr-1" /> WhatsApp
                </a>
                <Link
                    to="/tratamientos"
                    className="block w-full text-lg font-medium text-gray-800 bg-[#e6dcc6] px-6 py-3 rounded-xl shadow-md hover:scale-105 hover:bg-[#d9ccb3] transition transform duration-200"
                >
                    <FaHandSparkles  className="mr-1" /> Tratamientos
                </Link>
                <Link
                    to="/carrito"
                    className="block w-full text-lg font-medium text-gray-800 bg-[#e6dcc6] px-6 py-3 rounded-xl shadow-md hover:scale-105 hover:bg-[#d9ccb3] transition transform duration-200"
                >
                    <FiShoppingCart  className="mr-1" /> Tratamientos
                </Link>
            </div>

            <section className="mt-10 max-w-xl">
                <h3 className="text-2xl font-semibold mb-2 text-white">Sobre nosotros</h3>
                <p className="text-white">
                    Somos un equipo de profesionales apasionados por la estética. Nos especializamos en cuidado facial, corporal, depilación y más.
                </p>
            </section>
        </div>


    );
};

export default Home;

