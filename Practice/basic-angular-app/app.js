var app = angular.module("myApp", []);

app.controller('mainCtrl', ['$scope', function($scope){
    
    $scope.hello = "The basic app is working!"
    
}]);