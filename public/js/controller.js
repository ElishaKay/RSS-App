app.controller('journyCtrl', function($scope, journyFact,$http){

	var getAllDB = function() {

		$http.get('/getAll').success(function(response){
				$scope.messages = response;
				console.log($scope.messages);

		});

	};

	$scope.userinput = function(){
		 src="js/xml2json.js"

	function fetchAndParseXML(url, success) {
	$.ajax({
	 	type: "GET",
	 	url: url,
	 	dataType: "xml",
	 	success: function(data) {
	 		success(xml2json("<p>data</p>"));
	 	}
	 	});
 		}

 		fetchAndParseXML('cd_catalog.xml', function(data) {
 			console.log('hurray!', data);
		
 			// Append "RSS Title" to #someElement 

 			var JsonObject = data;

 			debugger;


 			$('.RSS Bucket').append(data);


 		})



		
	}

	$scope.addToDB = function(){
		
		console.log('hey I got to the addToDB funct');

		$http.post('/journey', {text: $scope.input}).success(function(response){
			console.log('heeeyyy')
			console.log(response);
		});

		getAllDB();

	}
	

});
