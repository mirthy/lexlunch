var Joi = require('joi');
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
	validate: {
		payload :{
			captain: Joi.string().required(),
			provider: Joi.string().required(),
			acquisitionMethod: Joi.string().required(),
			status: Joi.string().required()
		}
	},
	handler: function(request, reply) {
		var order = new Order(request.payload);
		order.save();
		return order;
	}	
};