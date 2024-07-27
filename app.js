let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");

const genComChoice = () =>{
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}


const draw = () =>{
    console.log("game was draw");
}

const playGame = (userChoice) =>{
    console.log("user choice :", userChoice)
    const compChoice = genComChoice();
    console.log("compChoice", compChoice);

    if(userChoice === compChoice){
        draw();
    }
}


choices.forEach((choice) =>{
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice)
    })
})