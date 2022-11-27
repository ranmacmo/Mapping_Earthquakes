
// Accessing the airport GeoJSON URL
let torontoData = "https://raw.githubusercontent.com/ranmacmo/Mapping_Earthquakes/Mapping_GeoJSON_Linestrings/Mapping_GeoJSON_Linestrings/torontoRoutes.json";

// Adding a dark tile layer
let dark = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: 'mapbox/dark-v10',
  accessToken: API_KEY
});

// Adding street tile layer
let light = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/light-v10",
  accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
  "Day Navigation" : light,
  "Night Navigation" : dark
};

// Create the map object with center, zoom level and default layer.
let myMap = L.map('map', {
    center: [44.0, -80.0],
    zoom: 2,
    layers: [light]
})


// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(myMap);


// Create a style for the lines.
let myStyle = {
    color: "#ffffa1",
    weight: 2
}


// Grabbing our GeoJSON data.
// d3.json(torontoData).then(function(data) {
//     console.log(data);
//   // Creating a GeoJSON layer with the retrieved data.
//   L.geoJSON(data).addTo(myMap);
// });



// ** Grabbing our GeoJSON data
d3.json(torontoData).then(function(data) {
    console.log(data)
  // Creating a GeoJSON layer with retrieved data
  L.geoJson(data, {
    style:myStyle,
    onEachFeature: function(features, layer){
      layer.bindPopup("<h3> Airline: " + features.properties.airline + "</h3>" + features.properties.dst)
    }
  }).addTo(myMap);
});