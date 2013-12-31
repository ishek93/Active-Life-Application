//Isaac Shek - Active Life - Assignment 2 
// get photos
//2013

// get the photos from the api 
function getPhotos(){
	
	navigator.geolocation.getCurrentPosition(foundLocation);
    function foundLocation(position) {

	
	$("#LoadingImages").show();

var urlPhoto = "http://mobileapi.net78.net/v1/getPhotos/?returntype=json&lat="+position.coords.latitude+"&lon="+position.coords.longitude+"&key=94761FAD-6D08-C02C-8E0B-F91CB093EA40";

	$.getJSON( urlPhoto, function( data ) {

		$.each(data.photos, function(i, dataEvent){

			$.each(dataEvent, function(len, dat){
	
// this code below will generate the data by appending to the div tag
	$('#resultPhotos').append('<li class="Events">' + '<div class="formsection">'
		+'<h4 style="font-weight:bold;">'+dat.name+'<hr>'
		+'<div class="ui-grid-a">'
			+'<div class="ui-block-a">'
				+ '<a href="#img'+dat.id+'" data-role="button" data-rel="popup"  data-icon="info" data-theme="b" data-inline="true" data-mini="true">Information</a>'
			+ '</div>'
				+'<div class="ui-block-b">'
					+ '<a href="#map'+dat.id+'" id="mapPhoto'+dat.id+'" data-role="button" data-icon="arrow-r" data-rel="popup" data-inline="true" data-mini="true">Location</a>'
				+ '</div>'
		+ '</div>'
		+ '<div>'
		+ '<div data-role="popup" data-overlay-theme="a" data-position-to="window" id="img'+dat.id+'" class="ui-content">'
			+ '	<a href="#" data-rel="back" data-role="button" data-theme="b" data-icon="delete" data-iconpos="notext" class="ui-btn-right">Close</a>'
		+ '<div>'
			+ '<span>'
				+'<img id="url'+dat.id +'" style="display: block; margin-left: auto; margin-right: auto; box-shadow: 5px 5px 5px #888888; width:100% !important; height:100% !important;" src="'+dat.url+'"/>'
				+ '<img id="photo'+dat.id +'" style="display: block; margin-left: auto; margin-right: auto; box-shadow: 5px 5px 5px #888888; width:100% !important; height:100% !important;" src="data:image/png;base64,'+dat.photodata +'" />'
				+ '<br>' + '<h5>'+dat.description+'</h5>' 
			+ '</span>'
			+ '</div>'
		+ '</div>'
		+ '</div>'
		
		+ '<div>'
			+ '<div data-role="popup" data-overlay-theme="a" data-position-to="window" id="map'+dat.id+'" class="ui-content" style="height:300px; width:200px;">'
			+ '	<a href="#" data-rel="back" data-role="button" data-theme="b" data-icon="delete" data-iconpos="notext" class="ui-btn-right">Close</a>'
			+ '<div class="map" id="mapPhotos'+dat.id+'" style="box-shadow: 5px 5px 5px #888888; height:200px; width:200px;">' + '</div>'
			+ '<div style="width:200px;">'+'<button id="photoshowmap'+dat.id+'">Show location'+'</button>' +'</div>'
		+ '</div>'
		+ '</div>'
		+ '</div>'
		+'</div>'+'</li>');



//if dat.photodata is empty, remove the img 		
if(dat.photodata == ""){
	$('#photo'+dat.id +'').remove();
}

//if dat.lat and dat.lon contains the word "undefined", it will remove the mapPhoto id
if (dat.lat == "undefined" && dat.lon =="undefined"){
$('#mapPhoto'+dat.id).remove();
}

$('#error1').html("");

// create variables for id, lat, lon
var lat = dat.lat;
var lon = dat.lon;
var loc = new google.maps.LatLng(dat.lat, dat.lon);
var datid = dat.id;

// button will generate the maps
// the parameters will contain the location for google maps and the id of each photos
$('#photoshowmap'+dat.id+'').click(function(){
	photoMap(loc, datid);
});

//convert the html to jquery mobile format
$(".ui-page").trigger( "create" );
});

});
//if success getting the data, remove the loading image 
}).success(function(){
	  $("#LoadingImages").remove();
})
// if fail, remove the loading image and alert the message
  .fail(function() {
	  $("#LoadingImages").remove();
			  $('#error1').html("Error, no internet connection or server is down! Please try again!");
  });
}
var countli = $('#resultPhotos li').size();
if(countli == 0){
$('#error1').html("There are currently no photos available in your area! ");	
}
}
// gets the parameter from the photos
// creates the google map 
function photoMap(loc, datid){

  var mapOptions = {
    zoom: 7,
    center: loc
  }
  var map = new google.maps.Map(document.getElementById('mapPhotos'+datid+''), mapOptions);

  var marker = new google.maps.Marker({
      position: loc,
      map: map
  });

google.maps.event.addDomListener(window, 'load', photoMap);

}