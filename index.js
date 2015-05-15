var Hapi = require('hapi');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/PeopleQuality');

var server = new Hapi.Server();
server.connection({ 
    host: 'localhost', 
    port: 8000 
});

//routes and shit
var plugins = [{
	register: require('./src/routes/routes.js')
}];

server.register(plugins, function(err) {
	if (err) {
		throw err;
	}

	server.start(function() {
		console.log('info', 'Server running at ', server.info.uri);
	});
});
