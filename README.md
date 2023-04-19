# Rock Paper Scissors

Rock Paper Scissors in a Browser Interface.<br>
This repository contains a simple, text-based Rock Paper Scissors game that runs in the browser console.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [How It Works](#how-it-works)

## Installation
1. Clone the repository using the following command:<br>
`git clone https://github.com/YashSingh15/rock-paper-scissors.git`
2. Navigate to the project folder:<br>
`cd rock-paper-scissors`

3. Open the `index.html` file in your preferred web browser.

## Usage

1. Open the browser console (Ctrl+Shift+J for Chrome and Ctrl+Shift+K for Firefox).
2. The game will be played for 5 rounds.
3. Click the button of your choice (Rock, Paper, or Scissors) for each round.
4. The console will display the result of each round and the final score.
5. The game will then restart after a few seconds

## How It Works

The game uses JavaScript to handle the game logic, which includes the following functions:

- `getComputerChoice()`: Returns a random choice (Rock, Paper, or Scissors) for the computer.
- `doesPlayerWin(playerChoice, computerChoice)`: Determines if the player wins the round.
- `doesComputerWin(playerChoice, coputerChoice)`: Determines if the computer wins the round.
- `playRound(playerChoice, computerChoice)`: Executes a single round and updates the number of rounds played.
- `updateScores(playerChoice, computerChoice)`: Updates the scores of player and computer based on who won the round
- `displayRoundWinner(playerChoice, computerChoice)`: Displays the winner of a round
- `displayGameWinner(playerScore, computerScore)`: Displays the winner of the game
