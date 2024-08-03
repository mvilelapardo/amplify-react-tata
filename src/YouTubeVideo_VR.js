import React from 'react';

const YouTubeVideo = ({ videoId }) => {
    const src = `https://www.youtube.com/embed/KzeU0id_miE`;

    return (
        <div className="video-responsive">
            <iframe 
                width="560"
                height="315"
                src="https://www.youtube.com/embed/KzeU0id_miE?si=lZidFfZIeSyk8_lw" 
                title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen
            ></iframe>
        </div>
        
    );
};

export default YouTubeVideo;