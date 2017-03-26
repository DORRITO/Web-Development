var app = angular.module("app", []);

app.controller("mainCtrl", ["$scope", "$http", function($scope, $http){
    
    //get request, .success wasn't working.
    $http.get("./file.json")
        .then(success, error);
            function success(result) {
                $scope.example = result;
            }
            function error(result) {
                console.log("error!");
            }
    
}]);