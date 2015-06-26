var RankingApp = angular.module('RankingApp', [
    'ngRoute',
    'ui.utils']);


RankingApp.controller('indexCtrl', function ($scope, userFactory) {
    $scope.user = userFactory.getCurrentUser();

    $scope.thereIsUserLoggedIn = function () {
        if (userFactory.getCurrentUser().name === 'Visitante') {
            return false;
        }
        return true;
    }

    $scope.logout = function () {
        userFactory.logout();
        // check this
        $scope.user = userFactory.getCurrentUser();
    }
});


RankingApp.directive('rating', function (itemFactory) {
    return {
        restrict: 'E',
        link: function (scope, elem, attrs) {

            var read = ((attrs.readOnly !== undefined) ? true : false);

            console.log("Dentro da diretiva " + scope.rate);

            $(elem).raty({
                score: attrs.score,
                number: attrs.number,
                readOnly: read,
                path: 'assets/libs/raty/images',
                click: function (score, evt) {

                    if (attrs.id !== undefined) {
                        var item = itemFactory.getItemById(attrs.id);
                        itemFactory.rate(attrs.id, score);
                        scope.$apply();
                    }
                    return true;
                }
            });
        }
    }
});
