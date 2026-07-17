const apiKey = "81730710a26297e2f4ef8e7177189676";

const url = `https://api.openweathermap.org/data/2.5/forecast?lat=14.3294&lon=120.9367&units=metric&appid=${apiKey}`;

const weatherIcon = document.querySelector("#weather-icon");

async function getWeather() {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Weather data could not be fetched.");
        }

        const data = await response.json();

        displayCurrentWeather(data);
        displayForecast(data);

    } catch (error) {
        console.error(error);
    }
}

getWeather();

function displayCurrentWeather(data) {

    const current = data.list[0];

    document.querySelector("#temperature").textContent =
        `${Math.round(current.main.temp)}°C`;

    document.querySelector("#description").textContent =
        current.weather[0].description;

    const icon = current.weather[0].icon;

    const weatherIcon = document.querySelector("#weather-icon");

    weatherIcon.src = 
    `https://openweathermap.org/img/wn/${icon}@2x.png`;

    weatherIcon.hidden = false;

    weatherIcon.alt = 
    current.weather[0].description;
}

function displayForecast(data) {

    const forecast = document.querySelector("#forecast");

    forecast.innerHTML = "";

    const dailyForecast = data.list.filter(item =>
        item.dt_txt.includes("12:00:00")
    );

    dailyForecast.slice(0, 3).forEach(day => {

        const date = new Date(day.dt_txt);

        const dayName = date.toLocaleDateString("en-US", {
            weekday: "long"
        });

        const p = document.createElement("p");

        p.textContent = `${dayName}: ${Math.round(day.main.temp)}°C`;

        forecast.appendChild(p);
    });
}