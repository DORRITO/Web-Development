var app = angular.module("app", ["ngRoute"]);

//controllers
app.controller("mainCtrl", ["$scope", "nameService", function($scope, nameService) {    
    
    $scope.name = nameService.name;
    console.log(nameService.name);
    
    $scope.$watch('name', function() {
        nameService.name = $scope.name;
    })
}]);

app.controller("secondCtrl", ["$scope", "nameService", function($scope, nameService) {    
    $scope.name = nameService.name;
    console.log(nameService.name);
    
    $scope.$watch('name', function() {
        nameService.name = $scope.name;
    })
}]);

//service
app.service("nameService", function() { 
    //self to define the service this, and not function this
    var self = this;
    this.name = "John doe";
});

//route
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
});