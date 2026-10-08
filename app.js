const computerScore = document.querySelector(".computer-score");
const userScore = document.querySelector(".user-Score");
const gameBoard = document.querySelector(".choice-board");
const userSelectionInput = document.querySelector(".user-selection")
const computerSelectionInput  = document.querySelector(".computer-selection");

let userNewScore = Number(localStorage.getItem("userNewScore")) || 0;
let computerNewScore = Number(localStorage.getItem("computerNewScore")) || 0;

// Display saved scores when the page loads
userScore.textContent = userNewScore;
computerScore.textContent = computerNewScore;


function playGame() {

    gameBoard.addEventListener("click", (event) => {

        // Find the button that was clicked
        const choiceButton = event.target.closest(".choice-btn");

        // Ignore clicks outside the choice buttons
        if (!choiceButton) return;

        // Get user's choice from data-choice
        const userChoice = choiceButton.dataset.choice;
        const userSelection = choiceButton.dataset.image;
        userSelectionInput.src = userSelection;
        console.log(userSelectionInput)
        console.log("User Choice:", userChoice);


        // Computer choice
        const choices = ["rock", "paper", "scissors"];
        const choiceImages = {
    rock: "./ICONS/rock image.png",
    paper: "./ICONS/paper image.png",
    scissors: "./ICONS/scissors image (1).png"
};

        const randomIndex = Math.floor(Math.random() * choices.length);

        const computerChoice = choices[randomIndex];
        
        computerSelectionInput.src = choiceImages[computerChoice];
        
        console.log("Computer Choice:", computerChoice);


        // Game logic
        if (userChoice === computerChoice) {

            alert("It's a tie!");

        } else if (

            (userChoice === "paper" && computerChoice === "rock")  ||
            (userChoice === "scissors" && computerChoice === "paper") ||
            (userChoice === "rock" && computerChoice === "scissors")

        ) {

            userNewScore++;

            localStorage.setItem("userNewScore", userNewScore);
            
            userScore.textContent = userNewScore;
            

            // alert("You won!");

        } else {

            computerNewScore++;

            localStorage.setItem("computerNewScore", computerNewScore);

            computerScore.textContent = computerNewScore;
            
            // alert("You lost!");
            

        }

    });

}


playGame();