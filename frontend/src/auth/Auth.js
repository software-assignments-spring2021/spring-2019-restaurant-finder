import axios from 'axios';

class Auth {

    constructor()
    {
        this.state = {
            loggedIn: false,
            userData: null
        }
        this.initialize = this.initialize.bind(this);
        this.getUser = this.getUser.bind(this);
        //this.updateUser = this.updateUser.bind(this);
        this.signUp = this.signUp.bind(this);
        this.login = this.login.bind(this);
        this.logOut = this.logOut.bind(this);
        //this.getFavorites = this.getFavorites.bind(this);
    }

    logOut() {
        axios.post('/user/logout').then(response => {
            console.log(response.data);
            if(response.data.msg === "logging out")
            {
              this.state = ({
                loggedIn: false,
                userData: null
              });
            }
          }).catch(error => {
            console.log("logging out caused " + error);
          });
    }
    getUser() {
		axios.get('/user/').then(response => {
		  console.log('Get user response: ')
		  console.log(response.data)
		  if (response.data.user !== null) {
			console.log('Get User: There is a user saved in the server session: ')
			this.state = ({
			  loggedIn: true,
			  userData: response.data.user
			})
		  } else {
			console.log('Get user: no user');
			this.state = ({
			  loggedIn: false,
			  userData: null
			})
		  }
		})
	}
    initialize() {
        console.log("init auth object");
    }

    signUp(user){
        axios.post('/user/', {
            username: user.username,
            password: user.password
        }).then(response => {
            console.log("sign up response: " + JSON.stringify(response));
            if (response === 200 && response.data.user !== null)
            {
                console.log("successful signup!");
                this.state = ({
                    loggedIn: true,
                    userData: response.data.user
                })
                console.log("DATA" + JSON.stringify(this.state.userData));
            }
            else
            {
                console.log("error " + response.status + response);
            }
        }).catch(error => {
            console.log("error with signup: " + error);
        });
    }

    login(user){
        axios.post('/user/login', {
            username: user.username,
            password: user.password
        }).then(response => {
            console.log("login responded!");
            if (response.status === 200 && response.data.user !== null)
            {
                this.state = ({
                    loggedIn: true,
                    userData: response.data.user
                })
            }
        }).catch(error => {
            console.log('login error: ' + error);
        });
    }
}

export default Auth;