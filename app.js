let userScore = 0;
let compScore = 0;

const message = document.querySelector("#msg");
const choices = document.querySelectorAll(".choice");
const user = document.querySelector("#user-score");
const comp = document.querySelector("#comp-score");

const playGame = (userChoice) => {
    const compChoice = computerChoice();
    console.log("User choice is - " +userChoice);
    console.log("Computer choice is - " +compChoice);

    if(userChoice === compChoice){
        console.log("Tie");
        message.innerHTML = "It was a Draw";
    } 
    else{
        if((userChoice === "paper" && compChoice === "scissors") ||
           (userChoice === "rock" && compChoice === "paper") || 
           (userChoice === "scissors" && compChoice === "rock")){
            console.log("Computer won !");
            message.innerHTML = "Computer won !";
            comp.innerHTML = ++compScore;
        }
        else{
            console.log("User won");
            message.innerHTML = "You won !";
            user.innerHTML = ++userScore;
        }

        message.innerHTML = message.innerHTML + `\nComputer Chose - ${compChoice}, Your Chose - ${userChoice}`;
    }
};

const computerChoice = () => {
    // randomly select rock, paper, scissor
    const options = ["rock","paper","scissors"];
    const randIndx = Math.floor(Math.random()*3);
    return options[randIndx];
};

choices.forEach((choice) => {
    choice.addEventListener(("click"), () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
}) ;