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


//loop game for 5 rounds
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

//Announce winner after round 5

game();




// function getcomputerchoice() {
   
//   let random = Math.floor(Math.random() * 3);//function to pick a random number out of the 3 choices

//   switch (random) {//switch method! alternative to an array
//      case 0:
//         return "rock";
//         break;
//      case 1:
//         return "paper";
//         break;
//      case 2:
//         return "scissors"
//         break;
//   }

// }
  
// function getuserinput() { //prompts user to choose between rock paper scissors
//   let userinput = prompt('rock paper scissors SHOOT!')
//   if (userinput.toLowerCase() === 'rock' || userinput === 'paper' || userinput === 'scissors') {
//      return userinput
//   } else {
//      return 'error';
//   }
// }
// let playerscore = 0;
// let computerscore = 0;
// function playround(getuserinput, getcomputerchoice) {
//   if (getuserinput === 'rock' && getcomputerchoice === 'scissors') {
//      playerscore++;
//         return 'YOU WIN!'
//   } else if (getuserinput === 'paper' && getcomputerchoice === 'rock') {
//      playerscore++; //adds 1 to the player score 
//      return 'YOU WIN!'
//   } else if (getuserinput === 'scissors' && getcomputerchoice === 'paper') {
//      playerscore++;
//      return 'YOU WIN'
//   } else if (getuserinput === getcomputerchoice) {
//      return "TIE!"
//   } else {
//      computerscore++; //adds 1 to the computer score
//      return 'COMPUTER WINS'
//   }
// }

// function game() { //loops for 5 rounds 
//   for (let i = 0; i < 5; i++) { 
//      let userinput = getuserinput();
//      let computerchoice = getcomputerchoice();
//       console.log(playround(userinput,computerchoice)); // runs the playround function with 2 parameters
//   }
// }

// game(); // calls the game function to run 

// function results() { // counts up the score 
//   if (playerscore < computerscore) {
//      return 'COMPUTERS RULE!';
//   } else if (playerscore > computerscore) {
//      return 'player is the winner!!'
//   } else {
//      return 'lets play again.'
//   }
// }
// let resultplayerscore = 'player score: ' + playerscore;
// let resultcomputer = 'computers score: ' + computerscore;

// alert(resultplayerscore);
// alert(resultcomputer);// puts alerts on the screen to show the winner and scores
// alert(results());
