const decre = document.getElementById("decrement");
const rese = document.getElementById("reset");
const incre = document.getElementById("increment");
const label = document.getElementById("myLabel")

let count = 0;

decre.onclick = function () {
    count--;
    label.textContent = count;
}

rese.onclick = function () {
    count = 0;
    label.textContent = count;
}

incre.onclick = function () {
    count++;
    label.textContent = count;
}