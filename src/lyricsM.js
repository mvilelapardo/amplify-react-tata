import React from 'react';
import tataImage from './tata01.png';

function lyricsM() {
  return (
    <div>
      <audio controls autoPlay src="/SanGabriel2025.mp3" />
      <br></br>
      <img src={tataImage} alt="TATA" style={{ maxWidth: '80%', maxHeight: '150v' }} />
    </div>
  );
}

export default lyricsM;
