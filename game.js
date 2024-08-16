let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");
const resetButton = document.querySelector("#reset button");

genComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    console.log("game was draw");
    msg.innerText = "Game was draw, play again!"
    msg.style.backgroundColor = "black";

}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you win!!");
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        computerScore++
        computerScorePara.innerText = computerScore;
        console.log("you lose");
        msg.innerText = `You lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }    
}

const playGame =(userChoice) => {
    console.log("user choice = ", userChoice);
    //generate computer choice
    const compChoice = genComputerChoice();
    console.log("computer choice = ", compChoice);

if(userChoice === compChoice){
    //draw game
    drawGame();
 }  else {
    let userWin =true;
    if(userChoice === "rock"){
        //scissors, paper
        userWin = compChoice === "paper" ? false: true;
    } else if (userChoice === "paper"){
        //rock, scissors
        userWin = compChoice === "scissors" ? false: true;
    } else {
        //rock, paper
        userWin = compChoice === "rock" ? false: true;
    }
    showWinner(userWin, userChoice, compChoice);
 }

};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

const resetGame = () => {
    userScore = 0;
    computerScore = 0;
    userScorePara.innerText = userScore;
    computerScorePara.innerText = computerScore;
    msg.innerText = "Game reset. Place your move!";
    msg.style.backgroundColor = "blue"; // Reset message background color

    // Re-enable the choices
    choices.forEach(choice => {
        choice.addEventListener("click", handleChoiceClick);
    });
};

resetButton.addEventListener("click", resetGame);
