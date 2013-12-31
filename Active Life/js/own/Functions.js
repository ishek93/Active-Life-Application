//Isaac Shek - Active Life - Assignment 2 
// get device
// all the database
// phonegap photo and video
//2013

// get the type of device and store onto a id 
function getDevice(){
	var element = document.getElementById('device');
        element = 	'Device Name: '     + device.name     +  ", " +
                    'Device Platform: ' + device.platform + ", " +
                    'Device UUID: '     + device.uuid     + ", " +
                    'Device Version: '  + device.version  + ' ';
	$('#device').val(element);
}



// produce a confirmation box
// if yes, saves the location to the database  
function saveHostel(){
$('#Savehostel').click(function(){
	var hostelyes=confirm("Are you sure you want to save hostel?");
	if(hostelyes==true){
     hostel();
	}
	else
	{
	return false;	
	}
});
}




// this function below creates the current location of the user
// and it will save the location to the webSQL
function hostel(){
if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var lnglong = new google.maps.LatLng(position.coords.latitude,
                                       position.coords.longitude); 
                            
         //set-up database name
         db = openDatabase('Productshop', '1.0', 'ProductshopDatabase', 2 * 1024 * 1024);

         db.transaction(function (txs) {
             txs.executeSql('CREATE TABLE IF NOT EXISTS ActiveLifeHostels (id unique, latlong TEXT)');
             txs.executeSql('DELETE FROM ActiveLifeHostels');
             txs.executeSql('INSERT INTO ActiveLifeHostels (id, latlong) VALUES (?, ?)', [ '1', lnglong]);
           });
           alert("Stored Location!");
});
}
}

// this function below loads the hostel
// this will load the data to the google map
     function loadhostel(){
     db.transaction(function (txs) {
             txs.executeSql('SELECT * FROM ActiveLifeHostels', [], function (txs, results) {
                 var len = results.rows.length, i;
                 //loop around each pizza record in the database
                 for (i = 0; i < len; i++) {
                 var Hostel = results.rows.item(i);
                 var hostel = Hostel.latlong;
                 Direction(hostel);
            
                 }
                 });
     });
     }
     

