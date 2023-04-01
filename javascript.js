function getComputerChoice() {
    choices = ['Rock', 'Paper', 'Scissors'];
    randomChoiceIndex = Math.floor(Math.random() * 3);
    randomChoice = choices[randomChoiceIndex];
    return randomChoice;
}

function capitalizeFirstLetter(inputString) {
    if (typeof inputString !== 'string') {
        return '';
    }

    return inputString[0].toUpperCase() + inputString.slice(1).toLowerCase();
}

function doesPlayerWin(playerSelection, computerSelection) {
    return (
        (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'Scissors' && computerSelection === 'Paper') ||
        (playerSelection === 'Paper' && computerSelection === 'Rock')
    );
}

function doesComputerWin(playerSelection, computerSelection) {
    return (
        (playerSelection === 'Scissors' && computerSelection === 'Rock') ||
        (playerSelection === 'Rock' && computerSelection === 'Paper') ||
        (playerSelection === 'Paper' && computerSelection === 'Scissors')
    );
}

function playRound(playerSelection, computerSelection) {
    let result = '';

    if (doesPlayerWin(playerSelection, computerSelection)) {
        result = `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if (doesComputerWin(playerSelection, computerSelection)) {
        result = `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else {
        result = `It's a tie! You both played ${playerSelection}`;
    }

    return result;
}

function getWinner(playerScore, computerScore) {
    let winner = '';

    if (playerScore > computerScore) {
        winner = 'player';
    } else if (playerScore < computerScore) {
        winner = 'computer';
    } else {
        winner = 'tie';
    }

    return winner;
}

function game() {
    const numRounds = +prompt('How many rounds would you like to play?');
    let playerScore = 0;
    let computerScore = 0;

    for (let round = 1; round <= numRounds; round++) {
        const playerSelection = capitalizeFirstLetter(prompt('Enter your choice'));
        const computerSelection = getComputerChoice();

        const message = playRound(playerSelection, computerSelection);
        console.log(message);

        if (doesPlayerWin(playerSelection, computerSelection)) {
            playerScore += 1;
        } else if (doesComputerWin(playerSelection, computerSelection)) {
            computerScore += 1;
        }
    }

    const winner = getWinner(playerScore, computerScore);

    if (winner === 'player') {
        console.log(`You Win!\nFinal Score\nPlayer: ${playerScore}, Computer: ${computerScore}`);
    } else if (winner === 'computer') {
        console.log(`You Lose!\nFinal Score\nPlayer: ${playerScore}, Computer: ${computerScore}`);
    } else {
        console.log(`It's a tie!\nFinal Score\nPlayer: ${playerScore}, Computer: ${computerScore}`);
    }
}

// all the ways that the player could lose
// rock and scissors
// scissors and paper
// paper and rock