var OrderItem = require('../models/orderItem').OrderItem;
var _ = require('lodash');

exports.getAll = {
	handler: function(request, reply) {
		OrderItem.find({}, function(err, orders) {
			if (err) {

			} else {
				reply(_.map(orders, function(fullOrder) {
						return fullOrder;
				}));
			}
		});
	}
}

exports.getById = {
	handler: function(request, reply) {
		OrderItem.find({_id: request.params.id }, function(err, order) {
			if (err) {

			} else {
				return new OrderItem();
			}
		});
	}
};

exports.createOrderItem = {
	handler: function(request, reply) {
		console.log(request.payload);
		var orderItem = new OrderItem( 
				{ user: request.payload.user,
				  item: request.payload.item,
				  price: request.payload.price,
				  orderId: request.payload.status
				}
			);
		orderItem.save();
		reply(orderItem);
	}	
};
