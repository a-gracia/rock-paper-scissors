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
    console.log("That's a draw");
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log("You won!");
    humanScore++;
  } else {
    console.log("You lost!");
    computerScore++;
  }
}

// Create function playGame
function playGame() {
  // Loop 5 times
  for (let i = 0; i < 5; i++) {
    // Call the human choice function and store its value
    let humanChoice = getHumanChoice();
    // Call the computer choice function and store its value
    let computerChoice = getComputerChoice();
    // Execute the play round function with the human and computer choices
    playRound(humanChoice, computerChoice);
  }
  // after the loop, declare the winner
  if (humanScore > computerScore) {
    console.log("You won the game!");
  } else if (humanScore < computerScore) {
    console.log("You lost the game!");
  } else {
    console.log("No winner");
  }
}
