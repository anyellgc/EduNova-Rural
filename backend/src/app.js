const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({ origin: 'http://localhost:4200' })); // puerto por defecto de Angular
app.use(express.json());

app.get('/', (req, res) => res.json({ mensaje: 'API EduNova Rural funcionando' }));
app.use('/api/estudiantes', require('./routes/estudianteRoutes'));

module.exports = app;
