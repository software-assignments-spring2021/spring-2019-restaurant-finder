const express = require('express');
const router = express.Router();
const User = require('../database/models/user').User;
const Favorite = require('../database/models/user').Favorite;
const Rating = require('../database/models/user').Rating;

const passport = require('../passport');

//a post request for / (which is actually /user/) which saves a new user into the database
//this post returns a user object
router.post('/', (req, res) => {
    console.log('user signup');
    //get the raw username and password from the body
    const { username, password } = req.body

    //if we want credential requirements (email, whatever?, add it here)

    //find a user with this same username. if there's a user with the same username, reject it
    User.findOne({ username: username }, (err, user) => {
        if (err) {
            console.log('User.js post error: ', err)
        } else if (user) {
            res.json({
                error: `Sorry, already a user with the username: ${username}`
            })
        }
        //if not, create the new user and save it into the DB
        else {
            const newUser = new User({
                username: username,
                password: password
            })
            newUser.save((err, savedUser) => {
                if (err)
                {
                    console.log("failed at userSave");
                    res.json(err)
                }
                res.json({user: savedUser});
            })
        }
    })
})

//returns a user object
//make a post request to log into an account
router.post('/login', function (req, res, next) {
        console.log('routes/user.js, login, req.body');
        console.log(req.body);
        next()
    }, //authenticate with passport
    passport.authenticate('local'), (req, res) => {
        console.log('logged in', req.user);
        //return the user info we got from passport
        if(req.user !== null || req.user !== undefined)
        {
            return res.send({user: req.user});
        }
        else
        {
            return res.send({user: null});
        }

    });

//gives us the current user we're logged in as
router.get('/', (req, res, next) => {
    console.log('===== getting current user!!======')
    console.log(JSON.stringify(req.user));
    if (req.user) {
        res.json({ user: req.user })
    } else {
        res.send(null);
    }
});

//the post request for saving new favorites
router.post("/favorites", (req, res) => {
    const newFav = new Favorite({
        name: req.body.name,
        url: req.body.url
    });
    if (req.user)
    {
        req.user.favorites.push(newFav);
        req.user.save();
    }
});

//get all of the current user's favorites
router.get("/favorites", (req, res) => {
    if (req.user)
    {
        res.json({favorites: req.user.favorites});
    } else
    {
        res.json(null);
    }
});
//use the built in passport logout feature
router.post('/logout', (req, res) => {
    if (req.user) {
        req.logout()
        res.send({ msg: 'Logging out!' })
    } else {
        res.send({ msg: 'No user to log out... this is a bug.' })
    }
})

module.exports = router;
