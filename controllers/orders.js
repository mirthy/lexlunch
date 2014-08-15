var Joi = require('joi');
var Order = require('../models/order').Order;
var _ = require('lodash');

exports.getAll = {
	handler: function(request, reply) {
		Order.find({}, function(err, orders) {
			if (err) {

			} else {
				reply(_.map(orders, function(fullOrder) {
						return fullOrder; //{
							
							//id: fullOrder._id,
						//};
				}));
			}
		});
	}
};

exports.getById = {
	handler: function(request, reply) {
		Order.find({_id: request.params.id }, function(err, order) {
			if (err) {

			} else {
				return new Order();
				}
		});
	}
};

exports.createOrder = {
	handler: function(request, reply) {
		console.log(request.payload);
		var order = new Order( 
			{ captain: request.payload.captain,
				provider: request.payload.provider,
				acquisitionMethod: request.payload.acquisitionMethod,
				status: request.payload.status
			}
			);
		order.save();
		reply(order);
	}	
};