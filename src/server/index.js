const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors())
app.use(express.json());
const staticPath = path.join(__dirname, '../../renderer');
app.use(express.static(staticPath));



app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Express!' });
});


// =====================================================================
// Rediriger toutes les autres routes vers index.html (frontend SPA)
// app.get('/*', (req, res) => {
//     res.sendFile(path.join(staticPath, 'index.html'));
// });
app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`);
});
