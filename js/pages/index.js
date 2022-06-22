const cities_select = document.getElementById('select-city');
addCitiesToSelect(cities_select, cities);

function addCitiesToSelect(cities_select, cities) {
    for (i=0; i<cities.length; i++) {
        let city_in_select = document.createElement("option")
        let city_in_select_content = document.createTextNode(`${cities[i]}`);
        city_in_select.appendChild(city_in_select_content);
        city_in_select.setAttribute(`value`, `${cities[i]}`);
        cities_select.appendChild(city_in_select)
    }
}
