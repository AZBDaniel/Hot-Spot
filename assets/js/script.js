//Javascirpt Goes Here//
var apiKey = AIzaSyA3pyIRKeVOMy99DHETNa1VrGExhuXM0Z8

document.getElementById("citySelect").onchange = function() {cityDisplay()};

function cityDisplay() {
    var place = document.getElementById("citySelect").value;
    document.getElementById("demo").innerHTML = "you selected " + place;

    if (place === "Sedona") {
        document.querySelector("#siteOne").innerHTML = "Sedona is a beautiful town :)";
    }



    //api call 
}

