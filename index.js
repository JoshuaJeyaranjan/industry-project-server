const express = require('express');
const mysql = require('mysql2');  // Change this line

const app = express();
const PORT = process.env.PORT || 8081;

// MySQL database connection configuration
const db = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'rootroot',
  database: process.env.DB_NAME || 'INDUSTRY_PROJECT_DB',
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to the database');
});

// Your existing route
app.get('/', (req, res) => {
  res.send('Industry Project Is Running!');
  console.log('express is running, can you catch it?');
});

const eventsData = require('./data/events.json');

app.get('/events', (req, res) => {
  res.json(eventsData);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
