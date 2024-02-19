const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const registerRoute = require('./Routes/register');
const loginRoutes = require('./Routes/login');

const app = express();

app.use(express.json());
app.use(cors()); // Allow all origins for demonstration purposes. You should configure it for specific origins.

mongoose.connect('mongodb://localhost:27017/dedibidi', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));


// all routes here
//for use of registration
  app.use('/api', registerRoute);

// for use of login
  app.use('/', loginRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
