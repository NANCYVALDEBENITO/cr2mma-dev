Geofunction={


	download: function downloadObjectAsJson(exportObj, exportName){
        var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
        
        
        var downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute("href",     dataStr);
        downloadAnchorNode.setAttribute("download", exportName + ".json");
        document.body.appendChild(downloadAnchorNode); // required for firefox
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
       
    },
    

    getMax: function getMaxOfArray(numArray){
    	return Math.max.apply(null, numArray);
    },

    getMin: function getMinOfArray(numArray){
    	return Math.min.apply(null, numArray);
    },
    average: function average(elmt){
      var sum = 0;
      for( var i = 0; i < elmt.length; i++ ){
          sum += parseInt( elmt[i], 10 ); //don't forget to add the base
      }

      var avg = sum/elmt.length;
      return avg
    },
    error: function error(elmt){
      for( var i = 0; i < elmt.length; i++ ){
        var error = Math.sqrt(((average(elmt)-elmt[i])*(average(elmt)-elmt[i]))/(elmt.length-1))
        return error
      }
      
    },

  	getColor: function getColor(d, min_value, max_value){

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
      },
      getColor2: function getColor(d, min_value, max_value){

          value = max_value - min_value;
          diff  = value/8;

          
          return d > max_value ? '#f7fcfd' :
                 d > min_value+6*diff ? '#e5f5f9' :
                 d > min_value+5*diff  ? '#ccece6' :
                 d > min_value+4*diff  ? '#99d8c9' :
                 d > min_value+3*diff ? '#66c2a4' :
                 d > min_value+2*diff  ? '#41ae76' :
                 d > min_value+diff  ? '#238b45' :
                 d > min_value  ? '#006d2c' :
                           '#00441b' ;
      },
      // getColor2: function getColor(d, min_value, max_value){

      //     value = max_value - min_value;
      //     diff  = value/8;

          
      //     return d > max_value ? '#00441b' :
      //            d > min_value+6*diff ? '#006d2c' :
      //            d > min_value+5*diff  ? '#238b45' :
      //            d > min_value+4*diff  ? '#66c2a4' :
      //            d > min_value+3*diff ? '#99d8c9' :
      //            d > min_value+2*diff  ? '#41ae76' :
      //            d > min_value+diff  ? '#ccece6' :
      //            d > min_value  ? '#e5f5f9' :
      //                      '#f7fcfd' ;
      // },


     
    
                             
        //$(".form_datetime").datetimepicker({format: 'yyyy-mm-dd hh:ii'});

   



}