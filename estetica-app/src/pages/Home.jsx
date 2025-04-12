import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    const user = localStorage.getItem('user');

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#f5f5dc] text-center px-4">
            <h2 className="text-3xl font-bold mb-4">
                {user ? `${user}, ` : ''}Bienvenido a Estética Glam
            </h2>
            <p className="mb-6 text-lg">
                Tu lugar de confianza para verte y sentirte mejor.
            </p>

            <div className="space-y-4 w-full max-w-sm">
                <Link
                    to="/"
                    className="block w-full text-lg font-medium text-gray-800 bg-[#e6dcc6] px-6 py-3 rounded-xl shadow-md hover:scale-105 hover:bg-[#d9ccb3] transition transform duration-200"
                >
                    Inicio
                </Link>
                <Link
                    to="/turnos"
                    className="block w-full text-lg font-medium text-gray-800 bg-[#e6dcc6] px-6 py-3 rounded-xl shadow-md hover:scale-105 hover:bg-[#d9ccb3] transition transform duration-200"
                >
                    Pedir Turno
                </Link>
                <Link
                    to="/login"
                    className="block w-full text-lg font-medium text-gray-800 bg-[#e6dcc6] px-6 py-3 rounded-xl shadow-md hover:scale-105 hover:bg-[#d9ccb3] transition transform duration-200"
                >
                    Login
                </Link>
                <a
                    href="https://wa.me/3815455655"
                    target="_blank"
                    rel="noreferrer"
                    className="block w-full text-lg font-medium text-gray-800 bg-[#e6dcc6] px-6 py-3 rounded-xl shadow-md hover:scale-105 hover:bg-[#d9ccb3] transition transform duration-200"
                >
                    WhatsApp
                </a>
            </div>

            <section className="mt-10 max-w-xl">
                <h3 className="text-2xl font-semibold mb-2">Sobre nosotros</h3>
                <p className="text-gray-700">
                    Somos un equipo de profesionales apasionados por la estética. Nos especializamos en cuidado facial, corporal, depilación y más.
                </p>
            </section>
        </div>
    );
};

export default Home;

