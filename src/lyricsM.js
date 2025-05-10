import React from 'react';
import AudioPlayer from 'react-h5-audio-player';

import tataImage from './tata01.png';
import tataAudio01 from './SanGabriel2025.ogg';

function lyricsM() {
  return (
    <div>
      <AudioPlayer
        autoPlay
        src={tataAudio01}
        onPlay={e => console.log("Playing")}
      />
      <br></br>
      <img src={tataImage} alt="TATA" style={{ maxWidth: '80%', maxHeight: '150v' }} />
    </div>
  );
}

export default lyricsM;
