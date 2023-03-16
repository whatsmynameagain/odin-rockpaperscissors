

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

//Assume both arguments are correct, first letter capitalized
//Trying out ternary operations and string literals 
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
        ? `You ${result}! ${playerSelection} beats ${computerSelection}`
        : `You ${result}! ${computerSelection} beats ${playerSelection}`;
   
}
