
myApp.controller('addContactCtrl', ['$scope', 'contactService', '$location',
 function($scope, contactService, $location, localStorageServiceProvider){
 	console.log(localStorageServiceProvider);
	 $scope.addContactHandler = function(form, event){
	 	console.log(form);
	 	if (form.$valid) {
		 	var obj = $scope.modelcm;
		 	console.log("obj", obj);
		 	if(obj.name != "" || obj.mobile != "" || obj.email != ""){
				contactService.save($scope.modelcm);
	        	$scope.modelcm = {};
	        	$location.path('/');

		 	}else{
		 		alert("Plz fill the input fileds");
		 	}	 			 		
		 }else{
		 	return
		 }

	 };
	 
}])

