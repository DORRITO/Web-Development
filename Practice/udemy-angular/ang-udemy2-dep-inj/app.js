//ng messages is not normally included, so I inject it in this first array.  messages not physically used in this example.
var myApp = angular.module("myApp", ["ngMessages"]);

myApp.controller("mainCtrl", ["$scope", "$log", "$filter", function($scope, $log, $filter){ 
    
    $scope.hello = "This is a basic angular app saying hello";
    $scope.cap = $filter('uppercase')("this will be in caps");
    //$log and $filter
    $log.log("hi");
    $log.info("hi");
    $log.warn("hi");
    $log.debug("hi");
    $log.error("hi");
    //$filtered item
    $log.debug($scope.cap);
    
}]);