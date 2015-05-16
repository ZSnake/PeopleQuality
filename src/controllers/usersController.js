var Hapi = require('hapi');
var User = require('../models/user.js');


function UsersController(){};
UsersController.prototype = (function(){

	return {
		register: function register(request, reply) {
			console.log(request.params.name);
			var newUser = User({
			  name: request.payload.name,
			  username: request.payload.username,
			  password: request.payload.password
			});

			newUser.save(function(err){
				if (err) throw err;

				console.log("You created a motherfucking user, bruh"); 
			})
			
		},
	}
})();

var usersController = new UsersController();
module.exports = usersController;