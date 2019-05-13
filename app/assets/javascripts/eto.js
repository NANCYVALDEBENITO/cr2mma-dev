
// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

// Draw map
$(function(){
    var map = L.map( document.getElementById('map'), {
        center: [-39.457, -69.662],
        minZoom: 2,
        zoom: 5
    });


    L.tileLayer( 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        subdomains: ['a','b','c']
    }).addTo( map );

    var day         = document.getElementById('day').value;
    var month       = document.getElementById('month').value;
    var year        = document.getElementById('year').value;
    var variable    = document.getElementById('eto');

    console.log(day)
    console.log(month)
    console.log(year)
    console.log(variable)

    var max;
    var min;      
    var url = "eto/ET0_"+year+"_"+month+"_"+day+"_X_Harg_nc_v3.json"

    var data = $.ajax({
    	url: url,
    	dataType: "json",
        success: console.log("County data successfully loaded."),
        error: function(xhr) {
            alert(xhr.statusText)
        }
    })

   
    function getMaxOfArray(numArray) {
      return Math.max.apply(null, numArray);
    }
    function getMinOfArray(numArray) {
      return Math.min.apply(null, numArray);
    }


   
    

    // Set the global configs to synchronous 
    $.ajaxSetup({
        async: false
    });

    // Your $.getJSON() request is now synchronous...

    $.getJSON(url, function (data) {
        jsonIssues = data.features;

         items = [];
        $.each(data.features, function (key, val) {
            $.each(val.properties, function(i,j){
                //console.log(i)
                items.push( j );
            })


        });


        var items = items.filter(function(x){ return x > -1 });
        max = getMaxOfArray(items);
        min = getMinOfArray(items);
       
        
       
        

    });
    
    // Set the global configs back to asynchronous 
    $.ajaxSetup({
        async: true
    });

 
    
    function getColor(d, min_value, max_value) {

        value = max_value - min_value;
        diff  = value/8;

        
        return d > max_value ? '#49006a' :
               d > min_value+6*diff ? '#7a0177' :
               d > min_value+5*diff  ? '#ae017e' :
               d > min_value+4*diff  ? '#dd3497' :
               d > min_value+3*diff ? '#f768a1' :
               d > min_value+2*diff  ? '#fa9fb5' :
               d > min_value+diff  ? '#fcc5c0' :
               d > min_value  ? '#fde0dd' :
                         '#fff7f3' ;
    }


                         
    //$(".form_datetime").datetimepicker({format: 'yyyy-mm-dd hh:ii'});

    function style(feature) {
        return {
            fillColor: getColor(feature.properties.n, min, max),
            weight: 2,
            opacity: 1,
            color: 'white',
            dashArray: '3',
            fillOpacity: 0.7
        };
    }

    var legend = L.control({position: 'bottomright'});

    legend.onAdd = function (map) {
        min_value = min;
        max_value = max;
        value = max_value - min_value;
        diff  = value/8;

        var div = L.DomUtil.create('div', 'info legend'),
            grades = [min_value, min_value+diff, min_value+2*diff, min_value+3*diff, min_value+4*diff, min_value+5*diff, min_value+6*diff, min_value+7*diff],
            labels = [];

        div.innerHTML +='<p> Evapotranspiración [mm] </p>'

        // loop through our density intervals and generate a label with a colored square for each interval
        for (var i = 0; i < grades.length; i++) {
            div.innerHTML +=

                '<i style="background:' + getColor(grades[i] + 1, min, max) + '"></i> '+
                grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>':'+');
        }

        return div;
    };

    legend.addTo(map);

    					

    $.when(data).done(function() {
        
        var kyCounties = L.geoJSON(data.responseJSON,{
            style: style}).addTo(map);


    })

});
