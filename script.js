

const gameChoice = ['rock','paper','scissors']

function getComputerChoice(choice){

    return choice[Math.floor(Math.random() * choice.length)]
}



// plays the game and declares winner of round
function playGame(playerChoice, computerChoice){
let playerChoiceLower = playerChoice.toLowerCase()
let computerChoiceLower = computerChoice.toLowerCase()

let roundWinner = '';

// player choice
if((playerChoiceLower === 'rock' && computerChoiceLower === 'scissors')||
    (playerChoiceLower === 'scissors' && computerChoiceLower === 'paper')||
    (playerChoiceLower === 'paper' && computerChoiceLower === 'rock')
    ){
        roundWinner = `player wins: ${playerChoice} beats ${computerChoice}`
        return roundWinner
}


    // computer choice
   else if((computerChoiceLower === 'rock' && playerChoiceLower === 'scissors')||
    (computerChoiceLower === 'scissors' && playerChoiceLower === 'paper')||
    (computerChoiceLower === 'paper' && playerChoiceLower === 'rock')
    ){
        roundWinner = `computer wins: ${computerChoice} beats ${playerChoice}`
        return roundWinner
    }
  
    else{
        roundWinner = `draw: player got ${playerChoiceLower} and computer got ${computerChoiceLower}`
        return roundWinner
    }
  
}

//// Repeat the game 5 times and declare winner with highest count

function game(){
let playerCount = 0;
let computerCount = 0;
for (let i = 0; i < 5; i++){

    // gets the player choice
const playerChoice = prompt('Enter rock, paper or scissors')

///// gets the computer choice
const computerChoice = getComputerChoice(gameChoice)
    let whoWon = playGame(playerChoice, computerChoice) ?? ''

    if(whoWon.charAt(0) === 'p'){
        playerCount += 1
        console.log(whoWon)
    }
    else if (whoWon.charAt(0) === 'c'){
        computerCount +=1
         console.log(whoWon)
    }
    else{
        console.log(whoWon)
    }
}

if(playerCount > computerCount){
    console.log(`Player won the game with a score of ${playerCount} agains computer with a score of ${computerCount}`)
}
else if(computerCount > playerCount){
     console.log(`Computer won the game with a score of ${computerCount} agains player with a score of ${playerCount}`)
}
else{
    console.log(`game ended in a draw with computer earning ${computerCount} points and player earning ${playerCount} points`)
}

}

game()