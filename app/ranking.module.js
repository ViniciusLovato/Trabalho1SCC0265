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


