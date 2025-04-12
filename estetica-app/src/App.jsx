import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Turnos from './pages/Turnos';
import Login from './components/Login';
import './App.css';
import Navbar from './components/Navbar';

const App = () => {


  return (
    <Router>
    

      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/turnos" element={<Turnos />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
