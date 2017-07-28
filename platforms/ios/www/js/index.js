/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    
	 /*
	onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },
	 */
	 
	 
	onDeviceReady: function() {
	
	
		var contentsDiv = document.getElementById('fileContentsDiv'),
			photo = document.getElementById('photoImg'),
			setDateBtn = document.getElementById('setDate'),
			takePhotoBtn = document.getElementById('takePhoto'),
			savePhotoBtn = document.getElementById('savePhoto');
		
		var imageURL;
		
			//Save date to Documents in iOS
			setDateBtn.addEventListener('click', function() {
				
				// Create a Date string. It will look something like: "2013-08-13T22:04:58.811Z"
				var dateStr = new Date().toJSON();
				
				// Ask cordova to execute a method on our FileWriter class
				cordova.exec(
					// Register the callback handler
					function callback(greeting) {
						contentsDiv.innerHTML = greeting + '<br />we saved today&#39s date to documents directory.';
						console.log('Wrote date ' + dateStr);
					},
					// Register the errorHandler
					function errorHandler(err) {
						alert('Error');
					},
					// Define what class to route messages to
					'PhotosPlugin',
					// Execute this method on the above class
					'saveTodaysDate',
					// An array containing one String (our newly created Date String).
					[ dateStr, 'Julia' ]
				);
		
			});
			
					
			//Opens custom camera	
			takePhotoBtn.addEventListener('click', function() {				
					   
				cordova.exec(
					function callback(imagePath) {
						photo.setAttribute("src", imagePath);
						contentsDiv.innerHTML = imagePath;
						imageURL = imagePath;
					},
					function errorHandler(err) {
						alert('Error');
					},
					'PhotosPlugin',
					'openCamera',
					[ ]
				);
	
			});
					
			
			//Saves the latest taken photo 	
			savePhotoBtn.addEventListener('click', function() {				
					   
				cordova.exec(
					function callback(id) {
						var msg = 'Saved Photo with ID: <br />' + id;
						contentsDiv.innerHTML = msg;
					},
					function errorHandler(err) {
						alert('Error');
					},
					'PhotosPlugin',
					'saveToCameraRoll',
					[imageURL]
				);
	
			});
			
			
			
	  },
				
	
		
	  // Update DOM on a Received Event
	  receivedEvent: function(id) {
		  var parentElement = document.getElementById(id);
		  var listeningElement = parentElement.querySelector('.listening');
		  var receivedElement = parentElement.querySelector('.received');
  
		  listeningElement.setAttribute('style', 'display:none;');
		  receivedElement.setAttribute('style', 'display:block;');
  
		  console.log('Received Event: ' + id);
	  }
	  
		
};


app.initialize();
