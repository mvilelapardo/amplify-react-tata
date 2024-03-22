import React from 'react';
import constructionImage from './tata_santiago.png';

function ConstructionPage() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
      <img src={constructionImage} alt="Site Under Construction" style={{ maxWidth: '80%', maxHeight: '80vh' }} />
      <h1 style={{ marginTop: '20px', color: 'white' }}>Tata Santiago</h1>
      <h2 style={{ marginTop: '20px', color: 'white' }}>25 de Julio</h2>
    </div>
  );
}

export default ConstructionPage;
