

$(document).ready(() => {
    
    $('#humberger').click(function (e) { 
        console.log("test log");
        $("#dd-menu").slideToggle('slow', function(){
        });
    });    
});