
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

    $("#pr").on('click', function () {
        $("#eto").removeClass('active');
        $("#pr").addClass('active');
    })
    $("#eto").on('click', function () {
        $("#pr").removeClass('active');
        $("#eto").addClass('active');
    })

    function downloadObjectAsJson(exportObj, exportName){
        var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
        
        
        var downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute("href",     dataStr);
        downloadAnchorNode.setAttribute("download", exportName + ".json");
        document.body.appendChild(downloadAnchorNode); // required for firefox
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
    }




    $("#restart").on('click', function (day,month,year,variable) {
   

        var removeMarkers = function() {
            map.eachLayer( function(layer) {

              if ( layer.myTag &&  layer.myTag === "myGeoJSON") {
                map.removeLayer(layer)
                  }

                });

        }

        document.getElementById('restart').addEventListener('click', function () {
        map.removeControl(legend); 
        removeMarkers()})
        



        L.tileLayer( 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
            subdomains: ['a','b','c']
        }).addTo( map );



        var day         = document.getElementById('day').value;
        var month       = document.getElementById('month').value;
        var year        = document.getElementById('year').value;


        
        console.log(day)
        console.log(month)
        console.log(year)

        if ($("#pr").hasClass('active')){
        
        url = "Chile-CHIRPSv20_MonthlyPCP-"+year+"-"+month+"-LatLong_EPSG4326.json"
        variable    = "Precipitación [mm]"
        

        }else if($("#eto").hasClass('active')){
        
        url = "ET0_"+year+"_"+month+"_"+day+"_X_Harg_nc_v3.json"
        variable    = "Evapotranspiración [mm]";
      
       
        }

        var max;
        var min;      
        

        var data = $.ajax({
        	url: url,
        	dataType: "json",
            success: console.log("County data successfully loaded."),
            error: function(xhr) {
                alert(xhr.statusText)
            }
        })

       $("#geojson").on('click', function () {
            $("#geojson").addClass('active');
            if ($("#geojson").hasClass('active')){
                downloadObjectAsJson(data.responseJSON, variable)
                console.log(data.responseJSON)
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
                opacity: 5,
                color: 'white',
                dashArray: '3',
                fillOpacity: 1
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

            div.innerHTML +='<p>'+variable+'</p>'

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

            
            
            var myGeoJSON = L.geoJSON(data.responseJSON,{ onEachFeature: function (feature, layer) {
                layer.myTag = "myGeoJSON"}, style: style}).addTo(map);
            //for changing latitudes to remap 
             console.log(myGeoJSON._layers)




        })
       



      

    })

});
