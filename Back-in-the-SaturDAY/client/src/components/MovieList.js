import React from 'react';
import './MovieList.css';

const MovieList = ({ movies, onMovieClick }) => {
    return (
        <div className="movie-list">
            {movies.map((movie, index) => (
                <div className="movie-item" key={index} onClick={() => onMovieClick(movie)}>
                    <img src={movie.poster} alt={movie.title} />
                    <h3>{movie.title}</h3>
                </div>
            ))}
        </div>
    );
};

export default MovieList;