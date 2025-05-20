import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Turnos from './pages/Turnos';
import Login from './components/Login';
import './App.css';
import Navbar from './components/Navbar';
import { AuthProvider } from './Context/AuthContext';
import { CarritoProvider } from './Context/CarritoContext';
import Tratamientos from './pages/Tratamientos.Jsx';
import Carrito from "./components/Carrito";

const App = () => {


  return (
    <Router>
      <CarritoProvider>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/turnos" element={<Turnos />} />
          <Route path="/login" element={<Login />} />
          <Route path ="/tratamientos" element={<Tratamientos/>}/>
          <Route path ="/carrito" element={<Carrito/>}/>
        </Routes>
      </AuthProvider>
      </CarritoProvider>
    </Router>
  );
};

export default App;
