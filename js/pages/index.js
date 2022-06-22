const cities_select = document.getElementById('select-city');
let city_to_consult = addCityToConsult(cities_select.value)
const api_key = "ff0ed85d936b39b952700f07222bdfea";
let api_url = `api.openweathermap.org/data/2.5/weather?q=Rosario&appid=${api_key}&units=metric&lang=es`

addCitiesToSelect();

function addCityToConsult (cities_select) {
    let city_to_consult = cities_select;
    return city_to_consult;
}

function addCitiesToSelect() {
    if (cities == "") {
        cities_select.innerHTML = `<option value="empty" disabled selected>No hay ciudades</option>`
    } else {
        for (i=0; i<cities.length; i++) {
            cities_select.innerHTML += `<option value="${cities[i]}">${cities[i]}</option>`
        }
    }
}

async function consultApi() {
    const api_response = await fetch(`${api_url}`, {
        method: 'get'
    })
    return api_response
}

// const apiUrl = "https://pokeapi.co/api/v2/"
// async function buscarPokemon(nombrePokemon) {
//     const respuestaApi = await fetch(`${apiUrl}pokemon/${nombrePokemon}`, {
//         method: 'get'
//     })

//     return respuestaApi
// }

// function addCitiesToSelect() {
//     if (cities == "") {
//         cities_select.innerHTML = `<option value="empty" disabled selected>No hay ciudades</option>`
//     } else {
//         for (i=0; i<cities.length; i++) {
//             let city_in_select = document.createElement("option")
//             let city_in_select_content = document.createTextNode(`${cities[i]}`);
//             city_in_select.appendChild(city_in_select_content);
//             city_in_select.setAttribute(`value`, `${cities[i]}`);
//             cities_select.appendChild(city_in_select)
//         }
//     }
// }