const express = require('express');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./auth');

const app = express();
const PORT = process.env.PORT || 5501;

// Middleware
app.use(cors({
  origin: [
    'http://localhost:5501',
    'http://127.0.0.1:5501'
  ],
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));
app.use(express.json());

// Routes
app.use('/api', authRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
