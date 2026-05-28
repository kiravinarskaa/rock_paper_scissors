function getComputerChoice() {
  const randomNumber = Math.random();

  if (randomNumber < 1 / 3) {
    return "rock";
  } else if (randomNumber < 2 / 3) {
    return "paper";
  } else {
    return "scissors";
  }
}
function getHumanChoice() {
  let choice = prompt("Choose rock, paper, or scissors:");

  if (choice === null) {
    return "rock";
  }

  return choice;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    console.log("You chose: " + humanChoice);
    console.log("Computer chose: " + computerChoice);

    if (humanChoice === computerChoice) {
      console.log("It's a tie!");
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      console.log("You win! " + humanChoice + " beats " + computerChoice);
    } else {
      computerScore++;
      console.log("You lose! " + computerChoice + " beats " + humanChoice);
    }

    console.log("Human score: " + humanScore);
    console.log("Computer score: " + computerScore);
    console.log("-------------------");
  }

  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
  }

  if (humanScore > computerScore) {
    console.log("Final result: You won the game!");
  } else if (computerScore > humanScore) {
    console.log("Final result: Computer won the game!");
  } else {
    console.log("Final result: The game is a tie!");
  }
}

playGame();