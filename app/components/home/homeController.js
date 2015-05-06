angular.module('HomeApp').controller('HomeCtrl', function ($scope) {
	$scope.$on("$viewContentLoaded", function() {
		$('.collapsible').collapsible({
			accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
		});
	});
    $scope.message = 'Everyone come and see how good I look!';
});