import React from 'react';
import '../styles/MovieList.css';

const MovieList = ({ movies }) => {
    return (
        <div className="movie-list">
            {movies.map((movie, index) => (
                <div className="movie-item" key={index}>
                    <img src={movie.poster} alt={movie.title} />
                    <h3>{movie.title}</h3>
                </div>
            ))}
        </div>
    );
};

export default MovieList;