import React from 'react';
import MovieCard from '../movieCard/movieCard.js';
import './row.css';


function Row({ title }) {
    const movies = [
        { id: 1, title: "Movie 1", imageUrl: "https://c7.alamy.com/comp/K388N8/teenage-mutant-ninja-turtles-K388N8.jpg" },
        { id: 2, title: "Movie 2", imageUrl: "https://c7.alamy.com/comp/H65YE0/die-echten-ghostbusters-aka-the-real-ghost-busters-tv-series-1986-H65YE0.jpg" },
        { id: 3, title: "Movie 3", imageUrl: "https://c7.alamy.com/comp/2C3JNRF/beast-wars-transformers-sony-playstation-1-ps1-psx-editorial-use-only-2C3JNRF.jpg" },
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