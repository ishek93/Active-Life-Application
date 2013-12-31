//Isaac Shek - Active Life - Assignment 2 
// hostel maps 
//2013
var map;
var pos;
var directionsDisplay;
var directionsService = new google.maps.DirectionsService();

function initialize() {
// loads the current location of the user
// loads the map on the html page
  $('#CurrentLocation').click(function(){
  var mapOptions = {
    zoom: 15
  };
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  // Try HTML5 geolocation
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = new google.maps.LatLng(position.coords.latitude,
                                       position.coords.longitude);
									   $('#directions-panel').html('');
var marker = new google.maps.Marker({
        map: map,
        position: pos
      });

      map.setCenter(pos);
    }, function() {
      handleNoGeolocation(true);
    });
  } else {
    // Browser doesn't support Geolocation
    handleNoGeolocation(false);
  }
  });
  
  
  
  }
  
  
  function Direction(hostel){
  // get the current location of the user and the saved location of the hostel
  
   $('#GetDirection').click(function(){

 directionsDisplay = new google.maps.DirectionsRenderer();

  var mapOptions = {

    zoom:3
  }
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      pos = new google.maps.LatLng(position.coords.latitude,
                                       position.coords.longitude);


var selectedMode = $('#travelModes').val();

 var request = {
 
      origin:pos,
      destination:hostel,
      travelMode: google.maps.TravelMode[selectedMode]
  };
  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
      $('#directions-panel').html('');
}
else
{
alert("Unable to provide directions, please check your Internet connection");
}
});
    });


}
  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  directionsDisplay.setMap(map);
  directionsDisplay.setPanel(document.getElementById('directions-panel'));
  
});


}

google.maps.event.addDomListener(window, 'load', initialize);

function handleNoGeolocation(errorFlag) {
  if (errorFlag) {
    var content = 'Error: The Geolocation service failed.';
  } else {
    var content = 'Error: Your browser doesn\'t support geolocation.';
  }
  }	 
	 