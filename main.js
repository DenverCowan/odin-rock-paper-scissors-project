//cache the DOM, or store it for future use.
let userScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
const userScorep = document.querySelector(".userScore_p");
const roundsPlayedp = document.querySelector(".roundsPlayed_p");
const compScorep = document.querySelector(".compScore_p");
const scoreBoard = document.querySelector(".score-container_div");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
let result = document.querySelector(".result");

// function to get simulated choice from computer
function computerPlay() {
  let number = Math.floor(Math.random() * 3);
  if (number === 1) {
    return "rock";
  } else if (number === 2) {
    return "paper";
  } else return "scissors";
}
//function to update round count
function roundsPlayedFunction() {
  roundsPlayed++;
  roundsPlayedp.innerHTML = roundsPlayed;
}
//functions for winning, losing, or a tie
function win(userChoice, computerChoice) {
  userScore++;
  userScorep.innerHTML = userScore;
  result.innerHTML = "YOU WIN! " + "&#127881";
}
function lose() {
  computerScore++;
  compScorep.innerHTML = computerScore;
  result.innerHTML = "YOU LOSE " + "&#128542";
}
function tie() {
  result.innerHTML = "IT'S A TIE " + "&#128528";
}

//function to start and play a game
function game(userChoice) {
  const computerChoice = computerPlay();
  console.log("computer choice >> " + computerChoice);
  console.log("player choice >> " + userChoice);
  //switch statement to compare choices and see who wins
  switch (userChoice + computerChoice) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      win();
      roundsPlayedFunction();
      break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      roundsPlayedFunction();
      lose();
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      roundsPlayedFunction();
      tie();
      break;
  }
}

function main() {
  rock.addEventListener("click", function () {
    game("rock");
  });
  paper.addEventListener("click", function () {
    game("paper");
  });
  scissors.addEventListener("click", function () {
    game("scissors");
  });
}

main();
