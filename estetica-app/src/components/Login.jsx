import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';


const Login = () => {
    const navigate = useNavigate()
    const { user, logout, login } = useAuth()



    const handleLogin = async () => {
        await login();
        navigate('/');
    };

    const handleLogout = async () => {
        await logout();
        navigate('/login');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-pink-50">
            {
                !user ?
                    <button
                        onClick={handleLogin}
                        className="bg-red-500 text-white px-6 py-3 rounded hover:bg-red-600"
                    >
                        Iniciar sesión con Google
                    </button> : <button onClick={handleLogout}
                        className="bg-red-500 text-white px-6 py-3 rounded hover:bg-red-600">
                        Desloguearme
                    </button>
            }
        </div>
    );
};

export default Login;
