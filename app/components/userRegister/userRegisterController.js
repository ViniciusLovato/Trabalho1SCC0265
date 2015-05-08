// app/modules/patient/controllers.js
angular.module('UserRegisterApp').controller('UserRegisterCtrl', function ($scope, userFactory) {
    $scope.$on("$viewContentLoaded", function() {
		$('select').material_select();//necessary for materialize dropdown
		$('.tooltipped').tooltip({delay: 50});//necessary for materialize tooltip
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
	
	$scope.userRegister={state:"AC"};
	
    $scope.registerUser = function () {
        //If any of the fields are not filled, then set dirty to show the errors
        angular.forEach($scope.form.$error.required, function (field) {
            field.$setTouched();
        });

		if ($("#email").hasClass("ng-valid") && $("#name").hasClass("ng-valid") && $("#password").hasClass("ng-valid") && $("#confirm_password").hasClass("ng-valid") && $("#city").hasClass("ng-valid") && $("#phone_number").hasClass("ng-valid")) {
			if (userFactory.registerUser($scope.userRegister)==false){//try to register user, and if email is already registered, execute code below
				$("#email").addClass("ng-invalid");//make field become invalid
				$("#email").removeClass("ng-valid");
				$('#email').val("email is already registered");
			}
			
		}
		
		/*debug
		else {
			for (i = 0, len = $scope.form.$error.required.length; i < len; i++) {
				console.log($scope.form.$error.required[i]);
			}
		}
		
		for (i = 0, len = userFactory.getUsers.length; i < len; i++) {
			console.log(userFactory.getUsers[i]);
		}*/
    }
	
	
});