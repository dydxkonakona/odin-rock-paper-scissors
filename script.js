function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice == 0) return "rock";
    else if (computerChoice == 1) return "paper";
    else return "scissors";
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock" && computerChoice == "paper") {
        content.textContent = `You: ${humanChoice} Computer: ${computerChoice} | Human lost!`;
        computerScore++;
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        content.textContent = `You: ${humanChoice} Computer: ${computerChoice} | Human won!`;
        humanScore++;
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        content.textContent = `You: ${humanChoice} Computer: ${computerChoice} | Human won!`;
        humanScore++;
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        content.textContent = `You: ${humanChoice} Computer: ${computerChoice} | Human lost!`;
        computerScore++;
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        content.textContent = `You: ${humanChoice} Computer: ${computerChoice} | Human lost!`;
        computerScore++;
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        content.textContent = `You: ${humanChoice} Computer: ${computerChoice} | Human won!`;
        humanScore++;
    } else {
        content.textContent = `You: ${humanChoice} Computer: ${computerChoice} | Draw!`;
    }
}

const choices = document.querySelector("#choices");
let scoreboard = document.querySelector("#scoreboard");
let content = document.querySelector("#content");

let humanScore = 0;
let computerScore = 0;
let humanChoice;

choices.addEventListener("click", (e) => {
    switch (e.target.id) {
        case "rock":
            humanChoice = "rock";
            playRound(humanChoice, getComputerChoice());
            break;
        case "paper":
            humanChoice = "paper";
            playRound(humanChoice, getComputerChoice());
            break;
        case "scissors":
            humanChoice = "scissors";
            playRound(humanChoice, getComputerChoice());
            break;
        default:
            break;
    };
    scoreboard.textContent = `Your Score: ${humanScore} Computer Score: ${computerScore}`;
    let playAgain = document.createElement("button"); 
    playAgain.textContent = "play again";
    if (humanScore == 5) {
        content.textContent = `You won the game`;
        humanScore = 0;
        computerScore = 0;
    }
    if (computerScore == 5) {
        content.textContent = `Computer won the game`;
        humanScore = 0;
        computerScore = 0;
    }
});