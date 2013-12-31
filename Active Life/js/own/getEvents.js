//Isaac Shek - Active Life - Assignment 2 
// getevents
//2013

// get the events from the api 
function getEvents(){
		$("#LoadingImage").show();
		
		var url = 'http://www.mobileapi.net78.net/v1/getEvents/?key=94761FAD-6D08-C02C-8E0B-F91CB093EA40&returntype=json'
		
		$.getJSON( url, function( data ) {

			$.each(data.events, function(i, dataEvent){

			$.each(dataEvent, function(len, dat){
	

// if the price is 0, convert it into a text
// put an alert icon
// note to user that it is for FREE!!

if(dat.price == 0){
	dat.price =  '<div>FREE</div>'+'<div style="float:right" class="ui-icon ui-icon-alert" data-theme="e"></div>';
}
// else, there is a price included
else{
	dat.price = '£' + dat.price;
}

// if the dates are the same, change the values
if(dat.to === dat.from){
dat.to = "One day only! " + dat.to;
}
// if not, add add both of the data in
else if (dat.to > dat.from){
dat.to = "Date from: " + dat.from+ " - Date to: " + dat.to;
}
else{
dat.to = "Date from: " + dat.to+ " - Date to: " + dat.from;
}

// this code below will generate the data by appending to the div tag
	$('#result').append('<li class="Events">' + '<div class="formsection">'
		+'<div style="font-weight:bold;">'+dat.name +'<div class="price" style="float:right">' + dat.price + '</div>' +'</div>'
		
		+'<div class="dateto" id="dateto">'+dat.to+'</div>'
		+'<div style="padding-top:20px;"><hr>' + '</div>'
		+'<div class="ui-grid-a">'
		+'<div class="ui-block-a">'
		+ '<a href="#img'+dat.id+'" data-role="button" data-rel="popup"  data-icon="info" data-theme="b" data-inline="true" data-mini="true">Information</a>'
		+ '</div>'
		+'<div class="ui-block-b">'
		+ '<a href="#map'+dat.id+'" id="mapy'+dat.id+'" data-role="button" data-icon="arrow-r"  data-rel="popup" data-inline="true" data-mini="true">Location</a>'
		+'</div>'
	+ '<div>'
	+ '<div data-role="popup" data-overlay-theme="a" data-position-to="window" id="img'+dat.id+'" class="ui-content">'
	+ '	<a href="#" data-rel="back" data-role="button" data-theme="b" data-icon="delete" data-iconpos="notext" class="ui-btn-right">Close</a>'
		+ '<div>'
			+ '<span>'
			+'<img id="photoss" style=" display: block; margin-left: auto; margin-right: auto;box-shadow: 5px 5px 5px #888888; max-width:100% !important; max-height:100% !important;" src="'+dat.img+'"/>'
			+ '<br>' + '<h5>'+dat.description+'</h5>' 
			+ '</span>'
		+ '</div>'
	+ '</div>'
+ '</div>'

		+ '<div>'
			+ '<div data-role="popup" data-overlay-theme="a" data-position-to="window" id="map'+dat.id+'" class="ui-content" style="height:300px; width:200px;">'
			+ '	<a href="#" data-rel="back" data-role="button" data-theme="b" data-icon="delete" data-iconpos="notext" class="ui-btn-right">Close</a>'
			+ '<div class="map" id="mapEvents'+dat.id+'" style="box-shadow: 5px 5px 5px #888888; height:200px; width:200px;">' + '</div>'
			+ '<div style="width:200px;">'+'<button id="showmap'+dat.id+'">Show location'+'</button>' +'</div>'
		+ '</div>'
+ '</div>'
+ '</div>'
+'</div>'+'</li>');

//convert the html to jquery mobile format
$(".ui-page").trigger( "create" );

//if dat.lat and dat.lon contains the word "undefined", it will remove the mapPhoto id
if(dat.lat == "undefined" && dat.lon =="undefined"){
	$('#mapy'+dat.id).remove();
}
//if dat.lat and dat.lon are empty values, it will remove the mapPhoto id
else if (dat.lat == "" && dat.lon =="")
{
$('#mapy'+dat.id).remove();
}
else{

// create variables for id, lat, lon
var lat = dat.lat;
var lon = dat.lon;
var loc = new google.maps.LatLng(dat.lat, dat.lon);
var datid = dat.id;
}
$('#showmap'+dat.id+'').click(function(){
	eventmap(loc, datid);
});


});
});
}) 
//if success getting the data, remove the loading image 
.success(function(){
	$("#LoadingImage").remove();
})
// if fail, remove the loading image and alert the message
 .fail(function() {
	$("#LoadingImage").remove();
	
			  $('#error2').html("Error, no internet connection or server is down! Please try again!");

  });
}


// gets the parameter from the events
// creates the google map 
function eventmap(loc, datid){

  var mapOptions = {
    zoom: 7,
    center: loc
  }
  var map = new google.maps.Map(document.getElementById('mapEvents'+datid+''), mapOptions);

  var marker = new google.maps.Marker({
      position: loc,
      map: map
  });

google.maps.event.addDomListener(window, 'load', eventmap);
}