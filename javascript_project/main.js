function computerPlay() {
    let compSelection = ["rock", "paper", "scissors"];
    return compSelection[Math.floor(Math.random() * compSelection.length)];
}

const win = "You win!!!";
const lose = "You lose";
const tie = "It's a tie!!"

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase()=="rock" && computerSelection[computerPlay]=="scissors" || 
       playerSelection.toLowerCase()=="paper" && computerSelection[computerPlay]=="rock" || 
       playerSelection.toLowerCase()=="scissors" && computerSelection[computerPlay]=="paper"){
        playerScore++;
       return win;
     }
     else if (playerSelection.toLowerCase()=="rock" && computerSelection[computerPlay]=="paper" ||
       playerSelection.toLowerCase()=="scissors" && computerSelection[computerPlay]=="rock" ||
       playerSelection.toLowerCase()=="paper" && computerSelection[computerPlay]=="scissors"){
       computerScore++;
       return lose;
     }
       else if (playerSelection.toLowerCase() == computerSelection[computerPlay]){
      tieScore++;
       return tie;
     } 
     else {
       return "you must input rock, paper or scissors";
     } 
}

//const playerSelection = prompt("Do you choose rock paper or scissors?");
//console.log(playRound(playerSelection, computerSelection));

let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

function game() {
    for (let i = 0; i < 5; i++) {
     const playerSelection = prompt("Do you choose rock paper or scissors?");
     console.log("you chose " + playerSelection.toLowerCase());
     const computerSelection = computerPlay();
     console.log("The computer chose " + computerSelection[compPlay]);
     console.log(playRound(playerSelection, computerSelection));

     if (playerScore > computerScore) {
        return "You win this game";
     }
     if (playerScore == computerScore) {
        return "It's a tie";
     }
     else {
        return "You lose this game"
     }
    }
}

console.log(game());

console.log("your final score is " + playerScore)

