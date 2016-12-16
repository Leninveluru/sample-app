 
 var myApp = angular.module('cmApp', ['ngRoute']).
 	config(['$routeProvider', function ($routeProvider) {
         $routeProvider
             .when('/', {
                 templateUrl:'templates/contact-list.html',
                 controller: 'contactListCtrl'
             }).when('/addcontact', {
                 templateUrl:'templates/add-contact.html',
                 controller: 'addContactCtrl'
             })
             .when('/deletecontact', {
                 templateUrl:'templates/edit-con.html',
                 controller: 'editCtrl'
             })     
             .otherwise({redirectTo: '/'});
     }]);

     //var myApp = angular.module('cmApp', []);


     /*myapp.controller(function($scope){
        $scope.name = "hajii";

        console.log('test', $scope.name);
     })
*/
