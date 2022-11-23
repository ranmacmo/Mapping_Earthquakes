// Create our initial map object
// Set the longitude, latitude, and the starting zoom level
var myMap = L.map("map", {
  center: [34.0522, -118.2437],
  zoom: 14
});

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

//  Add a marker to the map for Los Angeles, California.
L.marker([34.0522, -118.2437]).addTo(myMap);

// Add a circle to the map with radius of 100
L.circle([34.0522, -118.2437], {
   radius: 300,
   color: 'black',
   fill: true,
   fillColor : 'yellow'
}).addTo(myMap);