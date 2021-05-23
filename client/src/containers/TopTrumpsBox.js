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
    const [drawArray, setDrawArray] = useState([])
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
 
        setPlayerOneCards([...temporaryPlayerOneCards])
        setPlayerTwoCards([...temporaryPlayerTwoCards])
        console.log('Player One Cards Before:', temporaryPlayerOneCards)
        console.log('Player Two Cards Before:', temporaryPlayerTwoCards)
    }, [cards])

    // Decides which card is being picked DO NOT CHANGE!!!
    const indexNumber = 0; 

    function decideWinner(player1Array, player2Array, attribute){
        
        if (player1Array[0][attribute] === player2Array[0][attribute])  {
            
            setDrawArray(drawArray => [...drawArray, player1Array[0]]) // add new draw careds
            setDrawArray(drawArray => [...drawArray, player2Array[0]]) // add new draw careds

            player2Array.splice(indexNumber, 1)
            player1Array.splice(indexNumber, 1)

        } else if (player1Array[0][attribute] > player2Array[0][attribute]){
            player1Array.push(player1Array[0])
            player1Array.push(player2Array[0])
            player2Array.splice(indexNumber, 1)
            player1Array.splice(indexNumber, 1)
            drawArray.forEach(card => {player1Array.push(card)})
            setDrawArray([])

        } else if (player2Array[0][attribute] > player1Array[0][attribute]) {
            player2Array.push(player2Array[0])
            player2Array.push(player1Array[0])
            player1Array.splice(indexNumber, 1)
            player2Array.splice(indexNumber, 1)
            drawArray.forEach(card => {player2Array.push(card)})
            setDrawArray([])
        }

        console.log('player1ArrayAfter: ', player1Array)
        console.log('player2ArrayAfter: ', player2Array)
        console.log('drawArrayAfter', drawArray)
    };

    function playRound(player1Array, player2Array, attribute){
        decideWinner(player1Array, player2Array, attribute)
        // ChangeRound()
        if(player1Array.length === 0 && player2Array.length === 0) {
            setPlayerWins(true)
            setWhoWins('Nobody')
        }else if (player1Array.length === 0){
            setPlayerWins(true)
            setWhoWins('Player Two')
            return
        }else if(player2Array.length === 0){
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