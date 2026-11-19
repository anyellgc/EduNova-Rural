const Estudiante = require('../models/Estudiante');

exports.registrarEstudiante = async (req, res) => {
  try {
    const { nombres, apellidos, identificacion, curso } = req.body;

    if (!nombres || !apellidos || !identificacion || !curso) {
      return res.status(400).json({ mensaje: 'Complete los campos obligatorios.' });
    }

    const existente = await Estudiante.findOne({ identificacion });
    if (existente) {
      return res.status(409).json({ mensaje: 'Ya existe un estudiante con esa identificación.' });
    }

    const estudiante = await Estudiante.create({ nombres, apellidos, identificacion, curso });
    return res.status(201).json({ mensaje: 'Estudiante registrado correctamente.', estudiante });
  } catch (error) {
    return res.status(500).json({ mensaje: 'No fue posible registrar el estudiante.' });
  }
};

// Necesario para el método consultar() del servicio de Angular
exports.listarEstudiantes = async (req, res) => {
  try {
    const estudiantes = await Estudiante.find({ activo: true });
    return res.json(estudiantes);
  } catch (error) {
    return res.status(500).json({ mensaje: 'No fue posible consultar los estudiantes.' });
  }
};
