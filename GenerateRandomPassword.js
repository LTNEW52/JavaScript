const passlength = document.getElementById("passlength");
const lower = document.getElementById("lower");
const upper = document.getElementById("upper");
const number = document.getElementById("number");
const symbol = document.getElementById("symbol");
const generate = document.getElementById("generate");
const result = document.getElementById("result");


const lowerCase = ["abcdefghijklmnopqrstuvwxyz"];
const upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
const numberArray = ["0123456789"];
const symbolArray = ["~!@#$%^&*_+-*/"];

function generatePass (passlength , lower , upper , number , symbol) {
    let check = [];
    check += lower.checked ? lowerCase : "";
    check += upper.checked ? upperCase : "";
    check += number.checked ? numberArray : "";
    check += symbol.checked ? symbolArray : "";

    let password = [];
    for(let i = 0 ; i < passlength.value ; i++) {
        let indexof = Math.floor(Math.random() * check.length + 1);
        password[i] = check[indexof];
    }
    console.log(password);
    return password;
}

generate.onclick = function () {
    let generatepassword = generatePass(passlength , lower , upper , number , symbol);
    if (generatepassword.join("") != "") {
        result.textContent = generatepassword.join("");
    } else {
        result.textContent = "You have to select atleast one!";
    }
}
