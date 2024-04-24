const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const button = document.getElementById("myButton");
const max = 100;
const min = 1

button.onclick = function() {
    const rando1 = Math.floor(Math.random() * (max - min)) + min;
    const rando2 = Math.floor(Math.random() * (max - min)) + min;
    const rando3 = Math.floor(Math.random() * (max - min)) + min;
    label1.textContent = rando1;
    label2.textContent = rando2;
    label3.textContent = rando3;
}