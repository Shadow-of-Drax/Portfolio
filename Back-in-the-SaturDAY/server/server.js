const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
const movieRoutes = require('./routes/movie'); // Import movie routes
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const PORT = process.env.PORT || 5000;
require('dotenv').config();

// Connect to MongoDB
const uri = "mongodb+srv://jamesrwarren83:<L?zfS2q/wfFqZGN>@james-warren-database.29bff.mongodb.net/?retryWrites=true&w=majority&appName=James-Warren-Database"; // Make sure to set your actual password
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    // Now you can set up your routes here to use MongoDB
    // Example: Using client.db('yourDatabase').collection('yourCollection') for querying
  } finally {
    await client.close(); // This should be handled appropriately in your application
  }
}

run().catch(console.dir);

app.use(cors());
app.use(bodyParser.json());
app.use('/api', userRoutes);
app.use('/api/movies', movieRoutes);
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});