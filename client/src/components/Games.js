import React from 'react';
import CardItem from './CardItem';
import Player2CardItem from './Player2CardItem'
import databaseAttributeTranslator from '../containers/TopTrumpsBox';

const Games = ({ playerWins, isFlipped, setIsFlipped, drawArray, cards, playerOneCards, playerTwoCards, setPlayerOneCards, setPlayerTwoCards, shuffleCards, playRound, handleFlipClick, roundCounter, player1Turn, chosenAttribute, setChosenAttribute}) => {

    shuffleCards(cards)

    // const attributeSelection = 'smartest'
    // const handleFlipClick = (value) => {
    //         setIsFlipped(value)
    // }
    function databaseAttributeTranslator(attribute){
        if(attribute === 'most_lovable'){
            return 'Most Lovable'
        }else if(attribute === 'smartest'){
            return 'Smartest'
        }else if(attribute === 'fattest'){
            return 'Fattest'
        }else if(attribute === 'biggest_nerd'){
            return 'Biggest Nerd'
        }else if(attribute === 'greatest_anarchist'){
            return 'Greatest Anarchist'
        }else if(attribute === 'walk_of_fame'){
            return 'Walk Of Fame'
        }else{
            return null
        }
    }
    
    const handleClick = (event) => {
        const attributeSelection = event.target.id
        console.log(attributeSelection)
        setChosenAttribute(databaseAttributeTranslator(attributeSelection))
        setTimeout(() => {
            handleFlipClick(true)
        }, 2000);

        setTimeout(() => {
            handleFlipClick(false)

            const tempPlayerOneCards = [...playerOneCards]
            const tempPlayerTwoCards = [...playerTwoCards]
            playRound(tempPlayerOneCards, tempPlayerTwoCards, attributeSelection)
            
            setPlayerOneCards(tempPlayerOneCards)
            setPlayerTwoCards(tempPlayerTwoCards)
        
        }, 6000)
        };

    const cardItems1 = playerOneCards.map((card, index) => {
        return <CardItem playerWins={playerWins} isFlipped={isFlipped} setIsFlipped={setIsFlipped} card={card} key={index} handleClick={handleClick} />
    })
    const cardItems2 = playerTwoCards.map((card, index) => {
        return <Player2CardItem isFlipped={isFlipped} setIsFlipped={setIsFlipped} card={card} key={index} />
    })

    const numberOfCards = (array) => {
        return array.length
    }

    return (
        <>
            <div className="card-box">
                <div className="card-item">                   
                    <h1>Player One</h1>
                    <b className="player-1-card">{cardItems1[0]}</b>
                </div>
                <div className="round">
                    <h1>Round</h1>
                    <h2>{roundCounter}</h2>
                </div>
                <div className="card-item" id="flip_card">
                    <h1>Player Two</h1>
                    <b className="player-2-card">{cardItems2[0]}</b>
                </div>
            </div>
            {player1Turn? <h3 id='selected-card'>Player One Chose: {chosenAttribute}</h3> : <h3 id='selected-card'></h3>}
            {!player1Turn? <h3 id='selected-card'>Player Two Chose: {chosenAttribute}</h3> : <h3 id='selected-card'></h3>}
            <div className="card-counters">
                <b>Cards left: {numberOfCards(cardItems1)}</b>
                <h3>Draw Pile: {numberOfCards(drawArray)}</h3>
                <b>Cards left: {numberOfCards(cardItems2)}</b>
            </div>
        </>
    )
}



export default Games;