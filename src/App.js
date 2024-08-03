// import logo from './logo.svg';
import './App.css';
import ConstructionPage from './ConstructionPage.js';
import YouTubeVideo from './YouTubeVideo.js';

import YouTubeVideo_VR from './YouTubeVideo_VR.js';
import YouTubeVideo_1VR from './YouTubeVideo_1VR.js';
import YouTubeVideo_2VR from './YouTubeVideo_2VR.js';

import YouTubeVideo_VC from './YouTubeVideo_VC.js';
import YouTubeVideo_1VC from './YouTubeVideo_1VC.js';
import YouTubeVideo_2VC from './YouTubeVideo_2VC.js';

function App() {
  return (
    <div className="App">
      <h2 style={{ marginTop: '20px', color: 'white' }}>DOCUMENTAL "TATA SANTIAGO" - VERSIÓN RESUMIDA</h2>
      <YouTubeVideo_VR videoId="KzeU0id_miE" />

      <div className="video-section">
        <div className="video-pair">
          <div className="video-left">
            <h2 style={{ marginTop: '20px', color: 'white' }}>PARTE I</h2>
            <YouTubeVideo_1VR videoId="RfMapUg4VA0" />
          </div>
          <div className="video-right">
            <h2 style={{ marginTop: '20px', color: 'white' }}>PARTE II</h2>
            <YouTubeVideo_2VR videoId="wyWbGfoxg5I" />
          </div>
        </div>
      </div>

      <h2 style={{ marginTop: '20px', color: 'white' }}>DOCUMENTAL "TATA SANTIAGO" - VERSIÓN EXTENDIDA</h2>
      <YouTubeVideo_VC videoId="DTCiGAmSWuw" />

      <div className="video-section">
        <div className="video-pair">
          <div className="video-left">
            <h2 style={{ marginTop: '20px', color: 'white' }}>PARTE I</h2>
            <YouTubeVideo_1VC videoId="eQdN4vU2AQM" />
          </div>
          <div className="video-right">
            <h2 style={{ marginTop: '20px', color: 'white' }}>PARTE II</h2>
            <YouTubeVideo_2VC videoId="knC4w4rrwQo" />
          </div>
        </div>
      </div>

      <h2 style={{ marginTop: '20px', color: 'white' }}>VIDEO PASANTES 2024 MORENADA SAN GABRIEL</h2>
      <YouTubeVideo videoId="x_Mi_yOa_Bo" />

      <ConstructionPage />
    </div>
  );
}

export default App;
