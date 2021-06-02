import React from 'react';
import P1CardItem from './P1CardItem';
import P2CardItem from './P2CardItem'
import databaseAttributeTranslator from '../containers/TopTrumpsBox';


const Games = ({ flip, setFlip, playerWins, isFlipped, setIsFlipped, drawArray, cards, playerOneCards, playerTwoCards, setPlayerOneCards, setPlayerTwoCards, shuffleCards, playRound, roundCounter, player1Turn, chosenAttribute, setChosenAttribute, clicked, setClicked }) => {

    shuffleCards(cards)

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
        if (!clicked) {
            setClicked(true)

            const attributeSelection = event.target.id

            setChosenAttribute(databaseAttributeTranslator(attributeSelection))

            setFlip(1)

            setTimeout(() => {
                const tempPlayerOneCards = [...playerOneCards]
                const tempPlayerTwoCards = [...playerTwoCards]
                playRound(tempPlayerOneCards, tempPlayerTwoCards, attributeSelection)

                setPlayerOneCards(tempPlayerOneCards)
                setPlayerTwoCards(tempPlayerTwoCards)

            }, 4000)
        }
    };


    const cardItems1 = playerOneCards.map((card, index) => {
        return <P1CardItem player1Turn={player1Turn} playerWins={playerWins} isFlipped={isFlipped} setIsFlipped={setIsFlipped} card={card} key={index} handleClick={handleClick} chosenAttribute={chosenAttribute} clicked={clicked} />
    })
    const cardItems2 = playerTwoCards.map((card, index) => {
        return <P2CardItem setClicked={setClicked} player1Turn={player1Turn} flip={flip} setFlip={setFlip} isFlipped={isFlipped} setIsFlipped={setIsFlipped} card={card} key={index} chosenAttribute={chosenAttribute} clicked={clicked} />
    })


    const numberOfCards = (array) => {
        return array.length
    }


    return (
        <>
            <div className="round-move-display">
                <div className="round">
                    {player1Turn ? <h3 className="roundItems1"> {chosenAttribute}</h3> : <h3 className='roundItems1'></h3>}
                    <h3 className="roundItems2">ROUND {roundCounter}</h3>
                    {!player1Turn ? <h3 className="roundItems3"> {chosenAttribute}</h3> : <h3 className='roundItems3'></h3>}
                </div>
            </div>
            <div className="games-block">
                <div className="card-box">
                    <div className="card-item">
                        <h1 className="player-name1">PLAYER 1</h1>
                        <b className="player-1-card" >{cardItems1[0]}</b>
                    </div>
                    <div>
                        <h1 className="vs-h1">VS</h1>
                    </div>
                    <div className="card-item">
                        <h1 className="player-name2">COMPUTER</h1>
                        <b className="player-2-card">{cardItems2[0]}</b>
                    </div>
                </div>
            </div>
            <div className="card-counters-div">
                <div className="card-counters">
                    <b>CARDS: {numberOfCards(cardItems1)}</b>
                    <h3>DRAW PILE: {numberOfCards(drawArray)}</h3>
                    <b>CARDS: {numberOfCards(cardItems2)}</b>
                </div>
            </div>
        </>
    )
}


export default Games;