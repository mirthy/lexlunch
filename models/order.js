var Mongoose = require('../database').Mongoose;
var OrderItem = require('./orderItem').OrderItem;

var orderSchema = new Mongoose.Schema({
	captain: {type:Mongoose.Schema.Types.ObjectId, required:true},
	provider: {type:String, required:true},
	date: {type:Date, required:true, default:Date.now},
	miscCharges: {type:Number, required:true, default:0},
	closeTime: {type:Date, required:true, default:Date.now(30*60*1000)},
	acquisitionMethod: {type:String, required:true},
	status: {type:String, required:true},
	orderItems: [{type:Mongoose.Schema.Types.ObjectId}]
});

//create the model and add it to the exports
var order = exports.Order = Mongoose.model('Order', orderSchema, 'Orders');

