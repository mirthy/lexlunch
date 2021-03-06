var Mongoose = require('../database').Mongoose;

var orderItemSchema = new Mongoose.Schema({
	user: {type:Mongoose.Schema.Types.ObjectId, required:true},
	item: {type:String, required:true, default:"Chicken Parm"},
	price: {type:Number, required:true, default:0.0},
	orderId: {type:Mongoose.Schema.Types.ObjectId, required:true}
});

//create the model and add it to the exports
var orderItem = Mongoose.model('OrderItem', orderItemSchema, 'OrderItems');

exports.OrderItem = orderItem


