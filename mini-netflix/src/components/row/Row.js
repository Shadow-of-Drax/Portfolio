import React from 'react';
import MovieCard from '../movieCard/movieCard.js';
import './row.css';


function Row({ title }) {
    const movies = [
        { id: 1, title: "Movie 1", imageUrl: "https://c7.alamy.com/comp/K388N8/teenage-mutant-ninja-turtles-K388N8.jpg" },
        { id: 2, title: "Movie 2", imageUrl: "https://image.tmdb.org/t/p/original/movie-image2.jpg" },
        { id: 3, title: "Movie 3", imageUrl: "https://image.tmdb.org/t/p/original/movie-image3.jpg" },
        // Add more movies
    ];

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Row;