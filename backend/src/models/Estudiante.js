const mongoose = require('mongoose');

const estudianteSchema = new mongoose.Schema({
  nombres: { type: String, required: true, trim: true },
  apellidos: { type: String, required: true, trim: true },
  identificacion: { type: String, required: true, unique: true, trim: true },
  curso: { type: String, required: true },
  activo: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model('Estudiante', estudianteSchema);
