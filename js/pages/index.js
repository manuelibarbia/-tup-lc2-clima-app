const cities_select = document.getElementById('select-city');
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