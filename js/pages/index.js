const cities_select = document.getElementById('select-city');
const button = document.getElementById("button-consult");

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

button.addEventListener("click", async() => {
    const city_to_consult = cities_select.value
    const resultadoBusqueda = await consultApi(city_to_consult)
    console.log(resultadoBusqueda)
})

function addCardToApp() {
    consultApi(city_to_consult);
}

// function consultApi() {
//     let city_to_consult = cities_select.value;
//     fetch(`api.openweathermap.org/data/2.5/weather?q=${city_to_consult}&appid=${api_key}&units=metric&lang=es`)
//         .then((response) => {
//             console.log(response)
//         }).catch((error) => {
//             console.error(error);
//         });
// }

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
//