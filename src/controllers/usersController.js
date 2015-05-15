var Hapi = require('hapi');
var UserModel = require('./src/models/user.js');


function UsersController(){};
UsersController.prototype = (function(){

	return {
		register: function register(request, reply) {
			var newUser = User({
			  name: request.params.name,
			  username: request.params.username,
			  password: request.params.password
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