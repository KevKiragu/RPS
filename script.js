let humanScore = 0;
let computerSCore = 0;

function getComputerChoice() {
  let randomNumber = Math.random();
  if (randomNumber < 0.33) {
    return "rock";
  } else if (randomNumber < 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}
let computerChoice = getComputerChoice();
console.log(computerChoice);

function getHumanChoice() {
  let choice = prompt("please enter rock, paper or scissors");
  return choice.toLowerCase();
}
let humanChoice = getHumanChoice();
console.log(humanChoice);

function playRound(computerChoice, humanChoice) {
  if (humanChoice === computerChoice) {
    console.log(`Draw both picked ${humanChoice}`);
  }
  if (
    (humanChoice == "rock" && computerChoice == "scissors") ||
    (humanChoice == "scissors" && computerChoice == "paper") ||
    (humanChoice == "paper" && computerChoice == "rock")
  ) {
    humanScore++;
    console.log(`You win ${humanChoice} beats ${computerChoice}`);
  
  }
  if(
    (computerChoice == "rock" && humanChoice == "scissors")||
    (computerChoice == "scissors" && humanChoice == "paper")||
    (computerChoice == "paper" && humanChoice == "rock")
  ){
    computerSCore++;
    console.log(`You loose ${computerChoice} beats ${humanChoice} `)
  
  }


}
playRound(computerChoice, humanChoice);
