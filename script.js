let humanScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
  const rand = Math.random();
  if (rand <= 1 / 3) return "rock";
  else if (rand <= 2 / 3) return "paper";
  else if (rand <= 1) return "scissors";
};
const getHumanChoice = () => {
  return prompt();
};

const playRound = (humanChoice, computerChoice) => {
  switch (humanChoice.toLowerCase()) {
    case "rock":
      switch (computerChoice) {
        case "rock":
          console.log("Tie");
          break;
        case "paper":
          console.log("You Lose! Paper beats Rock");
          computerScore++;
          break;
        case "scissors":
          console.log("You Win! Rock beats Scissors");
          humanScore++;
          break;
        default:
          break;
      }
      break;
    case "paper":
      switch (computerChoice) {
        case "rock":
          console.log("You Win! Paper beats Rock");
          humanScore++;
          break;
        case "paper":
          console.log("Tie");
          break;
        case "scissors":
          console.log("You Lose! Scissors beats Paper");
          computerScore++;
          break;
        default:
          break;
      }
      break;
    case "scissors":
      switch (computerChoice) {
        case "rock":
          console.log("You Lose! Rock beats Scissors");
          computerScore++;
          break;
        case "paper":
          console.log("You Win! Scissors beats Paper");
          humanScore++;
          break;
        case "scissors":
          console.log("Tie");
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
};
const playGame = () => {
  for (let i = 0; i < 5; i++) {
    playRound(getHumanChoice(), getComputerChoice());
  }
  if (humanScore > computerScore) {
    console.log("Your Score:", humanScore);
    console.log("Computer Score:", computerScore);
    console.log("You Win!");
  } else if (humanScore < computerScore) {
    console.log("Your Score:", humanScore);
    console.log("Computer Score:", computerScore);
    console.log("You Lose!");
  } else {
    console.log("Your Score:", humanScore);
    console.log("Computer Score:", computerScore);
    console.log("Tie!");
  }
  // Resetting Score
  humanScore = 0;
  computerScore = 0;
};
playGame();
