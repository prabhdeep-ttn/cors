var requestUrl = function(componentId, url){
    "use strict";
    $.ajax({
        url: "http://localhost:6502/bin/testcors", 
        beforeSend: function(xhr, settings){
            console.log("Requesting URL: ",settings.url);
            xhr.setRequestHeader ("Authorization", "Basic YWRtaW46YWRtaW4=");
        },
        success: function(result){
            console.log(result);
            $('#'+componentId).append(result);
        },
        error: function(xhr,status,error){
            console.log("Error: ", xhr,status,error)
            $('#'+componentId).append("Error Occurred!! "+error);
        }
    });
};