// create the product page
function createDatabaseAndPopulateRecords() {

         //set-up database name
         db = openDatabase('Productshop', '1.0', 'ProductshopDatabase', 2 * 1024 * 1024);

         db.transaction(function (txs) {
          txs.executeSql('CREATE TABLE IF NOT EXISTS ActiveLifeProducts (id unique, name TEXT, size TEXT, colour TEXT, img TEXT, price DOUBLE, star TEXT, gender TEXT)');
             txs.executeSql('DELETE FROM ActiveLifeProducts');
            
			 txs.executeSql('INSERT INTO ActiveLifeProducts (id, name, size, colour, img, price, star) VALUES (?, ?, ?, ?, ?, ?, ?)', ['1', 'Clock-Watch ', '14', 'Black, Grey', 'Watch1.JPEG', '19.00', 'Watch']);
			 txs.executeSql('INSERT INTO ActiveLifeProducts (id, name, size, colour, img, price, star) VALUES (?, ?, ?, ?, ?, ?, ?)', ['2', 'Freedom Boots', '12', 'Black, Brown, Grey', 'Freedom.JPEG', '34.99', 'Boots']);
           		 txs.executeSql('INSERT INTO ActiveLifeProducts (id, name, size, colour, img, price, star) VALUES (?, ?, ?, ?, ?, ?, ?)', ['3', 'Hi-Gear 34 Backpack', '6','Grey, Black, Blue, Red', '34 Backpack.JPEG', '45.99', 'Back Pack']);
			 txs.executeSql('INSERT INTO ActiveLifeProducts (id, name, size, colour, img, price, star) VALUES (?, ?, ?, ?, ?, ?, ?)', ['4', 'Lightweight Backpack', '4', 'Black, Red, Green, Purple, Grey', 'Light Backpack.JPEG', '40.00', 'Back Pack']);
			 txs.executeSql('INSERT INTO ActiveLifeProducts (id, name, size, colour, img, price, star) VALUES (?, ?, ?, ?, ?, ?, ?)', ['5', 'Money Belt', '6', 'Grey', 'MoneyBelt.JPEG', '5.00', 'Accessories']);
			 txs.executeSql('INSERT INTO ActiveLifeProducts (id, name, size, colour, img, price, star) VALUES (?, ?, ?, ?, ?, ?, ?)', ['6', 'Prime Sunglasses', '9', 'Red, Grey, Purple, Blue', 'Prime.JPEG', '12.00', 'Accessories']);
			 txs.executeSql('INSERT INTO ActiveLifeProducts (id, name, size, colour, img, price, star) VALUES (?, ?, ?, ?, ?, ?, ?)', ['7', 'Salomon Boots', '7', 'Purple, Grey, Brown', 'Salomon.JPEG', '34.99', 'Boots']);
			 txs.executeSql('INSERT INTO ActiveLifeProducts (id, name, size, colour, img, price, star) VALUES (?, ?, ?, ?, ?, ?, ?)', ['8', 'Speed Lite Backpack', '14', 'Black, Grey', 'SpeedLite.JPEG', '25.90' , 'Back Pack']);
			 txs.executeSql('INSERT INTO ActiveLifeProducts (id, name, size, colour, img, price, star) VALUES (?, ?, ?, ?, ?, ?, ?)', ['9', 'Smooth Boots', '8', 'Black, Red, Green, Blue, Grey, Brown', 'Smooth.JPEG', '19.99', 'Boots']);
			 txs.executeSql('INSERT INTO ActiveLifeProducts (id, name, size, colour, img, price, star) VALUES (?, ?, ?, ?, ?, ?, ?)', ['10', 'Sun-Protective Glasses', '7', 'Silver, Black, Red', 'Sun.JPEG', '13.59', 'Accessories']);
			 txs.executeSql('INSERT INTO ActiveLifeProducts (id, name, size, colour, img, price, star) VALUES (?, ?, ?, ?, ?, ?, ?)', ['11', 'Sunglasses Cord', '4', 'Black', 'Cord.JPEG', '2.99', 'Accessories']);
			 txs.executeSql('INSERT INTO ActiveLifeProducts (id, name, size, colour, img, price, star) VALUES (?, ?, ?, ?, ?, ?, ?)', ['12', 'Summer Hat', '4', 'Brown, Black, Grey, Blue, Green, Purple', 'SummerHat.JPEG', '9.99', 'Hat']);
			 txs.executeSql('INSERT INTO ActiveLifeProducts (id, name, size, colour, img, price, star) VALUES (?, ?, ?, ?, ?, ?, ?)', ['13', 'Tour-Gear Backpack', '4', 'Pink, Red, Black, Grey, Yellow, Purple', 'TourGear.JPEG', '65.00', 'Back Pack']);
			 txs.executeSql('INSERT INTO ActiveLifeProducts (id, name, size, colour, img, price, star) VALUES (?, ?, ?, ?, ?, ?, ?)', ['14', 'Berghaus Light Boots', '11', 'Black, Grey, Brown, White, Blue', 'BergLight.JPEG', '75.00', 'Boots']);
			 txs.executeSql('INSERT INTO ActiveLifeProducts (id, name, size, colour, img, price, star) VALUES (?, ?, ?, ?, ?, ?, ?)', ['15', 'Berghaus Leather Boots', '7', 'Black, Red, Green, Blue, Brown, Grey, Purple, Yellow', 'BergLeather.JPEG', '45.99', 'Boots']);
			 txs.executeSql('INSERT INTO ActiveLifeProducts (id, name, size, colour, img, price, star) VALUES (?, ?, ?, ?, ?, ?, ?)', ['16', 'WatchFloat', '2', 'Black, Yellow, White, Purple', 'WatchFloat.JPEG', '6.99', 'Accessories']);
			 txs.executeSql('INSERT INTO ActiveLifeProducts (id, name, size, colour, img, price, star) VALUES (?, ?, ?, ?, ?, ?, ?)', ['17', 'High Boots', '8', 'Red, Blue, Brown', 'High Boots.JPEG', '12.99', 'Boots']);
			 txs.executeSql('INSERT INTO ActiveLifeProducts (id, name, size, colour, img, price, star) VALUES (?, ?, ?, ?, ?, ?, ?)', ['18', 'Winter Hat', '1', 'White, Red, Green, Blue', 'Winter Hat.JPEG', '4.59', 'Hat']);
			 txs.executeSql('INSERT INTO ActiveLifeProducts (id, name, size, colour, img, price, star) VALUES (?, ?, ?, ?, ?, ?, ?)', ['19', 'Super Backpack', '2', 'Black, White', 'Super Backpack.JPEG', '11.39', 'Back Pack']);
			 txs.executeSql('INSERT INTO ActiveLifeProducts (id, name, size, colour, img, price, star) VALUES (?, ?, ?, ?, ?, ?, ?)', ['20', 'Goldsmith Watch', '5', 'Yellow', 'Goldsmith Watch.JPEG', '1.99', 'Watch']);
			 txs.executeSql('INSERT INTO ActiveLifeProducts (id, name, size, colour, img, price, star) VALUES (?, ?, ?, ?, ?, ?, ?)', ['21', 'Shiny Glasses', '10', 'Grey, Red', 'Shiny Glasses.JPEG', '6.99', 'Accessories']);
			 txs.executeSql('INSERT INTO ActiveLifeProducts (id, name, size, colour, img, price, star) VALUES (?, ?, ?, ?, ?, ?, ?)', ['22', 'SeeThrough Glasses', '11', 'White, Red, Blue, Yellow', 'SeeThrough Glasses.JPEG', '7.99', 'Accessories']);
			 txs.executeSql('INSERT INTO ActiveLifeProducts (id, name, size, colour, img, price, star) VALUES (?, ?, ?, ?, ?, ?, ?)', ['23', 'Apple Backpack', '13', 'Black', 'Apple Backpack.JPEG', '21.99', 'Back Pack']);

         });

     }
     
