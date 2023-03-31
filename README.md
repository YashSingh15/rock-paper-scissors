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
2. The game will prompt you to enter the number of rounds you'd like to play.
3. Enter your choice (Rock, Paper, or Scissors) for each round.
4. The console will display the result of each round and the final score.

## How It Works

The game uses JavaScript to handle the game logic, which includes the following functions:

- `getComputerChoice()`: Returns a random choice (Rock, Paper, or Scissors) for the computer.
- `capitalizeFirstLetter(inputString)`: Capitalizes the first letter of a given string.
- `doesPlayerWin(playerSelection, computerSelection)`: Determines if the player wins the round.
- `doesComputerWin(playerSelection, computerSelection)`: Determines if the computer wins the round.
- `playRound(playerSelection, computerSelection)`: Executes a single round and returns the result message.
- `getWinner(playerScore, computerScore)`: Determines the overall winner of the game.
- `game()`: Executes the game loop, prompts user for input, and displays the final result.
