var Mongoose = require('../database').Mongoose;

//create the schema
var userSchema = new Mongoose.Schema({
	email: 	      { type: String,	required: true },
	password:     { type: String,	required: true },
	creationDate: { type: Date,		required: true, default: Date.now },
	firstname: 	  { type: String,   required: false },
	lastname: 	  { type: String,   required: false },
});

userSchema.plugin(require('passport-local-mongoose'), { usernameField: 'email', hashField: 'password', usernameLowerCase: true });

//create the model and add it to the exports
var User = exports.User = Mongoose.model('User', userSchema, 'Users');