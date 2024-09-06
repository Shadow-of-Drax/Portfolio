import React from 'react';
import './banner.css';

function Banner() {
  const backgroundImage = 'https://c7.alamy.com/comp/2K632KX/defocused-glow-overlay-neon-light-purple-color-ray-2K632KX.jpg'; // Replace with an actual image URL

  return (
    <header className="banner" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="banner__contents">
        <h1 className="banner__title">Back in the SaturDAY!</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          This is the beginning of a larger project.
        </h1>
      </div>
      <div className="banner--fadeBottom"></div>
    </header>
  );
}

export default Banner;