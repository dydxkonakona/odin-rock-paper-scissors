// pseudocode
/*
FUNCTION getComputerChoice
    RETURN ROCK IF CHOICE == 0
    RETURN PAPER IF CHOICE == 1
    RETURN SCISSORS IF CHOICE == 3

FUNCTION getHumanChoice
    GET USER INPUT (PROMPT) (rock, paper, or scissor)

DEFINE USER SCORE = 0
DEFINE COMPUTER SCORE = 0

FUNCTION playRound(humanChoice, computerChoice)
    DISPLAY WIN OR LOSE
    ADD SCORE TO WINNER

FUNCTION playGame()
    playRound() 5 times
    DISPLAYWINNER
*/

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice == 0) return "rock";
    else if (computerChoice == 1) return "paper";
    else return "scissors";
}

function getHumanChoice() {
    return prompt("Rock, Paper, or Scissors? ").toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock" && computerChoice == "paper") {
        console.log(`Human: ${humanChoice} Computer: ${computerChoice}\nHuman lost!`);
        computerScore++;
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log(`Human: ${humanChoice} Computer: ${computerChoice}\nHuman won!`);
        humanScore++;
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        console.log(`Human: ${humanChoice} Computer: ${computerChoice}\nHuman won!`);
        humanScore++;
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        console.log(`Human: ${humanChoice} Computer: ${computerChoice}\nHuman lost!`);
        computerScore++;
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        console.log(`Human: ${humanChoice} Computer: ${computerChoice}\nHuman lost!`);
        computerScore++;
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log(`Human: ${humanChoice} Computer: ${computerChoice}\nHuman won!`);
        humanScore++;
    } else {
        console.log(`Human: ${humanChoice} Computer: ${computerChoice}\nDraw!`);
    }
}

function playGame() {
    for (let i = 0; i < 5; i++)
        playRound(getHumanChoice(), getComputerChoice());
    if (humanScore > computerScore) console.log(`Human won ${humanScore} to ${computerScore}`);
    else if (humanScore < computerScore) console.log(`Human lost ${humanScore} to ${computerScore}`);
    else console.log(`Draw!\nHuman: ${humanScore}\nComputer: ${computerScore}`);

}

let humanScore = 0;
let computerScore = 0;

playGame();