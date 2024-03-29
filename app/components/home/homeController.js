angular.module('RankingApp').controller('HomeCtrl', function ($scope, itemFactory, $location) {
    $scope.catDictionary = {};
    $scope.catDictionary["FPS"] = "First Person Shooter";
    $scope.catDictionary["RPG"] = "Role-playing Game";
    $scope.catDictionary["RTS"] = "Real Time Strategy";
    $scope.catDictionary["TBS"] = "Turn-based Strategy";
    $scope.catDictionary["MMO"] = "Massive Multiplayer Online";

    $scope.getCategories = function () {
        return itemFactory.getCategories();
    };

    $scope.getItemsByCategory = function (category) {
        return itemFactory.getItemsByCategory(category);
    };

    $scope.go = function (path) {

        $location.path(path);
    };
    
    $scope.getRate = function(id){
        return itemFactory.getRating(id);
    }

});