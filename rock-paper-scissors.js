//Function that returns random computer choice 
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
//Function to return player choice 
function playerChoice() {
  let playerSelection = prompt('Chose rock, paper, or scissors').toLowerCase();
  return playerSelection;
}

// Displays winner based on player vs computer selection and assigns point to winner
let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
        return('Tie');
  } else if (
      (playerSelection == 'rock' && computerSelection == 'scissors') ||
      (playerSelection == 'paper' && computerSelection == 'rock') ||
      (playerSelection == 'scissors' && computerSelection == 'paper'))
     { playerScore++;
        return('Player Wins'); 
  } else if (
       (computerSelection == 'rock' && playerSelection == 'scissors') ||
       (computerSelection == 'paper' && playerSelection == 'rock') ||
       (computerSelection == 'scissors' && playerSelection == 'paper'))
      { computerScore++;   
        return('Computer Wins');      
  } else {
        return('Invalid Choice');
  }
 }


//loop game for 5 rounds and announce winner 
function game() {
  for (let i = 0; i < 5; i++) {
    console.log(playRound(playerChoice(), getComputerChoice()));
 } 
  if (playerScore > computerScore) {
    console.log('You Win!');
  } else if (playerScore < computerScore) {
    console.log('Computer Wins!');
  } else {
    console.log('Its a tie!');
  }
}

game();




