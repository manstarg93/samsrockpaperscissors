

const gameChoice = ['rock','paper','scissors']






function getComputerChoice(choice){

    return choice[Math.floor(Math.random() * choice.length)]
}



// update count and print round winner

// function updateCountandWinner(competitor){

//     console.log(`${competitor} wins `)
// }

// plays the game and declares winner of round
function playGame(pChoice, cChoice){
let pChoiceLower = pChoice.toLowerCase()
let cChoiceLower = cChoice.toLowerCase()

let roundWinner = '';

    if(pChoiceLower === 'rock' && cChoiceLower === 'scissors'){
        roundWinner = 'player wins rock beats scissors'
return roundWinner

    }
    else if(pChoiceLower === 'scissors' && cChoiceLower === 'paper'){
         roundWinner = 'player wins scissors beats paper'
        return roundWinner
       
    }
    else if(pChoiceLower === 'paper' && cChoiceLower === 'rock'){
        roundWinner = 'player wins paper beats rock'
        return roundWinner
        
    }

    // computer choice
    else if(cChoiceLower === 'rock' && pChoiceLower === 'scissors'){
         roundWinner = 'computer wins rock beats scissors'
return roundWinner

    }
    else if(cChoiceLower === 'scissors' && pChoiceLower === 'paper'){
           roundWinner = 'computer wins rock beats paper'
        return roundWinner
      
    }
    else if(cChoiceLower === 'paper' && pChoiceLower === 'rock'){
         roundWinner = 'computer wins paper beats rock'
        return roundWinner
        
    }
    else{
        roundWinner = `draw: player got ${pChoiceLower} and computer got ${cChoiceLower}`
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