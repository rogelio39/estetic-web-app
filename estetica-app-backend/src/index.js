import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import Turno from './models/Turno.js';
import cors from 'cors'

dotenv.config();

const corsOptions = {
    origin : 'https://estetic-web-app.onrender.com',
    method: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}

const app = express();
app.use(cors(corsOptions));
app.use(express.json());

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
