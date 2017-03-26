var app = angular.module("app", []);

app.controller("mainCtrl", ["$scope", "$timeout", function($scope, $timeout) {
    
    $scope.name = "Killua";
    
    $timeout(function(){        
        $scope.name = "Keeellua"; 
    }, 3000);
    
}]);