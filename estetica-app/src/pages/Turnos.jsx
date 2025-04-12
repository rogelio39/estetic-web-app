import React, { useState } from 'react';

const URL = import.meta.env.VITE_FIREBASE_BACKEND_URL

const Turnos = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        edad: '',
        telefono: '',
        email: '',
        servicio: ''
    });

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Paso 1: Enviar los datos al backend para guardarlos
        try {
            const response = await fetch(`${URL}/api/turnos`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                // Paso 2: Crear el mensaje para WhatsApp si el turno fue guardado correctamente
                const mensaje = `Hola! Me gustaría solicitar un turno. 
Nombre: ${formData.nombre}
Edad: ${formData.edad}
Teléfono: ${formData.telefono}
Email: ${formData.email}
Servicio: ${formData.servicio}`;

                const numero = '3815455655'; // Reemplaza por el número real
                const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
                window.open(url, '_blank');
            } else {
                alert('Hubo un problema al guardar el turno. Por favor, intenta nuevamente.');
            }
        } catch (error) {
            alert('Hubo un error al enviar los datos. Intenta nuevamente.', error);
        }
    };

    return (
        <div className="p-6 max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-center">Pedir Turno</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" name="nombre" placeholder="Nombre" required className="w-full p-2 border rounded" onChange={handleChange} />
                <input type="number" name="edad" placeholder="Edad" required className="w-full p-2 border rounded" onChange={handleChange} />
                <input type="tel" name="telefono" placeholder="Teléfono" required className="w-full p-2 border rounded" onChange={handleChange} />
                <input type="email" name="email" placeholder="Email" required className="w-full p-2 border rounded" onChange={handleChange} />
                <textarea name="servicio" placeholder="¿Qué servicio deseas?" required className="w-full p-2 border rounded" onChange={handleChange}></textarea>
                <button type="submit" className="w-full bg-pink-500 text-white p-2 rounded hover:bg-pink-600">Enviar a WhatsApp</button>
            </form>
        </div>
    );
};

export default Turnos;
