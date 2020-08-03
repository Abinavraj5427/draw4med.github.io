// const baseURL = "";
$( document ).ready(function() {

    var url = baseURL + "?action=read";
    //reads  data
    var request = jQuery.ajax({
        crossDomain: true,
        url: url ,
        method: "GET",
        dataType: "json",
        success: function(data){
            console.log(data);
        }
    });
});