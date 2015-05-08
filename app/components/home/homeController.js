angular.module('RankingApp').controller('HomeCtrl', function ($scope, itemFactory) {

    $scope.getCategories = function(){
        return itemFactory.getCategories();
    };
    
    $scope.getItemsByCategory = function(category){
        return itemFactory.getItemsByCategory(category);
    };
});