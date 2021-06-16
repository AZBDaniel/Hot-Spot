//Javascirpt Goes Here//
var apiKey = 'AIzaSyA3pyIRKeVOMy99DHETNa1VrGExhuXM0Z8'
var map;

document.getElementById("citySelect").onchange = function () { cityDisplay() };

function cityDisplay() {
    var place = document.getElementById("citySelect").value;
    document.getElementById("demo").innerHTML = "you selected " + place;

    if (place === "Sedona") {
        document.querySelector("#siteOne").innerHTML = "Sedona is a beautiful town :)";
    }



    //api call 
}

/*
 * declare map as a global variable
 */


/*
 * use google maps api built-in mechanism to attach dom events
 */
google.maps.event.addDomListener(window, "load", function () {

    /*
     * create map
     */
    var map = new google.maps.Map(document.getElementById("map_div"), {
        center: new google.maps.LatLng(33.44872557096855, -112.07732143245543),
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    /*
     * create infowindow (which will be used by markers)
     */
    var infoWindow = new google.maps.InfoWindow();

    /*
     * marker creater function (acts as a closure for html parameter)
     */
    function createMarker(options, html) {
        var marker = new google.maps.Marker(options);
        if (html) {
            google.maps.event.addListener(marker, "click", function () {
                infoWindow.setContent(html);
                infoWindow.open(options.map, this);
            });
        }
        return marker;
    }

    /*
     * add markers to map
     */
    var Phoenix = createMarker({
        position: new google.maps.LatLng(33.44872557096855, -112.07732143245543),
        map: map,
        icon: "http://1.bp.blogspot.com/_GZzKwf6g1o8/S6xwK6CSghI/AAAAAAAAA98/_iA3r4Ehclk/s1600/marker-green.png"
    }, "<h1>Marker 0</h1><p>This is the home marker.</p>");

    var SunsArena = createMarker({
        position: new google.maps.LatLng(33.445740215343555, -112.07119959438322),
        map: map
    }, "<h1>Marker 1</h1><p>This is marker 1</p>");

    var ChaseField = createMarker({
        position: new google.maps.LatLng(33.445335295770626, -112.06670845287437),
        map: map
    }, "<h1>Marker 2</h1><p>This is marker 2</p>");
});

//Tucson coords
    //32.22256039879599, -110.97470036193934 (tucson city hall)
    //32.22342906598506, -110.97498211836474 (tucson museum of art)
    //32.23188296265308, -110.95011234629351 (university of arizona)

//Flagstaff coords
    //35.19877955557851, -111.6483567279641 (downtown flagstaff)
    //35.16150899008569, -111.64735528631184 (pine canyon country club)
    //35.20291663518003, -111.66454211381244 (lowell observatory)

//Sedona coords
    //34.86346157815572, -111.79579874706093 (sedona activity center)
    //34.875430777404574, -111.80837969158296 (Amitabha Stupa and Peace Park)
    //34.874286963609215, -111.79624645355497 (sugarloaf trailhead)