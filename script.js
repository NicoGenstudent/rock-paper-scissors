let userScore = 0;
let computerScore = 0;
let playerSelection = "";

function playRound(playerSelection, computerSelection) {
    const outcomes = {
        Rock: { Rock: "Its a tie!", Paper: "You lose!", Scissors: "You win!" },
        Paper: { Rock: "You win!", Paper: "Its a tie!", Scissors: "You lose!" },
        Scissors: { Rock: "You lose!", Paper: "You win!", Scissors: "Its a tie!" }
    }
    const result = outcomes[playerSelection] ? outcomes[playerSelection][computerSelection] : 'Invalid input';

    console.log(result)
    if (result === 'You win!') {
        updateScore('user');
    } else if (result === 'You lose!') {
        updateScore('computer');
    }
    return result;
}

// Function to calculate the outcome of a round is DONE
function updatePlayerImage(choice) {
    playerSelection = choice;
    const playerImage = document.getElementById('player-image');
    playerImage.src = `images/${choice}.png`;
    playerImage.alt = choice;
}

function getComputerSelection() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    return choices [Math.floor(Math.random() * choices.length)];
}

function updateComputerImage(choice) {
    const computerImage = document.getElementById('computer-image');
    computerImage.src = `images/${choice}.png`;
    computerImage.alt = choice;
}

function updateScore(winner) {
    if (winner === 'user') {
        userScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }
    document.getElementById("score-display").innerHTML = `User: ${userScore} Computer: ${computerScore}`;

    if (userScore === 5) {
        alert("You have won the game!");
        resetGame();
    } else if (computerScore === 5) {
        alert("You have lost the game!");
        resetGame();
    }
}

function resetGame() {
    userScore = 0;
    computerScore = 0;
    document.getElementById("score-display").innerHTML = `User: ${userScore} Computer: ${computerScore}`;
    document.getElementById('player-image').src = './images/Mystery.jpg';
    document.getElementById('computer-image').src = './images/Mystery.jpg';
    playerSelection = "";
}

// Function to update the score is DONE


let buttons = document.querySelectorAll('#options-box button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        playerSelection = button.id; // Get the button id (Rock, Paper, or Scissors)
        updatePlayerImage(playerSelection); // Update the player's image based on selection
        document.getElementById('play-button').style.display = 'inline-block'; // Show the play button
    });
});


document.getElementById('play-button').addEventListener('click', () => {
    if (playerSelection === "") {
        return;
    }

    const computerSelection = getComputerSelection();
    updateComputerImage(computerSelection);
    setTimeout(() => {
        alert(playRound(playerSelection, computerSelection));
    }, 100);
});

// Function to play the game after the user has selected an option is DONE


