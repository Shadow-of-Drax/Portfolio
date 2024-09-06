import React from 'react';
import './navbar.css';
import ninja from '../assets/ninja.png';
import smiley from '../assets/smiley.jpg';

function Navbar() {
  return (
    <div>
      <div className="navbar">
        <img
          className="navbar__logo"
          src={ninja}
          alt="Ninja Logo"
        />
        <img
          className="navbar__avatar"
          src={smiley}
          alt="User Avatar"
        />
      </div>
      <div className="navbar">
        <img
          className="navbar__logo"
          src={ninja}
          alt="Ninja Logo"
        />
        <img
          className="navbar__avatar"
          src={smiley}
          alt="User Avatar"
        />
      </div>
      <div className="navbar">
        <img
          className="navbar__logo"
          src={ninja}
          alt="Ninja Logo"
        />
        <img
          className="navbar__avatar"
          src={smiley}
          alt="User Avatar"
        />
      </div>
    </div>
  );
}

export default Navbar;