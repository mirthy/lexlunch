//var User = require('../models/user').User;
var Order = require('../models/order').Order;
var _ = require('lodash');

exports.getAll = {
	handler: function(request, reply) {
		Order.find({}, function(err, orders) {
			if (err) {

			} else {
				reply(_.map(orders, function(fullOrder) {
						return {
							id: fullOrder._id,
						};
				}));
			}
		});
	}
}