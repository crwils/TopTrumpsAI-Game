import React, {useState, useEffect} from 'react';
import Games from '../components/Games';
import CreateCardComponent from '../components/CreateCardComponent';
import HeaderComponent from '../components/HeaderComponent';
import SimpsonsService from '../services/GamesService';
import './main-page.css';

function TopTrumpsBox(){
    const [cards, setCards] = useState([]);
    const [playerOneCards, setPlayerOneCards] = useState([])
    const [playerTwoCards, setPlayerTwoCards] = useState([])
    const [playerWins, setPlayerWins] = useState(false)
    const [whoWins, setWhoWins] = useState(null)
    const [player1Turn, setPlayer1Turn] = useState(true)
    const [roundCounter, setRoundCounter] = useState(0)
    const [drawArray, setDrawArray] = useState([])
    const [isFlipped, setIsFlipped] = useState(false);
    const [flip, setFlip] = useState(0)
    

    let highestMostLovable = 0;
    let highestSmartest = 0;
    let highestFattest = 0;
    let highestBiggestNerd = 0;
    let highestGreatestAnarchist = 0;
    let highestWalkOfFame = 0;
    
    const aiDifficulty = Math.floor(Math.random() * 2)
    // console.log(aiDifficulty)
    // const attributeSelection = 'smartest'

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
 
        setPlayerOneCards([...temporaryPlayerOneCards])
        setPlayerTwoCards([...temporaryPlayerTwoCards])
    }, [cards])

    // AI use effect 
    useEffect(() => {
        if(!playerWins){
            if(!player1Turn){
                decideHighestAttribute();
                // aiSelect(highestMostLovable, highestSmartest, highestFattest, highestBiggestNerd, highestGreatestAnarchist, highestWalkOfFame, playerTwoCards)
                setTimeout(() => {handleComputerSelect(aiSelect(highestMostLovable, highestSmartest, highestFattest, highestBiggestNerd, highestGreatestAnarchist, highestWalkOfFame, playerTwoCards))}, 1000)
            }
        }
    }, [playerTwoCards])

    // Decides which card is being picked DO NOT CHANGE!!!
    const indexNumber = 0; 

    function decideWinner(player1Array, player2Array, attribute){
        if(player1Array[0] !== undefined && player2Array[0] !== undefined){ 

            if ((player1Array.length && player2Array.length) > 0) {
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
                    if(!player1Turn){
                        changeTurn()
                    }
                    }else if (player2Array[0][attribute] > player1Array[0][attribute]) {
                        player2Array.push(player2Array[0])
                        player2Array.push(player1Array[0])
                        player1Array.splice(indexNumber, 1)
                        player2Array.splice(indexNumber, 1)
                        drawArray.forEach(card => {player2Array.push(card)})
                        setDrawArray([])
                        if(player1Turn){
                            changeTurn()
                        }
                        }else {
                            return alert("Game is over!")
                        }}

            }
        }
    // };
                    
               
            
                
            
        

        

    function playRound(player1Array, player2Array, attribute){
        let temporaryCounterVariable = roundCounter
        temporaryCounterVariable += 1
        setRoundCounter(temporaryCounterVariable)
        console.log('roundCounter', roundCounter)
        decideWinner(player1Array, player2Array, attribute)
        // ChangeRound()
        if(player1Array.length === 0 && player2Array.length === 0) {
            setPlayerWins(true)
            alert('It\'s a draw!')
            // setWhoWins('It\'s a draw!')
        }else if (player1Array.length === 0){
            setPlayerWins(true)
            alert('Player Two Wins!')
            // setWhoWins('Player Two Wins!')
            // return
        }else if(player2Array.length === 0){
            setPlayerWins(true)
            alert('Player One Wins!')
            // setWhoWins('Player One Wins!')
            // return
        }}
    // };

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

    function playAgainClick(){
    SimpsonsService.getCard()
    .then(cards => setCards(cards))
    setDrawArray([])
    setIsFlipped(false)
    setPlayerWins(false)
    setPlayer1Turn(true)
    }

    const handleFlipClick = (value) => {
        setIsFlipped(value)
    }

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
                // console.log("Most Lovable", highestMostLovable)
            }
            if(card.smartest > highestSmartest){
                highestSmartest = card.smartest
                // console.log("Smartest", highestSmartest)
            }
            if(card.fattest > highestFattest){
                highestFattest = card.fattest
                // console.log("Fattest", highestFattest)
            }
            if(card.biggest_nerd > highestBiggestNerd){
                highestBiggestNerd = card.biggest_nerd
                // console.log("Biggest Nerd", highestBiggestNerd)
            }
            if(card.greatest_anarchist > highestGreatestAnarchist){
                highestGreatestAnarchist = card.greatest_anarchist
                // console.log("Greatest Anarchist", highestGreatestAnarchist)
            }
            if(card.walk_of_fame > highestWalkOfFame){
                highestWalkOfFame = card.walk_of_fame
                // console.log("Walk Of Fame", highestWalkOfFame)
            }
            
        })
        
    }

    function aiSelect(highestMostLovable, highestSmartest, highestFattest, highestBiggestNerd, highestGreatestAnarchist, highestWalkOfFame, playerTwoCards){
        const sortingArray = []
        const mostLovableGap = highestMostLovable - playerTwoCards[0].most_lovable
        sortingArray.push({name:"most_lovable", value:mostLovableGap})
        const smartestGap = highestSmartest - playerTwoCards[0].smartest;
        sortingArray.push({name:"smartest", value:smartestGap})
        const fattestGap = highestFattest - playerTwoCards[0].fattest;
        sortingArray.push({name:"fattest", value:fattestGap})
        const biggestNerdGap = highestBiggestNerd - playerTwoCards[0].biggest_nerd;
        sortingArray.push({name:"biggest_nerd", value:biggestNerdGap})
        const greatestAnarchistGap = highestGreatestAnarchist - playerTwoCards[0].greatest_anarchist;
        sortingArray.push({name:"greatest_anarchist", value:greatestAnarchistGap})
        const walkOfFameGap = highestWalkOfFame - playerTwoCards[0].walk_of_fame;
        sortingArray.push({name:"walk_of_fame", value:walkOfFameGap})


        // console.log('before sort', sortingArray)
        sortingArray.sort(function(a, b) {
            return parseFloat(a.value) - parseFloat(b.value);
        })
        // const aiSelection = sortingArray[0]
        // console.log("player 2 turn:")
        // console.log("highest smartest", highestSmartest)
        // console.log('Computer smartest', playerTwoCards[0].smartest)
        // console.log("ai choice", aiSelection)
        // console.log('after sort', sortingArray)
        const aiSelection = sortingArray[aiDifficulty].name
        console.log('aiSelection', aiSelection)
        return aiSelection
        
    }

    const handleComputerSelect = (attribute) =>{
        setTimeout(() => {
            // handleFlipClick(true)
            setFlip(1)
        }, 2000);

        setTimeout(() => {
            // handleFlipClick(false)
            const attributeSelection = attribute
            console.log(attributeSelection)
            const tempPlayerOneCards = [...playerOneCards]
            const tempPlayerTwoCards = [...playerTwoCards]
            playRound(tempPlayerOneCards, tempPlayerTwoCards, attributeSelection)
            setPlayerOneCards(tempPlayerOneCards)
            setPlayerTwoCards(tempPlayerTwoCards)
            return
        }, 6000)
    };


    

    return(
        
        (playerWins ? 
        <div className="tt__box--header">
        <h1>Top Trumps Game!</h1>
        <HeaderComponent />
        <Games flip={flip} setFlip={setFlip} playerWins={playerWins} isFlipped={isFlipped} setIsFlipped={setIsFlipped} drawArray={drawArray} playerOneCards={playerOneCards} 
        playerTwoCards={playerTwoCards} 
        setPlayerOneCards={setPlayerOneCards} 
        setPlayerTwoCards={setPlayerTwoCards} 
        cards={cards} shuffleCards={shuffleCards} 
        playRound={playRound}/>
        <div className="btn">
        <button onClick={playAgainClick}>Play Again</button>
        </div>
        <CreateCardComponent />
        </div> :        
        <div className="tt__box--header">
            <h1>Top Trumps Game!</h1>
            <HeaderComponent />
            <Games flip={flip} setFlip={setFlip} playerWins={playerWins} isFlipped={isFlipped} setIsFlipped={setIsFlipped} drawArray={drawArray} playerOneCards={playerOneCards} 
            playerTwoCards={playerTwoCards} 
            setPlayerOneCards={setPlayerOneCards} 
            setPlayerTwoCards={setPlayerTwoCards} 
            cards={cards} shuffleCards={shuffleCards} 
            playRound={playRound} handleFlipClick={handleFlipClick}/>
            <div className="btn">
            <button onClick={playAgainClick}>Restart Game</button>
            </div>
            <CreateCardComponent />
        </div>)

    );
};

export default TopTrumpsBox;