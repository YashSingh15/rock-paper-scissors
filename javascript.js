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

function playRound(playerSelection, computerSelection) {
    playerSelection = capitalizeFirstLetter(playerSelection);
    let result = '';

    if ((playerSelection === 'Rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'Scissors' && computerSelection === 'Paper') ||
        (playerSelection === 'Paper' && computerSelection === 'Rock')) {
        result = `You win! ${playerSelection} beats ${computerSelection}!`;
    } else if ((playerSelection === 'Scissors' && computerSelection === 'Rock') ||
        (playerSelection === 'Rock' && computerSelection === 'Paper') ||
        (playerSelection === 'Paper' && computerSelection === 'Scissors')) {
        result = `You lose! ${computerSelection} beats ${playerSelection}!`;
    } else {
        result = `It's a tie! You both played ${playerSelection}`;
    }

    return result;
}

// all the ways that the player could lose
// rock and scissors
// scissors and paper
// paper and rock