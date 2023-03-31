function getComputerChoice() {
    choices = ['Rock', 'Paper', 'Scissors'];
    randomChoiceIndex = Math.floor(Math.random() * 3);
    randomChoice = choices[randomChoiceIndex];
    return randomChoice;
}