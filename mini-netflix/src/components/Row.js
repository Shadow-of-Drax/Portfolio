import React from 'react';
import MovieCard from './movieCard';
import './row.css';

function row({ title }) {
    const movies = [
        { id: 1, title: "Movie 1", imageUrl: "https://image.tmdb.org/t/p/original/movie-image1.jpg" },
        { id: 2, name: "Movie 2", imageUrl: "https://image.tmdb.org/t/p/original/movie-image2.jpg" },
        { id: 3, name: "Movie 3", imageUrl: "https://image.tmdb.org/t/p/original/movie-image3.jpg" },
        // Add more movies
    ];
    { 1, name; "Movie 1", imageUrl; "https://image.tmdb.org/t/p/original/movie-image1.jpg" };
    { 2, name; "Movie 2", imageUrl; "https://image.tmdb.org/t/p/original/movie-image2.jpg" };
    { 3, name; "Movie 3", imageUrl; "https://image.tmdb.org/t/p/original/movie-image3.jpg" };

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

  function newFunction() {
    { 3, name; "Movie 3", imageUrl; "https://image.tmdb.org/t/p/original/movie-image3.jpg"; };
  }
}

export default row;