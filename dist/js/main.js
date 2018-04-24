$(function(){
/*------------ Google Map --------------*/
window.initMap = function() {
    var location = {lat: 31.192700, lng: 29.906168};
    var map = new google.maps.Map(document.getElementById("map"),{
        zoom: 15,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}

/*-------------Nav toggle---------------*/
$("#toggle-icon").on("click",openNav);



function openNav(){
    if($("#toggle-icon").hasClass("close-toggle")){
    
        $("#main-navbar").css("display","none").animate({
            width: '0px'
        });
        $("#toggle-icon").removeClass("close-toggle");
    }else{
        $("#main-navbar").css("display","flex").animate({
            width: '550px'
        });
        $("#toggle-icon").addClass("close-toggle");
    }
    
 
}




































});