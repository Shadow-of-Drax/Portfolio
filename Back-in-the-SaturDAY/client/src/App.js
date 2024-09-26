import React from 'react';
import VideoPlayer from './components/VideoPlayer';
import './styles/App.css';

const App = () => {
    const videoSrc = 'path_to_your_video.mp4'; // Update with your video path

    return (
        <div className="app">
            <h1>Back in the SaturDAY!</h1>
            <VideoPlayer videoSrc={videoSrc} />
        </div>
    );
};

export default App;