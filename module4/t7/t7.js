const form = document.querySelector('#targetform')
const resultp = document.querySelector('#targetp')
const key = "758d665d75264dd782976d4dd0547953"

const map = L.map('map').setView([60.1785553, 24.8786212], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

const apiAddress = 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql';

function getRoute(origin, target) {
    // GraphQL query
    const GQLQuery = `{
  plan(
    from: {lat: ${origin.latitude}, lon: ${origin.longitude}}
    to: {lat: ${target.latitude}, lon: ${target.longitude}}
    numItineraries: 1
  ) {
    itineraries {
      legs {
        startTime
        endTime
        mode
        duration
        distance
        legGeometry {
          points
        }
      }
    }
  }
}`;

    const fetchOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
      'digitransit-subscription-key': key,
        },
        body: JSON.stringify({query: GQLQuery}),
    };

    fetch(apiAddress, fetchOptions).then(function (response) {
        return response.json();
    }).then(function (result) {
        console.log(result.data.plan.itineraries[0].legs);
        resultp.innerHTML = `start time: ${result.data.plan.itineraries[0].legs[0].startTime} <br> End time: ${result.data.plan.itineraries[0].legs[result.data.plan.itineraries[0].legs.length-1].endTime}`;
        const googleEncodedRoute = result.data.plan.itineraries[0].legs;
        for (let i = 0; i < googleEncodedRoute.length; i++) {
            let color = '';
            switch (googleEncodedRoute[i].mode) {
                case 'WALK':
                    color = 'green';
                    break;
                case 'BUS':
                    color = 'red';
                    break;
                case 'RAIL':
                    color = 'cyan'
                    break;
                case 'TRAM':
                    color = 'magenta'
                    break;
                default:
                    color = 'blue';
                    break;
            }
            const route = (googleEncodedRoute[i].legGeometry.points);
            const pointObjects = L.Polyline.fromEncoded(route).getLatLngs(); // fromEncoded: convert Google encoding to Leaflet polylines
            L.polyline(pointObjects).setStyle({
                color
            }).addTo(map);
        }
        map.fitBounds([[origin.latitude, origin.longitude], [target.latitude, target.longitude]]);
    }).catch(function (e) {
        console.error(e.message);
    });
}



form.addEventListener('submit', async function getcoordinates(evt) {
    evt.preventDefault();
    const query = document.querySelector('input[name=q]').value;
    const locationq = `https://api.digitransit.fi/geocoding/v1/search?text=${query}&digitransit-subscription-key=${key}`;

    fetch(locationq).then(function (response) {
        return response.json();
    }).then(function (result) {
        console.log(`long ${result.bbox[0]}`)
        console.log(`lat ${result.bbox[1]}`)
        getRoute({latitude: result.bbox[1], longitude: result.bbox[0]}, {latitude: 60.223850, longitude: 24.758631})
    });
    
});