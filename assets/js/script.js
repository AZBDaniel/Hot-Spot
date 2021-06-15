//Javascirpt Goes Here//

document.getElementById("stateSelect").onchange = function() {stateDisplay()};

function stateDisplay() {
    var place = document.getElementById("stateSelect").value;
    document.getElementById("demo").innerHTML = "you selected " + place;


    //api call 
}

