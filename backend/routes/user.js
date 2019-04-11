const express = require('express');
const router = express.Router();
const User = require('../database/models/user');
const passport = require('../passport');

//a post request for / (which is actually /user/) which saves a new user into the database
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
                    return res.json(err)
                }
                res.json(savedUser)
            })
        }
    })
})

//make a post request to log into an account
router.post(
    '/login',
    function (req, res, next) {
        //console.log('routes/user.js, login, req.body: ');
        //console.log(req.body)
        next()
    },
    //authenticate with passport
    passport.authenticate('local'),
    (req, res) => {
        console.log('logged in', req.user);
        //return the user info we got from passport
        var userInfo = {
            username: req.user.username
        };
        res.send(userInfo);
    }
)

//gives us the current user we're logged in as
router.get('/', (req, res, next) => {
    console.log('===== getting current user!!======')
    console.log(req.user)
    if (req.user) {
        res.json({ user: req.user })
    } else {
        res.json({ user: null })
    }
})

//use the built in passport logout feature
router.post('/logout', (req, res) => {
    if (req.user) {
        req.logout()
        res.send({ msg: 'logging out' })
    } else {
        res.send({ msg: 'no user to log out' })
    }
})

module.exports = router;