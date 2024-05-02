const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
const playerresult = document.getElementById("playerresult");
const computerresult = document.getElementById("computerresult");
const result = document.getElementById("result");
const playerscore = document.getElementById("playerscore");
const computerscore = document.getElementById("computerscore");
const player = document.querySelectorAll(".player");

let playScore = 0;
let compScore = 0;

function playerplay (element) {
    switch(element) {
        case "rock" : playerresult.textContent = "Player: Rock";
        break;
        case "paper" : playerresult.textContent = "Player: Paper";
        break;
        case "scissor" : playerresult.textContent = "Player: Scissor";
        break;
    }
}

function computerplay () {
    const rand = Math.floor(Math.random() * 3 + 1);

    switch(rand) {
        case 1 : computerresult.textContent = "Computer: Rock";
        break;
        case 2 : computerresult.textContent = "Computer: Paper";
        break;
        case 3 : computerresult.textContent = "Computer: Scissor";
        break;
    }
}

function gameresult () {
    if (playerresult.textContent === "Player: Rock" && computerresult.textContent === "Computer: Paper") {
        result.textContent = "You Loose!";
        compScore++;
    } else if (playerresult.textContent === "Player: Rock" && computerresult.textContent === "Computer: Scissor") {
        result.textContent = "You Win!";
        playScore++;
    } else if (playerresult.textContent === "Player: Paper" && computerresult.textContent === "Computer: Rock") {
        result.textContent = "You Win!";
        playScore++;
    } else if (playerresult.textContent === "Player: Paper" && computerresult.textContent === "Computer: Scissor") {
        result.textContent = "You Loose!";
        compScore++;
    } else if (playerresult.textContent === "Player: Scissor" && computerresult.textContent === "Computer: Rock") {
        result.textContent = "You Loose!";
        compScore++;
    } else if (playerresult.textContent === "Player: Scissor" && computerresult.textContent === "Computer: Paper") {
        result.textContent = "You Win!";
        playScore++;
    } else {
        result.textContent = "It's a Draw!";
    }
    if(result.textContent === "You Win!") {
        result.style.color = "rgb(22, 221, 22)";
    } else if (result.textContent === "You Loose!") {
        result.style.color = "rgb(236, 77, 77)";
    } else {
        result.style.color = "rgb(141, 219, 23)";
    }
    playerscore.textContent = `Player Score: ${playScore.toString().padStart(2 , "0")}`;
    computerscore.textContent = `Computer Score: ${compScore.toString().padStart(2 , "0")}`;
}


player.forEach(play => {
    play.addEventListener("click" , event => {
        computerplay();
        playerplay(play.id);
        gameresult();
    })
})

