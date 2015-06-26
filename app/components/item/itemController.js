// app/modules/patient/controllers.js
angular.module('RankingApp').controller('ItemCtrl', function ($scope, $routeParams, itemFactory, userFactory, $location) {
    if($routeParams.category !== undefined){
        $scope.groupCategory = $routeParams.category;
    }
    
    
    $scope.$on("$viewContentLoaded", function () {

        console.log("Param ID : " + $routeParams.itemId);
        
        if ($routeParams.itemId !== undefined) {
            $scope.currentItem = itemFactory.getItemById($routeParams.itemId);
            $scope.currentList = itemFactory.getItemsByCategory($routeParams.category);
            
            console.log("CurrentItem" + $scope.currentItem);
            $scope.rate = itemFactory.getRating($routeParams.itemId);
        }

    });


    $scope.isUser = function () {
        if (userFactory.getCurrentUser().name === 'Visitante') {
            return false;
        } else return true;
    };

    $scope.getRate = function (id) {
        return itemFactory.getRating($routeParams.itemId);
    }

    $scope.postComment = function (itemId, comment) {
        // get logged in user
        var currentUser = userFactory.getCurrentUser();
        if (currentUser.email && comment !== undefined) {
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