import React from 'react';
import CardItem from './CardItem';
import {shuffleCards, decideWinner, playRound} from '../services/GameFunctions';


// const Cards = ({ cards }) => {

//     const cardDetails = cards.map((card, index) => {
//         return (
//             <CardItem card={card} />
//         )
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

    const handleClick = () => {
        // const userValue = event.target.value 

        playRound(playerOneCards, playerTwoCards, attributeSelection)
        console.log('player One Deck', playerOneCards[0].name)
        console.log('player One Deck length', playerOneCards.length)
        console.log('player Two Deck', playerTwoCards[0].name)
        console.log('player Two Deck length', playerTwoCards.length)
    };

    // if(playerOneCards.length !== 0 && playerTwoCards !== 0){
    //     playRound(playerOneCards, playerTwoCards, attributeSelection)
    // }

    // const handleClick = () => {
    //     // const userValue = event.target.value 

    //     playRound(playerOneCards, playerTwoCards, attributeSelection)
    //     console.log('player One Deck', playerOneCards[0].name)
    //     console.log('player One Deck length', playerOneCards.length)
    //     console.log('player Two Deck', playerTwoCards[0].name)
    //     console.log('player Two Deck length', playerTwoCards.length)
    // };



    const cardItems1 = playerOneCards.map((card, index) => {
        return <CardItem card={card} key={index} handleClick={handleClick}/>
    })
    const cardItems2 = playerTwoCards.map((card, index) => {
        return <CardItem card={card} key={index} handleClick={handleClick}/>
    })
    // const cardItems = cards.map((card, index) => {
    //     return <CardItem card={card} key={index}/>
    // })





    return (
        // <>
        //     <div className="card__details__flex">
        //         {cardDetails}
        //     </div>
        // </>
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