//Javascirpt Goes Here//
const baseAddress = 'https://api.tomtom.com/search/2';
const apiKey =  '09VVTnSYSZj980yCdD0Qs0S2EFo8GuFa';

async function getAddressCoordinates (query) {
    const response = await fetch(`${baseAddress}/geocode/${encodeURIComponent(query)}.json?key=${apiKey}`, {
      headers: {
        'Origin': 'https://developer.tomtom.com'
      }
    });
    return response.json();
  }
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
  search();