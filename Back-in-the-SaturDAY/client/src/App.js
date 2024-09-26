import React from 'react';
import Navbar from './components/Navbar';
import MovieList from './components/MovieList';
import VideoPlayer from './components/VideoPlayer';
import './styles/App.css';

const App = () => {
    const movies = [
        { title: 'Movie 1', poster: 'path_to_poster1.jpg' },
        { title: 'Movie 2', poster: 'path_to_poster2.jpg' },
        { title: 'Movie 3', poster: 'path_to_poster3.jpg' },
        { title: 'Movie 4', poster: 'path_to_poster4.jpg' },
        // Add more movies here
    ];

    return (
        <div className="app">
            <Navbar />
            <h2>Featured Movies</h2>
            <MovieList movies={movies} />
            {/* Add VideoPlayer if you want a featured video */}
            {/* <VideoPlayer videoSrc={'path_to_your_video.mp4'} /> */}
        </div>
    );
};

export default App;