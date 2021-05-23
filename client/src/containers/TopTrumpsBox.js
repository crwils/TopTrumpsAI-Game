import React, {useState, useEffect} from 'react';
import Cards from '../components/Games';
import CardItem from '../components/CardItem'
import CreateCardComponent from '../components/CreateCardComponent';
import HeaderComponent from '../components/HeaderComponent';
import SimpsonsService, {getCard} from '../services/GamesService';
import './main-page.css';


// hello


function TopTrumpsBox(){
    const [cards, setCards] = useState([]);
    const [playerOneCards, setPlayerOneCards] = useState([])
    const [playerTwoCards, setPlayerTwoCards] = useState([])
    const [playerWins, setPlayerWins] = useState(false)
    const [whoWins, setWhoWins] = useState(null)
    const [player1Turn, setPlayer1Turn] = useState(true)

    let highestMostLovable = 0;
    let highestSmartest = 0;
    let highestFattest = 0;
    let highestBiggestNerd = 0;
    let highestGreatestAnarchist = 0;
    let highestWalkOfFame = 0;
    

    useEffect (() => {
        SimpsonsService.getCard()
            .then(cards => setCards(cards))
    }, []);

    useEffect(() => {
        const temporaryPlayerOneCards = [];
        const temporaryPlayerTwoCards = [];
        decideHighestAttribute();
        cards.map((card, index) => {
            if(index === 0 || index%2 === 0){
                temporaryPlayerOneCards.push(card)
                // return setPlayerOneCards(tempVariable)
            }else{
                temporaryPlayerTwoCards.push(card)
                // return setPlayerTwoCards(tempVariables)
            }
        });
        console.log('temporaryPlayerOne', temporaryPlayerOneCards)
        console.log('temporaryPlayerTwo',temporaryPlayerTwoCards)
        setPlayerOneCards([...temporaryPlayerOneCards])
        setPlayerTwoCards([...temporaryPlayerTwoCards])
    }, [cards])

    // Decides which card is being picked DO NOT CHANGE!!!
    const indexNumber = 0; 

    // value comparison and winner deciding function 
    function decideWinner(player1Array, player2Array, attribute){
        if (player1Array[0][attribute] > player2Array[0][attribute]){
            player1Array.push(player1Array[0])
            player1Array.push(player2Array[0])
            player2Array.splice(indexNumber, 1)
            player1Array.splice(indexNumber, 1)
            if(!player1Turn){
                changeTurn()
            }
        }else{
            player2Array.push(player2Array[0])
            player2Array.push(player1Array[0])
            player1Array.splice(indexNumber, 1)
            player2Array.splice(indexNumber, 1)
            if(player1Turn){
                changeTurn()
            }
        }
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

    // AI Below
    function changeTurn(){
        if(player1Turn){
            setPlayer1Turn(false)
        } else {
            setPlayer1Turn(true)
        }
        return
    }

    function decideHighestAttribute(){
        
        cards.map(card => {
            if(card.most_lovable > highestMostLovable){
                highestMostLovable = card.most_lovable
                console.log("Most Lovable", highestMostLovable)
            }
            if(card.smartest > highestSmartest){
                highestSmartest = card.smartest
                console.log("Smartest", highestSmartest)
            }
            if(card.fattest > highestFattest){
                highestFattest = card.fattest
                console.log("Fattest", highestFattest)
            }
            if(card.biggest_nerd > highestBiggestNerd){
                highestBiggestNerd = card.biggest_nerd
                console.log("Biggest Nerd", highestBiggestNerd)
            }
            if(card.greatest_anarchist > highestGreatestAnarchist){
                highestGreatestAnarchist = card.greatest_anarchist
                console.log("Greatest Anarchist", highestGreatestAnarchist)
            }
            if(card.walk_of_fame > highestWalkOfFame){
                highestWalkOfFame = card.walk_of_fame
                console.log("Walk Of Fame", highestWalkOfFame)
            }
        })
        
    }

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