const myTemp = document.getElementById("myTemp");
const toFahr = document.getElementById("toFahr");
const toCel = document.getElementById("toCel");
const mySubmit = document.getElementById("mySubmit");
const result = document.getElementById("result");

function fahr (myTemp) {
    return Math.trunc(9 * myTemp / 5 + 32); 
}

function cel (myTemp) {
    return Math.trunc(5 * (myTemp - 32) / 9); 
}


mySubmit.onclick = function () {
    if (toFahr.checked) {
        let answer = fahr(myTemp.value);
        result.textContent = `${answer} degree Fahrenheit!`;
    } else if (toCel.checked) {
        let answer = cel(myTemp.value);
        result.textContent = `${answer} degree Celsius!`;
    } else {
        result.textContent = (`You didn't select anything!`);
    }
}

