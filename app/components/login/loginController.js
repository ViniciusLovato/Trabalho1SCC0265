// app/modules/patient/controllers.js
angular.module('LoginApp').controller('LoginCtrl', function ($scope, userFactory) {
    // controller calls factory do log in user
    $scope.login = function (userName, userPassword) {
        var currentUser = userFactory.loginUser(userName, userPassword);
        
        $scope.message  = currentUser.name + " "  + currentUser.email;
    }
});