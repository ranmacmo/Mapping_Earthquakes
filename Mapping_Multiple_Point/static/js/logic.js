// Get data from cities.js
var cityData = cities;

// Create our initial map object
// Set the longitude, latitude, and the starting zoom level
var myMap = L.map("map", {
  center: [41.257160, -95.995102],
  zoom: 4
});

// Add a tile layer (the background map image) to our map
// We use the addTo method to add objects to our map

L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: 'mapbox/streets-v12',
  accessToken: API_KEY
}).addTo(myMap)




// Loop through the cities array and create one marker for each city.

// cityData.forEach(function(city) {
//     console.log(city)
//     L.marker(city.location)
//             .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//             .addTo(myMap);
// });

cityData.forEach(function (city){
    console.log(city)
    L.circleMarker(city.location,{
            radius: city.population/100000,
            color : 'orange',
            weight : 4})
            .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
            .addTo(myMap)

})