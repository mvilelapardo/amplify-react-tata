import React from 'react';
import tataImage from './tata01.jpeg';
import tataSound from './SanGabriel2025.mp3';

function lyricsM() {
  return (
    <div>
      <audio controls autoplay src={tataSound} type="audio/mpeg"/>
      <br></br>
      <img src={tataImage} alt="TATA" style={{ maxWidth: '80%', maxHeight: '150v' }} />
    </div>
  );
}

export default lyricsM;
