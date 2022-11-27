// Add GeoJSON data.
// let sanFranAirport =
// {"type":"FeatureCollection","features":[{
//     "type":"Feature",
//     "properties":{
//         "id":"3469",
//         "name":"San Francisco International Airport",
//         "city":"San Francisco",
//         "country":"United States",
//         "faa":"SFO",
//         "icao":"KSFO",
//         "alt":"14",
//         "tz-offset":"-8",
//         "dst":"A",
//         "tz":"America/Los_Angeles"},
//         "geometry":{
//             "type":"Point",
//             "coordinates":[-122.375,37.61899948120117]}}
// ]};


// Create our initial map object
// Set the longitude, latitude, and the starting zoom level

// Create the map object with center at the San Francisco airport.
let myMap = L.map('map').setView([37.5, -122.5], 10);



// Add a tile layer (the background map image) to our map
// We use the addTo method to add objects to our map

L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: 'mapbox/dark-v10',
  accessToken: API_KEY
}).addTo(myMap)


// Grabbing our GeoJSON data.
L.geoJSON(sanFranAirport, {
    // We turn each feature into a marker on the map.
      pointToLayer: function(feature, latlng) {
          console.log(feature)
          return L.marker(latlng)
              .bindPopup("<h2>" + "Airport Code: " + feature.properties.faa + "</h2>" +
              "<hr>" + "<B>Airport Name: </B>"  + feature.properties.name);

    }

  }).addTo(myMap);