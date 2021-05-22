import React, {useState, useEffect} from 'react';
import Games from '../components/Games';
import CreateCardComponent from '../components/CreateCardComponent';
import HeaderComponent from '../components/HeaderComponent';
import SimpsonsService, {getCard} from '../services/GamesService';
// import './main-page.css';
import {shuffleCards, decideWinner, playRound} from '../services/GameFunctions';




function TopTrumpsBox(){
    const [cards, setCards] = useState([]);

    const [playerOneCards, setPlayerOneCards] = useState([])
    const [playerTwoCards, setPlayerTwoCards] = useState([])
    // const attributeSelection = 'smartest'

    useEffect (() => {
        SimpsonsService.getCard()
            .then(cards => setCards(cards));
            
            // setPlayerOneCards(cards[0])
            // setPlayerTwoCards(cards[1])
        
    }, []);
    

    return(
         
        <div className="tt__box--header">
            <h1>Top Trumps Game!</h1>
            <HeaderComponent />
            <Games playerOneCards= {playerOneCards} playerTwoCards={playerTwoCards} setPlayerOneCards={setPlayerOneCards} setPlayerTwoCards= {setPlayerTwoCards} cards={cards}/>
            <CreateCardComponent />
        </div>

    );
};

export default TopTrumpsBox;