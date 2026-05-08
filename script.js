
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


function playGame(){
let humanScore = 0;
let computerSCore = 0;
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
for (let i = 1; i <= 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(computerSelection, humanSelection);
  }
  if(humanScore>computerSCore)console.log("Final winner you");
  if(computerSCore>humanScore)console.log("Final winner computer");
  if(computerSCore==humanScore)console.log("It is a tie")
}
playGame();
