

const gameChoice = ['rock','paper','scissors']

const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissors = document.querySelector('.scissors')
const feedback = document.querySelector('.feedback')
const playerScore = document.querySelector('.playerScore')
const alienScore = document.querySelector('.alienScore')

let playerNumber = parseInt(playerScore.innerHTML)
 let alienNumber = parseInt(alienScore.innerHTML)



// plays the game and declares winner of round

const alienChoice = getAlienChoice(gameChoice)


function getAlienChoice(choice){

    return choice[Math.floor(Math.random() * choice.length)]
}

function playGame(playerChoice, alienChoice){



 if(playerNumber > 4  ){
     feedback.textContent = `Player wins and the earth is saved with a score of ${playerNumber}`
     return
 }

  else if(alienNumber > 4 ){
     feedback.textContent = `Alien wins and the earth is doomed with a score of ${alienNumber}`
     return
 }

// player choice wins

      

if((playerChoice === 'rock' && alienChoice === 'scissors')||
    (playerChoice === 'scissors' && alienChoice === 'paper')||
    (playerChoice === 'paper' && alienChoice === 'rock')
    ){
        feedback.textContent = `Player wins: ${playerChoice} beats ${alienChoice}`
        playerNumber++
      playerScore.innerHTML = playerNumber
        
}


    // alien choice wins
   else if((alienChoice === 'rock' && playerChoice === 'scissors')||
    (alienChoice === 'scissors' && playerChoice === 'paper')||
    (alienChoice === 'paper' && playerChoice === 'rock')
    ){
        feedback.textContent = `Alien wins: ${alienChoice} beats ${playerChoice}`
  
        alienNumber++
        alienScore.innerHTML = alienNumber
       
    }
  
    else{
        feedback.textContent = `draw: Player got ${playerChoice} and Alien got ${alienChoice}`
        
    }
  
}

rock.addEventListener('click', function(e){

   
  playGame('rock', getAlienChoice(gameChoice) )

  
})

paper.addEventListener('click', function(e){

  playGame('paper', getAlienChoice(gameChoice) )
})

scissors.addEventListener('click', function(e){
  
  playGame('scissors', getAlienChoice(gameChoice) )
})






