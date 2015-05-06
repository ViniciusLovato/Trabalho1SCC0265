angular.module('RankingApp').factory('userFactory', [function () {

    // "database"
    var users = [
        {
            email: "lovato@gmail.com",
            name: "VINICIUS LOVATO",
            birthday: "16/01/1991",
            city: "ARARAQUARA",
            state: "SAO PAULO",
            phoneNumber: "99999-9999",
            password: "123456"
        },
        {
            email: "matheus@gmail.com",
            name: "MATHEUS COMPRI",
            birthday: "16/01/1991",
            city: "ARARAQUARA",
            state: "SAO PAULO",
            phoneNumber: "99999-9999",
            password: "compri"
        }
    ];

    var loggedUser = {};

    return {

        // Login function
        loginUser: function (email, password) {
            // filter the users searching for the "primary key"
            var currentUser = users.filter(function (item) {
                return item.email === email;
            });

            // once you find the user, check if the password matches
            if (currentUser[0].password === password) {
                console.log("I am: " + currentUser[0].name);
                
                // set the current user
                loggedUser.name = currentUser[0].name;
                loggedUser.email = currentUser[0].email;
                
            } else {
                console.log("Error!");

            }
            
            return loggedUser;
        },

        // get the current logged user
        getCurrentUser: function(){
            return loggedUser;
            
        },
        
        // register user in the database
        registerUser: function (user) {

            var currentUser = users.filter(function (item) {
                return item.email === email;
            });

            if (currentUser[0]) {
                console.log("Error, email already taken");
            } else {
                users.push(user);

            }
        }
    }
}]);