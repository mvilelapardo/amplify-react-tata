import React from 'react';
import tataImage from './tata01.png';

function lyricsM() {
  return (
    <div>
      <audio controls autoplay>
        <source src="SanGabriel2025.ogg" type="audio/ogg" />
        <source src="SanGabriel2025.mp3" type="audio/mpeg" />
      </audio>
      <br></br>
      <img src={tataImage} alt="TATA" style={{ maxWidth: '80%', maxHeight: '150v' }} />
    </div>
  );
}

export default lyricsM;
