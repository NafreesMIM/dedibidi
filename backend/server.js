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

app.use(express.json());
app.use(cors()); // Allow all origins for demonstration purposes. You should configure it for specific origins.

mongoose.connect('mongodb://localhost:27017/dedibidi', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.use('/api', registerRoute);
app.use('/api', loginRoute);
// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
