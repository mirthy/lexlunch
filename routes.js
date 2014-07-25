var Pages = require('./controllers/pages');
var Authentication = require('./controllers/authentication');
var Users = require('./controllers/users');

/**
 * Contains the list of all routes, i.e. methods, paths and the config functions
 * that take care of the actions
 */
exports.endpoints = [
	{ method: 'GET',    path: '/',               config: Pages.index    },
	{ method: 'GET',    path: '/login',          config: Pages.login    },
	{ method: 'GET',    path: '/register',       config: Pages.register },
	{ method: 'GET',    path: '/batmanshideout', config: Pages.secret   },

	{ method: 'POST',   path: '/login',          config: Authentication.login },
	{ method: 'GET',    path: '/logout',         config: Authentication.logout },
	{ method: 'POST',   path: '/register',       config: Authentication.register },

	{ method: 'GET',	path: '/api/users',		 config: Users.getAll 	}
];