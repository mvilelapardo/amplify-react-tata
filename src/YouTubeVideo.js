import React from 'react';

const YouTubeVideo = ({ videoId }) => {
    const src = `https://www.youtube.com/embed/x_Mi_yOa_Bo`;

    return (
        <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/x_Mi_yOa_Bo?si=epl6GopVYmUgYGab&amp;controls=0"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen
        ></iframe>
    );
};

export default YouTubeVideo;
