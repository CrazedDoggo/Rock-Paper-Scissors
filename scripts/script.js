/*
    - Get user input
        - Validate that is "rock", "paper", or "scissors"
    - Get computer play through RNG
        - 0 = "rock"
        - 1 = "paper"
        - 2 = "scissors"
    - Check if user wins
        - Compare player's answer to computers (switch statements, nested)
    - Print winner
        - If user wins, alert that "You win!"
        - If computer wins, alert that "Computer wins! Better luck next time!"
*/

function getUsrPlay(){
    let usrPlay;
    do {
        usrPlay = prompt("Choose your play: ").toLowerCase();
    } while (usrPlay != "rock" && usrPlay != "scissors" && usrPlay != "paper");
    return usrPlay;
}

function getComputerPlay(){
    let randomNumber = Math.floor(Math.random() * 3);
    let computerPlay;

    switch(randomNumber){
        case 0:
            computerPlay = "rock"
            break;
        case 1:
            computerPlay = "paper"
            break;
        case 2:
            computerPlay = "scissors"
            break;
        default:
            console.error("Improper number generated");
            break;
    }
    return computerPlay;
}

function getWinner(usrPlay, computerPlay){
    let winner;
    switch (usrPlay){
        case "rock":
            switch (computerPlay){
                case "rock":
                    winner = "tie";
                    break;
                case "paper":
                    winner = "computer";
                    break;
                case "scissors":
                    winner = "usr";
                    break;
            }
            break;
        case "paper":
            switch (computerPlay){
                case "rock":
                    winner = "usr";
                    break;
                case "paper":
                    winner = "tie";
                    break;
                case "scissors":
                    winner = "computer";
                    break;
            }
            break;
        case "scissors":
            switch (computerPlay){
                case "rock":
                    winner = "computer";
                    break;
                case "paper":
                    winner = "usr";
                    break;
                case "scissors":
                    winner = "tie";
                    break;
            }
            break;
    }
    return winner;
}

function displayWinner(winner){
    switch (winner){
        case "tie":
            alert("Tie!");
            break;
        case "usr":
            alert("You win!");
            break;
        case "computer":
            alert("Computer wins! Better luck next time!");
            break;
        default:
            alert("Uh oh! An error occurred! No winner or tie has been found!");
            break;
    }
}

document.addEventListener("DOMContentLoaded", function(){
    alert("Welcome to Rock-Paper-Scissors!");
    let keepPlaying = true
    let usrPlayRequest;
    
    while (keepPlaying){
        let usrPlay = getUsrPlay();
        let computerPlay = getComputerPlay();
        let winner = getWinner(usrPlay, computerPlay);
        // Display winner
        displayWinner(winner);
        do {
            usrPlayRequest = prompt("Want to play another round? [y/n]").toLowerCase();
        } while (usrPlayRequest != "y" && usrPlayRequest != "n");
        keepPlaying = usrPlayRequest == "y"? true : false;
    }
});