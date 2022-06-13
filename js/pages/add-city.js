// local Storage va a guardar un arreglo de ciudades agregadas
function saveInfoInLocalStorage() {
    let campo_lleno = true;
    let city_to_add = document.getElementById("city-to-add");
    if (city_to_add.value === "") {
        campo_lleno = false
    }

    if (campo_lleno) {
        alert(city_to_add.value)
    }
    else {
        let P_error = document.createElement("p");
        let P_error_content = document.createTextNode("La ciudad ingresada no se encuentra en la API o se produjo un error al consultar");
        P_error.appendChild(P_error_content);
        let div_messages = document.getElementById("messages_add_city");
        div_messages.appendChild(P_error);
        P_error.setAttribute("class", "message error")
    }
}

// function getCitiesFromLocalStorage() {
//     let cities = localStorage.getItem("CITIES");
//     if (cities) {
//         cities = JSON.parse(cities);
//     } else {
//         cities = [];
//     }
//     return cities;
// }
// function addNewCityToLocalStorage(newCity) {
//     let cities = getCitiesFromLocalStorage();
//     cities.push(newCity);
//     localStorage.setItem(“CITIES”, JSON.stringify(cities));
// }