
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
    $("#eto").addClass('active');
    $("#pr_date").hide();
    $("#pr_date_start").hide();
    $("#pr_date_end").hide();

    $("#pr").on('click', function () {
        $("#eto").removeClass('active');
        $("#pr").addClass('active');

        $("#eto_date").hide();
        $("#eto_date_start").hide();
        $("#eto_date_end").hide();

        $("#pr_date").show();
        $("#pr_date_start").show();
        $("#pr_date_end").show();

    })
    $("#eto").on('click', function () {
        $("#pr").removeClass('active');
        $("#eto").addClass('active');

        $("#eto_date").show();
        $("#eto_date_start").show();
        $("#eto_date_end").show();

        $("#pr_date").hide();
        $("#pr_date_start").hide();
        $("#pr_date_end").hide();
    })

    




    $("#restart").on('click', function (day,month,year,variable) {
 
        
        document.getElementById('restart').addEventListener('click', function () {
        map.removeControl(legend); 
        map.eachLayer(function (layer) {
            map.removeLayer(myGeoJSON)
          
        });
        console.log("reading GEOJSON")
        console.log(myGeoJSON)
        })
        L.tileLayer( 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
            subdomains: ['a','b','c']
        }).addTo( map );
        
       

        if ($("#pr").hasClass('active')){
        
            var month       = document.getElementById('month-pr').value;
            var year        = document.getElementById('year-pr').value;

            
            url = "Chile-CHIRPSv20_MonthlyPCP-"+year+"-"+month+"-LatLong_EPSG4326.json"
            variable    = "Precipitación [mm]"
            

        }else if($("#eto").hasClass('active')){
        
            var day         = document.getElementById('day-eto').value;
            var month       = document.getElementById('month-eto').value;
            var year        = document.getElementById('year-eto').value;


            url = "ET0_"+year+"_"+month+"_"+day+"_X_Harg_nc_v3.json"
            variable    = "Evapotranspiración [mm]";
          
       
        }

        var max,min;      
        

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
                Geofunction.download(data.responseJSON, variable)
                console.log(data.responseJSON)
            }
            $("#geojson").removeClass('active');

        })


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
            max = Geofunction.getMax(items);
            min = Geofunction.getMin(items);
           
            
           
            

        });
        
        // Set the global configs back to asynchronous 
        $.ajaxSetup({
            async: true
        });

            
        


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

                    '<i style="background:' + Geofunction.getColor(grades[i] + 1, min, max) + '"></i> '+
                    grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>':'+');
            }

            return div;
        };

        legend.addTo(map);
        
        function style(feature) {
            return {
                fillColor: Geofunction.getColor(feature.properties.n, min, max),
                weight: 2,
                opacity: 5,
                color: 'white',
                dashArray: '3',
                fillOpacity: 1
            };
        }
        var myGeoJSON;
        $.ajaxSetup({
            async: false
        });


        $.when(data).done(function() {

    
            myGeoJSON = L.geoJSON(data.responseJSON, {style: style }).addTo(map);
            //for changing latitudes to remap 
             console.log(myGeoJSON._layers)

        $.ajaxSetup({
            async: true
        });




        })
       



      

    })
    $("#average").on('click', function (day,month,year,variable) {
   

        document.getElementById('average').addEventListener('click', function () {
        map.removeControl(legend); 
        map.eachLayer(function (layer) {
            map.removeLayer(myGeoJSON)
          
        });
        })
     
        L.tileLayer( 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
            subdomains: ['a','b','c']
        }).addTo( map );


        if ($("#pr").hasClass('active')){
        
            var month_start       = document.getElementById('month-pr-start').value;
            var year_start        = document.getElementById('year-pr-start').value;
            var month_end         = document.getElementById('month-pr-end').value;
            var year_end          = document.getElementById('year-pr-end').value;


            var i
            var url=[]

            //console.log(year_end)
            //console.log(year_start)
            months_number = (parseInt(year_end)-parseInt(year_start))*12 -parseInt(month_start)+parseInt(month_end)+1
            years_number  = parseInt(year_end)-parseInt(year_start)

            console.log(months_number)
            console.log(years_number)
            if (years_number >= 1){
                //more than one year
                months=[];
                years=[];
                for (j = 0; j < years_number; j++) { 
                    for (i = 0; i < months_number; i++) { 
                        console.log(months_number)
                        console.log(months_number/12)
                        //changing months
                        //months 01-09
                        if ((String(parseInt(month_start)+i)).length == 1){
                            months.push("0"+String(parseInt(month_start)+i))
                        }else{
                            //months 01-09 len>12
                            if (parseInt(month_start)+i >12){
                                console.log("0"+String(1+i))
                                months.push("0"+String(1+i))
                            }
                            //months 10 to 12
                            else{
                                console.log("0"+String(parseInt(month_start)+i))
                                months.push("0"+String(parseInt(month_start)+i))
                            }
                            
                        }

                        //changing years
                        console.log((String(parseInt(year_start)+j)).length)
                        console.log(j)
                        years.push(String(parseInt(year_start)+j))
                        console.log(months)
                        console.log(years) 
                        for (n = 0; n < years.length; n++) { 
                            for (m = 0; m < months.length; m++) { 

                                url.push("Chile-CHIRPSv20_MonthlyPCP-"+String(years[n])+"-"+String(months[m])+"-LatLong_EPSG4326.json") ;
                            }
                        }
                    }

                }

           
            }else{
                //only one year but must change monthly
                months=[]
                
                for (i = 0; i < months_number; i++) { 
                    
                    if ((String(parseInt(month_start)+i)).length == 1){
                        months.push("0"+String(parseInt(month_start)+i))
                    }else{
                        months.push("0"+String(parseInt(month_start)+i))
                    }
                    //months.push()

                    url.push("Chile-CHIRPSv20_MonthlyPCP-"+String(year_start)+"-"+String(months[i])+"-LatLong_EPSG4326.json") ;
                    

                }

           
            }  
          
            
            
            console.log(url[0])
            console.log(url)
           
            variable    = "Precipitación [mm]"
            

        }else if($("#eto").hasClass('active')){
        
            var day_start         = document.getElementById('day-eto-start').value;
            var month_start       = document.getElementById('month-eto-start').value;
            var year_start        = document.getElementById('year-eto-start').value;

            var day_end           = document.getElementById('day-eto-end').value;
            var month_end         = document.getElementById('month-eto-end').value;
            var year_end          = document.getElementById('year-eto-end').value;



            url = "ET0_"+year+"_"+month+"_"+day+"_X_Harg_nc_v3.json"
            variable    = "Evapotranspiración [mm]";
          
       
        }

        var max,min;      
        
        //console.log(url)
        //console.log(url.length)

        function average_chart(lat, lon){
            chart=[];
            
            // Set the global configs to synchronous 
            $.ajaxSetup({
                async: false
            });

            for (e = 0; e < url.length; e++) { 
                
                
                
                console.log(e)
                // var data = $.ajax({
                //     url: url[m],
                //     dataType: "json",
                //     success: console.log("County data successfully loaded."),
                //     error: function(xhr) {
                //         alert(xhr.statusText)
                //     }
                // })
               
              
                console.log(url[e])
               

                $.getJSON(url[e], function (data) {
                    var items =[];
                    jsonIssues = data.features;
                    $.each(data.features, function (key, val) {
                        $.each(val.geometry.coordinates, function(i,j){
                            for (f = 0; f < j.length; f++) { 
                                if (lat == j[f][0] && lon == j[f][1]){
                                    $.each(j, function(i,j){
                                        if (lat == j[0] && lon == j[1]){
                                            $.each(val.properties, function(u,v){
                                                items.push( v );
                                            })
                                        }

                                    })
                                }
                            }  
                        })
                    })
                    //console.log(items)
                    console.log(items)
                    chart.push(Geofunction.average(items));
                   

                   
                   
                })
                
                //console.log(items)
                //chart.push(Geofunction.average(items));
                //items =[];

          
           

            }
            console.log(chart)
              
            var chart = chart.filter(function(x){ return x > -1 });
            //max = Geofunction.getMax(items);
            //min = Geofunction.getMin(items);
            // Set the global configs back to asynchronous 
            $.ajaxSetup({
                async: true
            });
            var dataseries = [
              {
                x: ['2013-10-04 22:23:00', '2013-11-04 22:23:00', '2013-12-04 22:23:00'],
                y: chart,
                type: 'scatter'
              }
            ];

            Plotly.newPlot('chart', dataseries);

        }
        average_chart(-72.5999984, -45.20000141851692) 


       // $("#geojson").on('click', function () {
       //      $("#geojson").addClass('active');
       //      if ($("#geojson").hasClass('active')){
       //          Geofunction.download(data.responseJSON, variable)
       //          console.log(data.responseJSON)
       //      }
       //      $("#geojson").removeClass('active');

       //  })


       
            
        


        // var legend = L.control({position: 'bottomright'});


        // legend.onAdd = function (map) {
        //     min_value = min;
        //     max_value = max;
        //     value = max_value - min_value;
        //     diff  = value/8;

        //     var div = L.DomUtil.create('div', 'info legend'),
        //         grades = [min_value, min_value+diff, min_value+2*diff, min_value+3*diff, min_value+4*diff, min_value+5*diff, min_value+6*diff, min_value+7*diff],
        //         labels = [];

        //     div.innerHTML +='<p>'+variable+'</p>'

        //     // loop through our density intervals and generate a label with a colored square for each interval
        //     for (var i = 0; i < grades.length; i++) {
        //         div.innerHTML +=

        //             '<i style="background:' + Geofunction.getColor(grades[i] + 1, min, max) + '"></i> '+
        //             grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>':'+');
        //     }

        //     return div;
        // };

        // legend.addTo(map);
        
        // function style(feature) {
        //     return {
        //         fillColor: Geofunction.getColor(feature.properties.n, min, max),
        //         weight: 2,
        //         opacity: 5,
        //         color: 'white',
        //         dashArray: '3',
        //         fillOpacity: 1
        //     };
        // }
   
        // $.when(data).done(function() {

    
        //     var myGeoJSON = L.geoJSON(data.responseJSON, {style: style }).addTo(map);
        //     //for changing latitudes to remap 
        //      console.log(myGeoJSON._layers)




        // })
       



      

    })

});
