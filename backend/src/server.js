require('dotenv').config();
const app = require('./app');
const conectarDB = require('./config/database');

const PORT = process.env.PORT || 3000;

conectarDB().then(() => {
  app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));
});
