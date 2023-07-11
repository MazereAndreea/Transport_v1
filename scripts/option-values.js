import data from '/scripts/country-states.json' assert {type: 'json'};

var select = document.getElementById("incarcare");
var countries = data.countries;

for(let i in countries){
    var option = document.createElement("option");
    option.text = countries[i].country;
    option.value = countries[i].country;
    select.appendChild(option);
}