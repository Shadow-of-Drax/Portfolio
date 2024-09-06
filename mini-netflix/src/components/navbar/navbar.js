import React from 'react';
import './navbar.css';
import '../assets/ninja.png';

function Navbar() {
  return (
    <div>
      <div className="navbar">
        <img
          className="navbar__logo"
          src="/assets/ninja.png"
          alt="Ninja Logo"
        />
        <img
          className="navbar__avatar"
          src="https://image.shutterstock.com/image-vector/avatar-vector-male-profile-gray-260nw-149083895.jpg"
          alt="User Avatar"
        />
      </div>
      <div className="navbar">
        <img
          className="navbar__logo"
          src="/assets/ninja.png"
          alt="Ninja Logo"
        />
        <img
          className="navbar__avatar"
          src="https://image.shutterstock.com/image-vector/avatar-vector-male-profile-gray-260nw-149083895.jpg"
          alt="User Avatar"
        />
      </div>
      <div className="navbar">
        <img
          className="navbar__logo"
          src="/assets/ninja.png"
          alt="Ninja Logo"
        />
        <img
          className="navbar__avatar"
          src="https://image.shutterstock.com/image-vector/avatar-vector-male-profile-gray-260nw-149083895.jpg"
          alt="User Avatar"
        />
      </div>
    </div>
  );
}

export default Navbar;