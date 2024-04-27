const passlength = 16;
const hasLowerCase = true;
const hasUpperCase = true;
const hasNumber = true;
const hasSymbol = true;

const lowerCase = ["abcdefghijklmnopqrstuvwxyz"];
const upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
const number = ["0123456789"];
const symbol = ["!@#%^&*+-*/"];

function generatePassword (passlength , hasLowerCase , hasUpperCase , hasNumber , hasSymbol) {
    let choice = [];
    choice += hasLowerCase ? lowerCase : "";
    choice += hasUpperCase ? upperCase : "";
    choice += hasNumber ? number : "";
    choice += hasSymbol ? symbol : ""; 

    let password = [];

    for (let i = 0 ; i < passlength ; i++) {
        password += choice[Math.floor(Math.random() * choice.length)];
    }

    return password;
}

let generatedPassword = generatePassword(passlength , hasLowerCase , hasUpperCase , hasNumber , hasSymbol);
document.write(generatedPassword);

