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
    addValueInObject: function addValueInObject(object, key, value) {
                var res = {};
                var textObject = JSON.stringify(object);
                console.log(textObject)
                if (textObject === '{}') {
                    res = JSON.parse('{"' + key + '":"' + value + '"}');
                } else {
                    res = JSON.parse('{' + textObject.substring(1, textObject.length - 1) + ',"' + key + '":"' + value + '"}');
                }
                return res;
            }

                             
        //$(".form_datetime").datetimepicker({format: 'yyyy-mm-dd hh:ii'});

   



}