angular.module('RankingApp').factory('itemFactory', [function () {

    // "database"
    var items = [
        {
            author: "VINICIUS LOVATO",
            name: "Star Wars Battlefront",
            description: "FPS Star Wars game",
            images: ["image1.png","image2.gif"],
            category: "FPS",
            ranking: 5
        },
        {
            author: "VINICIUS LOVATO",
            name: "Starcraft II",
            description: "A really competitive strategy game",
            images: ["image1.png","image2.gif"],
            category: "RTS",
            ranking: 5
        }
    ];

    return {
        registerItem: function(item){
            items.push(item);
        }
    }

}]);