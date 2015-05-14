// app/modules/patient/controllers.js
angular.module('RankingApp').controller('gameGraphCtrl', function ($scope, $routeParams, itemFactory) {
    $scope.$on("$viewContentLoaded", function() {
		$scope.currentList = itemFactory.getItemsByCategory($routeParams.category);
		
		$(function() {
			var length 		= $scope.currentList.length;
			var currentList = $scope.currentList;
			var data=[];
			for (var i=0; i < length; ++i)
				data.push([currentList[i].name, currentList[i].rating.value]);
			
			console.log($("#graph").height);
			$.plot("#graph", [ data ], {
				series: {
					bars: {
						show: true,
						barWidth: 0.6,
						align: "center"
					}
				},
				xaxis: {
					mode: "categories",
					tickLength: 0
				}
			});
		});
	
	
	});

});