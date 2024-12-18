require('dotenv').config(); // Load environment variables
const express = require('express');
const cors = require('cors');
const morgan = require('morgan'); // Logging middleware for development
const helmet = require('helmet'); // Secure headers middleware
const { Pool } = require('pg'); // PostgreSQL connection

const app = express();

// Middleware
app.use(cors()); // Enable CORS for cross-origin requests
app.use(helmet()); // Secure headers
app.use(express.json()); // Parse incoming JSON requests
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data
app.use(morgan('dev')); // Log HTTP requests

// Environment variables
const PORT = process.env.PORT || 5000;
const DB_URL = process.env.DB_URL;

// PostgreSQL Database Connection
const pool = new Pool({
  connectionString: DB_URL,
});

pool.connect()
  .then(() => console.log('✅ Database connected successfully'))
  .catch((err) => {
    console.error('❌ Database connection failed:', err.message);
    process.exit(1); // Exit the process if DB connection fails
  });

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to FörderPro Backend!');
});

// Health Check Route
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Server is healthy!' });
});

// Example API Routes (Placeholder)
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/files', require('./routes/fileRoutes'));

// Handle invalid routes
app.use((req, res, next) => {
  res.status(404).json({ message: 'Route not found' });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('Error:', err.message);
  res.status(500).json({ message: 'Internal Server Error' });
});

// Start Server
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
