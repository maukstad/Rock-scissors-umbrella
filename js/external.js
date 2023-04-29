console.log("Hello there");
function getComputerChoice() {
    let computerSelection = Math.floor(Math.random() * 10);
    if (computerSelection < 3) {
        return computerSelection = "rock";
    }
    else if (computerSelection < 6) {
        return computerSelection = "scissors";
    }
    else {
        return computerSelection = "umbrella"
    }    
    
}

function playerChoice() {
    let playerSelection = prompt("Please choose Rock, Scissors, or Umbrella");
    let playerSubmission = playerSelection.toLowerCase();
    if (playerSubmission === "rock" || playerSubmission === "scissors" || playerSubmission === "umbrella") {
        return playerSubmission
    }
    else {
        playerChoice()
    }
}

function eachRound() {
    computerSelection = getComputerChoice();
    playerSelection = playerChoice();
    if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "umbrella") || (playerSelection === "umbrella" && computerSelection === "rock")) {
        return "player"
    } 
    else if (playerSelection === computerSelection) {
        return "tie"
    }
    else {
        return "computer"
    }
}

function game() {
    let playerScore = 0
    let computerScore = 0
    let roundCount = 0
    while (roundCount < 5) {
        let result = eachRound()
        console.log(result)
        if (result === "player") {
            playerScore++
            roundCount++
            console.log("Player wins" + " " + "Player score" + " " + playerScore + " " + "Computer score" + " " + computerScore + " " + "Round count" + " " + roundCount)
        }
        else if (result == "computer") {
            computerScore++
            roundCount++
            console.log("Computer wins" + " " + "Player score" + " " + playerScore + " " + "Computer score" + " " + computerScore + " " + "Round count" + " " + roundCount)
        }
        else {
            console.log("Tie" + " " + "Player score" + " " + playerScore + " " + "Computer score" + " " + computerScore + " " + "Round count" + " " + roundCount)
        }
    }
    if (playerScore > computerScore) {
        console.log("Player wins")
    }
    else {
        console.log("Computer wins")
    }
}