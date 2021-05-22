// Decides which card is being picked DO NOT CHANGE!!!
const indexNumber = 0; 

// value comparison and winner deciding function 
function DecideWinner(playerOneChoice, playerTwoChoice){
    if (playerOneChoice > playerTwoChoice){
        player1Array.push(playerTwoChoice)
        player1Array.push(playerOneChoice)
        player2Array.splice(indexNumber, 1)
        player1Array.splice(indexNumber, 1)
    }else{
        player2Array.push(playerOneChoice)
        player2Array.push(playerTwoChoice)
        player1Array.splice(indexNumber, 1)
        player2Array.splice(indexNumber, 1)
    }
};

function PlayRound(){
    DecideWinner(player1Array[indexNumber], player2Array[indexNumber])
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


// player 1 and player 2 arrays
const player1Array = [1,2,3,4,5]
const player2Array = [6,7,8,9,10]

console.log('player 1 outcome 1', player1Array)
console.log('player 2 outcome 1', player2Array)
console.log('play round')
PlayRound()
console.log('player 1 outcome 2', player1Array)
console.log('player 2 outcome 2', player2Array)
// PlayRound()
// console.log('player 1 outcome 3', player1Array)
// console.log('player 2 outcome 3', player2Array)
// PlayRound()
// console.log('player 1 outcome 3', player1Array)
// console.log('player 2 outcome 3', player2Array)
// PlayRound()
// console.log('player 1 outcome 3', player1Array)
// console.log('player 2 outcome 3', player2Array)
// PlayRound()
// console.log('player 1 outcome 3', player1Array)
// console.log('player 2 outcome 3', player2Array)