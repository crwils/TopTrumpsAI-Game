import React, { useState, useEffect, Fragment } from 'react';
import ttlogo from './components/images/ttlogo.png';
import TopTrumpsBox from './containers/TopTrumpsBox';
import './App.css';



function App() {

  const [gameStarted, setGameStarted] = useState(false)
  const [aiDifficulty, setAiDifficulty] = useState(2)

  const handleStartGameButtonClick = () => {
    setGameStarted(true)
  }

  function chooseDifficulty(event) {
    setAiDifficulty(event.target.value)
    console.log(aiDifficulty)
  }

  return (
    <>
      {gameStarted ? <TopTrumpsBox aiDifficulty={aiDifficulty} />
        :
        <main className="home-page">
          <img className="home-start-button" onClick={handleStartGameButtonClick} src={ttlogo} alt="" />
          
          <div className="custom-select" >
            <select onChange={chooseDifficulty}>
              <option value="default" selected disabled>Select difficulty</option>
              <option value={2}>Easy</option>
              <option value={1}>Moderate</option>
              <option value={0}>Hard</option>
            </select>
          </div>
        </main>}
    </>
  );
};

export default App;
