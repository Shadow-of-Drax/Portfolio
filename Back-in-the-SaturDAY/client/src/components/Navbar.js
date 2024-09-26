import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Back in the SaturDAY!</h1>
            <div className="navbar-links">
                <a href="#home">Home</a>
                <a href="#movies">Movies</a>
                <a href="#series">Series</a>
            </div>
        </nav>
    );
};

export default Navbar;