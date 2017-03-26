var app = angular.module("app", []);

//controller
app.controller("mainCtrl", ["$scope", "nameService", function($scope, nameService) {
    $scope.name = "Main"
    console.log(nameService.name);
}]);

//service
app.service("nameService", function() {
    
    //self to define the service this, and not function this
    var self = this;
    this.name = "John doe";

    this.nameLength = function() {
        return self.name.length;
    };
    
});