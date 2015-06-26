// app/modules/patient/controllers.js
angular.module('RankingApp').controller('UserRegisterCtrl', function ($scope, userFactory, $location) {


    $scope.$on("$viewContentLoaded", function () {
        $('select').material_select(); //necessary for materialize dropdown
        $('#password.tooltipped').tooltip({
            delay: 50,
            id: "password_tooltip"
        }); //necessary for materialize tooltip

        $("#name,#city").on('keypress', function (e) { //disable numeric input for city and name
            var key = e.keyCode || e.charCode;
            if (key >= 48 && key <= 57)
                e.preventDefault();
        });


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
            min: [year - 130, month, day],
            max: [year - 13, month, day],
            onStart: function () {
                this.set('select', [year - 13, month, day]);
            }
        });
    });
	
	$scope.$on("$destroy", function() {
		$('.material-tooltip').remove();
    });

    $scope.userRegister = {
        state: "AC"
    };

    $scope.registerUser = function () {
        //If any of the fields are not filled, then set dirty to show the errors
        angular.forEach($scope.form.$error.required, function (field) {
            field.$setTouched();
        });

        if ($("#email").hasClass("ng-valid-email") && $("#name").hasClass("ng-valid") && $("#password").hasClass("ng-valid") && $("#confirm_password").hasClass("ng-valid") && $("#city").hasClass("ng-valid") && $("#phone_number").hasClass("ng-valid")) {
            if (userFactory.registerUser($scope.userRegister) == false) { //try to register user, and if email is already registered, execute code below
                $("#email").addClass("ng-invalid"); //make field become invalid
                $("#email").attr("data-tooltip", "email ja registrado");
                $('#email.tooltipped').tooltip({
                    delay: 50,
                    id: 'email_tooltip'
                });
            } else {
				console.log($scope.userRegister);
                $("#email").removeClass("ng-invalid");
                alert("Cadastro Realizado com Sucesso!");
                $location.path('/login/0');
            }

        } else {
            if ($("#name").hasClass("ng-invalid")) {
                $("#name").tooltip({
                    delay: 50,
                    id: 'name_tooltip'
                });
            }

            if ($("#city").hasClass("ng-invalid")) {
                $("#city").tooltip({
                    delay: 50,
                    id: 'city_tooltip'
                });
            }

            if ($("#password").hasClass("ng-invalid")) {
                $("#password").trigger('mouseenter');
            }

            if ($("#confirm_password").hasClass("ng-invalid")) {
                $('#confirm_password.tooltipped').tooltip({
                    delay: 50,
                    id: 'confirm_password_tooltip'
                });
            }

            if ($("#phone_number").hasClass("ng-invalid")) {
                $('#phone_number.tooltipped').tooltip({
                    delay: 50,
                    id: 'phone_number_tooltip'
                });
            }

            if ($("#email").hasClass("ng-invalid")) {
                $("#email").attr("data-tooltip", "email invalido");
                $('#email.tooltipped').tooltip({
                    delay: 50,
                    id: 'email_tooltip'
                });
            }
        }
    }
});