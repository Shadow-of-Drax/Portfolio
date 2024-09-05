import React from 'react';
import './banner.css';

function Banner() {
  const backgroundImage = 'https://image.tmdb.org/t/p/original/your-image-path.jpg'; // Replace with an actual image URL

  return (
    <header className="banner" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="banner__contents">
        <h1 className="banner__title">Movie Title</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          This is a short description of the movie. It can be a couple of sentences that summarize the plot.
        </h1>
      </div>
      <div className="banner--fadeBottom"></div>
    </header>
  );
}

export default Banner;