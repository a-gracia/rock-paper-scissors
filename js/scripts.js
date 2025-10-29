// Create function getComputerChoice. Input: none. Output: string: ["rock","paper","scissors"]
function getComputerChoice() {
  // Generate a random number from 0 to 3.
  // Floor the number
  let randomNum = Math.floor(Math.random() * 3);
  // Initialize choice variable
  let choice;
  // If 0 then rock, if 1 then paper, if 2 scissors
  if (randomNum === 0) {
    choice = "rock";
  } else if (randomNum === 1) {
    choice = "paper";
  } else {
    choice = "scissors";
  }
  // return the choice
  return choice;
}

// Create function getHumanChoice. Input: none. Output: string: ["rock","paper","scissors"]
function getHumanChoice() {
  // Ask user to input the choice
  let choice = prompt("Enter your choice: rock, paper or scissors");
  // Return the choice
  return choice;
}

// Initialize score variables
let humanScore = 0;
let computerScore = 0;

// Create a function named playRound with input humanChoice, computerChoice.
function playRound(humanChoice, computerChoice) {
  // Make humanChoice case-insensitive by lowercasing the string
  humanChoice = humanChoice.toLowerCase();
  // check who wins, log a message for the human and increment the score of the winner
  if (humanChoice === computerChoice) {
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
  } else {
    computerScore++;
  }
}

// Select all choice button nodes
const buttons = document.querySelectorAll(".choices");
// Add event listener for buttons
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    // Store human choice
    let humanChoice = e.target.id;
    // Store computer choice
    let computerChoice = getComputerChoice();
    // Play round
    playRound(humanChoice, computerChoice);
    // Update score in DOM
    const humanScoreDOM = document.querySelector("#human-score");
    humanScoreDOM.textContent = humanScore;
    const computerScoreDOM = document.querySelector("#computer-score");
    computerScoreDOM.textContent = computerScore;

    // Check and declare winner
    if (
      humanScore + computerScore >= 5 ||
      humanScore >= 3 ||
      computerScore >= 3
    ) {
      // disable buttons
      buttons.forEach((button) => (button.disabled = true));
      // select winner paragraph
      const winnerPara = document.querySelector("#winner");
      if (humanScore > computerScore) {
        winnerPara.textContent = "You won the game!";
      } else {
        winnerPara.textContent = "You lost the game!";
      }
    }
  });
});

// Select restart button
const restartButton = document.querySelector("#restart");
restartButton.addEventListener("click", () => {
  // Enable buttons
  buttons.forEach((button) => (button.disabled = false));
  // Reset scores
  humanScore = 0;
  computerScore = 0;
  // Update score in DOM
  const humanScoreDOM = document.querySelector("#human-score");
  humanScoreDOM.textContent = 0;
  const computerScoreDOM = document.querySelector("#computer-score");
  computerScoreDOM.textContent = 0;
  // Clear winner
  const winnerPara = document.querySelector("#winner");
  winnerPara.textContent = "";
});
