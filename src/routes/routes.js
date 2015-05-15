var usersController = require('D:/PeopleQuality/src/controllers/usersController');

exports.register = function(server, options, next) {
	server.route([	
		{
			method: 'POST',
			path: '/register',
			handler: usersController.register
		}, 
	]);

	next();
};

exports.register.attributes = {
	name: 'routes',
	version: '0.0.1'
};