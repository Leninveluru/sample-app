myApp.controller('contactListCtrl', ['$scope', 'contactService', '$rootScope', 
	function($scope, contactService, $rootScope){
	
	$scope.contactList = contactService.list();
	
	$scope.editCm = function(id){
		$rootScope.editItemId = id;
	 }

	 $scope.deleteCon = function(id){
	 	contactService.delete(id);
	 }

}])