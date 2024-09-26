import React, { useState } from 'react';
import Navbar from './components/Navbar';
import MovieList from './components/MovieList';
import VideoPlayer from './components/VideoPlayer';
import Auth from './components/Auth';
import './styles/App.css';

const App = () => {
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [user, setUser] = useState(null); // Manage user state

    const movies = [
        { title: 'Movie 1', poster: 'path_to_poster1.jpg', video: 'path_to_video1.mp4' },
        { title: 'Movie 2', poster: 'path_to_poster2.jpg', video: 'path_to_video2.mp4' },
        { title: 'Movie 3', poster: 'path_to_poster3.jpg', video: 'path_to_video3.mp4' },
        { title: 'Movie 4', poster: 'path_to_poster4.jpg', video: 'path_to_video4.mp4' },
        // Add more movies here
    ];

    const handleMovieClick = (movie) => {
        setSelectedMovie(movie);
    };

    const handleLogin = (username) => {
        setUser(username); // Set the user on login
    };

    return (
        <div className="app">
            <Navbar />
            {!user ? (
                <Auth onLogin={handleLogin} />
            ) : selectedMovie ? (
                <VideoPlayer videoSrc={selectedMovie.video} />
            ) : (
                <>
                    <h2>Featured Movies</h2>
                    <MovieList movies={movies} onMovieClick={handleMovieClick} />
                </>
            )}
        </div>
    );
};

export default App;