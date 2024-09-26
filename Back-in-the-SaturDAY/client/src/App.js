import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import MovieList from './components/MovieList';
import VideoPlayer from './components/VideoPlayer';
import Auth from './components/Auth';
import './styles/App.css';

const App = () => {
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(storedUser);
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
                <Navbar user={user} onLogout={handleLogout} />
                <Switch>
                    <Route path="/login">
                        {!user ? <Auth onLogin={handleLogin} /> : <MovieList movies={movies} onMovieClick={handleMovieClick} />}
                    </Route>
                    <Route path="/movies">
                        {user ? <MovieList movies={movies} onMovieClick={handleMovieClick} /> : <Auth onLogin={handleLogin} />}
                    </Route>
                    <Route path="/video">
                        {selectedMovie ? <VideoPlayer videoSrc={selectedMovie.video} /> : <MovieList movies={movies} onMovieClick={handleMovieClick} />}
                    </Route>
                    <Route path="/" exact>
                        <h2>Welcome to Back in the SaturDAY!</h2>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default App;