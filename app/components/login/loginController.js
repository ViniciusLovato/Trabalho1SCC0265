angular.module('RankingApp').controller('LoginCtrl', function ($scope, userFactory, $location, $routeParams) {
    // controller calls factory do log in user
    $scope.login = function (userName, userPassword) {
        var currentUser = userFactory.loginUser(userName, userPassword);

        if (currentUser.name !== 'Visitante') {
            $scope.userName = currentUser.name;
            $scope.message = currentUser.name + " " + currentUser.email;

            if ($routeParams.type === '0') {
                $location.path("/");
            } else {
                $location.path("/item/" + $routeParams.type);

            }

        }


    }
});