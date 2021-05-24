import React from 'react';
import CardItem from './CardItem';
import Player2CardItem from './Player2CardItem'

const Games = ({drawArray, cards, playerOneCards, playerTwoCards, setPlayerOneCards, setPlayerTwoCards, shuffleCards, playRound}) => {

    shuffleCards(cards)

    // const attributeSelection = 'smartest'

    const handleClick = (event) => {
        const attributeSelection = event.target.id
        console.log(attributeSelection)
        const tempPlayerOneCards = [...playerOneCards]
        const tempPlayerTwoCards = [...playerTwoCards]
        playRound(tempPlayerOneCards, tempPlayerTwoCards, attributeSelection)
        setPlayerOneCards(tempPlayerOneCards)
        setPlayerTwoCards(tempPlayerTwoCards)
        return
        
    };

    // document.getElementById('root')
    
    const cardItems1 = playerOneCards.map((card, index) => {
        return <CardItem card={card} key={index} handleClick={handleClick}/>
    })
    const cardItems2 = playerTwoCards.map((card, index) => {
        return <Player2CardItem card={card} key={index}/>
    })

    const numberOfCards = (array) => {
        return array.length
    }

    return (
        <div className="card-box">
            <div className="card-item">
                <h1>Player One</h1>
                <b>{cardItems1[0]}</b>
                <p>Cards left: {numberOfCards(cardItems1)}</p>
            </div>
            <div className="card-item">
                <h3>Draw Pile: {numberOfCards(drawArray)}</h3>
            </div>
            <div className="card-item" id="flip_card">
                <h1>Player Two</h1>
                <b>{cardItems2[0]}</b>
                <p>Cards left: {numberOfCards(cardItems2)}</p>
            </div>
        </div>
    )
}



export default Games;