// load the products to the html page
     function loadProductRecords() {
         console.log ('Loading pizza records from database into #listofproducts ul...');
         db.transaction(function (txs) {
             txs.executeSql('SELECT * FROM ActiveLifeProducts ORDER BY name', [], function (txs, results) {
                 var len = results.rows.length, i;

                 for (i = 0; i < len; i++) {
                     var ProductsLife = results.rows.item(i);
                    

                     var individualProduct = '';
                     individualProduct = '<li><a href="#detailinfo" id="aProductRecord" data-key="' + ProductsLife.id + '" >';
                     individualProduct += '<h6>' + ProductsLife.name + '</h6>';
                     individualProduct += '<img height="120" width="120" style="padding:10px;" src="./css/images/Productphotos/' + ProductsLife.img + '" />';
                     individualProduct += '<h6>' + '£'+ ProductsLife.price + '</h6>';
					 individualProduct += '<h6>' + 'Size Available: '+ProductsLife.size + '</h6>';
                     individualProduct += '</a></li>';

                     $('#Results').html("Search Results: " + len);
                     $('#listofproducts ul').append(individualProduct);
                     $('#listofproducts ul:visible').listview('refresh');
                 } //end for loop
             });
         });
     }

         
     
 // on the list of products, theres a hyperlink linking to another page
// containing more information of each product 
     function getProductById(id) {      
         db.transaction(function (txs) {
             txs.executeSql('SELECT * FROM ActiveLifeProducts where id="' + id + '"', [], function (txs, results) {
                var len = results.rows.length, i;

                 for (i = 0; i < len; i++) {
                     var ProductsLife = results.rows.item(i);

                     var individualProduct = '';
                     individualProduct += '<div class="OneProduct">';
                     individualProduct += '<h2 class="idTitle">' + ProductsLife.name + '</h2>';
                     individualProduct += '<img class="Image" height="200" width="200" src="./css/images/Productphotos/' + ProductsLife.img + '" />';
                     individualProduct += '<h4>' + 'Colours Available: '+ ProductsLife.colour + '</h4>'
                     individualProduct += '<h4>' + 'Size: ' + ProductsLife.size + '</h4>'
                     individualProduct += '<h4>' + '£'+ ProductsLife.price + '</h4>';
                     individualProduct += '<h4>' + 'Category: '+ ProductsLife.star + '</h4>';
                     individualProduct += '</div>';
                     
                     //add the pizza to the div called #pizzaSummary (located in the detailinfo sceen)
                     $('#productSummary').html(individualProduct);
                 } //end for loop
             });
         });
     }

	 
