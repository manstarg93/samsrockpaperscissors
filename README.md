# samsrockpaperscissors
Odin rock paper scissors game project 

The name of this game is called rock paper scissors, and it is one of the most popular way to come to a decision in tough choices.
Its ususally played so that the winner will be decided on the best out of three. 
when both players shouts which option they choose between rock paper scissors. Rock beats scissors, scissors beats paper and paper beats rock

. This game will be played agains a computer. so I am tasked with implementing this.

we will start with using our problem solving approach to create this game.

# understanding the problem.
Since we are playing the game against a computer. we have to find a way to generate a random option as soon as we make our own input, after that we need to display both results and then show and save the winner of that round somewhere. and then restart the game again and add to the winner of the three rounds. once either the player or the computer reaches 5 counts first they are then declared the winner.

# break down thee problem int smaller tasks and pseudoo code.

1) create two variables playerCount and computerCount that starts at 0
2) create a function getComputerChoice that generates a random choice between the three and returns the choice.
5 create an prompt that asks for the players choice or a variable that stores a pre selected choice.
4) create a function called playNow that recieves players choice and computer choice and if player wins returns player wins the round and add to player count other wise do the same for the computer.
5) create a function game that runs the play now 5 times and the highest count wins
