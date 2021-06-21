//Future Development move away from google API maps to TomTom API//
const baseAddress = 'https://api.tomtom.com/search/2';
const apiKey = '09VVTnSYSZj980yCdD0Qs0S2EFo8GuFa';

//takes searched address and returns lat and lon coordinates
async function getAddressCoordinates(query) {
    const response = await fetch(`${baseAddress}/geocode/${encodeURIComponent(query)}.json?key=${apiKey}`, {
        headers: {
            'Origin': 'https://developer.tomtom.com'
        }
    });
    return response.json();
}

//takes point of interest and searches on the lat lon coordinates
async function getPointsOfInterest(query, lat, lon) {
    const response = await fetch(`${baseAddress}/poiSearch/${encodeURIComponent(query)}.json?lat=${lat}&lon=${lon}&key=${apiKey}`, {
        headers: {
            'Origin': 'https://developer.tomtom.com'
        }
    });
    return response.json();
}

// This is the orchestration code
async function search() {
    const coords = (await getAddressCoordinates('Gilbert AZ')).results[0].position;
    console.log(coords);
    const res = await getPointsOfInterest('pizza', coords.lat, coords.lon);
    console.log(res);
}
//search call
search();