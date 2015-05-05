angular.module('HomeApp', []);
angular.module('LoginApp', []);
angular.module('UserRegisterApp', []);
angular.module('ItemRegisterApp', []);

angular.module('dataFactory', []);

angular.module('RankingApp', [
    'HomeApp',
    'LoginApp',
    'UserRegisterApp',
    'ItemRegisterApp',
    'ngRoute',
    'dataFactory'
  ]);


angular.module('RankingApp').factory('dataFactory', [function () {
    
    return {
        soma : function(a, b){
            return a + b;
        }
    }
}]);
