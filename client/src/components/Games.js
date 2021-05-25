import React from 'react';
import CardItem from './CardItem';
import Player2CardItem from './Player2CardItem'
import homerthumbsup from './images/homerthumbsup.png';

import databaseAttributeTranslator from '../containers/TopTrumpsBox';

const Games = ({ flip, setFlip, playerWins, isFlipped, setIsFlipped, drawArray, cards, playerOneCards, playerTwoCards, setPlayerOneCards, setPlayerTwoCards, shuffleCards, playRound, handleFlipClick, roundCounter, player1Turn, chosenAttribute, setChosenAttribute }) => {

    shuffleCards(cards)

    // const attributeSelection = 'smartest'
    // const handleFlipClick = (value) => {
    //         setIsFlipped(value)
    // }
    function databaseAttributeTranslator(attribute) {
        if (attribute === 'most_lovable') {
            return 'Most Lovable'
        } else if (attribute === 'smartest') {
            return 'Smartest'
        } else if (attribute === 'fattest') {
            return 'Fattest'
        } else if (attribute === 'biggest_nerd') {
            return 'Biggest Nerd'
        } else if (attribute === 'greatest_anarchist') {
            return 'Greatest Anarchist'
        } else if (attribute === 'walk_of_fame') {
            return 'Walk Of Fame'
        } else {
            return null
        }
    }

    const handleClick = (event) => {
        const attributeSelection = event.target.id
        console.log(attributeSelection)
        setChosenAttribute(databaseAttributeTranslator(attributeSelection))
        // setTimeout(() => {
        setFlip(1)
        // handleFlipClick(true)
        // }, 2000);

        // setTimeout(() => {
        // setFlip(2)
        // handleFlipClick(false)


        setTimeout(() => {
            // handleFlipClick(false)

            const tempPlayerOneCards = [...playerOneCards]
            const tempPlayerTwoCards = [...playerTwoCards]
            playRound(tempPlayerOneCards, tempPlayerTwoCards, attributeSelection)

            setPlayerOneCards(tempPlayerOneCards)
            setPlayerTwoCards(tempPlayerTwoCards)

        }, 4000)
    };

    const cardItems1 = playerOneCards.map((card, index) => {
        return <CardItem playerWins={playerWins} isFlipped={isFlipped} setIsFlipped={setIsFlipped} card={card} key={index} handleClick={handleClick} chosenAttribute={chosenAttribute} />
    })
    const cardItems2 = playerTwoCards.map((card, index) => {
        return <Player2CardItem flip={flip} setFlip={setFlip} isFlipped={isFlipped} setIsFlipped={setIsFlipped} card={card} key={index} chosenAttribute={chosenAttribute} />
    })

    const numberOfCards = (array) => {
        return array.length
    }

    return (
        <>
            <div className="games-block">
                <div className="player-choice-block">
                    {player1Turn ? <h3 id='selected-card'>Player One Selected: <br></br> {chosenAttribute}</h3> : <h3 id='selected-card'></h3>}
                    {!player1Turn ? <h3 id='selected-card'>Player Two Selected: <br></br> {chosenAttribute}</h3> : <h3 id='selected-card'></h3>}
                </div>

                <div className="card-box">
                    <div className="card-item">
                        <h1>Player 1</h1>
                        <b className="player-1-card">{cardItems1[0]}</b>
                    </div>
                    <div className="round">
                    <h3>Round</h3>
                    <h1>{roundCounter}</h1>
                    </div>
                    <div className="card-item" id="flip_card">
                        <h1>Player 2</h1>
                        <b className="player-2-card">{cardItems2[0]}</b>
                    </div>
                </div>
            </div>
            <div className="card-counters">
                {/* <div className="card-counter-item"> */}
                    <b>Cards left: {numberOfCards(cardItems1)}</b>
                {/* </div> */}
                {/* <div className="card-counter-item"> */}
                    <h3>Draw Pile: {numberOfCards(drawArray)}</h3>
                {/* </div> */}
                {/* <div className="card-counter-item"> */}
                    <b>Cards left: {numberOfCards(cardItems2)}</b>
                {/* </div> */}
            </div>

        </>
    )
}



export default Games;