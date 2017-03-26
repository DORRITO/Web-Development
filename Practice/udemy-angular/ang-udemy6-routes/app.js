var app = angular.module("app", ["ngRoute"]);

app.config(function($routeProvider) {
  
    $routeProvider     
        .when("/", {
            templateUrl: "pages/main.html",
            controller: "mainCtrl"
        })
        .when("/second", {
            templateUrl: "pages/second.html",
            controller: "secondCtrl"
        })
})

app.controller("mainCtrl", ["$scope", "$http", function($scope, $http){
    $scope.name = "main";
}]);

app.controller("secondCtrl", ["$scope", "$http", function($scope, $http){
    $scope.name = "second";   
}]);

