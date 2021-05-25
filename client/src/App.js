import React, {useState, useEffect, Fragment} from 'react';
import ttlogo from './components/images/ttlogo.png';
import TopTrumpsBox from './containers/TopTrumpsBox';



function App() {

  const [gameStarted, setGameStarted] = useState(false)

  const handleStartGameButtonClick = () =>{
    setGameStarted(true)
  }

  return (
    <>
          {gameStarted ? <TopTrumpsBox /> 
          : 
          
          <main className="home-page">
            <img className="home-start-button" onClick={handleStartGameButtonClick} src={ttlogo} alt="" />
          
            {/* <div className="home-page-div">
            <button className="main-page-button" onClick={handleStartGameButtonClick}><span>Start Game</span></button>
            </div> */}
          </main>}
    </>
  );
};

export default App;
