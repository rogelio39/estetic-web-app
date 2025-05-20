import React from 'react'
import { useCarrito } from '../Context/CarritoContext';


const tratamientos = [
    {
        titulo: "Básico | Brisa de belleza",
        items: [
            { nombre: "Lifting de pestañas + botox + tinte", precio: 8500 },
            { nombre: "Perfilado de cejas + laminado con botox", precio: 7800 },
            { nombre: "Lifting + tinte a elección + perfilado", precio: 13500 },
            { nombre: "Limpieza facial + vitaminas + perfilado", precio: 15000 },
        ],
    },
    {
        titulo: "Intermedio | Ritual equilibrante",
        items: [
            { nombre: "Lifting de pestañas + tinte + limpieza facial", precio: 19000 },
            { nombre: "Laminado de cejas + lifting de pestañas", precio: 18500 },
            { nombre: "Limpieza + lifting + tinte", precio: 16500 },
        ],
    },
    {
        titulo: "Premium | Experiencia sublime",
        items: [
            { nombre: "Dermaplaning + lifting + tinte", precio: 20500 },
            { nombre: "Perfilado + laminado + tinte + dermaplaning", precio: 21500 },
            { nombre: "Lifting + perfilado + laminado + tinte + dermaplaning", precio: 27500 },
        ],
    },
];

const Tratamientos = () => {


    const { agregarAlCarrito} = useCarrito();
    return (
        <div className="p-6 grid gap-6">
            {tratamientos.map((categoria, idx) => (
                <div key={idx}>
                    <h2 className="text-xl font-semibold">{categoria.titulo}</h2>
                    <div className="grid gap-4 mt-2">
                        {categoria.items.map((item, i) => (
                            <div
                                key={i}
                                className="flex justify-between items-center border p-4 rounded shadow-sm bg-white"
                            >
                                <div>
                                    <p className="font-medium">{item.nombre}</p>
                                    <p className="text-sm text-gray-600">${item.precio}</p>
                                </div>
                                <button
                                    className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded"
                                    onClick={() => agregarAlCarrito(item)}
                                >
                                    Seleccionar
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Tratamientos






