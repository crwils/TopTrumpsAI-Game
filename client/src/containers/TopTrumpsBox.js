import React, { useState, useEffect } from 'react';
import Games from '../components/Games';
import HeaderComponent from '../components/HeaderComponent';
import SimpsonsService from '../services/GamesService';
import './main-page.css';
import homerwoohoo from '../components/images/homerwoohoo.png';
import homeryoulose from '../components/images/homeryoulose.png';


function TopTrumpsBox({ aiDifficulty }) {
    const [cards, setCards] = useState([]);
    const [playerOneCards, setPlayerOneCards] = useState([])
    const [playerTwoCards, setPlayerTwoCards] = useState([])
    const [playerWins, setPlayerWins] = useState(false)
    const [whoWins, setWhoWins] = useState(null)
    const [player1Turn, setPlayer1Turn] = useState(true)
    const [roundCounter, setRoundCounter] = useState(1)
    const [drawArray, setDrawArray] = useState([])
    const [isFlipped, setIsFlipped] = useState(false);
    const [flip, setFlip] = useState(0)
    const [chosenAttribute, setChosenAttribute] = useState(null)
    const [clicked, setClicked] = useState(false)


    let highestMostLovable = 0;
    let highestSmartest = 0;
    let highestFattest = 0;
    let highestBiggestNerd = 0;
    let highestGreatestAnarchist = 0;
    let highestWalkOfFame = 0;


    useEffect(() => {
        SimpsonsService.getCard()
            .then(cards => setCards(cards))
    }, []);

    useEffect(() => {
        const temporaryPlayerOneCards = [];
        const temporaryPlayerTwoCards = [];
        decideHighestAttribute();
        cards.map((card, index) => {
            if (index === 0 || index % 2 === 0) {
                temporaryPlayerOneCards.push(card)
            } else {
                temporaryPlayerTwoCards.push(card)
            }
        });

        setPlayerOneCards([...temporaryPlayerOneCards])
        setPlayerTwoCards([...temporaryPlayerTwoCards])
    }, [cards])

    // AI use effect 
    useEffect(() => {
        if (!playerWins) {
            if (!player1Turn) {
                decideHighestAttribute();
                setTimeout(() => { handleComputerSelect(aiSelect(highestMostLovable, highestSmartest, highestFattest, highestBiggestNerd, highestGreatestAnarchist, highestWalkOfFame, playerTwoCards)) }, 1000)
            }
        }

    }, [playerTwoCards])

    
    // Decides which card is being picked in decideWinner function - DO NOT CHANGE!!!
    const indexNumber = 0;

    function decideWinner(player1Array, player2Array, attribute) {
        if (player1Array[0] !== undefined && player2Array[0] !== undefined) {

            if ((player1Array.length && player2Array.length) > 0) {
                if (player1Array[0][attribute] === player2Array[0][attribute]) {

                    setDrawArray(drawArray => [...drawArray, player1Array[0]]) 
                    setDrawArray(drawArray => [...drawArray, player2Array[0]]) 

                    player2Array.splice(indexNumber, 1)
                    player1Array.splice(indexNumber, 1)

                } else if (player1Array[0][attribute] > player2Array[0][attribute]) {
                    player1Array.push(player1Array[0])
                    player1Array.push(player2Array[0])
                    player2Array.splice(indexNumber, 1)
                    player1Array.splice(indexNumber, 1)

                    drawArray.forEach(card => { player1Array.push(card) })
                    setDrawArray([])

                    if (!player1Turn) {
                        changeTurn()
                    }

                } else if (player2Array[0][attribute] > player1Array[0][attribute]) {
                    player2Array.push(player2Array[0])
                    player2Array.push(player1Array[0])
                    player1Array.splice(indexNumber, 1)
                    player2Array.splice(indexNumber, 1)

                    drawArray.forEach(card => { player2Array.push(card) })
                    setDrawArray([])

                    if (player1Turn) {
                        changeTurn()
                    }

                } else {
                    return alert("Game is over!")
                }
            }
        }
    }


    function playRound(player1Array, player2Array, attribute) {
        setChosenAttribute(null)
        let temporaryCounterVariable = roundCounter
        temporaryCounterVariable += 1
        setRoundCounter(temporaryCounterVariable)
        console.log('roundCounter', roundCounter)
        decideWinner(player1Array, player2Array, attribute)
        if (player1Array.length === 0 && player2Array.length === 0) {
            setPlayerWins(true)
            setWhoWins('Draw')
        } else if (player1Array.length === 0) {
            setPlayerWins(true)
            setWhoWins('Player Two')
        } else if (player2Array.length === 0) {
            setPlayerWins(true)
            setWhoWins('Player One')
        }
    };


    function shuffleCards(cardArray) {
        if (cardArray.length !== 0) {
            let currentIndex = cardArray.length;
            let temporaryValue;
            let randomIndex;

            while (0 !== currentIndex) {

                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex = currentIndex - 1;

                temporaryValue = { ...cardArray[currentIndex] };
                cardArray[currentIndex] = cardArray[randomIndex];
                cardArray[randomIndex] = temporaryValue;
            }
            return cardArray;
        } else {
            return
        }
    };


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
    };


    function playAgainClick() {
        window.location.reload()
    };


    const handleFlipClick = (value) => {
        setIsFlipped(value)
    };


    // AI Below
    function changeTurn() {
        if (player1Turn) {
            setPlayer1Turn(false)
            setChosenAttribute(null)
        } else {
            setPlayer1Turn(true)
            setChosenAttribute(null)
        }
        return
    };


    function decideHighestAttribute() {

        cards.map(card => {
            if (card.most_lovable > highestMostLovable) {
                highestMostLovable = card.most_lovable
            }
            if (card.smartest > highestSmartest) {
                highestSmartest = card.smartest
            }
            if (card.fattest > highestFattest) {
                highestFattest = card.fattest
            }
            if (card.biggest_nerd > highestBiggestNerd) {
                highestBiggestNerd = card.biggest_nerd
            }
            if (card.greatest_anarchist > highestGreatestAnarchist) {
                highestGreatestAnarchist = card.greatest_anarchist
            }
            if (card.walk_of_fame > highestWalkOfFame) {
                highestWalkOfFame = card.walk_of_fame
            }
        })
    }


    function aiSelect(highestMostLovable, highestSmartest, highestFattest, highestBiggestNerd, highestGreatestAnarchist, highestWalkOfFame, playerTwoCards) {
        const sortingArray = []
        const mostLovableGap = highestMostLovable - playerTwoCards[0].most_lovable
        sortingArray.push({ name: "most_lovable", value: mostLovableGap })
        const smartestGap = highestSmartest - playerTwoCards[0].smartest;
        sortingArray.push({ name: "smartest", value: smartestGap })
        const fattestGap = highestFattest - playerTwoCards[0].fattest;
        sortingArray.push({ name: "fattest", value: fattestGap })
        const biggestNerdGap = highestBiggestNerd - playerTwoCards[0].biggest_nerd;
        sortingArray.push({ name: "biggest_nerd", value: biggestNerdGap })
        const greatestAnarchistGap = highestGreatestAnarchist - playerTwoCards[0].greatest_anarchist;
        sortingArray.push({ name: "greatest_anarchist", value: greatestAnarchistGap })
        const walkOfFameGap = highestWalkOfFame - playerTwoCards[0].walk_of_fame;
        sortingArray.push({ name: "walk_of_fame", value: walkOfFameGap })

        sortingArray.sort(function (a, b) {
            return parseFloat(a.value) - parseFloat(b.value);
        })

        const aiSelection = sortingArray[aiDifficulty].name
        console.log('aiSelection', aiSelection)
        return aiSelection

    }

    
    const handleComputerSelect = (attribute) => {
        setClicked(true)
        const attributeSelection = attribute
        console.log(attributeSelection)
        setChosenAttribute(databaseAttributeTranslator(attributeSelection))
        setTimeout(() => {
            setFlip(1)
        }, 1000);

        setTimeout(() => {
            const tempPlayerOneCards = [...playerOneCards]
            const tempPlayerTwoCards = [...playerTwoCards]
            playRound(tempPlayerOneCards, tempPlayerTwoCards, attributeSelection)
            setPlayerOneCards(tempPlayerOneCards)
            setPlayerTwoCards(tempPlayerTwoCards)
            return
        }, 6000)
        setClicked(false)
    };


    return (

        (playerWins ?

            <main>
                <HeaderComponent playAgainClick={playAgainClick} />
                <div className="homer--img--block">
                    {whoWins === 'Player One' ? <img className="homer--img" src={homerwoohoo} alt="" /> : <img className="homer--img--point" src={homeryoulose} alt="" />}
                    <h1> {whoWins === 'Player One' ? "YOU WIN!" : "YOU LOSE!"}</h1>
                </div>
                <div className="btn">
                    <button className="play-button" onClick={playAgainClick}>PLAY AGAIN</button>
                </div>
            </main>

            :

            <main>
                <HeaderComponent playAgainClick={playAgainClick} />
                <div className="btn2">
                    <button className="play-button" onClick={playAgainClick}>RESTART</button>
                </div>
                <Games flip={flip} setFlip={setFlip} playerWins={playerWins} isFlipped={isFlipped} setIsFlipped={setIsFlipped} drawArray={drawArray} playerOneCards={playerOneCards}
                    playerTwoCards={playerTwoCards}
                    setPlayerOneCards={setPlayerOneCards}
                    setPlayerTwoCards={setPlayerTwoCards}
                    cards={cards} shuffleCards={shuffleCards}
                    playRound={playRound} handleFlipClick={handleFlipClick} roundCounter={roundCounter} player1Turn={player1Turn} chosenAttribute={chosenAttribute} setChosenAttribute={setChosenAttribute} clicked={clicked} setClicked={setClicked} />
            </main>

        )
    );
};

export default TopTrumpsBox;

