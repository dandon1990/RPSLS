// constants

const buttons = document.getElementsByTagName('button');
const playerChoiceDisplay = document.getElementById('player-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
const resultDisplay = document.getElementById('result');

// Get the button elements and event listeners to them
for (let button of buttons) {
    button.addEventListener('click', function () {



        if (this.getAttribute("data-type") === "0") {
            playerChoiceDisplay.innerHTML = 'Rock <i class="fas fa-hand-rock"></i>';
        } else if (this.getAttribute("data-type") === "1") {
            playerChoiceDisplay.innerHTML = 'Paper <i class="fas fa-hand-paper"></i>';
        } else if (this.getAttribute("data-type") === "2") {
            playerChoiceDisplay.innerHTML = 'Scissors <i class="fas fa-hand-scissors"></i>';
        } else if (this.getAttribute('data-type') === "3") {
            playerChoiceDisplay.innerHTML = 'Lizard <i class="fas fa-hand-lizard"></i>';
        } else if (this.getAttribute('data-type') === "4") {
            playerChoiceDisplay.innerHTML = 'Spock <i class="fas fa-hand-spock"></i>';
        }


        //Calls the function for the computer generated choice
        generateComputerChoice();
    });

}


/** Generates a random choice of the 5 possible weapons using a 
 * random number generator
 */

function generateComputerChoice() {

    // generates random number between 0 and 4
    const randNum = Math.floor(Math.random() * 5);
    var computerChoice;


    if (randNum === 0) {
        computerChoice = 'Rock <i class="fas fa-hand-rock"></i>';
    } else if (randNum === 1) {
        computerChoice = 'Paper <i class="fas fa-hand-paper"></i>';
    } else if (randNum === 2) {
        computerChoice = 'Scissors <i class="fas fa-hand-scissors"></i>';
    } else if (randNum === 3) {
        computerChoice = 'Lizard <i class="fas fa-hand-lizard"></i>';
    } else if (randNum === 4) {
        computerChoice = 'Spock <i class="fas fa-hand-spock"></i>';
    }

    computerChoiceDisplay.innerHTML = computerChoice;

    checkResult();
}

/**
 * Checks the result between the choices and determines a winner 
 * based on the selection of the user and the computer's random choice
 */
function checkResult() {
    let comWeapon = computerChoiceDisplay.innerHTML;
    let userWeapon = playerChoiceDisplay.innerHTML;
    let rock = 'Rock <i class="fas fa-hand-rock"></i>';
    let paper = 'Paper <i class="fas fa-hand-paper"></i>';
    let scissors = 'Scissors <i class="fas fa-hand-scissors"></i>';
    let lizard = 'Lizard <i class="fas fa-hand-lizard"></i>';
    let spock = 'Spock <i class="fas fa-hand-spock"></i>';


    if (comWeapon === userWeapon) {
        resultDisplay.innerHTML = 'Tie, try again!';
    } else if (userWeapon === rock && comWeapon === paper) {
        resultDisplay.innerHTML = 'You Lose!';
        incrementComputerScore();
        checkScore();
    } else if (userWeapon === rock && comWeapon === spock) {
        resultDisplay.innerHTML = 'You Lose!';
        incrementComputerScore();
        checkScore();
    } else if (userWeapon === paper && comWeapon === scissors) {
        resultDisplay.innerHTML = 'You Lose!';
        incrementComputerScore();
        checkScore();
    } else if (userWeapon === paper && comWeapon === lizard) {
        resultDisplay.innerHTML = 'You Lose!';
        incrementComputerScore();
        checkScore();
    } else if (userWeapon === scissors && comWeapon === rock) {
        resultDisplay.innerHTML = 'You Lose!';
        incrementComputerScore();
        checkScore();
    } else if (userWeapon === scissors && comWeapon === spock) {
        resultDisplay.innerHTML = 'You Lose!';
        incrementComputerScore();
        checkScore();
    } else if (userWeapon === lizard && comWeapon === scissors) {
        resultDisplay.innerHTML = 'You Lose!';
        incrementComputerScore();
        checkScore();
    } else if (userWeapon === lizard && comWeapon === rock) {
        resultDisplay.innerHTML = 'You Lose!';
        incrementComputerScore();
        checkScore();
    } else if (userWeapon === spock && comWeapon === paper) {
        resultDisplay.innerHTML = 'You Lose!';
        incrementComputerScore();
        checkScore();
    } else if (userWeapon === spock && comWeapon === lizard) {
        resultDisplay.innerHTML = 'You Lose!';
        incrementComputerScore();
        checkScore();
    } else {
        resultDisplay.innerHTML = 'You Win!';
        incrementPlayerScore();
        checkScore();

    }

}



//Increments the user's score if they win
function incrementPlayerScore() {
    let oldScore = parseInt(document.getElementById("player-score").innerText);
    document.getElementById("player-score").innerText = ++oldScore;
}


//Increments the computer's score if the user loses
function incrementComputerScore() {
    let oldScore = parseInt(document.getElementById("computer-score").innerText);
    document.getElementById("computer-score").innerText = ++oldScore;
}

/**
 * Checks the score of the game 
 * Reveals You Win div if the user reaches 10 first
 * Reveals You Lose div if the computer reaches 10 first
 */
function checkScore() {
    let playerScore = document.getElementById('player-score').innerHTML;
    let winDiv = document.getElementById('win');
    let computerScore = document.getElementById('computer-score').innerHTML;
    let loseDiv = document.getElementById('lose');

    if (playerScore === '10') {

        winDiv.style.display = "block";
    } else if (computerScore === '10') {
        loseDiv.style.display = "block";
    }
}