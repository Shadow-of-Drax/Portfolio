import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import MovieList from './components/MovieList';
//import VideoPlayer from './components/VideoPlayer';
import Auth from './components/Auth';
import './styles/App.css';
import { jwtDecode } from 'jwt-decode';
import PasswordReset from './components/PasswordReset'; // Import the PasswordReset component
import AdminDashboard from './components/AdminDashboard'; // Import the AdminDashboard component



const App = () => {
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [user, setUser] = useState(null);
    const [role, setRole] = useState(null); // Add role state

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            const decoded = jwtDecode(storedToken);
            setUser(decoded.username);
            setRole(decoded.role); // Set the user role
        }
    }, []);



    const movies = [
        { title: 'Movie 1', poster: 'path_to_poster1.jpg', video: 'path_to_video1.mp4' },
        { title: 'Movie 2', poster: 'path_to_poster2.jpg', video: 'path_to_video2.mp4' },
        { title: 'Movie 3', poster: 'path_to_poster3.jpg', video: 'path_to_video3.mp4' },
        { title: 'Movie 4', poster: 'path_to_poster4.jpg', video: 'path_to_video4.mp4' },
    ];

    const handleMovieClick = (movie) => {
        setSelectedMovie(movie);
    };

    const handleLogin = (username) => {
        setUser(username);
        localStorage.setItem('user', username);
    };

    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    return (
        <Router>
            <div className="app">
                <Navbar user={user} role={role} onLogout={handleLogout} />
                <Routes>
                     <Route path="/login" element={!user ? <Auth onLogin={setUser} /> : <Navigate to="/" />} />
                     <Route path="/reset-password" element={<PasswordReset />} />
                     <Route path="/admin" element={role === 'admin' ? <AdminDashboard /> : <h2>Access Denied</h2>} />
                     <Route path="/movies" element={<MovieList />} /> {/* Ensure this is correct */}
                     <Route path="/" element={<h2>Home</h2>} /> {/* Home route */}
                     <Route path="*" element={<h2>404 Not Found</h2>} /> {/* Catch-all for undefined routes */}
                </Routes>
            </div>
        </Router>
    );
};

export default App;