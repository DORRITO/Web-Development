var app = angular.module("app", ["ngRoute"]);

//controllers
app.controller("mainCtrl", ["$scope", "nameService", function ($scope, nameService) {

}]);

app.controller("secondCtrl", ["$scope", "nameService", function ($scope, nameService) {
    

}]);

//directive
app.directive("searchResult", function () {
    return {
        template: '<a href="#" class="list-group-item"> <h4 class = "list-group-item-heading"> Doe, John </h4> <p class = "list-group-item-text" >555 Main st., new york, NY 11111</p> </a>'
    }
});

//service
app.service("nameService", function () {
    //self to define the service this, and not function this
    var self = this;
    this.name = "John doe";
});


//route
app.config(function ($routeProvider) {
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