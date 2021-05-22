import React from 'react';
import CardItem from './CardItem';

const Cards = ({cards}) => {

    const playerOneCards = []
    const playerTwoCards = []

    cards.map((card, index) => {
        if(index === 0 || index%2 === 0){
            return playerOneCards.push(card)
        }else{
            return playerTwoCards
        }
    });

    const cardItems = playerOneCards.map((card, index) => {
        return <CardItem card={card} key={index}/>
    })
    // const cardItems = cards.map((card, index) => {
    //     return <CardItem card={card} key={index}/>
    // })



    return (
        <ul>
            {cardItems}
        </ul>
    )
}



export default Cards;