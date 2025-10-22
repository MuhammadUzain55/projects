let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg")


const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const optIdx = Math.floor(Math.random() * 3);
    return options[optIdx];
}

const showWinner = (userWin) => {
    if (userWin) {
        console.log("You Win!");
        msg.innerText = "You Win!"
        msg.style.backgroundColor = "green"
    } else {
        console.log("You Lose!");
        msg.innerText = "You Lose!"
        msg.style.backgroundColor = "red"
    }
}

const playGame = (userChoice) => {
    console.log("User Choice =", userChoice);
    const compChoice = genCompChoice()
    console.log("Comp Choice =", compChoice);
    
    if (userChoice === compChoice) {
        console.log("Game was draw.");
        msg.innerText = "Game was draw. Play again."
        msg.style.backgroundColor = '#081b31';
    } else {
        userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice)

    });
});