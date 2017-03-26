var myApp = angular.module("myApp", []);

myApp.controller("mainCtrl", ["$scope", function($scope) {  
    
    //es6 template literal added
    var name = "wazzzuzp"
    $scope.hello = "This is a basic angular app saying hello";
    //template literal
    $scope.hi = `Hello ${ name }`;
    
}]);