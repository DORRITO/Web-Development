var app = angular.module("app", []);

app.controller("mainCtrl", [function(){
    //app or $http
    $http.get("localhost:8000/").then(function(response) {
        console.log(response.data);
    });
    
}]);