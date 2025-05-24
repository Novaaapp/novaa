const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3001;

// Middlewares globaux
app.use(cors());
app.use(express.json());


// Serveur de fichiers statiques (si nécessaire)
const staticPath = path.join(__dirname, 'public');
app.use(express.static(staticPath));

// Import des routes
app.use('/api/hello', require('./routes/hello'));
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/plans', require('./routes/planRoutes'));
app.use('/api/extensions', require('./routes/extensionRoutes'));
app.use('/api/chat', require('./routes/chatRoutes'))


// Démarrage serveur
app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`);
});
