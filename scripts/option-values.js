import data from '/scripts/country-states.json' assert {type: 'json'};

var select1 = document.getElementById("load-country");
var select2 = document.getElementById("unload-country");
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

var select3 = document.getElementById("load-city");
var select4 = document.getElementById("unload-city");

select1.addEventListener("change", function(){

    document.getElementById("loadCityJs").style.visibility = 'visible';
    let position = countries.findIndex(element => element.country === this.value);
    for(let i in countries[position].states){
        var option = document.createElement("option");
        option.text = countries[position].states[i];
        option.value = countries[position].states[i];
        select3.appendChild(option);
    }
});





    // for(let i in list_of_states){

    //     var option = document.createElement("option");
    //     option.text = countries[where].states[i];
    //     option.value = countries[i].country;
    //     select3.appendChild(option);
 

