import React, { createContext, useContext, useState } from "react";

const CarritoContext = createContext();

export const useCarrito = () => useContext(CarritoContext);

export const CarritoProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);

    const agregarAlCarrito = (item) => {
        setCarrito((prev) => [...prev, item]);
    };

    const limpiarCarrito = () => setCarrito([]);

    return (
        <CarritoContext.Provider value={{ carrito, agregarAlCarrito, limpiarCarrito }}>
            {children}
        </CarritoContext.Provider>
    );
};
