const watch = document.getElementById("watch");

let starttime = 0;
let elapsedtime = 0;
let timer = null;
let isRunning = false;

function start() {
    if (!isRunning) {
        starttime = Date.now() - elapsedtime;
        timer = setInterval(update , 10);
        isRunning = true;
    }
}

function update () {
    const currenttime = Date.now();
    elapsedtime = currenttime - starttime;

    let hour = Math.floor(elapsedtime / (1000*60*60));
    let minute = Math.floor(elapsedtime / (1000*60) % 60);
    let second = Math.floor(elapsedtime / 1000 % 60);
    let milisecond = Math.floor(elapsedtime % 1000 / 10);

    watch.textContent = `${hour.toString().padStart(2 , 0)}:${minute.toString().padStart(2 , 0)}:${second.toString().padStart(2 , 0)}:${milisecond}`;
    watch.style = "color: rgb(96, 255, 96)";
}

function stop () {
    if (isRunning) {
        clearInterval(timer);
        elapsedtime = Date.now() - starttime;
        isRunning = false;
        watch.style = "color: rgb(253, 116, 116)";
    }
}

function reset() {
    clearInterval(timer);
    starttime = 0;
    elapsedtime = 0;
    isRunning = false;

    watch.textContent = `00:00:00:00`;
    watch.style = "color: #6868f8";
}