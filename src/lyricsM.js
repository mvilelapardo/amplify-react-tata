import React from 'react';
import tataImage from './tata01.png';
import tataAudio01 from './SanGabriel2025.ogg';

function lyricsM() {
  return (
    <div>
      <audio controls autoplay>
        <source src={tataAudio01} type="audio/ogg" />
      </audio>
      <br></br>
      <img src={tataImage} alt="TATA" style={{ maxWidth: '80%', maxHeight: '150v' }} />
    </div>
  );
}

export default lyricsM;
