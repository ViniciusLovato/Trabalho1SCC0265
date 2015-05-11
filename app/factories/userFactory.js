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
            email: "matheus@roleplay.com",
            name: "MATHEUS 'da bagunca' COMPRI",
            birthday: "29/02/1992",
            city: "ZueiraLands",
            state: "SAO PAULO",
            phoneNumber: "99999-9999",
            password: "wasted"
        }
    ];

    var loggedUser = {
        name : 'Visitante',
        email : ''
    };

    return {
		getUsers:users,
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
        
        logout: function(){
            loggedUser = {};
            loggedUser.name = 'Visitante';
        },

        // get the current logged user
        getCurrentUser: function(){
            return loggedUser;
        },
        
        // register user in the database
        registerUser: function (user) {		
			var canAddUser = function () {
				for (length = users.length, i = 0; i < length; ++i)
					if (user.email === users[i].email)
						return false;
				return true;
			};
			
			
            if (canAddUser() === false) {
                console.log("Error, email already taken");
				return false;
            } else {
				user.name = user.name.toUpperCase();
				user.city = user.city.toUpperCase();
				//user.phoneNumber = "("+user.phoneNumber.slice(0, 2)+")"+user.phoneNumber.slice(2, 6)+"-"+user.phoneNumber.slice(6, 10);//bug esquisito ocorre se tentar cadastrar usuario com email ja cadastrado e logo em seguida cadastrar o usuario com um email ainda nao cadastrado. O numero de telefone eh armazenado de forma errada, e o campo de telefone fica eh apagado. Nao achei o motivo deste bug. Se esta linha for comentada nao corre nenhum problema, isto eh, se armazenar apenas o numero sem firulas.
                users.push(angular.copy(user));
				return true;
            }
        }
    }
}]);