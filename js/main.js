$( document ).ready(function() {
    var map = L.map('map').setView([49.1, -0.5], 8);

    L.tileLayer('http://{s}.tile.cloudmade.com/BC9A493B41014CAABB98F0471D759707/997/256/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>'
    }).addTo(map);

    url = "data.json"
    $.getJSON(url, function(data) {
        geojsonLayer = L.geoJson(data, {
            pointToLayer: function (feature, latlng) {
                var geojsonMarkerOptions = {
                    radius: 8,
                    fillColor: "#ff7800",
                    color: "#000",
                    weight: 1,
                    opacity: 1,
                    fillOpacity: 0.8
                };
                return L.circleMarker(latlng, geojsonMarkerOptions);
            }
        });
        geojsonLayer.addTo(map);
    });    
});


