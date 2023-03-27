
function getComputerChoice() {
    //a number between 0 and 2 (0-1-2)
    switch (Math.floor(Math.random() * 3)){
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2: 
            return "Scissors";
    }
}

//Assume both arguments are correct, first letter capitalized
//Trying out ternary operations and string literals, so this isn't the easiest thing to read
function playRound(playerSelection, computerSelection) {
    let result;
    if (playerSelection == computerSelection) {
        return "Tie";
    } else {
        switch (playerSelection) {
            case "Rock":
                result = computerSelection == "Paper" ? "Lose" : "Win";
                break;
            case "Paper":
                result = computerSelection == "Scissors" ? "Lose" : "Win";
                break;
            case "Scissors":
                result = computerSelection == "Rock" ? "Lose" : "Win";
                break;
        }
    }
    return result.charAt(0) == "W" 
        ? `You ${result} this round! ${playerSelection} beats ${computerSelection}`
        : `You ${result} this round! ${computerSelection} beats ${playerSelection}`;
}


function onButtonClick(event) {
    computerChoice = getComputerChoice();
    playerChoice = event.target.innerText; //get the text value from the button that was pressed
    roundResult = playRound(event.target.innerText, computerChoice);
    
    if (roundResult.charAt(4) == "W") {
        playerScore++;
    }
    else if (roundResult.charAt(4) == "L"){
        computerScore++;
    };
    if (selections.style.visibility === "hidden") { selections.style.visibility = "visible" };
    
    if (playerScore == 5 || computerScore == 5) {
        if (result.style.visibility === "hidden") { 
            result.style.visibility = "visible";
            if (playerScore == computerScore) {
                result.textContent = "It's a Tie";
            } else if (playerScore < computerScore) {
                result.textContent = "You Lose";
            } else {
                result.textContent = "You Win";
            }
        };
        
        resetBtn.style.display = "initial";
        [rockBtn, paperBtn, scissorsBtn].forEach((button) => {
            button.style.display = "none";
        });
    }
    updateInfo();
    currentRound++;

}

function updateInfo() {
    roundCounter.textContent = `Round ${currentRound}`;
    scoreBoard.textContent = `Current Score: Player(${playerScore}) - Computer(${computerScore})`;
    selections.textContent = roundResult;
    statusInfo.textContent = `You chose ${playerChoice} | The computer chose ${computerChoice}`
}

function resetGame() {
    [rockBtn, paperBtn, scissorsBtn].forEach((button) => {
        button.style.display = "initial";
    });
    selections.style.visibility = "hidden";
    result.style.visibility = "hidden";
    resetBtn.style.display = "none";
    currentRound = 1, playerScore = 0, computerScore = 0;
    updateInfo();
    roundCounter.textContent = "";
    statusInfo.textContent = "Select your... hand?";

}

let playerChoice, computerChoice, roundResult;
let playerScore = 0, computerScore = 0;
let currentRound = 1;

const roundCounter = document.getElementById("rounds"); //trying out the id method
const scoreBoard = document.querySelector("#score");
const statusInfo = document.querySelector("#status");
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const selections = document.querySelector("#selections");
const result = document.querySelector("#result");
const resetBtn = document.querySelector("#reset");

[rockBtn, paperBtn, scissorsBtn].forEach((button) => {
    button.addEventListener("click", onButtonClick);
})

resetBtn.addEventListener("click", () => resetGame()); //simplest way to reset the game

selections.style.visibility = "hidden";
result.style.visibility = "hidden";
resetBtn.style.display = "none";

