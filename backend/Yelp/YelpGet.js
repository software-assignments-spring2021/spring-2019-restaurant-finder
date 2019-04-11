//the name of the API we're using - the documentation on it is solid
const yelp = require("yelp-fusion");

//our totally secure API key
const myApiKey = "GHviyeSI-o9Kd-s3WMWjxvsonlGayIGht_mqqYzXtV24jWnZ-NFLzj2mU8YDh6jEFu8FEH7YSOHouOKPBZjqQ_DQuhc-OKngQOP2tLRVu3hiBd0OBuoV_YGo27CFXHYx";

//basically, if yelp doesnt respond in 5 seconds (I assume 5000 = 5s) it'll timeout and stop requesting it. This will only be important if yelp goes down
const client = yelp.client(myApiKey, {
    socketTimeout: 5000
  });

//export the client for use in other apps
module.exports={
    client: client
};