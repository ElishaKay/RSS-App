app.controller('journyCtrl', function($scope, journyFact,$http){

	var getAllDB = function() {

		$http.get('/getAll').success(function(response){
				$scope.messages = response;
				console.log($scope.messages);

		});
	};

	
	$scope.userinput = function(){
		 
	$scope.addToDB = function(){
		
		console.log('hey I got to the addToDB funct');

		$http.post('/journey', {text: $scope.input}).success(function(response){
			console.log('heeeyyy')
			console.log(response);
		});
		getAllDB();
	}
	}

});