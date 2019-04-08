let url = 'mongodb://test1:restfinder1@ds211096.mlab.com:11096/heroku_q3kbr1nk';
//Connect to Mongo database

const mongoose = require('mongoose');

mongoose.Promise = global.Promise
mongoose.connect(url).then(
    () => { 
        /** ready to use. The `mongoose.connect()` promise resolves to undefined. */ 
        console.log('Connected to Mongo');
        
    },
    err => {
         /** handle initial connection error */ 
         console.log('error connecting to Mongo: ')
         console.log(err);
        }
  );
module.exports = mongoose.connection;

