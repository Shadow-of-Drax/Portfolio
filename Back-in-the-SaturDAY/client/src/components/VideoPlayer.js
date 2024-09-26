import React from 'react';

const VideoPlayer = ({ videoUrl }) => {
    return (
        <div className="video-player">
            <iframe
                width="100%"
                height="500"
                src={videoUrl.replace("watch?v=", "embed/")} // Convert YouTube URL
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default VideoPlayer;