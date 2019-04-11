//our very secure hard coded URL for our mongodb database
let url = 'mongodb://test1:restfinder1@ds211096.mlab.com:11096/heroku_q3kbr1nk';

//interact with mongo with... mongoose
const mongoose = require('mongoose');

//some boilerplate code? don't really get it but I assume it lets us use promises with mongoose (cool??)
mongoose.Promise = global.Promise;

//our main connect function
mongoose.connect(url).then(
    () => { 
        //good to go!
        console.log('Connected to Mongo');
        
    },
    err => {
         // handle initial connection error 
         console.log('error connecting to Mongo: ')
         console.log(err);
        }
  );
//export the connection so we can access it as "require('/path/to/database')"
module.exports = mongoose.connection;

