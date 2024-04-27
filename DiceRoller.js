const diceNum = document.getElementById("diceNum");
const submit = document.getElementById("submit");
const dice = document.getElementById("dice");
const diceImg = document.getElementById("diceImg");

function rollDice () {
    let numDice = [];
    let imgDice = [];

    for(let i = 0 ; i < diceNum.value ; i++) {
        const diceroll = Math.ceil((Math.random() * 6 - 1) + 1);
        numDice[i] = diceroll;
        imgDice[i] = `<img src="Image/${diceroll}.png" alt="Dice ${diceroll}">`;
    }

    dice.textContent = `you rolled ${numDice.join(", ")} dice/s`;
    diceImg.innerHTML = imgDice.join("");
}

submit.onclick = function() {
    rollDice();
}