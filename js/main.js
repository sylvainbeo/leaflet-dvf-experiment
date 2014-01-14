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
                var options = {
                    data: {
                        'data1': feature.data1,
                        'data2': feature.data2,
                        'data3': feature.data3
                    },
                    chartOptions: {
                        'data1': {
                            fillColor: '#FF0000',
                            minValue: 0,
                            maxValue: 100,
                            maxHeight: 100,
                            displayText: function (value) {
                                return value + "%";
                            }
                        },
                        'data2': {
                            fillColor: '#0000FF',
                            minValue: 0,
                            maxValue: 100,
                            maxHeight: 100,
                            displayText: function (value) {
                                return value + "%";
                            }
                        },
                        'data3': {
                            fillColor: '#00FF00',
                            minValue: 0,
                            maxValue: 100,
                            maxHeight: 100,
                            displayText: function (value) {
                                return value + "%";
                            }
                        }
                    },
                    weight: 1,
                    color: '#666',
                    opacity: 1
                }
                var barChartMarker = new L.BarChartMarker(latlng, options);
                //var barChartMarker = new L.RadialBarChartMarker(latlng, options);
                //var barChartMarker = new L.StackedRegularPolygonMarker(latlng, options);
                //var barChartMarker = new L.PieChartMarker(latlng, options);    
                return barChartMarker;
            }
        });
        geojsonLayer.addTo(map);
    });    
});


