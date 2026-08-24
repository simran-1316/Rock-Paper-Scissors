console.log("Hello World");
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let num = Math.random();
    if(num >=0 || num <=0.33){
        return "rock";
    }
    else if(num > 0.33 && num <=0.66){
        return "paper";
    }
    else {
        return "scissors";
    }
}

let getHumanChoice = () => {
    let choice = prompt("Hey player enter your choice: ");
    return choice;
};

let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();

function playRound(humanChoice,computerChoice)  {
    humanChoice.toLowerCase();

    if(humanChoice == computerChoice){
        return;
    }
    else if(humanChoice == "rock" && computerChoice == "paper"){
        computerScore++;
    }
    else if(humanChoice == "rock" && computerChoice == "scissors"){
        humanScore++;
    }
    else if(humanChoice == "paper" && computerChoice == "rock"){
        humanScore++;
    }
    else if(humanChoice == "paper" && computerChoice == "scissors"){
        computerScore++;
    }
    else if(humanChoice == "scissors" && computerChoice == "paper"){
        humanScore++;
    }
    else  {
        computerScore++;
    }  
}

if(humanScore > computerScore)
    console.log("You win")
else if(humanScore < computerScore)
    console.log("OOps bot wins")
else
    console.log("Oh it's a draw")