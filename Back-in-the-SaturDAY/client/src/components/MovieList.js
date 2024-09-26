import '../styles/MovieList.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MovieList = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/movies');
                setMovies(response.data);
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };

        fetchMovies();
    }, []);

    return (
        <div className="movie-list">
            {movies.length === 0 ? (
                <p>No movies available.</p>
            ) : (
                movies.map(movie => (
                    <div key={movie._id} className="movie-item">
                        <img src={movie.poster} alt={movie.title} />
                        <h3>{movie.title}</h3>
                        <a href={movie.videoUrl} target="_blank" rel="noopener noreferrer">Watch</a>
                    </div>
                ))
            )}
        </div>
    );
};

export default MovieList;