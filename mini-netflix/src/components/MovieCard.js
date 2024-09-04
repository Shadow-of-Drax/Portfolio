import React from 'react';
import './styles.css';

function MovieCard({ movie }) {
  return (
    <div className="movieCard">
      <img className="movieCard__poster" src={movie.imageUrl} alt={movie.name} />
      <h3 className="movieCard__title">{movie.name}</h3>
    </div>
  );
}

export default MovieCard;