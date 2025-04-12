import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import Turno from './models/Turno.js';

dotenv.config();

const app = express();

const corsOptions = {
    origin: 'https://estetic-web-app.onrender.com',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));
app.use(express.json());

// Conexión a MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB error:', err));

// Ruta API
app.post('/api/turnos', async (req, res) => {
    try {
        const nuevoTurno = new Turno(req.body);
        await nuevoTurno.save();
        res.status(201).json({ message: 'Turno guardado correctamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al guardar el turno' });
    }
});

// 📦 SERVIR FRONTEND DE VITE

// Obtener __dirname (porque estamos usando ESModules)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Servir archivos estáticos desde /client/dist
app.use(express.static(path.join(__dirname, 'client', 'dist')));

// Cualquier ruta que no sea /api la redirige a index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

// Puerto
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
