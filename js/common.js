let cities = getCitiesFromLocalStorage();
const api_key = "ff0ed85d936b39b952700f07222bdfea";

function getCitiesFromLocalStorage() {
    let cities = localStorage.getItem("CITIES");
    if (cities) {
        cities = JSON.parse(cities);
    } else {
        cities = [];
    }
    return cities;
}

async function consultApi(city_to_consult) {
    if (weather_result) {
        weather_result.innerHTML = "";
    }
    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_to_consult}&appid=${api_key}&units=metric&lang=es`)
        .then((response) => {
            return response.json();
        })
        .then(data => {
            weatherInfo(data);
        })
        .catch((error) => {
            console.error("Se ha encontrado un error: "+ error);
            return false;
        });
}

function weatherInfo(data) {
    let city = data.name;
    let icon = data.weather[0].icon;
    let temp = data.main.temp;
    let feels_like = data.main.feels_like;
    let humidity = data.main.humidity;
    let wind_speed = data.wind.speed;
    let pressure = data.main.pressure;

    let card = `<div class="card">
                    <h3>${city}</h3>
                    <img src="http://openweathermap.org/img/wn/${icon}.png" alt="Imagen">
                    <p>Temperatura: ${temp}°</p>
                    <p>Sensación Térmica: ${feels_like}°</p>
                    <p>Humedad: ${humidity}%</p>
                    <p>Velocidad del Viento: ${wind_speed}km/h</p>
                    <p>Presión: ${pressure} P</p>
                </div>`
    if (weather_result) {
        weather_result.innerHTML += card;
    }
}