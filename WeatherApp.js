const citysubmit = document.querySelector(".citysubmit");
const cityinput = document.querySelector(".cityinput");
const apikey = "bb4813ba39dab4176f09cd0832e47627";
const card = document.querySelector(".card");

citysubmit.addEventListener("click" , getdata);

async function getdata () {

    const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${cityinput.value}&appid=${apikey}`;
    const respond = await fetch(apiurl);

    try {
        if (cityinput.value === "") {
            throw new Error("Enter A city!");
        } else if (!respond.ok) {
            throw new Error("Can't Get Data!");
        } else {
            const data = await respond.json();
            getweather(data);
        }
    } catch (error) {
        errorshow(error);
    }
}

function getweather (data) {
    console.log(data);
    card.style.display = "block";
    card.textContent = "";

    const city = document.createElement("h1");
    const temp = document.createElement("p");
    const humidity = document.createElement("p");
    const skycondition = document.createElement("p");
    const emoji = document.createElement("p");

    city.textContent = data.name;
    city.classList.add("city");
    card.appendChild(city);

    temp.textContent = `${(data.main.temp - 273.15).toFixed(1)}° C`;
    temp.classList.add("temp");
    card.appendChild(temp);

    humidity.textContent = `Humidity: ${data.main.humidity}%`;
    humidity.classList.add("humidity");
    card.appendChild(humidity);

    skycondition.textContent = `${data.weather[0].main}`;
    skycondition.classList.add("skycondition");
    card.appendChild(skycondition);

    emoji.textContent = emojishow(data.weather[0].id);
    emoji.classList.add("emoji");
    card.appendChild(emoji);
}

function emojishow(x) {

    switch(true) {
        case (x >= 200 && x < 300) :
            return "⚡";
        case (x >= 300 && x < 400) :
            return "🌧";
        case (x >= 500 && x < 600) :
            return "☔";
        case (x >= 600 && x < 700) :
            return "❄";
        case (x === 721) :
            return "🌫";
        case (x === 800) :
            return "🌞";
        case (x > 800 && x <= 810) :
            return "☁";
        default: 
            return "❓";
    }
}

function errorshow(error) {
    card.style.display = "block";
    card.textContent = "";
    const warning = document.createElement("p");
    warning.classList.add("warning");
    warning.textContent = error;
    card.appendChild(warning);
}

