const express = require('express');
const Movie = require('../models/Movie');
const router = express.Router();

// Add a new movie
router.post('/', async (req, res) => {
    const { title, poster, video } = req.body;
    try {
        const newMovie = new Movie({ title, poster, video });
        await newMovie.save();
        res.status(201).send('Movie added successfully');
    } catch (error) {
        res.status(500).send('Error adding movie');
    }
});

// Get all movies
router.get('/', async (req, res) => {
    try {
        const movies = await Movie.find(); // Fetch movies from the database
        res.json(movies); // Send movies as a JSON response
    } catch (error) {
        console.error('Error fetching movies:', error); // Log the error to the console
        res.status(500).send('Error fetching movies'); // Send a 500 response in case of an error
    }
});

// Update a movie
router.put('/:id', async (req, res) => {
    const { title, poster, video } = req.body;
    try {
        await Movie.findByIdAndUpdate(req.params.id, { title, poster, video });
        res.send('Movie updated successfully');
    } catch (error) {
        res.status(500).send('Error updating movie');
    }
});

// Delete a movie
router.delete('/:id', async (req, res) => {
    try {
        await Movie.findByIdAndDelete(req.params.id);
        res.send('Movie deleted successfully');
    } catch (error) {
        res.status(500).send('Error deleting movie');
    }
});

module.exports = router;