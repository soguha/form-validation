var app = angular.module('myApp' , []);
app.controller('MainController' , function($scope){


    $scope.firstName = "Soham";
    $scope.lastName ="Guha";
    $scope.email = "soguha06@in.ibm.com";

    $scope.reset = function(){
        $scope.firstName = "";
        $scope.lastName = "";
        $scope.email = "";
    }

    $scope.submit = function(){
        alert("Details Submitted " +$scope.firstName);
    }
})
