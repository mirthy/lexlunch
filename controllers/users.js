var User = require('../models/user').User;
var _ = require('lodash');

exports.getAll = {
	handler: function(request, reply) {
		User.find({}, function(err, users) {
			if (err) {

			} else {
				console.log(users);
				reply(_.map(users, function(fullUser) {
						console.log(fullUser);
						return {
							id: fullUser._id,
							email: fullUser.email,
							firstname: fullUser.firstname,
							lastname: fullUser.lastname,
						};
				}));
			}
		});
	}
}