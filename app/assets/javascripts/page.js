
// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

// Draw map
var map = L.map( document.getElementById('map'), {
    center: [-37.457, -69.662],
    minZoom: 2,
    zoom: 5
});


L.tileLayer( 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    subdomains: ['a','b','c']
}).addTo( map );


var data = $.ajax({
	url: '/home/nvaldebenito/Documentos/fullstack/project/cr2mma-dev/storage/eto_hargreaves/tmp/ET0_1980_010_01_X_Harg_nc_v3.json',
	dataType: "json",
    success: console.log("County data successfully loaded."),
    error: function(xhr) {
        alert(xhr.statusText)
    }
})

$.when(data).done(function() {
    
    // var basemap = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
    //     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
    //     subdomains: 'abcd',
    //     maxZoom: 19
    // }).addTo(map);
    // Add requested external GeoJSON to map
    var kyCounties = L.geoJSON(data.responseJSON).bindPopup(function (layer) {
		    return layer.feature.properties.upperValue;
		}).addTo(map);
});

var data = $.ajax({
	url: '/home/nvaldebenito/Documentos/fullstack/project/cr2mma-dev/storage/eto_hargreaves/tmp/ET0_1980_010_01_X_Harg_nc_v3.json',
	dataType: "json",
    success: console.log("County data successfully loaded."),
    error: function(xhr) {
        alert(xhr.statusText)
    }
})

function getColor(d) {
    return d > 250 ? '#49006a' :
    	   d > 200 ? '#7a0177' :
    	   d > 150  ? '#ae017e' :
           d > 100  ? '#dd3497' :
           d > 80 ? '#f768a1' :
           d > 60  ? '#fa9fb5' :
           d > 40   ? '#fcc5c0' :
           d > 10   ? '#fde0dd' :
            		 '#fff7f3' ;
                     
}


function style(feature) {
    return {
        fillColor: getColor(feature.properties.n),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}

var legend = L.control({position: 'bottomright'});

legend.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend'),
        grades = [10, 40, 60, 80, 100, 150, 200, 250],
        labels = [];

    div.innerHTML +='<p> Precipitación [mm] </p>'

    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=

            '<i style="background:' + getColor(grades[i] + 1) + '"></i> '+
            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>':'+');
    }

    return div;
};

legend.addTo(map);

					

$.when(data).done(function() {
    
    // var basemap = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
    //     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
    //     subdomains: 'abcd',
    //     maxZoom: 19
    // }).addTo(map);
    // Add requested external GeoJSON to map
    var kyCounties = L.geoJSON(data.responseJSON,{
        style: style}).addTo(map);


})

   

