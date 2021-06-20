//Google Maps API
var apiKey = 'AIzaSyA3pyIRKeVOMy99DHETNa1VrGExhuXM0Z8'
var map;


//Google Maps JS Code
document.getElementById("citySelect").onchange = function () { cityDisplay(); weather(); };

function cityDisplay() {
    var place = document.getElementById("citySelect").value;

    var cityImage = document.getElementById('cityImage')


    if (place == "Phoenix") {


        cityImage.innerHTML = "<img src='./assets/images/phoenix.png' width='1000' height='1000'>"

        document.getElementById("demo2").innerHTML = "Arizona's capital in the Sonoran Desert, known for chic resorts, golf courses, & the home of the Phoenix Suns.";
        var map = new google.maps.Map(document.getElementById("mapDiv"), {
            center: new google.maps.LatLng(33.44872557096855, -112.07732143245543),
            zoom: 14,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });

        //create infowindow (which will be used by markers)
        var infoWindow = new google.maps.InfoWindow();

        //marker creater function (acts as a closure for html parameter)
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

        //add markers to map
        var Phoenix = createMarker({
            position: new google.maps.LatLng(33.44872557096855, -112.07732143245543),
            map: map,
            icon: "http://1.bp.blogspot.com/_GZzKwf6g1o8/S6xwK6CSghI/AAAAAAAAA98/_iA3r4Ehclk/s1600/marker-green.png"
        }, "<h1>Phoenix</h1>");

        var SunsArena = createMarker({
            position: new google.maps.LatLng(33.445740215343555, -112.07119959438322),
            map: map
        }, "<h1>Phoenix Suns Arena</h1>");

        var ChaseField = createMarker({
            position: new google.maps.LatLng(33.445335295770626, -112.06670845287437),
            map: map
        }, "<h1>Chase Field</h1>");
    }

    else if (place == "Tucson") {

        cityImage.innerHTML = "<img src='./assets/images/tucson.png' width='1000' height='1000'>"

        document.getElementById("demo2").innerHTML = "Southwestern city in the Sonoran Desert, home of University of Arizona & Saguaro National Park.";
        var map = new google.maps.Map(document.getElementById("mapDiv"), {
            center: new google.maps.LatLng(32.22256039879599, -110.97470036193934),
            zoom: 14,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });

        //creates infowindow (which will be used by markers)
        var infoWindow = new google.maps.InfoWindow();

        //marker creator function (acts as a closure for html parameter)
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

        //adds markers to map
        var Tucson = createMarker({
            position: new google.maps.LatLng(32.22256039879599, -110.97470036193934),
            map: map,
            icon: "http://1.bp.blogspot.com/_GZzKwf6g1o8/S6xwK6CSghI/AAAAAAAAA98/_iA3r4Ehclk/s1600/marker-green.png"
        }, "<h1>Tucson</h1>");

        var artMusuem = createMarker({
            position: new google.maps.LatLng(32.22342906598506, -110.97498211836474),
            map: map
        }, "<h1>Tucson Museum of Art</h1>");

        var uofa = createMarker({
            position: new google.maps.LatLng(32.23188296265308, -110.95011234629351),
            map: map
        }, "<h1>University of Arizona</h1>");
    }

    else if (place == "Flagstaff") {

        cityImage.innerHTML = "<img src='./assets/images/flagstaff.png' width='1000' height='1000'>"

        document.getElementById("demo2").innerHTML = "Arizona city known for San Francisco Peaks & Arizona Snowbowl skiing, plus Native American sites.";
        var map = new google.maps.Map(document.getElementById("mapDiv"), {
            center: new google.maps.LatLng(35.19877955557851, -111.6483567279641),
            zoom: 14,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });

        //creates infowindow (which will be used by markers)
        var infoWindow = new google.maps.InfoWindow();

        //marker creator function (acts as a closure for html parameter)
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

        //adds markers to map
        var dtF = createMarker({
            position: new google.maps.LatLng(35.19877955557851, -111.6483567279641),
            map: map,
            icon: "http://1.bp.blogspot.com/_GZzKwf6g1o8/S6xwK6CSghI/AAAAAAAAA98/_iA3r4Ehclk/s1600/marker-green.png"
        }, "<h1>Flagstaff</h1>");

        var pccc = createMarker({
            position: new google.maps.LatLng(35.16150899008569, -111.64735528631184),
            map: map
        }, "<h1>Pine Canyon Country Club</h1>");

        var lowellO = createMarker({
            position: new google.maps.LatLng(35.20291663518003, -111.66454211381244),
            map: map
        }, "<h1>Lowell Observatory</h1>");
    }

    else if (place == "Sedona") {

        cityImage.innerHTML = "<img src='./assets/images/sedona.png' width='1000' height='1000'>"

        document.getElementById("demo2").innerHTML = "Arizona desert town known for red-rock buttes like Cathedral Rock, canyons & art galleries.";
        var map = new google.maps.Map(document.getElementById("mapDiv"), {
            center: new google.maps.LatLng(34.86346157815572, -111.79579874706093),
            zoom: 14,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });

        //creates infowindow (which will be used by markers)
        var infoWindow = new google.maps.InfoWindow();

        //marker creator function (acts as a closure for html parameter)
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

        //adds markers to map
        var sedonaAC = createMarker({
            position: new google.maps.LatLng(34.86346157815572, -111.79579874706093),
            map: map,
            icon: "http://1.bp.blogspot.com/_GZzKwf6g1o8/S6xwK6CSghI/AAAAAAAAA98/_iA3r4Ehclk/s1600/marker-green.png"
        }, "<h1>Sedona</h1>");

        var pPark = createMarker({
            position: new google.maps.LatLng(34.875430777404574, -111.80837969158296),
            map: map
        }, "<h1>Amitabha Stupa and Peace Park</h1>");

        var sugarloafT = createMarker({
            position: new google.maps.LatLng(34.874286963609215, -111.79624645355497),
            map: map
        }, "<h1>Sugarloaf Trailhead</h1>");
    }
}

