import React from 'react';
import CardItem from './CardItem';
import {shuffleCards, decideWinner, playRound} from '../services/GameFunctions';

const Cards = ({cards}) => {

    shuffleCards(cards)

    const playerOneCards = []
    const playerTwoCards = []
    const attributeSelection = 'smartest'

    cards.map((card, index) => {
        if(index === 0 || index%2 === 0){
            return playerOneCards.push(card)
        }else{
            return playerTwoCards.push(card)
        }
    });

    if(playerOneCards.length !== 0 && playerTwoCards !== 0){
        playRound(playerOneCards, playerTwoCards, attributeSelection)
    }




    const cardItems1 = playerOneCards.map((card, index) => {
        return <CardItem card={card} key={index}/>
    })
    const cardItems2 = playerTwoCards.map((card, index) => {
        return <CardItem card={card} key={index}/>
    })
    // const cardItems = cards.map((card, index) => {
    //     return <CardItem card={card} key={index}/>
    // })



    return (
        <div>
            <h1>Player 1</h1>
            <ul>
                {cardItems1}
            </ul>
            <h1>Player 2</h1>
            <ul>
                {cardItems2}
            </ul>
        </div>
    )
}



export default Cards;