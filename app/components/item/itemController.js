// app/modules/patient/controllers.js
angular.module('RankingApp').controller('ItemCtrl', function ($scope, $routeParams, itemFactory, userFactory, $location) {
    $scope.currentItem = itemFactory.getItemById($routeParams.itemId);
    $scope.currentList = itemFactory.getItemsByCategory($routeParams.category);

    $scope.isUser = function () {
        if (userFactory.getCurrentUser().name === 'Visitante') {
            return false;
        } else return true;
    };

    $scope.postComment = function (itemId, comment) {
        // get logged in user
        var currentUser = userFactory.getCurrentUser();
        if (currentUser.email) {
            // the user is logged in
            itemFactory.addItemComment(itemId, comment, currentUser.email);
            $scope.comment = '';
        }
    }

    $scope.getItemsByCategory = function () {
        return itemFactory.getItemsByCategory($routeParams.category);
    }
    $scope.go = function (path) {
        
        $location.path(path);
    };

});