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

// async function consultApi(city_to_consult) {
//     const api_response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_to_consult}&appid=${api_key}&units=metric&lang=es`, {
//         method: 'get'
//     })
//     return api_response
// }

function consultApi(city_to_consult) {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_to_consult}&appid=${api_key}&units=metric&lang=es`)
        .then(response => {
            if(response.ok) return response.json();
            throw new Error("error")
        })
        .then(data => {
            weatherInfo(data);
        })
        .catch(error => {
            return "error"
        });
}

function weatherInfo(data) {
    let city = data.name;
    let icon = data.weather[0].icon;
    let temp = data.main.temp;
    let feelsLike = data.main.feels_like;
    let humidity = data.main.humidity;
    let wind = data.wind.speed;
    let pressure = data.main.pressure;

    let card = `<div class="card">
                    <h3>${city}</h3>
                    <img src="http://openweathermap.org/img/wn/${icon}.png" alt="Imagen">
                    <p>Temperatura: ${temp}°</p>
                    <p>Sensación Térmica: ${feelsLike}°</p>
                    <p>Humedad: ${humidity}%</p>
                    <p>Velocidad del Viento: ${wind}km/h</p>
                    <p>Presión: ${pressure} P</p>
                </div>`

    let weather_result = document.getElementById("section-weather-result");
    if (weather_result) {
        weather_result.innerHTML = "";
        weather_result.innerHTML += card;
    }
}