import React, { useEffect } from 'react';
import { auth, googleProvider } from '../firebase';
import { signInWithRedirect } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    // Verifica si el usuario ya está autenticado cuando se carga el componente
    useEffect(() => {
        if (auth.currentUser) {
            // Si el usuario ya está autenticado, redirige automáticamente
            navigate('/');
        }
    }, [navigate]);

    const login = async () => {
        try {
            // Inicia la autenticación con Google
            await signInWithRedirect(auth, googleProvider);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-pink-50">
            <button
                onClick={login}
                className="bg-red-500 text-white px-6 py-3 rounded hover:bg-red-600"
            >
                Iniciar sesión con Google
            </button>
        </div>
    );
};

export default Login;
