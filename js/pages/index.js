const cities_select = document.getElementById('select-city');
const button = document.getElementById("button-consult");
const weather_result = document.getElementById("section-weather-result");

addCitiesToSelect();

function addCitiesToSelect() {
    if (cities == "") {
        cities_select.innerHTML = `<option value="empty" disabled selected>No hay ciudades</option>`
    } else {
        for (i=0; i<cities.length; i++) {
            cities_select.innerHTML += `<option value="${cities[i]}">${cities[i]}</option>`
        }
    }
}