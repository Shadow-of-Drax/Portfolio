const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
const movieRoutes = require('./routes/movie'); // Import movie routes
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
const uri = "mongodb+srv://jamesrwarren83:SQ9qZ71HR8xy1XtS@james-warren-database.29bff.mongodb.net/?retryWrites=true&w=majority&appName=James-Warren-Database"; // Make sure to set your actual password
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function connectToDatabase() {
    try {
        await client.connect();
        console.log("Connected to MongoDB!");
        app.use('/api', userRoutes); // Set up routes after connecting
        app.use('/api/movies', movieRoutes);
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

// Middleware
app.use(cors());
app.use(bodyParser.json());

connectToDatabase();

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});