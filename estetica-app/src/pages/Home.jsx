import React from "react";
const Home = () => {
    const user = localStorage.getItem('user')
    return (
        <div className="p-6 text-center">

            <h2 className="text-3xl font-bold mb-4">{ user ? user : ' '} Bienvenido a Estética Glam</h2>
            <p className="mb-4">Tu lugar de confianza para verte y sentirte mejor.</p>

            <section className="mt-8">
                <h3 className="text-2xl font-semibold mb-2">Sobre nosotros</h3>
                <p>
                    Somos un equipo de profesionales apasionados por la estética. Nos especializamos en cuidado facial, corporal, depilación y más.
                </p>
            </section>
        </div>
    );
};

export default Home;
