import axios from 'axios';

//This is a class that serves as our "proxy" and takes care of all user authentication in our app.
//we can then simply call "auth.logOut" to log out, and we don't need a complicated axios call
class Auth {

    //bind all the functions within the context of the class
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

    //a function that gets all of our user's current favorites
    getFavorites()
    {
        return axios.get('/user/favorites')
    }

    //makes a post request to create new favorite based on our Favorite schema
    newFavorite(newFav){
        console.log(JSON.stringify(newFav));
        axios.post('/user/favorites', {
			name:newFav.name,
            url:newFav.url,
            rating:newFav.rating,
		});
    }

    //returns a boolean in .then((response) => if you are currently logged in
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
    //tells the app to log itself out
    logOut() {
        return axios.post('/user/logout').then(response => {
            console.log('response.data' + JSON.stringify(response.data));
            return ({msg: response.data.msg});
          }).catch(error => {
            console.log("logging out caused " + error);
            return error;
          });
    }

    //gets the current user (if they exist) and returns their object
    getUser() {
		return axios.get('/user/').then(response => {
		  console.log('Get user response: ')
		  console.log(response.data)
		  if (response.data !== null || response.data !== undefined) {
			console.log('Get User: There is a user saved in the server session: ' + JSON.stringify(response))
			return ({user: response.data.user, msg: response.data.msg});
		  } else {
			console.log('Get user: no user');
			return({user: null, msg: response.data.msg});
		  }
		});
    }
    
    //init function probably unneeded
    initialize() {
        console.log("init auth object");
    }

    //makes the post request to create a new user in our database.
    signUp(user){
        return axios.post('/user/', {
            username: user.username,
            password: user.password
        }).then(response => {
            console.log("sign up response: " + JSON.stringify(response));
            if (response.data !== null)
            {
                console.log("successful signup!");
                return ({user: response.data.user, msg: response.data.msg});
            }
            else
            {
                console.log("error " + response.status + JSON.stringify(response));
                return ({user: response.data.user, msg: response.data.msg});
            }
        }).catch(error => {
            console.log("error with signup: " + error);
        });
    }

    //makes a post request logging in our current user.
    login(u){
        return axios.post('/user/login', {
            username: u.username,
            password: u.password
        }).then(response => {
            console.log("login responded!" + JSON.stringify(response));
            if (response.data.user !== null)
            {
                return({user: response.data.user, msg: response.data.msg});
            }
        }).catch(error => {
            console.log('login error: ' + error);

            return ({user: null, msg: "Incorrect username / password"});
        });
    }
}

export default Auth;