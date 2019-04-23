import axios from 'axios';

class Auth {

    constructor()
    {
        this.isLoggedIn = this.isLoggedIn.bind(this);
        this.initialize = this.initialize.bind(this);
        this.getUser = this.getUser.bind(this);
        this.signUp = this.signUp.bind(this);
        this.login = this.login.bind(this);
        this.logOut = this.logOut.bind(this);
        this.getFavorites = this.getFavorites.bind(this);
        this.newFavorite = this.newFavorite.bind(this);
    }

    /*
    function axiosTest() {
        return axios.get(url).then(response => {
            // returning the data here allows the caller to get it through another .then(...)
            return response.data
    })
    }

    axiosTest().then(data => {
    response.json({ message: 'Request received!', data })
    })
    */

    getFavorites()
    {
        return axios.get('/user/favorites')
    }
    newFavorite(newFav){
        axios.post('/user/favorites', {
			name:newFav.name,
			url:newFav.url
		});
    }
    isLoggedIn ()
    {
       return this.getUser().then(data => {
        let userData = data.user;
        console.log("isLoggedIn is saying" + JSON.stringify(userData));
        if (userData === null || userData === undefined)
        {
            return false;
        }
        return true;
       })

    }
    logOut() {
        return axios.post('/user/logout').then(response => {
            console.log(response.data);
            return (response.data.msg);
          }).catch(error => {
            console.log("logging out caused " + error);
            return error;
          });
    }
    getUser() {
		return axios.get('/user/').then(response => {
		  console.log('Get user response: ')
		  console.log(response.data)
		  if (response.data !== null || response.data !== undefined) {
			console.log('Get User: There is a user saved in the server session: ' + JSON.stringify(response))
			return ({user: response.data.user});
		  } else {
			console.log('Get user: no user');
			return({user: null});
		  }
		});
	}
    initialize() {
        console.log("init auth object");
    }

    signUp(user){
        return axios.post('/user/', {
            username: user.username,
            password: user.password
        }).then(response => {
            console.log("sign up response: " + JSON.stringify(response));
            if (response.data !== null)
            {
                console.log("successful signup!");
                return ({user: response.data.user});
            }
            else
            {
                console.log("error " + response.status + JSON.stringify(response));
            }
        }).catch(error => {
            console.log("error with signup: " + error);
        });
    }

    login(u){
        return axios.post('/user/login', {
            username: u.username,
            password: u.password
        }).then(response => {
            console.log("login responded!" + JSON.stringify(response));
            if (response.data.user !== null)
            {
                return ({user: response.data.user});
            }
        }).catch(error => {
            console.log('login error: ' + error);
        });
    }
}

export default Auth;