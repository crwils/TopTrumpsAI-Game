import React, {useState, useEffect, Fragment} from 'react';
import './App.css';
import TopTrumpsBox from './containers/TopTrumpsBox';



function App() {

  const [gameStarted, setGameStarted] = useState(false)

  const handleStartGameButtonClick = () =>{
    setGameStarted(true)
  }

  return (
    <>
          {gameStarted ? <TopTrumpsBox /> : <button onClick={handleStartGameButtonClick}>Start Game</button>}
    </>
  );
};

export default App;
