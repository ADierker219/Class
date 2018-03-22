document.addEventListener('DOMContentLoaded', function() {
    var map = L.map('map').setView([40.38, -105.5], 10);
L.tileLayer('https://api.mapbox.com/styles/v1/brightrain/ciycbsoa8007c2rqf7ym69old/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYnJpZ2h0cmFpbiIsImEiOiJyMjgtNGk4In0.Y64dPMiS4Xi8BXRiDhWXyg',
{
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18
}).addTo(map);

function showLatLng(e) {
  document.getElementById("whereIsThis").innerText = e.latlng.lat + " | " + e.latlng.lng;
}
map.on('mousemove', showLatLng);

document.getElementById("goToFRCCBoulder").onclick = function(){
  map.setView([40.1386, -105.12793], 16);
};

document.getElementById("goToRMNP").onclick = function(){
  map.setView([40.4, -105.8], 12);
};

function onMapClick(e) {
    var popup = L.popup()
    .setLatLng(e.latlng)
    .setContent("<center><img          src='http://dev.brightrain.com/recreationer/images/icon-map-marker.png'></center><h4>" + e.latlng.lat + " | " + e.latlng.lng + "</h4>")
    .openOn(map);
}

map.on('click', onMapClick);


var geojsonFeature = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "stroke": "#555555",
        "stroke-width": 2,
        "stroke-opacity": 1,
        "fill": "#555555",
        "fill-opacity": 0.5
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -105.56110382080078,
              40.065723429743045
            ],
            [
              -105.55732727050781,
              40.0683508507814
            ],
            [
              -105.55732727050781,
              40.07018998521041
            ],
            [
              -105.56110382080078,
              40.07018998521041
            ],
            [
              -105.56522369384766,
              40.06913905733146
            ],
            [
              -105.5679702758789,
              40.067037152929764
            ],
            [
              -105.56659698486327,
              40.064935183670286
            ],
            [
              -105.56110382080078,
              40.065723429743045
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -105.58891296386717,
              40.0762325058436
            ],
            [
              -105.59577941894531,
              40.071240896874585
            ],
            [
              -105.5950927734375,
              40.06940179082131
            ],
            [
              -105.58925628662108,
              40.07413082034294
            ],
            [
              -105.58891296386717,
              40.0762325058436
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -105.61328887939452,
              40.069664523297774
            ],
            [
              -105.61792373657227,
              40.07045271464657
            ],
            [
              -105.62255859375,
              40.0683508507814
            ],
            [
              -105.62101364135742,
              40.06756263511062
            ],
            [
              -105.6167221069336,
              40.068613587311496
            ],
            [
              -105.61328887939452,
              40.069664523297774
            ]
          ]
        ]
      }
    }
  ]
}


L.geoJSON(geojsonFeature).addTo(map)



});