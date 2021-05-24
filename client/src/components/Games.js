import React from 'react';
import CardItem from './CardItem';

const Games = ({cards, playerOneCards, playerTwoCards, setPlayerOneCards, setPlayerTwoCards, shuffleCards, playRound}) => {

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
        <div className="card-box">
            <div className="card-item">
                <h1>Player One</h1>
                <b>{cardItems1[0]}</b>
            </div>
            <div className="card-item">
                <h1>Player Two</h1>
                <b>{cardItems2[0]}</b>
            </div>
        </div>
    )
}



export default Games;