google.maps.event.addDomListener(window, "load", function () {

    //create map
    var map = new google.maps.Map(document.getElementById("mapDiv"), {
        center: new google.maps.LatLng(34.048927, -111.093735),
        zoom: 6,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    //create infowindow (which will be used by markers)
    var infoWindow = new google.maps.InfoWindow();

    //marker creater function (acts as a closure for html parameter)
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
});


//js weather code

var wApiKey = "48d7a84731553477886491771a6359f3";
var cityWeather = {};
var city = document.getElementById('citySelect');


function weather() {

    var searchHistory = JSON.parse(localStorage.getItem('searchHistory')) ?? [];
    searchHistory.push(city.value);
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));

    var list = document.getElementById('searchHistory');
    list.innerHTML = '';
    for (var i = 0; i < searchHistory.length; i++) {
        var p = document.createElement('p');
        p.appendChild(document.createTextNode(searchHistory[i]));
        list.appendChild(p);
    }

    fetchForecastByCity(city.value)
        .then(data => {
            console.log(data);

            document.getElementById('weatherD1').textContent = `${dayjs.unix(data.daily[1].dt).format('(MM/DD/YYYY)')}`;
            document.getElementById('iconD1').src = `http://openweathermap.org/img/wn/${data.daily[1].weather[0].icon}@2x.png`;
            document.getElementById('tempD1').textContent = `Temp: ${data.daily[1].temp.day}°F`;
            document.getElementById('windD1').textContent = `Wind: ${data.daily[1].wind_speed} MPH`;
            document.getElementById('humidityD1').textContent = `Humidity: ${data.daily[1].humidity} %`;

            document.getElementById('weatherD2').textContent = `${dayjs.unix(data.daily[2].dt).format('(MM/DD/YYYY)')}`;
            document.getElementById('iconD2').src = `http://openweathermap.org/img/wn/${data.daily[2].weather[0].icon}@2x.png`;
            document.getElementById('tempD2').textContent = `Temp: ${data.daily[2].temp.day}°F`;
            document.getElementById('windD2').textContent = `Wind: ${data.daily[2].wind_speed} MPH`;
            document.getElementById('humidityD2').textContent = `Humidity: ${data.daily[2].humidity} %`;

            document.getElementById('weatherD3').textContent = `${dayjs.unix(data.daily[3].dt).format('(MM/DD/YYYY)')}`;
            document.getElementById('iconD3').src = `http://openweathermap.org/img/wn/${data.daily[3].weather[0].icon}@2x.png`;
            document.getElementById('tempD3').textContent = `Temp: ${data.daily[3].temp.day}°F`;
            document.getElementById('windD3').textContent = `Wind: ${data.daily[3].wind_speed} MPH`;
            document.getElementById('humidityD3').textContent = `Humidity: ${data.daily[3].humidity} %`;

            document.getElementById('weatherD4').textContent = `${dayjs.unix(data.daily[4].dt).format('(MM/DD/YYYY)')}`;
            document.getElementById('iconD4').src = `http://openweathermap.org/img/wn/${data.daily[4].weather[0].icon}@2x.png`;
            document.getElementById('tempD4').textContent = `Temp: ${data.daily[4].temp.day}°F`;
            document.getElementById('windD4').textContent = `Wind: ${data.daily[4].wind_speed} MPH`;
            document.getElementById('humidityD4').textContent = `Humidity: ${data.daily[4].humidity} %`;

            document.getElementById('weatherD5').textContent = `${dayjs.unix(data.daily[5].dt).format('(MM/DD/YYYY)')}`;
            document.getElementById('iconD5').src = `http://openweathermap.org/img/wn/${data.daily[5].weather[0].icon}@2x.png`;
            document.getElementById('tempD5').textContent = `Temp: ${data.daily[5].temp.day}°F`;
            document.getElementById('windD5').textContent = `Wind: ${data.daily[5].wind_speed} MPH`;
            document.getElementById('humidityD5').textContent = `Humidity: ${data.daily[5].humidity} %`;
        });

};

function fetchForecastByCity(cityName) {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${wApiKey}`)
        .then(response => response.json())
        .then(data => fetchForecastByCoord(data.coord.lat, data.coord.lon));
}

function fetchForecastByCoord(lat, lon) {
    return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=imperial&appid=${wApiKey}`)
        .then(response => response.json());
}
