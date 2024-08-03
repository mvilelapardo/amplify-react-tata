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
      <h2 className="title">DOCUMENTAL "TATA SANTIAGO" - VERSIÓN RESUMIDA</h2>
      <div className="video-wrapper">
        <YouTubeVideo_VR videoId="KzeU0id_miE" />
      </div>

      <div className="video-section">
        <div className="video-pair">
          <div className="video-left">
            <h2 className="title">PARTE I</h2>
            <div className="video-wrapper">
              <YouTubeVideo_1VR videoId="RfMapUg4VA0" />
            </div>
          </div>
          <div className="video-right">
            <h2 className="title">PARTE II</h2>
            <div className="video-wrapper">
              <YouTubeVideo_2VR videoId="wyWbGfoxg5I" />
            </div>
          </div>
        </div>
      </div>

      <h2 className="title">DOCUMENTAL "TATA SANTIAGO" - VERSIÓN EXTENDIDA</h2>
      <div className="video-wrapper">
        <YouTubeVideo_VC videoId="DTCiGAmSWuw" />
      </div>

      <div className="video-section">
        <div className="video-pair">
          <div className="video-left">
            <h2 className="title">PARTE I</h2>
            <div className="video-wrapper">
              <YouTubeVideo_1VC videoId="eQdN4vU2AQM" />
            </div>
          </div>
          <div className="video-right">
            <h2 className="title">PARTE II</h2>
            <div className="video-wrapper">
              <YouTubeVideo_2VC videoId="knC4w4rrwQo" />
            </div>
          </div>
        </div>
      </div>

      <h2 className="title">VIDEO PASANTES 2024 MORENADA SAN GABRIEL</h2>
      <div className="video-wrapper">
        <YouTubeVideo videoId="x_Mi_yOa_Bo" />
      </div>
      
      <h3 className="title">Música: Victor Hugo Gironda</h3>
      <h3 className="title">Letra: Victor Hugo Gironda</h3>
      <h3 className="title">y Juan Antonio Vilela Nuñez</h3>
      <ConstructionPage />
    </div>
  );
}

export default App;
