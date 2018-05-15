const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// App
const app = express();
const PORT = process.env.PORT || 5000;
// Middlewares
app.use(cors()); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Simple test route
app.get('/api/test', (req, res) => {
  res.json({ message: 'Good!' });
});

// Run it
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


