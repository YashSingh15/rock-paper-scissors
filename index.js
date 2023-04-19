function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function doesPlayerWin(playerChoice, computerChoice) {
    return (
        (playerChoice === 'Rock' && computerChoice === 'Scissors') ||
        (playerChoice === 'Paper' && computerChoice === 'Rock') ||
        (playerChoice === 'Scissors' && computerChoice === 'Paper')
    );
}

function doesComputerWin(playerChoice, computerChoice) {
    return (
        (playerChoice === 'Scissors' && computerChoice === 'Rock') ||
        (playerChoice === 'Rock' && computerChoice === 'Paper') ||
        (playerChoice === 'Paper' && computerChoice === 'Scissors')
    );
}

function updateScores(playerChoice, computerChoice) {
    if (doesPlayerWin(playerChoice, computerChoice)) {
        playerScore += 1;
    } else if (doesComputerWin(playerChoice, computerChoice)) {
        computerScore += 1;
    }
}

function restartGame() {
    playerScore = 0;
    computerScore = 0;
    numRounds = 5;
    roundsPlayed = 0;

    roundResult.textContent = '';
    gameResult.textContent = '';
}

function displayRoundWinner(playerChoice, computerChoice) {
    let resultText = '';

    if (doesPlayerWin(playerChoice, computerChoice)) {
        resultText = `You win! ${playerChoice} beats ${computerChoice}`;
    } else if (doesComputerWin(playerChoice, computerChoice)) {
        resultText = `You Lose! ${computerChoice} beats ${playerChoice}`;
    } else {
        resultText = `It's a tie! You both played ${playerChoice}`
    }

    roundResult.textContent = resultText;
}

function displayGameWinner(playerScore, computerScore) {
    let resultText = '';

    if (playerScore > computerScore) {
        resultText = `You win!\nFinal Score\nPlayer: ${playerScore}, Computer: ${computerScore}`;
    } else if (playerScore < computerScore) {
        resultText = `You lose!\nFinal Score\nPlayer: ${playerScore}, Computer: ${computerScore}`;
    } else {
        resultText = `It's a tie!\nFinal Score\nPlayer: ${playerScore}, Computer: ${computerScore}`;
    }

    gameResult.textContent = resultText;
}

function playRound(e) {
    const playerChoice = e.target.textContent;
    const computerChoice = getComputerChoice();

    displayRoundWinner(playerChoice, computerChoice);
    updateScores(playerChoice, computerChoice);

    roundsPlayed += 1;

    if (roundsPlayed >= numRounds) {
        displayGameWinner(playerScore, computerScore);
        setTimeout(restartGame, 2000);
    }
}

let playerScore = 0;
let computerScore = 0;
let numRounds = 5;
let roundsPlayed = 0;

const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');

const roundResult = document.querySelector('#round-result');
const gameResult = document.querySelector('#game-result');

rockButton.addEventListener('click', playRound);
paperButton.addEventListener('click', playRound);
scissorsButton.addEventListener('click', playRound);