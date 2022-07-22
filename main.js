//declare global variables
let playerScore = 0;
let computerScore = 0;
let round = 0;

//function and logic for computer selection
function computerPlay() {
  let number = Math.floor(Math.random() * 3);
  if (number === 1) {
    return "Rock";
  } else if (number === 2) {
    return "Paper";
  } else return "Scissors";
}
//console.log(computerPlay()); //check for accurate values
let playerSelection = "Rock";
let computerSelection = computerPlay();

//function and logic to play a single round
//must use backticks in return statements to reference variable like this ${playerScore}
function playRound(playerSelection, computerSelection) {
  if (playerSelection == "rock" && computerSelection == "Scissors") {
    playerScore++;
    return `You win rock beats scissors! Score: ${playerScore} to ${computerScore}`;
  } else if (playerSelection == "rock" && computerSelection == "Paper") {
    computerScore++;
    return `You lose paper beats rock. Score: ${playerScore} to ${computerScore}`;
  } else if (playerSelection == "paper" && computerSelection == "Rock") {
    playerScore++;
    return `You win paper beats rock. Score: ${playerScore} to ${computerScore};`;
  } else if (playerSelection == "paper" && computerSelection == "Scissors") {
    computerScore++;
    return `You lose scissors beats paper. Score: ${playerScore} to ${computerScore}`;
  } else if (playerSelection == "scissors" && computerSelection == "Paper") {
    playerScore++;
    return `You win scissors beats paper. Score: ${playerScore} to ${computerScore}`;
  } else if (playerSelection == "scissors" && computerSelection == "Rock") {
    computerScore++;
    return `You lose rock beats scissors. Score: ${playerScore} to ${computerScore}`;
  } else return `That was a draw. Score: ${playerScore} to ${computerScore}`;
}
// console.log(playRound(playerSelection, computerSelection)); //check to make sure logic is working correctly

// logic for playing a five round game and allowing the user to select their choice each round.
function game() {
  let playerSelection = prompt("Type Rock, Paper, or Scissors");
  playerSelection = playerSelection.toLowerCase();
  const computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection));

  if (playerScore > computerScore) {
    console.log(`You won! final Score: ${playerScore} to ${computerScore}`);
  } else if (computerScore > playerScore) {
    console.log(`You lose! final score: ${playerScore} to ${computerScore}`);
  } else {
    console.log(`You tied :( final score: ${playerScore} to ${computerScore}`);
  }
}

/* Game works as desired. I would like to eventually come back and add a gui.
The logic for this was not too complicated and was good practice for JS syntax and rules.
*/
