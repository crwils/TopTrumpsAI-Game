import React, {useState, useEffect} from 'react';
import Cards from '../components/Games';
import CardItem from '../components/CardItem'
import CreateCardComponent from '../components/CreateCardComponent';
import HeaderComponent from '../components/HeaderComponent';
import SimpsonsService, {getCard} from '../services/GamesService';
import './main-page.css';





function TopTrumpsBox(){
    const [cards, setCards] = useState([]);
    const [playerOneCards, setPlayerOneCards] = useState([])
    const [playerTwoCards, setPlayerTwoCards] = useState([])
    const [playerWins, setPlayerWins] = useState(false)
    const [whoWins, setWhoWins] = useState(null)
    // const attributeSelection = 'smartest'

    useEffect (() => {
        SimpsonsService.getCard()
            .then(cards => setCards(cards))
        
    }, []);

    useEffect(() => {
        const temporaryPlayerOneCards = [];
        const temporaryPlayerTwoCards = [];
        cards.map((card, index) => {
            if(index === 0 || index%2 === 0){
                temporaryPlayerOneCards.push(card)
                // return setPlayerOneCards(tempVariable)
            }else{
                temporaryPlayerTwoCards.push(card)
                // return setPlayerTwoCards(tempVariables)
            }
        });
        // console.log('temporaryPlayerOne', temporaryPlayerOneCards)
        // console.log('temporaryPlayerTwo',temporaryPlayerTwoCards)
        setPlayerOneCards([...temporaryPlayerOneCards])
        setPlayerTwoCards([...temporaryPlayerTwoCards])
        console.log('Player One Cards Before:', temporaryPlayerOneCards)
        console.log('Player Two Cards Before:', temporaryPlayerTwoCards)
    }, [cards])

    // Decides which card is being picked DO NOT CHANGE!!!
    const indexNumber = 0; 
    let drawArray = []

    const checkDraw = (player1Array, player2Array, attribute) => {
        if (player1Array[0][attribute] === player2Array[0][attribute]) {
            drawArray.push(...drawArray, player1Array[0])
            drawArray.push(...drawArray, player2Array[0])
            player2Array.splice(indexNumber, 1)
            player1Array.splice(indexNumber, 1)
        }
    }
    // value comparison and winner deciding function 
    function decideWinner(player1Array, player2Array, attribute){

        if (player1Array[0][attribute] > player2Array[0][attribute]){
            player1Array.push(player1Array[0])
            player1Array.push(player2Array[0])
            player2Array.splice(indexNumber, 1)
            player1Array.splice(indexNumber, 1)
                if (drawArray.length > 0) {
                    player1Array.push(...player1Array, ...drawArray)
                    drawArray = []
                }
        }
        if (player2Array[0][attribute] > player1Array[0][attribute]) {
            player2Array.push(player2Array[0])
            player2Array.push(player1Array[0])
            player1Array.splice(indexNumber, 1)
            player2Array.splice(indexNumber, 1)
            if (drawArray.length > 0) {
                player2Array.push(...player2Array, ...drawArray)
                drawArray = []
            }
        }
        if (player1Array.length && player2Array.length !== 0) {
            checkDraw(player1Array, player2Array, attribute)
        }
        console.log('player1ArrayAfter: ', player1Array)
        console.log('player2ArrayAfter: ', player2Array)
        console.log('drawArrayAfter', drawArray)
    };

    function playRound(player1Array, player2Array, attribute){
        decideWinner(player1Array, player2Array, attribute)
        // ChangeRound()
        if(player1Array.length === 0){
            setPlayerWins(true)
            setWhoWins('Player Two')
            return
        }
        if(player2Array.length === 0 ){
            setPlayerWins(true)
            setWhoWins('Player One')
            return
        }
    };

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

    return(
        
        (playerWins ? 
        <h1>{whoWins} has won </h1> :      
        <div className="tt__box--header">
            <h1>Top Trumps Game!</h1>
            <HeaderComponent />
            <Cards playerOneCards={playerOneCards} 
            playerTwoCards={playerTwoCards} 
            setPlayerOneCards={setPlayerOneCards} 
            setPlayerTwoCards={setPlayerTwoCards} 
            cards={cards} shuffleCards={shuffleCards} 
            playRound={playRound}/>
            <CreateCardComponent />
        </div>)

    );
};

export default TopTrumpsBox;