// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Import route handlers
const registerRoute = require('./Routes/register');
const loginRoute = require('./Routes/login');

// Create Express app
const app = express();

// Middleware
app.use(express.json());
app.use(cors()); // Allow all origins for demonstration purposes

// MongoDB connection
const mongoURI = "mongodb+srv://mohamednafrees02:XYxvu5kuPrNA5Wfn@cluster0.sd2sh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log("MongoDB Connection Error:", err));

    // Routes
    app.use('/api/register', registerRoute);
    app.use('/api/login', loginRoute);

    // Start the server
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
      });
      