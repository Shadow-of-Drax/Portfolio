import React from 'react';
import './styles.css';

function Navbar() {
  return (
    <div className="navbar">
      <img
        className="navbar__logo"
        src="/assets/logo.png"
        alt="Netflix Logo"
      />
      <img
        className="navbar__avatar"
        src="https://image.shutterstock.com/image-vector/avatar-vector-male-profile-gray-260nw-149083895.jpg"
        alt="User Avatar"
      />
    </div>
  );
}

export default Navbar;