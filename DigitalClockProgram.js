const time = document.getElementById("time");
const daycontain = document.getElementById("day");

function clockRun () {
    const timeNow = new Date();
    let hour = timeNow.getHours();
    const minute = timeNow.getMinutes().toString().padStart(2 , 0);
    const second = timeNow.getSeconds().toString().padStart(2 , 0);
    const day = timeNow.getDay();
    let dayName = "";

    function checkDay() {
        switch(day) {
            case 1 : dayName = "Monday";
            break;
            case 2 : dayName = "Tuesday";
            break;
            case 3 : dayName = "Wednesday";
            break;
            case 4 : dayName = "Thursday";
            break;
            case 5 : dayName = "Friday";
            break;
            case 6 : dayName = "Saturday";
            break;
            case 0 : dayName = "Sunday";
            break;
            default: dayName = "Not Working";
            break;
        }
        return dayName;
    }
    checkDay();

    let checkAMPM = hour >= 12 ? "PM" : "AM";
    hour = hour % 12 != 0 ? hour % 12 : 12;

    time.textContent = `${hour.toString().padStart(2 , 0)}:${minute}:${second} ${checkAMPM}`;
    daycontain.textContent = `Happy ${dayName}!`;
}

clockRun();

setInterval(clockRun , 1000);
