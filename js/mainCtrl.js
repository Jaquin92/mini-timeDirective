angular.module('app').controller('mainCtrl', function
    ($scope) {
    $scope.name = "Jonathan Aquino"
    $scope.time = new Date().toString();
})