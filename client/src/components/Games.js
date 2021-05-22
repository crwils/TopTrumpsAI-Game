import React from 'react';
import CardItem from './CardItem';

const Cards = ({cards}) => {

    const playerOneCards = []
    const playerTwoCards = []

    function shuffleCards(cardArray){
        if(cardArray.length !==0){
            let currentIndex = cardArray.length;
            let temporaryValue;
            let randomIndex;

            while(0 !== currentIndex){

                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex = currentIndex - 1;

                temporaryValue = {...cardArray[currentIndex]};
                cardArray[currentIndex] = cardArray[randomIndex];
                cardArray[randomIndex] = temporaryValue;
            }
            return cardArray;
        }else{
            return
        }
    };

    shuffleCards(cards)

    cards.map((card, index) => {
        if(index === 0 || index%2 === 0){
            return playerOneCards.push(card)
        }else{
            return playerTwoCards.push(card)
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