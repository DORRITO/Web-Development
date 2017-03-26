var app = angular.module("app", []);

app.controller("mainCtrl", ["$scope", function($scope){
    
    $scope.name = "";
    
    $scope.characters = 5;
    
    $scope.rules = [       
        {rulename: "Must be 5 characters"},
        {rulename: "Must not be used elsewhere"},
        {rulename: "Must be cool"}       
    ];
    
}]);