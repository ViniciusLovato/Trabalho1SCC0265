// app/modules/patient/controllers.js
angular.module('UserRegisterApp').controller('UserRegisterCtrl', function ($scope, userFactory) {
    $scope.$on("$viewContentLoaded", function() {
		$('select').material_select();
		$('.tooltipped').tooltip({delay: 50});
		
		var date = new Date();
		var day = date.getDate();
		var month = date.getMonth();
		var year = date.getFullYear();
		$('.datepicker').pickadate({
			format: 'dd/mm/yyyy',
			today: '',
			clear: '',
			selectYears: 130, // Creates a dropdown to control years
			selectMonths: true, // Creates a dropdown to control month
			min: [year-130, month, day],
			max: [year-13,  month, day],
			onStart: function() {
				this.set('select', [year-13, month, day]);
			}
		});
	});
	
	$scope.userRegister = {};
    
    $scope.registerUser = function () {

        //If any of the fields are not filled, then set dirty to show the errors
        angular.forEach($scope.form.$error.required, function (field) {
            field.$setTouched();
        });

        console.log($scope.form.$valid);


    }
});