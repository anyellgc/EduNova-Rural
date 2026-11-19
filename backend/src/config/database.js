const mongoose = require('mongoose');

async function conectarDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Conexión con MongoDB establecida.');
  } catch (error) {
    console.error('Error de conexión:', error.message);
    process.exit(1);
  }
}

module.exports = conectarDB;
