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
const select = document.getElementById("load-country");

select.addEventListener("change", function(){
    const where = (element) => element = this.value;
    console.log(countries.findIndex(where));
});


    // for(let i in list_of_states){

    //     var option = document.createElement("option");
    //     option.text = countries[where].states[i];
    //     option.value = countries[i].country;
    //     select3.appendChild(option);
 

