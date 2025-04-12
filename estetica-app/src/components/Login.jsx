import React from 'react';
import { useEffect } from 'react';
import { auth, googleProvider } from '../firebase';
import { signInWithRedirect, getRedirectResult } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate = useNavigate()
    useEffect(() => {
        const checkRedirectResult = async () => {
            const result = await getRedirectResult(auth);
            if (result) {
                // El usuario ha sido autenticado con éxito
                localStorage.setItem('user', result.user.displayName);
                navigate('/');
            }
        };
        checkRedirectResult();
    }, []);

    const login = async () => {
        try {
            await signInWithRedirect(auth, googleProvider);  // Usamos la redirección en lugar del popup
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