// the function below is the advanced search
// getting the colour, size, category 
function AdvanceSearch(Colour, sizeClothing, Category) {
         db.transaction(function (txs) {

             txs.executeSql("SELECT * FROM ActiveLifeProducts WHERE size='"+sizeClothing+"' AND colour LIKE '%"+Colour+"%' AND star LIKE '%"+Category+"%' AND star LIKE '%"+Category+"%'   ORDER BY name", [], function (txs, results) {
                 var len = results.rows.length, i;
                 for (i = 0; i < len; i++) {
                     var ProductsLife = results.rows.item(i);
                    
                     var individualProduct = '';
                     individualProduct = '<li><a href="#detailinfo" id="aProductRecord" data-key="' + ProductsLife.id + '" >';
                     individualProduct += '<h6>' + ProductsLife.name + '</h6>';
                     individualProduct += '<img height="120" width="120" src="./css/images/Productphotos/' + ProductsLife.img + '" />';
                     individualProduct += '<h6>' + '£'+ ProductsLife.price + '</h6>';
					 individualProduct += '<h6>' + 'Size Available: '+ProductsLife.size + '</h6>';
                     individualProduct += '</a></li>';
                     
                     $('#Results').html("Search Results: " + len);
                     $('#listofproducts ul').append(individualProduct);
                     $('#listofproducts ul:visible').listview('refresh');
					 $('.datasearch').popup("close");
					 
                 } //end for loop
             });
         });
		 
     }





	
// if the device was uploaded onto phonegap
// using the android device
    function onDeviceReady() {
        pictureSource=navigator.camera.PictureSourceType;
        destinationType=navigator.camera.DestinationType;
    }

    // Called when a photo is successfully retrieved
    //
    function onPhotoDataSuccess(imageData) {
      // Uncomment to view the base64 encoded image data
      // console.log(imageData);

      // Get image handle
      //
      var smallImage = document.getElementById('smallImage');

      // Unhide image elements
      //
      smallImage.style.display = 'block';

      // Show the captured photo
      // The inline CSS rules are used to resize the image
      //
      smallImage.src = "data:image/jpeg;base64," + imageData;
    }

    // Called when a photo is successfully retrieved
    //
    function onPhotoURISuccess(imageURI) {
      // Uncomment to view the image file URI 
      // console.log(imageURI);

      // Get image handle
      //
      var largeImage = document.getElementById('largeImage');

      // Unhide image elements
      //
      largeImage.style.display = 'block';

      // Show the captured photo
      // The inline CSS rules are used to resize the image
      //
      largeImage.src = imageURI;
    }

    // A button will call this function
    //
    function capturePhoto() {
      // Take picture using device camera and retrieve image as base64-encoded string
      navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50,
        destinationType: destinationType.DATA_URL });
    }


    // A button will call this function
    //
    function getPhoto(source) {
      // Retrieve image file location from specified source
      navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50, 
        destinationType: destinationType.FILE_URI,
        sourceType: source });
    }

    // Called if something bad happens.
    // 
    function onFail(message) {
      alert('Failed because: ' + message);
    }
    
    
    
    
    
    // Video Code
         function captureSuccess(mediaFiles) {
        var i, len;
		                if(mediaFiles.length > 5) {
                    alert('Your video is longer than the allowed 5 seconds.');
					return false;
                }
        for (i = 0, len = mediaFiles.length; i < len; i += 1) {
            uploadFile(mediaFiles[i]);
        }       
    }

    // Called if something bad happens.
    // 
    function captureError(error) {
        var msg = 'An error occurred during capture: ' + error.code;
        navigator.notification.alert(msg, null, 'Uh oh!');
    }

    // A button will call this function
    //
    function captureVideo() {
navigator.device.capture.captureVideo(function(mediaFiles) {
            mediaFiles[0].getFormatData(function(data) {
            });
    }, function(error) { alert('An error occured'); }, null);
    }

    // Upload files to server
    function uploadFile(mediaFile) {
        var ft = new FileTransfer(),
            path = mediaFile.fullPath,
            name = mediaFile.name;

        ft.upload(path,
            "",
            function(result) {
                console.log('Upload success: ' + result.responseCode);
                console.log(result.bytesSent + ' bytes sent');
            },
            function(error) {
                console.log('Error uploading file ' + path + ': ' + error.code);
            },
            { fileName: name });   
    }

