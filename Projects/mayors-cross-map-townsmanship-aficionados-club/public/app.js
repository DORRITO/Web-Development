//var players = require("./backend/players/players.json")
//
//console.log(players.ric.name);

var app = angular.module("app", []);

app.controller("mainCtrl", ["$scope", function($scope){
    $scope.ric = "ric";
    

}]);