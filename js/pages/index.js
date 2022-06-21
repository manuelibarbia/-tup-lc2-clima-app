let selector = document.getElementById("select-city");
console.log(selector)


function getCitiesFromLocalStorage() {
    let cities = localStorage.getItem("CITIES");
    if (cities) {
        cities = JSON.parse(cities);
    } else {
        cities = [];
    }
    return cities;
}

// function addCitiesToSelector () {
//     let cities = getCitiesFromLocalStorage();
    
//     selector.innerHTML += `<option value="" disabled selected>Seleccionar ciudad</option>`
//     for (let i = 0; i < cities.length; i++) {
//         selector.innerHTML += `<option value="${cities[i]}">${cities[i]}</option>`
//     }
// }
//