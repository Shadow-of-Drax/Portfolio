import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <h1 className="logo">
          <Link to="/">James Warren Blog</Link>
        </h1>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/create">Create Post</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;