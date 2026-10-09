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
        


        // Game logic
        if (userChoice === computerChoice) {

            
            

                showNotice("Bro! It's a tie ");
          
         

        } else if (

            (userChoice === "paper" && computerChoice === "rock")  ||
            (userChoice === "scissors" && computerChoice === "paper") ||
            (userChoice === "rock" && computerChoice === "scissors")

        ) {

            userNewScore++;

            localStorage.setItem("userNewScore", userNewScore);
            
            userScore.textContent = userNewScore;
            

            showNotice("wow! you won this round");

        } else {

            computerNewScore++;

            localStorage.setItem("computerNewScore", computerNewScore);

            computerScore.textContent = computerNewScore;
            
           showNotice("Haha! You lost this Round")
            

        }

    });

}


playGame();



// exit options 


function showNotice(message){


const exitBoard = document.querySelector(".exit-board");
const homeBtn = document.querySelector(".home-btn");
const overLay = document.getElementById("overLay");
const exitBtn = document.querySelector(".exit-btn")
const cancelBtn = document.querySelector(".cancel-btn");
const boardMsg = document.querySelector(".board-msg");

    
    exitBoard.classList.add("show");
    overLay.style.display = "block";

    boardMsg.textContent = message;


exitBoard.addEventListener("click", (event)=>{
    if(event.target.classList.contains("exit-btn")){
        window.location.href = "index.html";
    }
    else{
        exitBoard.classList.remove("show")
        overLay.style.display = "none";
    }
})


}
    



