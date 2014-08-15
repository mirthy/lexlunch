var Mongoose = require('../database').Mongoose;

var orderItemSchema = new Mongoose.Schema({
	user: {type:Schema.Types.ObjectId, required:true},
	item: {type:String, required:true, default:"Chicken Parm"},
	price: {type:Number, required:true, default:Date.now},
	orderId: {type:Schema.Types.ObjectId, required:true}
});


orderItemSchema.plugin(require('passport-local-mongoose'));

//create the model and add it to the exports
var order = exports.Order = Mongoose.model('OrderItem', orderItemSchema, 'OrderItems');

