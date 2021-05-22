// Decides which card is being picked DO NOT CHANGE!!!
const indexNumber = 0; 

// value comparison and winner deciding function 
function decideWinner(player1Array, player2Array, attribute){
    console.log(player1Array)
    if (player1Array[0][attribute] > player2Array[0][attribute]){
        player1Array.push(player1Array[0])
        player1Array.push(player2Array[0])
        player2Array.splice(indexNumber, 1)
        player1Array.splice(indexNumber, 1)
    }else{
        player2Array.push(player2Array[0])
        player2Array.push(player1Array[0])
        player1Array.splice(indexNumber, 1)
        player2Array.splice(indexNumber, 1)
    }
};

function playRound(player1Array, player2Array, attribute){
    decideWinner(player1Array, player2Array, attribute)
    // ChangeRound()
    if(player1Array.length === 0){
        console.log('game over player 2 wins')
        return
    }
    if(player2Array.length === 0 ){
        console.log('game over player 1 wins')
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

export {shuffleCards, decideWinner, playRound}