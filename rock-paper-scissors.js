//Sets up computer "player" to randomly chose between rock, paper, scissor
function getComputerChoice() {
  let computerSelection = Math.floor(Math.random() * 3);
    switch(computerSelection) {
      case 0:
        return 'rock';
        break;
      case 1: 
        return 'paper';
        break;
      case 2:
        return 'scissors';
        break;
    }
  }
console.log(getComputerChoice())

// Displays winner output based on player vs computer selection
function playRound(playerSelection, computerSelection) {
   if (playerSelection === computerSelection) {
       return('Tie');

   } else if (
      (playerSelection === 'rock' && computerSelection === 'scissors') ||
      (playerSelection === 'paper' && computerSelection === 'rock') ||
      (playerSelection === 'scissors' && computerSelection === 'paper'))
    {    return('Player Wins') 

     } else if (
      (computerSelection === 'rock' && playerSelection === 'scissors') ||
      (computerSelection === 'paper' && playerSelection === 'rock') ||
      (computerSelection === 'scissors' && playerSelection === 'paper'))
      {    return('Computer Wins')      

     } else {
           return('Invalid Choice')
     }
 }

// tests playerRound function
// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));





// function game() {
//   for(let i = 0; i < 5; i++)
//   //code
// }