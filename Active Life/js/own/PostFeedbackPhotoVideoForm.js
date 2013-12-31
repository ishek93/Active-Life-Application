//Isaac Shek - Active Life - Assignment 2 
//all the forms post
//2013

// postVideo() - From the html document - ID 
// serialise the form, and post the serialise form to the API
// .done - is a success for sending the form to the api
// .fail - is a failure of sending the form, due to either no internet, or the server is down  
function postVideo(){
	var Test3 = $('#formvideo').serialize();
	$.post('http://mobileapi.net78.net/v1/postVideo/?returntype=json&key=94761FAD-6D08-C02C-8E0B-F91CB093EA4F', Test3)
		.done(function() {
			alert( "Your form was successfully sent to the server, Thank You!" );
			$('#name').val("");
		})
		.fail(function() {
			alert( "Your form was unsuccessfully sent to the server, please try again!" );
	});
}

// postPhoto() - From the html document - ID 
// serialise the form, and post the serialise form to the API
// .done - is a success for sending the form to the api
// .fail - is a failure of sending the form, due to either no internet, or the server is down  
function postPhoto(){
	var Test2 = $('#photoform').serialize();
	$.post('http://mobileapi.net78.net/v1/postPhoto/?returntype=json&key=94761FAD-6D08-C02C-8E0B-F91CB093EA4F&lat=54.911859&lon=-1.343404', Test2)
		.done(function() {
			alert( "Your form was successfully sent to the server, Thank You!" );
			$('#name').val("");
		})
		.fail(function() {
			alert( "Failed, please check your internet connection, or the server could be down. Please try again!" );
	});
}

// postfeedback() - From the html document - ID 
// serialise the form, and post the serialise form to the API
// .done - is a success for sending the form to the api
// .fail - is a failure of sending the form, due to either no internet, or the server is down  
function postfeedback(){
	var Test = $('#feedbackform').serialize();
	$.post('http://mobileapi.net78.net/v1/postComment/?returntype=json&key=94761FAD-6D08-C02C-8E0B-F91CB093EA4F', Test)
		.done(function() {
			alert( "Your form was successfully sent to the server, Thank You!" );
			$('#name').val("");
			$('#email').val("");
			$('#comment').val("");
		})
		.fail(function() {
			alert( "Failed, please check your internet connection, or the server could be down. Please try again!" );
	});
}