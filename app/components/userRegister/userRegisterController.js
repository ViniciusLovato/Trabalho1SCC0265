// app/modules/patient/controllers.js
angular.module('RankingApp').controller('UserRegisterCtrl', function ($scope, userFactory) {
    $scope.$on("$viewContentLoaded");

    $scope.userRegister = {};

    $scope.requirement = function(field){
		return field.$error.required && field.$dirty;
		
    }
    
    $scope.registerUser = function () {

        //If any of the fields are not filled, then set dirty to show the errors
        angular.forEach($scope.form.$error.required, function (field) {
            field.$setTouched();
        });

        console.log($scope.form.$valid);


    }
});