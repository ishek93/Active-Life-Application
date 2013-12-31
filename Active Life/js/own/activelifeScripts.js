var db;
var Colour = [];
var pictureSource;   // picture source
var destinationType; // sets the format of returned value



$(document).ready(function () {
     
	$(function() {
        setTimeout(hideSplash, 5000);
		$.mobile.loading( 'show', {
	text: 'Loading...',
	textVisible: true,
	theme: 'z',
	html: ""
});
    });
    function hideSplash() {
        $.mobile.changePage("#Home", "pop");
    }
	

// create the products
     createDatabaseAndPopulateRecords();

// load the products
	 loadProductRecords();
		       
	 // load the hostel
     loadhostel();  
	 
// save location of the user 
	 saveHostel();
     
// get the events from the api
     getEvents();
     

getPhotos();
// get the photos from the api
			

// get the device from ripple
	 getDevice();
	   
	   

		
document.addEventListener("deviceready",onDeviceReady);
	
	
//don't let the footer go away after clicking something
$("[data-role=footer]").fixedtoolbar({ tapToggle: false });

	


// validates the form - name (No empty boxes and numbers allowed)
// if form is ok, it will go to the postPhoto()	
$("#photoform").validate({
	errorPlacement: function(error, element){
		if(element.attr("id") === "name"){
           error.insertAfter($(element).parents('div.ui-input-text'));
		} else {
		   error.insertAfter(element);
		}
},
rules:
      {
       name:
              {
				  required: true,
                   lettersonly: true
                }
				

       },
submitHandler: function( form ) {
	postPhoto();


}
});


// validates the form - name (No empty boxes and numbers allowed)
// - email(No empty boxes allowed)
// - comments (No empty boxes allowed)
// if form is ok, it will go to the postfeedback()		
$("#feedbackform").validate({
	errorPlacement: function(error, element){
		if(element.attr("id") === "name" || element.attr("name") === "email" || element.attr("name") === "comment"){
           error.insertAfter($(element).parents('div.ui-input-text'));
		} else {
		   error.insertAfter(element);
		}
},
rules:
      {
       name:
              {
				  required: true,
                   lettersonly: true
                },
		email:
              {
				  required: true
                },
		comment:
              {
				  required: true
                }

       },
submitHandler: function( form ) {
postfeedback();


}
});


// validates the form - name (No empty boxes and numbers allowed)
// if form is ok, it will go to the postVideo()	
$("#formvideo").validate({
	errorPlacement: function(error, element){
		if(element.attr("id") === "name"){
           error.insertAfter($(element).parents('div.ui-input-text'));
		} else {
		   error.insertAfter(element);
		}
},
rules:
      {
       name:
              {
				  required: true,
                   lettersonly: true
                }

       },
submitHandler: function( form ) {
	postVideo();

}
});


// this will search for the products
// advanced search, each category
$('.Search').click(function(){
$('.datasearch').popup("open");

// get the value of the catergories
var Category = $('#catergories').val();

//get the size value
var sizeClothing = $("#size").val();


var Colour = $('#allColours').val();
// Get all the checked boxes and their values and store it in a variable


// allows the Colours to be separated out, for the SQL 


// remove the current list products
$('#listofproducts li').remove();

$('#Results').html("Searched Results: 0");
AdvanceSearch(Colour, sizeClothing, Category);
$('#advancedsearch').show();
// Remove the current data, then go to the function and add the new data

});


// reset the advanced search
// show the all the products
$('.Reset').click(function(){
	$('#size').val("");
	$('#size').slider("refresh");
	$('#size').val("");

	$('#allColours').prop('selectedIndex',0);
	$('#allColours').selectmenu("refresh");
// remove all the checked boxes (Colours)

	$('#catergories').prop('selectedIndex',0);
	$('#catergories').selectmenu("refresh");
	
	$('#listofproducts li').remove();
	loadProductRecords();
// set the select menu to 0 then refresh the drop down list

});



// shows the record number on the console, google chrome - inspect element
$(document).on("click", "#aProductRecord", function () {
         console.log ('You just tapped on record number : ' + $(this).data('key'));
         getProductById($(this).data("key"));
});


// edit the loading image        
$( document ).bind( 'mobileinit', function(){
  	$.mobile.loader.prototype.options.text = "loading";
 	$.mobile.loader.prototype.options.textVisible = false;
 	$.mobile.loader.prototype.options.theme = "a";
  	$.mobile.loader.prototype.options.html = "";
});


// before the page loads, show the loading image
$(document).on("pagebeforecreate", "#Products",function(){
	setTimeout(function(){
		$.mobile.loading("show", {
			text: 'Loading...',
			textVisible: true,
			theme: 'z',
			html: ""
			});
	},1);
});

// hide the loading image after the interval
$(document).on("pageshow", "#Products",function(){
	setTimeout(function(){
		$.mobile.loading("hide");
	},400);
});

//change the drop down list into a different style
$(document).bind('mobileinit',function(){
   $.mobile.selectmenu.prototype.options.nativeMenu = false;
});


var getJSON = function(url, successHandler, errorHandler) {
  var xhr = new XMLHttpRequest();
  xhr.open('get', url, true);
  xhr.responseType = 'json';
 xhr.onload = function() {
    var status = xhr.status;
    if (status == 200) {
      successHandler && successHandler(xhr.response);
    } else {
      errorHandler && errorHandler(status);
    }
  };
  xhr.send();
};
});


