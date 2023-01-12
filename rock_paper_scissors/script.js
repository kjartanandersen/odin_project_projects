let playerWins = 0;
let computerWins = 0;
let roundNum = 1;

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

function getComputerChoice() {
    const element = document.getElementById('comp-choice-log');
    const ranNum = getRndInteger(1, 3);
    

    switch (ranNum) {
        case 1:
            // console.log("The computer chooses Rock!");
            element.textContent = "The computer chooses Rock!";
            return "rock";
        
        case 2:
            // console.log("The computer chooses Paper!");
            element.textContent = "The computer chooses Paper!";
            return "paper";
        
        case 3:
            // console.log("The computer chooses Scissor!");
            element.textContent = "The computer chooses Scissor!";
            return "scissor";
        default:
            return "";
    }

}

// function getPlayerChoice() {
//     const element = document.getElementById('pl-choice-log');
//     let playerChoice = prompt("What is your choice?")
//     console.log("The player chooses " + playerChoice + "!");
//     element.textContent = "The player chooses " + playerChoice + "!";

//     return playerChoice;
// }

function playRound(playerSelection, computerSelection) {
    const elementPl = document.getElementById('pl-choice-log');
    const element = document.getElementById('winner-log');
    const item_antagonist_kv = {
        "rock": "paper",
        "paper": "scissor",
        "scissor": "rock"
    }

    elementPl.textContent = "The player chooses " + playerSelection + "!";
    
    if (playerSelection == computerSelection) {
        // console.log("Draw!")
        element.textContent = "Draw!";
        return "draw";
    }

    if (item_antagonist_kv[playerSelection] == computerSelection) {
        // console.log("The computer Won this round!");
        element.textContent = "The computer Won this round!";
        return "computer";
    } else {
        // console.log("The player Won this round!");
        element.textContent = "The player Won this round!";
        return "player";
    }
}

function game(playerSelection) {
    if (playerWins == 5 || computerWins == 5) {
        return;
    }
    const roundNumElement = document.getElementById('round-num');
    const playerScoreElement = document.getElementById('player-score');
    const computerScoreElement = document.getElementById('computer-score');
    const finalWinnerElement = document.getElementById('final-winner');

    let roundWinner = "";


    // console.log("Round " + roundNum + "!");
    roundNumElement.textContent = "Round " + roundNum + "!";
    roundWinner = playRound(playerSelection, getComputerChoice());
    switch (roundWinner) {
        case "draw":
            // console.log("Draw!");
            break;
        
        case "computer":
            // console.log("The computer Won this round!");
            computerWins++;
            break;

        case "player":
            // console.log("The player Won this round!");
            playerWins++;
            break;

        default:
            break;
    }
    roundNum++;
    // console.log("Game Score:");
    // console.log("Player  : " + playerWins);
    // console.log("Computer: " + computerWins);
    playerScoreElement.textContent = "Player  : " + playerWins;
    computerScoreElement.textContent = "Computer: " + computerWins;


    if (playerWins == 5) {
        // console.log("The player Wins!");
        finalWinnerElement.textContent = "The player Wins!";


    } else if (computerWins == 5) {
        // console.log("The computer Wins!");
        finalWinnerElement.textContent = "The computer Wins!";
    }

    


}

// game();