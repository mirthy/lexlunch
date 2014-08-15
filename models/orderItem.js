var Mongoose = require('../database').Mongoose;

var orderSchema = new Mongoose.Schema({
	user: {type:Schema.Types.ObjectId, required:true}
	item: {type:String, required:true, default:"Chicken Parm"},
	price: {type:Number, required:true, default:Date.now},
	orderId: {type:Schema.Types.ObjectId, required:true}
});


userSchema.plugin(require('passport-local-mongoose'));

//create the model and add it to the exports
var order = exports.Order = Mongoose.model('Order', orderSchema, 'Orders');

