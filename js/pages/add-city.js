// local Storage va a guardar un arreglo de ciudades agregadas
let cities = getCitiesFromLocalStorage();

function addNewCityToLocalStorage() {
    let newCity = document.getElementById("city-to-add");
    if (validateCity(newCity.value) === true && newCity.value !== "") {
        cities.push(newCity.value);
        localStorage.setItem("CITIES", JSON.stringify(cities));
    } else {
        alert("Error: ingresó una ciudad ya almacenada o el campo no fue completado.")
    }
    newCity.value = ""
}

function getCitiesFromLocalStorage() {
    let cities = localStorage.getItem("CITIES");
    if (cities) {
        cities = JSON.parse(cities);
    } else {
        cities = [];
    }
    return cities;
}

function validateCity(newCity) {
    list_validate = localStorage.getItem("CITIES");
    console.log(list_validate)
    if (list_validate != null)
    {
        list_validate = list_validate.toLowerCase()
    }
    list_validate = JSON.parse(list_validate);
    newCity = newCity.toLowerCase();
    if (list_validate != null) {
        if (list_validate.includes(newCity)) {
            return false;
        }else {
            return true;
        }
    } else {
        return true;
    }
}

// function validateCity(newCity) {
//     list_validate = localStorage.getItem("CITIES")
//     list_validate = JSON.parse(list_validate)
//     for (i = 0; i<=list_validate.length; i++) {
//         if (newCity.value === list_validate[i]) {
//             alert("La ciudad ya está almacenada.")
//             break
//         }
//     }
// }

// function validateInfo() {
//     let campo_lleno = true;
//     const city_to_add = document.getElementById("city-to-add");
//     if (city_to_add.value === "") {
//         campo_lleno = false
//     }
//     let div_messages = document.getElementById("messages_add_city")
//     div_messages.innerHTML = ""
//     if (campo_lleno) {
//         let P_success = document.createElement("p");
//         let P_success_content = document.createTextNode("Ciudad agregada con éxito");
//         P_success.appendChild(P_success_content);
//         let div_messages = document.getElementById("messages_add_city");
//         div_messages.appendChild(P_success);
//         P_success.setAttribute("class", "message success")
//     } else {
//         let P_error = document.createElement("p");
//         let P_error_content = document.createTextNode("La ciudad ingresada no se encuentra en la API o se produjo un error al consultar");
//         P_error.appendChild(P_error_content);
//         let div_messages = document.getElementById("messages_add_city");
//         div_messages.appendChild(P_error);
//         P_error.setAttribute("class", "message error")
//     }
// }