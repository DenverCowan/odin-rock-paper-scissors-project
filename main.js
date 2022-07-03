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
  if (playerSelection == "Rock" && computerSelection == "Scissors") {
    playerScore++;
    return `You win rock beats scissors! Score: ${playerScore} to ${computerScore}`;
  } else if (playerSelection == "Rock" && computerSelection == "Paper") {
    computerScore++;
    return `You lose paper beats rock. Score: ${playerScore} to ${computerScore}`;
  } else return `That was a draw. Score: ${playerScore} to ${computerScore}`;
}
console.log(playRound(playerSelection, computerSelection));
