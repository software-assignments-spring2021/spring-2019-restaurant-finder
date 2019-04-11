const mongoose = require('mongoose');
//this is a "schema" we're setting up, which is basically an object representation of a user in the database
const Schema = mongoose.Schema;
//passwordy stuff
const bcrypt = require('bcryptjs');
//i promise u i have no idea what this means
mongoose.promise = Promise;

// Define userSchema with configurations
const userSchema = new Schema({

	username: { type: String, unique: false, required: false },
	password: { type: String, unique: false, required: false }
	//pinned restaurants: type: array of restaurants
	//etc. etc.

});

//some boilerplate stuff a user should do (encrypt / decrypt a password)
// Define schema methods
userSchema.methods = {
	checkPassword: function (inputPassword) {
		return bcrypt.compareSync(inputPassword, this.password)
	},
	hashPassword: plainTextPassword => {
		return bcrypt.hashSync(plainTextPassword, 10)
	}
}

//I don't know what this does, I should look into whatever.pre ?!??
// Define hooks for pre-saving
userSchema.pre('save', function (next) {
	if (!this.password) {
		console.log('models/user.js =======NO PASSWORD PROVIDED=======')
		next()
	} else {
		console.log('models/user.js hashPassword in pre save');
		
		this.password = this.hashPassword(this.password)
		next()
	}
})

//configures this as a model, and puts it into a collection called "users" (see the database on mLab to make more sense of this)
const User = mongoose.model('User', userSchema, 'users');
module.exports = User;