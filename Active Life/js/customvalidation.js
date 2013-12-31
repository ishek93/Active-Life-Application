/************************************************
 * Custom Validation javascript using the       *
 * plugin JQuery Validator for Flight Ops Forms *                 *
 * Authors: Liam Swinney			                  *
 ************************************************/

 //Name - Only Letters, (-) or spaces allowed
var textonlymessage = 'Invalid entry. Only letters, - or space is allowed.';

$.validator.addMethod('letters', function(value) {
    return value.match(/^[- a-zA-Z]+$/); 
});

//Staff Number Validation
var invalidstaffnumbermessage = 'Invalid staff number entered.';

/* Letter then 4-6 Numbers (N1234, N12345, N123456)
   or
   4-6 Numbers (1234, 12345, 123456)
 */
$.validator.addMethod('invalidstaffnumber', function(value) {
    return value.match(/^([a-zA-Z]{1})?[0-9]{4,6}$/); 
});

//UTC Time Format
var utcformatmessage = 'Time must be in UTC Format (e.g. 1200).';

$.validator.addMethod('utcformat', function(value) {
    // return value.match(/^(20|21|22|23|[01]\d|\d)(([0-5]\d){1,2})$/);
    return value.match(/^([01]\d|2[0-3]):?([0-5]\d)$/);
});

//// Number with decimals validation.
//var invaliddecimalnumbermessage = 'Invalid input. Only numbers and period (.) allowed.';
//
//// Decimal numbers only
//$.validator.addMethod('invaliddecimalnumber', function(value) {
//    return value.match([/d/.]*); 
//});


//Change Default Messages
jQuery.extend(jQuery.validator.messages, {
  required: "This is a required field.",
  lettersonly: "Invalid input. Only letters allowed.",
  digits: "Invalid input. Only numbers allowed.",
  letterswithbasicpunc: "Invalid characters entered, please check your input.",
  minlength: jQuery.validator.format("Minimum field length is {0}"),
  min: "Invalid value entered."
});


