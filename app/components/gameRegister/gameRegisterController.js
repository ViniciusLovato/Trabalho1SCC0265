angular.module('RankingApp').controller('GameRegisterCtrl', function ($scope, userFactory) {
	$scope.user = userFactory.getCurrentUser();
	$scope.gameRegister = {};
	$scope.gameRegister.images = [];
	
	$scope.$on("$viewContentLoaded", function() {
		$(document).ready(function(){
			$('input, textarea').characterCounter();
		});
		
		function iterate_images() {
		  $('.gameimages .file-field').last().each(function() {
			  var parent =  $(this);
			  var path_input = parent.find('input.file-path');
			  parent.find('input[type="file"]').change(function () {
				  path_input.val($(this)[0].files[0].name);
				  if (parent.is(':last-child')) {
					$(".gameimages").append("<div class='file-field input-field'><input class='file-path validate' type='text'/><div class='btn'><span>File</span><input type='file'/></div></div>");
					iterate_images();
				  }
			  });
		  });
		}
		
		iterate_images();
		
	});
	
	$scope.registerGame = function(){
		
		//store all images
		$('.file-field').each(function() {
			input = $(this).find('input[type="file"]')
			var f = input[0].files[0];
			if (f != undefined) {
				var r = new FileReader();
				r.onloadend = function() {
					$scope.gameRegister.images.push(r.result);
				}
				r.readAsDataURL(f);
			}
			
		});
		
		console.log($scope.gameRegister.images);
	};
	
	
});