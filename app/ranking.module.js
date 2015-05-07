angular.module('HomeApp', []);
angular.module('LoginApp', []);
angular.module('UserRegisterApp', []);
angular.module('ItemRegisterApp', []);

angular.module('RankingApp', [
    'HomeApp',
    'LoginApp',
    'UserRegisterApp',
    'ItemRegisterApp',
    'ngRoute',
	'ui.utils'
  ]);

angular.module('RankingApp').controller('indexCtrl', function ($scope, userFactory) {
    $scope.user = userFactory.getCurrentUser();

    $scope.thereIsUserLoggedIn = function () {        
        if (userFactory.getCurrentUser().name === 'Visitante') {
            return false;
        }
        return true;
    }
    
    $scope.logout = function (){
        userFactory.logout();
        // check this
        $scope.user = userFactory.getCurrentUser();
    }
});
