function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

function getComputerChoice() {
    const ranNum = getRndInteger(1, 3);
    

    switch (ranNum) {
        case 1:
            console.log("The computer chooses Rock!");
            return "rock";
        
        case 2:
            console.log("The computer chooses Paper!");
            return "paper";
        
        case 3:
            console.log("The computer chooses Scissor!");
            return "scissor";
        default:
            return "";
    }

}

function getPlayerChoice() {
    let playerChoice = prompt("What is your choice?")
    console.log("The player chooses " + playerChoice + "!");

    return playerChoice;
}

function playRound(playerSelection, computerSelection) {
    const item_antagonist_kv = {
        "rock": "paper",
        "paper": "scissor",
        "scissor": "rock"
    }
    
    if (playerSelection == computerSelection) {
        return "draw";
    }

    if (item_antagonist_kv[playerSelection] == computerSelection) {
        return "computer";
    } else {
        return "player";
    }
}

function game() {
    
    let playerWins = 0, computerWins = 0, roundNum = 1;
    let roundWinner = "";

    while (playerWins != 5 && computerWins != 5) {
        console.log("Round " + roundNum + "!");
        roundWinner = playRound(getPlayerChoice(), getComputerChoice());
        switch (roundWinner) {
            case "draw":
                console.log("Draw!");
                break;
            
            case "computer":
                console.log("The computer Won this round!");
                computerWins++;
    
            case "player":
                console.log("The player Won this round!");
                playerWins++;
    
            default:
                break;
        }
        roundNum++;
        console.log("Game Score:");
        console.log("Player  : " + playerWins);
        console.log("Computer: " + computerWins)
    }

    if (playerWins == 5) {
        console.log("The player Wins!");
    } else if (computerWins == 5) {
        console.log("The computer Wins!");
    }

    


}

game();