module.exports ={

	//// userRegister
	userRegister: function (fname="N/A", lname="N/A", email="N/A", phone="N/A", homeaddress="N/A", creditcard="N/A", username="N/A", password="N/A"){
		return reg = {
			fname,
			lname,
			email,
			phone,
			homeaddress,
			creditcard,
			username,
			password
		}
	},

	//// UserLogin
	userLogin: function (username="N/A", password="N/A"){
		return log = {
			username,
			password
		}
	}
}