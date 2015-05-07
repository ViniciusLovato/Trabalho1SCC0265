angular.module('RankingApp').factory('itemFactory', [function () {

    // "database"
    var items = [
        {
            id: 1,
            author: "VINICIUS LOVATO",
            name: "Star Wars Battlefront",
            description: "Battlefield like Star Wars game",
            images: ["assets/img/battlefront.png"],
            category: ["FPS"],
            date: new Date(),
            ranking: 5
        },
        {
            id: 2,
            author: "VINICIUS LOVATO",
            name: "Starcraft II",
            description: "A really competitive strategy game",
            images: ["assets/img/starcraft1.jpg"],
            category: ["RTS"],
            date: new Date(),
            ranking: 5
        },
        {
            id: 3,
            author: "VINICIUS LOVATO",
            name: "Mass Effect",
            description: "A really competitive strategy game",
            images: ["assets/img/masseffect.jpg"],
            category: ["FPS", "RPG"],
            ranking: 5
        },
        {
            id: 4,
            author: "MATHEUS COMPRI",
            name: "Car Mechanic Simulator 2015",
            description: "Very realistic car mechanic simulator in 2015",
            images: ["assets/img/mechanic1.png", "assets/img/mechanic2.png"],
            comments: [
                {
                    userEmail: 'matheus@roleplay.com',
                    comment: 'Seems realistic!'
                },
                {
                    userEmail: 'lovato@gmail.com',
                    comment: "I've fixed my car using what I've learned playing it!!"
                }
            ],
            category: ["SIM"],
            ranking: 5
        },
        {
            id: 5,
            author: "MATHEUS COMPRI",
            name: "TDP4",
            description: "Pay to win, flash game",
            images: ["assets/img/tdp41.png", "assets/img/tdp42.png"],
            comments: [
                {
                    userEmail: 'matheus@roleplay.com',
                    comment: 'Wasted'
                },
                {
                    userEmail: 'lovato@gmail.com',
                    comment: "Unistaller is fast!"
                }
            ],
            category: ["SIM"],
            ranking: 5
        }
    ];

    var categories = ["FPS", "RTS", "RPG", "TBS", "SIM"];

    return {
        registerItem: function (item) {
            item.id = items[items.length - 1].id + 1;
            items.push(item);
        },

        getItemList: function (category) {

            return items;
        },

        getItemById: function (id) {
            return items.get(id);
        },

        getCategories: function () {
            return categories;
        },

        getItemsByCategory: function (cat) {
            var array = items.filter(function (item) {

                for (var i = 0; i < item.category.length; i++) {
                    if (item.category[i] === cat) {
                        return true;
                    }
                }

                return false;
            });

            console.log(array);
            return array;
        }


        /*   var currentUser = users.filter(function (item) {
                return item.email === email;
            });

            if (currentUser[0]) {
                console.log("Error, email already taken");
            } else {
                users.push(user);

            }
            */
    }

}]);