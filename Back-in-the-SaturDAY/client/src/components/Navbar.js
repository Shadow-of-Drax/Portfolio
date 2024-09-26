import React from 'react';
import '../styles/Navbar.css';

const Navbar = ({ user, role, onLogout }) => {
    return (
        <nav className="navbar">
            <h1>Back in the SaturDAY!</h1>
            <div className="navbar-links">
                <a href="#home">Home</a>
                <a href="#movies">Movies</a>
                {role === 'admin' && <a href="#admin">Admin</a>}
                {user ? (
                    <>
                        <span>{user}</span>
                        <button onClick={onLogout}>Logout</button>
                    </>
                ) : (
                    <a href="#login">Login</a>
                )}
            </div>
        </nav>
    );
};

export default Navbar;