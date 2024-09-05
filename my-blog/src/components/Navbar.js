import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1>My Blog</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;