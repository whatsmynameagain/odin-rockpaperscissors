

function getComputerChoice() {
    //a number between 0 and 2 (0-1-2)
    switch (Math.floor(Math.random() * 3)){
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2: 
            return "Scissors";
            break;
    }
}

//assume both arguments are correct, first letter capitalized
function playRound(playerSelection, computerSelection) {
    let result;
    
    if (playerSelection == computerSelection) {
        return "Tie";
    } else {
        switch (playerSelection) {
            case "Rock":
                if (computerSelection == "Paper") {
                    return loseString;
                } else if (computerSelection == "Scissors") {
                    return winString;
                }
                break;
            case "Paper":
                if (computerSelection == "Scissors") {
                    return loseString;
                } else if (computerSelection == "Rock") {
                    return winString;
                }
                break;
            case "Scissors":
                if (computerSelection == "Rock") {
                    return loseString;
                } else if (computerSelection == "Paper") {
                    return winString;
                }
                break;
        }
    }
    return `You ${result}! ${playerSelection} beats ${computerSelection}`;
}

console.log(playRound("Scissors", "Rock"))