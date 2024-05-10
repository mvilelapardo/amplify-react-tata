// import logo from './logo.svg';
import './App.css';
import ConstructionPage from './ConstructionPage.js';
import YouTubeVideo from './YouTubeVideo.js';
import YouTubeVideo_2 from './YouTubeVideo_2.js';

function App() {
  return (
    <div className="App">
      <h2 style={{ marginTop: '20px', color: 'white' }}>VIDEO PASANTES 2024 MORENADA SAN GABRIEL</h2>
      <YouTubeVideo videoId="x_Mi_yOa_Bo" />
      <h2 style={{ marginTop: '20px', color: 'white' }}>RESEÑA HISTÓRICA DEL TATA SANTIAGO</h2>
      <YouTubeVideo_2 videoId="jRrtdzcL0vg" />
      <ConstructionPage />
    </div>
  );
}

export default App;
