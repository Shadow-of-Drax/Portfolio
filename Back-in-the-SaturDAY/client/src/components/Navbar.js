import React from 'react';
import './Navbar.css';

const Navbar = ({ user, onLogout }) => {
    return (
        <nav className="navbar">
            <h1>Back in the SaturDAY!</h1>
            <div className="navbar-links">
                <a href="#home">Home</a>
                <a href="#movies">Movies</a>
                {user && <button onClick={onLogout}>Logout</button>}
            </div>
        </nav>
    );
};

export default Navbar;