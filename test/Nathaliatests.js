/*const chai = require('chai');
const expect = chai.expect; 

const User = require("../backend/db/User");

describe('user information', function() {
    it('should contain proper user REGISTER information', function() {
        	
    	let user = User.userRegister("first","last","user123@gmail.com","123-123-1234","123 A 45 street","0000 0000 0000 0000", "username", "password");
		
		expect(user.fname).to.equal("first");
		expect(user.lname).to.equal("last");
		expect(user.email).to.equal("user123@gmail.com");
		expect(user.phone).to.equal("123-123-1234");
		expect(user.homeaddress).to.equal("123 A 45 street");
		expect(user.creditcard).to.equal("0000 0000 0000 0000");
		expect(user.username).to.equal("username");
		expect(user.password).to.equal("password");

    });

    it('should contain proper user LOGIN information', function() {
    	
    	let user = User.userLogin("username", "password");

		expect(user.username).to.equal("username");
		expect(user.password).to.equal("password");

    });
});*/