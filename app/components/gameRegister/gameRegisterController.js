angular.module('RankingApp').controller('GameRegisterCtrl', function ($scope, userFactory) {
	$scope.user = userFactory.getCurrentUser();
	$scope.gameRegister = {rating : "adult"};
	$scope.gameRegister.images = [];
	$scope.gameRegister.extrafields = [];
	$scope.gameRegister.languages = {
       english 				 : true,
       french  				 : true,
	   brazilian_portuguese  : true
     };
	var numbernewfields = 0;
	$scope.$on("$viewContentLoaded", function() {
		$('select').material_select(); //necessary for materialize dropdown
		$('input, textarea').characterCounter();
		
		var date = new Date();
        var day = date.getDate();
        var month = date.getMonth();
        var year = date.getFullYear();
        $('.datepicker').pickadate({
            format: 'dd/mm/yyyy',
            today: '',
            clear: '',
            selectYears: year-1940+1, // Creates a dropdown to control years
            selectMonths: true, // Creates a dropdown to control month
            min: [1940, 0, 1],
            max: [year, month, day],
            onStart: function () {
                this.set('select', [year, month, day]);
            }
        });
		
		function iterate_images() {
		  $('.gameimages .file-field').last().each(function() {
				var parent =  $(this);
				var path_input = parent.find('input.file-path');
				parent.find('input[type="file"]').change(function () {
					var input = $(this)[0];
					var f = input.files[0];
					var r = new FileReader();
					path_input.val(f.name);
					r.onloadend = function() {
						if (!r.result.match("^data:image")) {
							path_input.removeClass("valid");
							path_input.addClass("ng-invalid");
							path_input.addClass("ng-touched");
						}
						else {
							path_input.removeClass("ng-invalid");
							path_input.removeClass("ng-touched");
							path_input.addClass("valid");
						}
					}
					r.readAsDataURL(f);
					if (parent.is(':last-child')) {
						$(".gameimages").append("<div class='file-field input-field'><input class='file-path tooltipped' data-position='bottom' data-delay='50' hover-tooltip='false' type='text' readonly/><div class='btn'><span>IMG</span><input type='file'/></div></div>");
						iterate_images();
					}
			  });
		  });
		}
		
		iterate_images();
		
		$("#addnewfield").on("click", function() {
			$("#newfields").append('<div class="input-field col s12"><input id="nomenovocampo'+numbernewfields+'" type="text" class="validate tooltipped" data-position="bottom" data-delay="50" data-tooltip="campo obrigatorio" hover-tooltip="false" required></input><label for="nomenovocampo'+numbernewfields+'">Nome do novo campo</label></div><div class="input-field col s12"><input id="conteudonovocampo'+numbernewfields+'" type="text" class="validate tooltipped" data-position="bottom" data-delay="50" data-tooltip="campo obrigatorio" hover-tooltip="false" required></input><label for="conteudonovocampo'+numbernewfields+'">Conteudo do novo campo</label></div>');
			++numbernewfields;
		});
		
		function iterate_newfields() {
			$('#newfields').on('DOMNodeInserted', function() {
				$(this).find('.input-field').each(function(){
					var div = $(this);
					$(div).find('input').blur(function() {
						var input = $(this)[0];
						if ($(input).val() === '') {
							$(input).removeClass("valid");
							$(input).addClass("ng-invalid");
							$(input).addClass("ng-touched");
						}
						else {
							$(input).removeClass("ng-invalid");
							$(input).removeClass("ng-touched");
							$(input).addClass("valid");
						}
					});
					
				});
			});
		}
		
		iterate_newfields();
		
	});
	
	$scope.registerGame = function(){
		angular.forEach($scope.form.$error.required, function (field) {
            field.$setTouched();
        });
		
		/*make sure all uploaded files are images*/
		var allfilesareimages = true;
		var filefields = $('.gameimages .file-field');
		filefieldslen = filefields.length;
		for (var i = 0; i < filefieldslen; ++i) {
			filepath = $(filefields[i]).find('input.file-path');
			if ($(filepath[0]).hasClass("ng-invalid")) {
				$(filepath[0]).attr( "data-tooltip", "Não é uma imagem" );
				$(filepath[0]).tooltip({delay: 50, id:'img'+i+'_tooltip'});
				allfilesareimages = false;
			}
		}
		
		/*make sure there is at least one image is uploaded*/
		var firstimg = $('.gameimages .file-field').first().find('input.file-path');
		if (firstimg.val() === "") {//there has to be at least one image uploaded
			$(firstimg).attr( "data-tooltip", "Pelo menos uma imagem é necessária" );
			$(firstimg).tooltip({delay: 50, id:'img_tooltip'});
		}
		
		/*make sure all new fields added by the user are filled in*/
		var allnewfieldsarefilledin = true;
		var newfields = $("#newfields").find('.input-field');
		var newfieldslen = newfields.length;
		for (var i = 0; i < newfieldslen; ++i) {
			var inputnewfield = $(newfields[i]).find('input');
			if ($(inputnewfield[0]).val() === '') {
				$(inputnewfield[0]).removeClass("valid");
				$(inputnewfield[0]).addClass("ng-invalid");
				$(inputnewfield[0]).addClass("ng-touched");
				$(inputnewfield[0]).tooltip({delay: 50, id:'newinput'+i+'_tooltip'});
				allnewfieldsarefilledin = false;
			}
			else {
				$(inputnewfield[0]).removeClass("ng-invalid");
				$(inputnewfield[0]).removeClass("ng-touched");
				$(inputnewfield[0]).addClass("valid");
			}
		}
		
		/*if everything is valid, then store all images and register game*/
		if ($("#gamename").hasClass("ng-valid") && $("#developer").hasClass("ng-valid") && $("#publisher").hasClass("ng-valid") && $("#description").hasClass("ng-valid") && allfilesareimages && firstimg.val() !== "" && allnewfieldsarefilledin) {	
			$('.gameimages .file-field').each(function() {
				var parent =  $(this);
				input = parent.find('input[type="file"]')
				var f = input[0].files[0];
				
				if (typeof f != 'undefined') {
					var r = new FileReader();
					r.onloadend = function() {
						$scope.gameRegister.images.push(r.result);
					}
					r.readAsDataURL(f);
				}
			});
			
			var newfieldname;
			for (var i = 0; i < newfieldslen; ++i) {
				var inputnewfield = $(newfields[i]).find('input');
				if ( (i%2===0) )
					newfieldname = $(inputnewfield[0]).val();
				else {
					$scope.gameRegister.extrafields.push({newfieldname:newfieldname,newfieldcontent:$(inputnewfield[0]).val()});
				}
			}
	   }
		
		else {
			if ($("#gamename").hasClass("ng-invalid")) {
				$("#gamename").tooltip({delay: 50, id:'gamename_tooltip'});
			}
			if ($("#developer").hasClass("ng-invalid")) {
				$("#developer").tooltip({delay: 50, id:'developer_tooltip'});
			}
			if ($("#publisher").hasClass("ng-invalid")) {
				$("#publisher").tooltip({delay: 50, id:'publisher_tooltip'});
			}
			if ($("#description").hasClass("ng-invalid")) {
				$("#description").tooltip({delay: 50, id:'description_tooltip'});
			}
		}
		
		console.log($scope.gameRegister);
	};
	
	
});