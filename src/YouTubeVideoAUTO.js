import React from 'react';

const YouTubeVideo = ({ videoId }) => {
    const src = `https://www.youtube.com/embed/50M-Prmo6f4?&autoplay=1&controls=1`;

    return (
        <div className="video-responsive">
            <iframe
                width="50%"
                height="64"
                src="https://www.youtube.com/embed/50M-Prmo6f4?&autoplay=1&controls=1"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen="false">
            </iframe>
            
        </div>
        
    );
};

export default YouTubeVideo;