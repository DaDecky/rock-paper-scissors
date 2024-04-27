let humanScore = 0;
let computerScore = 0;
let roundCtr = 0;
const body = document.querySelector("body");

const getComputerChoice = () => {
  const rand = Math.random();
  if (rand <= 1 / 3) return "rock";
  else if (rand <= 2 / 3) return "paper";
  else if (rand <= 1) return "scissors";
};
const getHumanChoice = () => {
  return prompt();
};
const result = document.createElement("div");
const playRound = (humanChoice, computerChoice) => {
  roundCtr++;
  switch (humanChoice.toLowerCase()) {
    case "rock":
      switch (computerChoice) {
        case "rock":
          result.innerText = `Round ${roundCtr}: Tie`;
          break;
        case "paper":
          result.innerText = `Round ${roundCtr}: You Lose! Paper beats Rock`;
          computerScore++;
          break;
        case "scissors":
          result.innerText = `Round ${roundCtr}: You Win! Rock beats Scissors`;
          humanScore++;
          break;
        default:
          break;
      }
      break;
    case "paper":
      switch (computerChoice) {
        case "rock":
          result.innerText = `Round ${roundCtr}: You Win! Paper beats Rock`;
          humanScore++;
          break;
        case "paper":
          result.innerText = `Round ${roundCtr}: Tie`;
          break;
        case "scissors":
          result.innerText = `Round ${roundCtr}: You Lose! Scissors beats Paper`;
          computerScore++;
          break;
        default:
          break;
      }
      break;
    case "scissors":
      switch (computerChoice) {
        case "rock":
          result.innerText = `Round ${roundCtr}: You Lose! Rock beats Scissors`;
          computerScore++;
          break;
        case "paper":
          result.innerText = `Round ${roundCtr}: You Win! Scissors beats Paper`;
          humanScore++;
          break;
        case "scissors":
          result.innerText = `Round ${roundCtr}: Tie`;
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }

  body.appendChild(result);
  if (humanScore == 5 || computerScore == 5) {
    const announceWinner = document.createElement("h1");
    const div = document.createElement("div");
    result.remove();
    announceWinner.textContent = "You Win!";
    div.textContent = `You: ${humanScore} | Computer: ${computerScore}`;
    if (humanScore == 5) {
    } else {
      announceWinner.textContent = "You Lose!";
    }
    body.appendChild(announceWinner);
    body.appendChild(div);
    startNewGame();
  }
};
const startNewGame = () => {
  const button = document.createElement("button");
  button.textContent = "Start a New Game?";
  const buttonsID = ["rock", "paper", "scissors"];

  buttonsID.forEach((buttonId) => {
    document.querySelector(`#${buttonId}`).remove();
  });

  body.appendChild(button);
  button.addEventListener("click", () => location.reload());
};

const rock = document.querySelector("#rock");
rock.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
});
const paper = document.querySelector("#paper");
paper.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
});
const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
});
