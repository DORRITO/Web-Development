var app = angular.module("app", ["ngRoute"]);

app.config(function($routeProvider) {
  
    $routeProvider     
        .when("/", {
            templateUrl: "pages/main.html",
            controller: "mainCtrl"
        })
        .when("/second/", {
            templateUrl: "pages/second.html",
            controller: "secondCtrl"
        })
        .when("/second/:num", {
            templateUrl: "pages/second.html",
            controller: "secondCtrl"
        })
})

app.controller("mainCtrl", ["$scope", "$http", function($scope, $http){
    $scope.name = "main";
}]);

app.controller("secondCtrl", ["$scope", "$http", "$routeParams", function($scope, $http, $routeParams){
    //shows the parameters on the url, or defaults to second
    $scope.name = $routeParams.num || "second";   
}]);

