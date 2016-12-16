
myApp.controller('editCtrl', ['$scope', 'contactService', '$rootScope', '$location',
  function($scope, contactService, $rootScope, $location){
	
    if($rootScope.editItemId != undefined){ 
        $scope.modelcm = angular.copy(contactService.get($rootScope.editItemId));
    }

    $scope.saveChanges = function(form, event){

        if (form.$valid) {
      var obj = $scope.modelcm;
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
  }
}])