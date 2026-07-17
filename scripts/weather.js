const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

// Trier, Germany
const url =
"https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=metric&appid=81730710a26297e2f4ef8e7177189676";

async function apiFetch() {

    try {

        const response = await fetch(url);

        if (response.ok) {

            const data = await response.json();

            console.log(data);

            displayResults(data);

        } else {

            throw Error(await response.text());

        }

    } catch (error) {

        console.error(error);

    }

}

function displayResults(data){

    currentTemp.textContent = data.main.temp;

    const iconsrc =
        `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    const desc =
        data.weather[0].description;

    weatherIcon.setAttribute("src", iconsrc);

    weatherIcon.setAttribute("alt", desc);

    captionDesc.textContent = desc;

}

apiFetch();