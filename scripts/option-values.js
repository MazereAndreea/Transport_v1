import data from '/scripts/country-states.json' assert {type: 'json'};

var select1 = document.getElementById("load-country");
var select2 = document.getElementById("unload-country");
var select3 = document.getElementById("load-city");
var select4 = document.getElementById("unload-city");

var countries = data.countries;

for(let i in countries){
    //for first select
    var option1 = document.createElement("option");
    option1.text = countries[i].country;
    option1.value = countries[i].country;
    select1.appendChild(option1);
    //for second select
    var option2 = document.createElement("option");
    option2.text = countries[i].country;
    option2.value = countries[i].country;
    select2.appendChild(option2);
}

//for loading cities based on country selected
select1.addEventListener("change", function(){

    removeOptions(select3);
    assignOptions(select3, this.value);
});

//for unloading cities based on country selected
select2.addEventListener("change", function(){

    removeOptions(select4);
    assignOptions(select4, this.value);
});


//Function for removing the state options (when choosing another country)
function removeOptions(element){
    for(var i = element.options.length-1; i>=0; i--){
        element.remove(i);
    }
}

//for assigning states options for country selected
function assignOptions(element, countrySelected){
    let position = countries.findIndex(par => par.country === countrySelected);
    for(let i in countries[position].states){
        var option = document.createElement("option");
        option.text = countries[position].states[i];
        option.value = countries[position].states[i];
        element.appendChild(option);
    }
}




