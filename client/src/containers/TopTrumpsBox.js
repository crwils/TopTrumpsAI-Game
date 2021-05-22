import React, {useState, useEffect} from 'react';
import Games from '../components/Games';
import CardItem from '../components/CardItem'
import CreateCardComponent from '../components/CreateCardComponent';
import HeaderComponent from '../components/HeaderComponent';
import SimpsonsService, {getCard} from '../services/GamesService';
import './main-page.css';
import {shuffleCards, decideWinner, playRound} from '../services/GameFunctions';




function TopTrumpsBox(){
    const [cards, setCards] = useState([]);
    const [playerOneCards, setPlayerOneCards] = useState([])
    const [playerTwoCards, setPlayerTwoCards] = useState([])
    // const attributeSelection = 'smartest'

    useEffect (() => {
        SimpsonsService.getCard()
            .then(cards => setCards(cards))
        
    }, []);

    useEffect(() => {
        const temporaryPlayerOneCards = [];
        const temporaryPlayerTwoCards = [];
        cards.map((card, index) => {
            if(index === 0 || index%2 === 0){
                temporaryPlayerOneCards.push(card)
                // return setPlayerOneCards(tempVariable)
            }else{
                temporaryPlayerTwoCards.push(card)
                // return setPlayerTwoCards(tempVariables)
            }
        });
        console.log('temporaryPlayerOne', temporaryPlayerOneCards)
        console.log('temporaryPlayerTwo',temporaryPlayerTwoCards)
        setPlayerOneCards([...temporaryPlayerOneCards])
        setPlayerTwoCards([...temporaryPlayerTwoCards])
    }, [cards])

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