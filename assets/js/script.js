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
        } else if (this.getAttribute('data-type') === "3"){
            playerChoiceDisplay.innerHTML = 'Lizard <i class="fas fa-hand-lizard"></i>';
        } else if (this.getAttribute('data-type') === "4") {
            playerChoiceDisplay.innerHTML = 'Spock <i class="fas fa-hand-spock"></i>';
        }


        //Calls the function for the computer generated choice
        generateComputerChoice();
    })

}