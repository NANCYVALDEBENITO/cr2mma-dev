geofunction={


	download: function downloadObjectAsJson(exportObj, exportName){
        var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
        
        
        var downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute("href",     dataStr);
        downloadAnchorNode.setAttribute("download", exportName + ".json");
        document.body.appendChild(downloadAnchorNode); // required for firefox
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
    }

    maxval: function getMaxOfArray(numArray) {
        return Math.max.apply(null, numArray);
    }
    minval: function getMinOfArray(numArray) {
      return Math.min.apply(null, numArray);
    }






}