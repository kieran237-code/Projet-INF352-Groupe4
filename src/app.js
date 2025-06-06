const express = require('express');
require('dotenv').config();
const app = express();
const cookieParser = require('cookie-parser');
const path = require('path');
// Middleware global
app.use(express.json());
app.use(cookieParser());
// Import des routes
const vehicleRoutes = require('./routes/vehicleRoutes');
const userRoutes = require('./routes/userRoutes');

// Utilisation des routes
app.use('/vehicules', vehicleRoutes);
app.use('/users', userRoutes);
app.use(express.static(path.join(__dirname,'../Frontend')));

// Route d'accueil
app.get('/', (req, res) => {
  res.send('API Propelize opérationnelle');
});

// Middleware pour gérer les routes non trouvées
app.use((req, res) => {
  res.status(404).json({ error: 'Route non trouvée' });
});

module.exports = app;
