import React from 'react';
import CardItem from './CardItem';
import {shuffleCards, decideWinner, playRound} from '../services/GameFunctions';

const Cards = ({cards, playerOneCards, playerTwoCards, setPlayerOneCards, setPlayerTwoCards}) => {

    shuffleCards(cards)

    // const attributeSelection = 'smartest'

    const handleClick = (event) =>{
        const attributeSelection = event.target.id
        console.log(attributeSelection)
        const tempPlayerOneCards = [...playerOneCards]
        const tempPlayerTwoCards = [...playerTwoCards]
        playRound(tempPlayerOneCards, tempPlayerTwoCards, attributeSelection)
        setPlayerOneCards(tempPlayerOneCards)
        setPlayerTwoCards(tempPlayerTwoCards)
        return
    };

    const cardItems1 = playerOneCards.map((card, index) => {
        return <CardItem card={card} key={index} handleClick={handleClick}/>
    })
    const cardItems2 = playerTwoCards.map((card, index) => {
        return <CardItem card={card} key={index} handleClick={handleClick}/>
    })

    return (
        <div>
            <h1>Player One</h1>
            <li>{cardItems1[0]}</li>
            <h1>Player Two</h1>
            <li>{cardItems2[0]}</li>
        </div>
    )
}



export default Cards;