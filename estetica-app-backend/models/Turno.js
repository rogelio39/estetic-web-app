import mongoose from 'mongoose';

const TurnoSchema = new mongoose.Schema({
    nombre: String,
    edad: Number,
    telefono: String,
    email: String,
    servicio: String,
    fecha: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('Turno', TurnoSchema);
