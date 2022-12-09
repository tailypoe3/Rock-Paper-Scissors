function getComputerChoice() {
  let randomChoice = Math.floor(Math.random() * 3);
    switch(randomChoice) {
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



// function playRound(playerSelection, computerSelection) {
  
// }

// const playerSelection = 'Rock';
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));

// function game() {
//   for(let i = 0; i < 5; i++)
//   //code
// }