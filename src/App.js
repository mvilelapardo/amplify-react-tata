// import logo from './logo.svg';
import './App.css';
import ConstructionPage from './ConstructionPage.js';
import YouTubeVideo from './YouTubeVideo.js';

function App() {
  return (
    <div className="App">
      <h2 style={{ marginTop: '20px', color: 'white' }}>VIDEO PASANTES 2024 MORENADA SAN GABRIEL</h2>
      <YouTubeVideo videoId="x_Mi_yOa_Bo" />
      <ConstructionPage />
    </div>
  );
}

export default App;
