// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Import route handlers
const registerRoute = require('./Routes/register');
const loginRoute = require('./Routes/login');

// Create Express app
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/dedibidi', {
  useNewUrlParser: true, // This option is no longer needed and can be omitted
  useUnifiedTopology: true // This option is no longer needed and can be omitted
});

// Check MongoDB connection
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');
});

// Routes
app.use('/api', registerRoute);
app.use('/api', loginRoute);
// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
