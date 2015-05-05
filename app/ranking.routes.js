// configure the routes
angular.module('RankingApp').config(function ($routeProvider) {
    $routeProvider
    
    // route for the home page
    .when('/', {
        templateUrl: 'app/components/home/home.html',
        controller: 'HomeCtrl'
    })

    // route for the register page
    .when('/userRegister', {
        templateUrl: 'app/components/userRegister/register.html',
        controller: 'UserRegisterCtrl'
    })

    // route for the login page
    .when('/login', {
        templateUrl: 'app/components/login/login.html',
        controller: 'LoginCtrl'
    })

    // route for the itemRegister page
    .when('/itemRegister', {
        templateUrl: 'app/components/itemRegister/itemRegister.html',
        controller: 'ItemRegisterCtrl'
    });

});