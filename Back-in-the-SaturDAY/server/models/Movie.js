const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: { type: String, required: true },
    poster: { type: String, required: true },
    videoUrl: { type: String, required: true }, // Add videoUrl field for YouTube links
    description: { type: String }, // Optional: Add a description field
});

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;