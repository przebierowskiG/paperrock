const playerPointsSpan = document.querySelector(".player-points");
const compPointsSpan = document.querySelector(".comp-points");

const optionsButtons = document.querySelectorAll(".options button");
const choicesSection = document.querySelector(".choices");
const playerChoiceSpan = document.querySelector(".player-choice");
const compChoiceSpan = document.querySelector(".comp-choice");

const resultText = document.querySelector(".result-text");
const resetGameButton = document.querySelector(".reset-game");

let playerPoints = 0;
let playerChoice = "";
let compPoints = 0;
let compChoice = "";

function setGame(){
    playerPointsSpan.innerHTML = playerPoints;
    compPointsSpan.innerHTML = compPoints;
    resultText.innerHTML = "Choose your weapon :)";
    resetGameButton.classList.remove("active");
    
    
}
    window.onload = setGame();

function playerSelect(event){
    optionsButtons.forEach((button) => button.classList.remove("active"));
    playerChoice = event.target.dataset.option;
    event.target.classList.add("active")
    resetGameButton.classList.add("active")
    compSelect();
}

const availbableCompChoices = ["ROCK", "PAPER", "SCISSORS"];

function compSelect (){
    const randomIndex = Math.floor(Math.random()* availbableCompChoices.length);
    compChoice = availbableCompChoices[randomIndex];

    checkResult();

}
function checkResult(){
    let winner = ""
    if (
    (playerChoice === "ROCK" && compChoice === "SCISSORS") || 
    (playerChoice === "PAPER" && compChoice === "ROCK")  || 
    (playerChoice === "SCISSORS" && compChoice === "PAPER") 
    ){
    winner = "You won!";
    playerPoints++;
    resultText.classList.add("win");
    resultText.classList.remove("draw");
    resultText.classList.remove("lose");
    playerPointsSpan.innerHTML = playerPoints;
    } else if (playerChoice === compChoice){
        winner = "DRAW!"
        resultText.classList.add("draw");
        resultText.classList.remove("lose");
        resultText.classList.remove("win");
        
    }else {
        winner = "You lost!"
        compPoints++;
        resultText.classList.add("lose");
        resultText.classList.remove("draw");
        resultText.classList.remove("win");
        compPointsSpan.innerHTML = compPoints;

    }
    choicesSection.classList.add("active")
    playerChoiceSpan.innerHTML = playerChoice;
    compChoiceSpan.innerHTML = compChoice;
    resultText.innerHTML = winner;
    console.log(winner)
}

function resetGame(){
    choicesSection.classList.remove("active");
    optionsButtons.forEach((button) => button.classList.remove("active"));
    playerPoints = 0;
    compPoints = 0;
    setGame();

}
optionsButtons.forEach((button) => 
    button.addEventListener("click", playerSelect)
    );
resetGameButton.addEventListener("click", resetGame)