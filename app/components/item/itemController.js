// app/modules/patient/controllers.js
angular.module('RankingApp').controller('ItemCtrl', function ($scope, $routeParams, itemFactory, userFactory, $location) {
    if ($routeParams.category !== undefined) {
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

    $scope.getXML = function () {

        var xml;

        xml = "<?xml version='1.0' encoding='UTF-8'?>\n" +
            "<jogo>\n" +
            "\t<nome>" + $scope.currentItem[0].name + "</nome>\n" +
            "\t<descricao>" + $scope.currentItem[0].description + "</descricao>\n" +
            "\t<desenvolvedor>" + $scope.currentItem[0].developer + "</desenvolvedor>\n" +
            "\t<produtora>" + $scope.currentItem[0].publisher + "</produtora>\n" +
            "\t<lancamento>" + $scope.currentItem[0].releasedate + "</lancamento>\n" +
            "\t<faixa_etaria>" + $scope.currentItem[0].rating2 + "</faixa_etaria>\n" +
            "</jogo>";

        //var oParser = new DOMParser();
        // var oDOM = oParser.parseFromString(xml, "text/xml");

        // console.log("DOM" + oDOM.documentElement.nodeName == "parsererror" ? "error while parsing" : oDOM.documentElement.nodeName);
        
        var textArea = document.createElement('textarea');
        textArea.setAttribute("rows", "100");
        textArea.setAttribute("id", "xmlDownload");
        textArea.setAttribute("readonly");
        document.getElementById("xmlContent").appendChild(textArea);
        
        $("#xmlDownload").css("height", "250");
        
        document.getElementById("xmlDownload").innerHTML = xml;
        
        document.getElementById("xmlButton").disabled = true;
        
        // $location.absUrl("/itemXML.html");

        // console.log("DOM" + oDOM);
    }
});