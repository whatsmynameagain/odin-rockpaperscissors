
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
        ? `You ${result}! ${playerSelection} beats ${computerSelection}`
        : `You ${result}! ${computerSelection} beats ${playerSelection}`;
}

//not implemented: best out of x (ending the game early)
function game() {
    let capitalize = (text) => text.charAt(0).toUpperCase() + text.slice(1, text.length+1).toLowerCase();
    let playerChoice, roundResult;
    let playerScore = 0, computerScore = 0;
    const rounds = 5;
    for (let i = 0; i < rounds; i++) { 
        console.log("--- Rock, Paper, Scissors ---");
        console.log(`--- Current Score: Player(${playerScore}), Computer(${computerScore})`);
        console.log(`--- Round ${i+1} out of ${rounds} ---`);
        let computerChoice = getComputerChoice();
        while (playerChoice == null) {
            playerChoice = capitalize(prompt("Enter your choice: "));
            if (playerChoice != "Rock" && playerChoice != "Paper" && playerChoice != "Scissors") {
                console.log("Invalid input. Try again")
                playerChoice = null;
            }
        }
        console.log(`You chose ${playerChoice} | The computer chose ${computerChoice}`);
        roundResult = playRound(playerChoice, computerChoice);
        if (roundResult.charAt(4) == "W") {
            playerScore++;
        }
        else if (roundResult.charAt(4) == "L"){
            computerScore++;
        }
        console.log(roundResult);
        playerChoice = null;
    };
    console.log("\n");
    console.log(`Final score: Player(${playerScore}), Computer(${computerScore})`)
    if (playerScore == computerScore) {
        console.log("It's a Tie");
    } else if (playerScore < computerScore) {
        console.log("You Lose");
    } else {
        console.log("You Win");
    }
    console.log("Game Over");
}

game();