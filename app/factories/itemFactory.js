angular.module('RankingApp').factory('itemFactory', [function () {

    // "database"
    var items = [
        {
            id: 1,
            author: "VINICIUS LOVATO",
            name: "Star Wars Battlefront",
            description: "Battlefield like Star Wars game",
            images: ["assets/img/battlefront.jpg"],
            comments: [],
            category: ["FPS"],
            date: new Date(),
            rating: {
                value: 5,
                nVotes: 10
            }
        },
        {
            id: 2,
            author: "VINICIUS LOVATO",
            name: "Mass Effect",
            description: "One of the very best games from BioWare",
            images: ["assets/img/masseffect1.jpg"],
            comments: [],
            category: ["FPS", "RPG"],
            date: new Date(),
            rating: {
                value: 5,
                nVotes: 10
            }
        },
        {
            id: 3,
            author: "VINICIUS LOVATO",
            name: "Team Fortress 2",
            description: "Insane cartoony first person shooter",
            images: ["assets/img/teamfortress1.jpg"],
            comments: [],
            category: ["FPS"],
            date: new Date(),
            rating: {
                value: 4,
                nVotes: 10
            }
        },
        {
            id: 4,
            author: "VINICIUS LOVATO",
            name: "Starcraft II",
            description: "A really competitive strategy game",
            images: ["assets/img/starcraft1.jpg"],
            comments: [],
            category: ["RTS"],
            date: new Date(),
            rating: {
                value: 5,
                nVotes: 10
            }
        },
        {
            id: 5,
            author: "VINICIUS LOVATO",
            name: "Homeworld Remastered",
            description: "The very best space strategy game now in a remastered edition by gearbox",
            images: ["assets/img/homeworld1.jpg"],
            comments: [
                {
                    userEmail: 'matheus@roleplay.com',
                    comment: 'Best game ever!!'
                },
                {
                    userEmail: 'lovato@gmail.com',
                    comment: "Good times playing the original game years ago!"
                }
            ],
            category: ["RTS"],
            date: new Date(),
            rating: {
                value: 5,
                nVotes: 10
            }
        },
        {
            id: 6,
            author: "VINICIUS LOVATO",
            name: "Company of Heroes",
            description: "A good world war strategy game, it uses real scenarios and campaign",
            images: ["assets/img/coh1.jpg"],
            comments: [],
            category: ["RTS"],
            date: new Date(),
            rating: {
                value: 4,
                nVotes: 10
            }
        },
        {
            id: 7,
            author: "VINICIUS LOVATO",
            name: "Elder Scrolls IV : Skyrim",
            description: "The latest elder scrolls, incredible fun and a vast open world to explore",
            images: ["assets/img/skyrim1.jpg"],
            comments: [],
            category: ["RPG"],
            date: new Date(),
            rating: {
                value: 4,
                nVotes: 10
            }
        },
        {
            id: 8,
            author: "VINICIUS LOVATO",
            name: "Path of Exile",
            description: "Really good 'diablo' like game; completly new skill and level up system!",
            images: ["assets/img/poe1.jpg"],
            comments: [
                {
                    userEmail: 'mogsilva@gmail.com',
                    comment: '10/10. Best action RPG ever, until you die on hardcore and rage quit. And then come back a month later.',
                }
            ],
            category: ["RPG"],
            date: new Date(),
            rating: {
                value: 4,
                nVotes: 10
            }
        },
        {
            id: 9,
            author: "VINICIUS LOVATO",
            name: "The Witcher 3: Wild Hunt",
            description: "The latest chapter of a incredible serie!",
            images: ["assets/img/thewitcher1.jpg"],
            comments: [],
            category: ["RPG"],
            date: new Date(),
            rating: {
                value: 5,
                nVotes: 10
            }
        },
        {
            id: 10,
            author: "VINICIUS LOVATO",
            name: "Endless Legend",
            description: "Turn-based strategy game which you can develop you fantasy civilization. Art and graphics are really beautiful and the quest system is innovative",
            images: ["assets/img/endlesslegend1.jpg"],
            comments: [
                {
                    userEmail: 'lovato@gmail.com',
                    comment: 'Nice turn-based strategy, not as polished as civ 5, but still a really nice and innovative game; the quest system to develop your civilization ir really nice.'
                }
            ],
            category: ["TBS"],
            date: new Date(),
            rating: {
                value: 5,
                nVotes: 10
            }
        },
        {
            id: 11,
            author: "VINICIUS LOVATO",
            name: "Sid Meyer's Civilization V",
            description: "Really good turn-based strategy game. You are able to develop you civilization from nothing to world domination!",
            images: ["assets/img/civilization1.jpg"],
            comments: [
                {
                    userEmail: 'lovato@gmail.com',
                    comment: 'Really fun game. You can build your civ, create trade routes, make allies, win by diplomacy, war, science or even culture.'
                }
            ],
            category: ["TBS"],
            date: new Date(),
            rating: {
                value: 5,
                nVotes: 10
            }
        },
        {
            id: 12,
            author: "VINICIUS LOVATO",
            name: "Might and Magic: Heroes III",
            description: "Turn-based strategy game where the hero controls a vast empire and gathers forces to fight against the evil",
            images: ["assets/img/heroes1.jpg"],
            comments: [
                {
                    userEmail: 'lovato@gmail.com',
                    comment: 'A true Might and Magic Heroes game. Still play a lot these days'
                }
            ],
            category: ["TBS"],
            date: new Date(),
            rating: {
                value: 4,
                nVotes: 10
            }
        }
    ];


    var categories = ["FPS", "RTS", "RPG", "TBS", "MMO"];

    return {
        registerItem: function (item) {
            item.id = items[items.length - 1].id + 1;
            items.push(angular.copy(item));
        },

        getItemList: function (category) {

            return items;
        },

        getItemById: function (id) {
            return items.filter(function (item) {
                if (parseInt(item.id) === parseInt(id)) {
                    return true;
                }
                return false;
            });
        },

        addItemComment: function (id, comment, userEmail) {
            console.log(id);
            console.log(comment);
            console.log(userEmail);
             
            var item = this.getItemById(id);
            console.log(item);
            console.log(item[0]);
            console.log(item[0].comments);

            var newComment = {
                userEmail: userEmail,
                comment: comment
            };

            item[0].comments.push(newComment);
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

            return array;
        }
    }

}]);