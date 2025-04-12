import React from 'react';
import { auth, googleProvider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate = useNavigate()
    const login = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            if (result) {
                navigate('/')
            }
            localStorage.setItem('user', result.user.displayName)
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
