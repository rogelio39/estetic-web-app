import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import Turno from './models/Turno.js';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const corsOptions = {
    origin: 'https://estetic-web-app.onrender.com',
    method: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}

const app = express();
app.use(cors(corsOptions));
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 1. Servir archivos estáticos del frontend (ajustá la ruta si usás Vite)
app.use(express.static(path.join(__dirname, 'client', 'dist')));

// 2. Ruta catch-all: para cualquier GET que no sea de la API, devolvés index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('MongoDB error:', err));

app.post('/api/turnos', async (req, res) => {
    try {
        const nuevoTurno = new Turno(req.body);
        await nuevoTurno.save();
        res.status(201).json({ message: 'Turno guardado correctamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al guardar el turno' });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
