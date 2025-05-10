import React from 'react';
import tataImage from './tata01.png';
import tataAudio01 from './SanGabriel2025.ogg';
import tataAudio02 from './SanGabriel2025.mp3';

function lyricsM() {
  return (
    <div>
      <audio controls autoplay>
        <source src={tataAudio01} type="audio/ogg" />
        <source src={tataAudio02} type="audio/mpeg" />
      </audio>
      <br></br>
      <img src={tataImage} alt="TATA" style={{ maxWidth: '80%', maxHeight: '150v' }} />
    </div>
  );
}

export default lyricsM;
